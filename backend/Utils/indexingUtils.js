const googleIndexingService = require('../services/googleIndexingService');

/**
 * Automatically notify Google when content is published or updated
 * @param {string} fullUrl - The complete URL of the content
 * @param {string} action - 'publish', 'update', or 'delete'
 */
const autoIndexContent = async (fullUrl, action = 'update') => {
  // Only notify in production environment
  if (process.env.NODE_ENV !== 'production') {
    console.log('Google Indexing notification skipped in development');
    return { skipped: true, environment: process.env.NODE_ENV };
  }

  let type;
  switch (action) {
    case 'publish':
    case 'update':
      type = 'URL_UPDATED';
      break;
    case 'delete':
      type = 'URL_DELETED';
      break;
    default:
      type = 'URL_UPDATED';
  }

  try {
    const result = await googleIndexingService.notifyGoogle(fullUrl, type);
    console.log(`Google Indexing API response for ${fullUrl}:`, result);
    return result;
  } catch (error) {
    console.error('Error notifying Google:', error);
    throw error;
  }
};

/**
 * Batch index multiple URLs
 * @param {Array} urls - Array of URLs to index
 * @param {string} action - 'update' or 'delete'
 */
const batchIndexContent = async (urls, action = 'update') => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('Google Indexing batch notification skipped in development');
    return { skipped: true, environment: process.env.NODE_ENV };
  }

  const type = action === 'delete' ? 'URL_DELETED' : 'URL_UPDATED';

  try {
    const results = await googleIndexingService.notifyMultiple(urls, type);
    console.log(`Google Indexing API batch response:`, results);
    return results;
  } catch (error) {
    console.error('Error with batch Google notification:', error);
    throw error;
  }
};

module.exports = {
  autoIndexContent,
  batchIndexContent
};