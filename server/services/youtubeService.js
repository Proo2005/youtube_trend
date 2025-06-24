const { google } = require('googleapis');
const youtube = google.youtube('v3');

async function getTrendsByRegion(regionCode) {
  const response = await youtube.videos.list({
    key: process.env.YT_API_KEY,
    chart: 'mostPopular',
    regionCode,
    maxResults: 10,
    part: 'snippet,statistics',
  });

  return response.data.items.map(video => ({
    id: video.id,
    title: video.snippet.title,
    views: video.statistics.viewCount,
    thumbnail: video.snippet.thumbnails.medium.url,
    channel: video.snippet.channelTitle,
    language: video.snippet.defaultAudioLanguage || 'und',
  }));
}

module.exports = { getTrendsByRegion };
