import React from 'react';

const TrendList = ({ trends }) => {
  return (
    <div>
      {trends.map((video) => (
        <div key={video.id} style={{ marginBottom: '15px' }}>
          <img src={video.thumbnail} alt={video.title} style={{ width: '180px' }} />
          <h4>{video.title}</h4>
          <p>Views: {video.views}</p>
          <p>Channel: {video.channel}</p>
          <p>Language: {video.language}</p>
        </div>
      ))}
    </div>
  );
};

export default TrendList;
