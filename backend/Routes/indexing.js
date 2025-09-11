const express = require('express');
const router = express.Router();
const googleIndexingService = require('../services/googleIndexingService');

// Middleware to validate URL
const validateUrl = (req, res, next) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({
      success: false,
      error: 'URL is required'
    });
  }

  try {
    new URL(url);
    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: 'Invalid URL format'
    });
  }
};

// Notify Google about URL updates
router.post('/notify', validateUrl, async (req, res) => {
  try {
    const { url, type = 'URL_UPDATED' } = req.body;
    const result = await googleIndexingService.notifyGoogle(url, type);

    if (result.success) {
      res.json(result);
    } else {
      res.status(500).json(result);
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// Get status of a URL
router.get('/status', async (req, res) => {
  try {
    const { url } = req.query;

    if (!url) {
      return res.status(400).json({
        success: false,
        error: 'URL is required'
      });
    }

    const result = await googleIndexingService.getUrlStatus(url);

    if (result.success) {
      res.json(result);
    } else {
      res.status(500).json(result);
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// Batch notification for multiple URLs
router.post('/batch-notify', async (req, res) => {
  try {
    const { urls, type = 'URL_UPDATED' } = req.body;

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return res.status(400).json({
        success: false,
        error: 'URLs array is required'
      });
    }

    // Validate URLs
    for (const url of urls) {
      try {
        new URL(url);
      } catch (error) {
        return res.status(400).json({
          success: false,
          error: `Invalid URL format: ${url}`
        });
      }
    }

    const results = await googleIndexingService.notifyMultiple(urls, type);
    res.json({ success: true, results });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

module.exports = router;