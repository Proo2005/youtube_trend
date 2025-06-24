const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const trendsRouter = require('./routes/trends');

dotenv.config();
const app = express();

app.use(cors());

// Add this before other routes
app.get('/', (req, res) => {
  res.send('📺 YouTube Trends API is running!');
});

// Your existing API route
app.use('/api/trends', trendsRouter);

// Catch-all 404 handler (optional, but helpful)
app.use((req, res) => {
  res.status(404).send('404: Not Found');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
