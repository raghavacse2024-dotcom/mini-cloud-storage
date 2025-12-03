const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// root test
app.get('/', (req, res) => {
  res.send('Mini cloud storage backend running');
});

// new API health route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'API working',
    time: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
