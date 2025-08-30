const axios = require('axios');

async function tiktok(text) {
  try {
    const response = await axios.post('https://shinoa.us.kg/api/download/tiktok', {
      text: text
    }, {
      headers: {
        'accept': '*/*',
        'api_key': 'kyuurzy',
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching TikTok video:', error);
    throw error;
  }
}

module.exports = { tiktok }