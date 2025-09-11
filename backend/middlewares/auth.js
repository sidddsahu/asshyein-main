// Simple API key authentication middleware
const API_KEYS = new Set([process.env.API_KEY]);

const authenticate = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];

  if (!apiKey || !API_KEYS.has(apiKey)) {
    return res.status(401).json({
      success: false,
      error: 'Unauthorized: Invalid '
    });
  }

  next();
};

module.exports = { authenticate };