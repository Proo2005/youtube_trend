const express = require('express');
const { getTrendsByRegion } = require('../services/youtubeService');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const region = req.query.region || 'US';
    const data = await getTrendsByRegion(region);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch trends' });
  }
});

module.exports = router;
