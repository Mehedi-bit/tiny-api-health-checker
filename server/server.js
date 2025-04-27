const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.post('/check-apis', async (req, res) => {
  const urls = req.body.urls;
  const results = [];

  for (const url of urls) {
    const start = Date.now();
    try {
      const response = await axios.get(url);
      const end = Date.now();
      results.push({
        url,
        status: 'Up',
        responseTime: end - start,
        statusCode: response.status
      });
    } catch (error) {
      const end = Date.now();
      results.push({
        url,
        status: 'Down',
        responseTime: end - start,
        statusCode: error.response ? error.response.status : 'Network Error'
      });
    }
  }

  res.json(results);
});

app.listen(port, () => {
  console.log(`API Health Checker server running on http://localhost:${port}`);
});
