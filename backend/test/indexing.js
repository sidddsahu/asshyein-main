require('dotenv').config();
const googleIndexingService = require('./services/googleIndexingService');

async function testIndexing() {
  console.log('Testing Google Indexing API integration...');

  // Test URL notification
  const testUrl = 'http://localhost:8000/test-page';
  const result = await googleIndexingService.notifyGoogle(testUrl, 'URL_UPDATED');

  console.log('Notification result:', result);

  // Test URL status check
  const statusResult = await googleIndexingService.getUrlStatus(testUrl);
  console.log('Status result:', statusResult);
}

testIndexing().catch(console.error);