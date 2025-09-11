const { google } = require("googleapis");
const key = require("../service-account.json");

// Fix private key line breaks
const privateKey = key.private_key.replace(/\\n/g, "\n");

async function getClient() {
  const client = new google.auth.JWT(
    key.client_email,
    null,
    privateKey,
    ["https://www.googleapis.com/auth/indexing"],
    null
  );

  await client.authorize();
  return client;
}

module.exports = { getClient };
