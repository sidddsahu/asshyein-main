const { google } = require('googleapis');

class GoogleIndexingService {
  constructor() {
    this.auth = new google.auth.GoogleAuth({
      credentials: {
        type: "service_account",
        project_id: "aashayein-judiciary-471608",
        private_key_id: "dc4a75a608d09f1ce2b31bcbbbb88e0f875161ac",
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCo20Et9f5ULcDC\nzT7lwI7GU+uuLfqAPOFRAow7Ch3W2PAR4cB9bJv2lbMVD3Njs5j8TzdpqP0UzV3R\nxM1+aF5GKm6HzkPh2/fU15i5en9GpfZ2ZFPu/sg02zcrXkE3TJ861R6VQcJV6/hK\nguHWE2+YLjF91WnRWqpxQHy61ncSNBxqEOSo/gW1JLBwefmQpgFNRx1gJfxyIHPX\n9611zBD/1+4ovoR2VL+PFQnGxQfvkGgosFiRj77OiZMRLterRHukXteOJ9rh7vS3\nz0rbSUk3YJwX/9K7ET4UR5qcRgjdJiLu9iUweivEtZVMVdBeiaW27Hz/iGoyGBJr\npwrWccP1AgMBAAECggEAG0BTax2odPZzWx0GbyGeCTpcWXPYhJ9kBQ/NCO7k35qL\nAsp1Jz4th495DkeRlFV/tbdP1ptsHieCDODfAe0fIIzS4ikIVz20aCMpZe8eoQzC\nKNuf7ieBW9fF4MJpR7RJKGoNHFfiC2g2CJ8fNSOq3sZpvLNXd279/fbDNTYik7XA\n28iVVqWx4a0QJdBtuWqj6eQSapFSLm0v32yEh1qL4Gw8y3J+PrcM8pXIVOnz+f/s\nG/9h1RDYBV1SpQVnGHCBXml5JD54K1dJ99wYQ/Z8bDYT2IXp+R/gKh1ylCELS2le\nPMN28R92dTQSggWXsgraRzu6NW0o0vCkfypMhhrpmwKBgQDleRSILRPRW65+adrF\nMXN0kJkBzBGXIWwXnqZ4NG6OHNGdpDSOeXoWAMrPpY2KRvVZGCiRRpQRcmDdLRfp\ndedg+yK9UT9G901yJx7sfPfddBfwDI6HDrWOjoixpUHPv9bTx84/0dg4Mbg4AE7r\nyjosvglg0wcj55dNJr4+CzqVqwKBgQC8YFEZmWX7dBEtR+XWqZEpoz8KfLWK/qDi\nkpyj9GhHyzvKq4hLU06hj60U5DQ/BCSeZcrrhv4F2i4blUnt4KCsfsj5wlmD2IHc\nLBq0hk8OR15G0VjYhL6Av63QOgrCjpyzjzUR6zLgybjQZWTnRllEcJIrdoHjxmMc\nPPzQ5hAs3wKBgQDOfjxppha1SIknHF5PIIbCl/P32AjkNKEuSAeJF7V8kJZYAxGA\nO/QOpLvcSx+pFN1nRQQMZrSLVp+vqApifUSu0o6aSehlFdlNJcMAEByD3RpFWydO\nhX//PmfnY8xrBDhu7te8OjsVpjgdvLlIGPxskr2hsYQ1XQub04dSEYywbQKBgQC0\nKsbGXiHc+ujGzyIzSmDNWxYbWKVluB12NlVctpDaQbYBJEgqCxaEjV80QQL7VmIT\noTYQSD9Cp6c7uHBJ9HKYKHbd8hUddgDV7NTp3h9Uf8vanbWE+IkfqLR8GFdcN3wG\nfKx8Y+B4gFaj8qYsUOtl+ujCawjWKlN2mZoPzkqgLwKBgQDS3Uggj4jv5rgf6QsX\nw4XpgS5U3lKUZD2xwvVe4HsROIxQMUo8U9/WPxcM4lBklNr10bx1QSPlovehiGRj\nQI0Wxp4YFvOSsDchy+yL26dO2CuYeh6dsXD7oiIxk+mbrzcYDQylHFCNEGrdOPUn\nXYNwF6TL5PXLLb+ONWiHQEEfrQ==\n-----END PRIVATE KEY-----\n",
        client_email: "indexing-api-bot@aashayein-judiciary-471608.iam.gserviceaccount.com",
        client_id: "105830862695139420183",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/indexing-api-bot%40aashayein-judiciary-471608.iam.gserviceaccount.com",
        universe_domain: "googleapis.com"
      },
      scopes: ['https://www.googleapis.com/auth/indexing']
    });

    this.indexing = google.indexing({
      version: 'v3',
      auth: this.auth
    });
  }

  async notifyGoogle(url, type = 'URL_UPDATED') {
    try {
      const response = await this.indexing.urlNotifications.publish({
        requestBody: {
          url: url,
          type: type
        }
      });

      return {
        success: true,
        message: 'URL successfully submitted to Google Indexing API',
        data: response.data
      };
    } catch (error) {
      console.error('Error with Google Indexing API:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  async getUrlStatus(url) {
    try {
      const response = await this.indexing.urlNotifications.getMetadata({
        url: url
      });

      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      console.error('Error getting URL status:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Batch notification for multiple URLs
  async notifyMultiple(urls, type = 'URL_UPDATED') {
    const results = [];

    for (const url of urls) {
      const result = await this.notifyGoogle(url, type);
      results.push({ url, ...result });

      // Add delay to avoid rate limiting (5 requests per second max)
      await new Promise(resolve => setTimeout(resolve, 200));
    }

    return results;
  }
}

module.exports = new GoogleIndexingService();