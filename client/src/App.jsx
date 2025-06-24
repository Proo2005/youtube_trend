import React, { useState, useEffect } from 'react';
import RegionSelector from './components/RegionSelector';
import TrendList from './components/TrendList';
import './i18n';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  const [region, setRegion] = useState('US');
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    fetchTrends(region);
  }, [region]);

  const fetchTrends = async (regionCode) => {
    const res = await fetch(`http://localhost:4000/api/trends?region=${regionCode}`);
    const data = await res.json();
    setTrends(data);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>{t('trendingNow')}</h2>
      <RegionSelector region={region} onChange={setRegion} />
      <button onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'hi' : 'en')}>
        Switch to {i18n.language === 'en' ? 'Hindi' : 'English'}
      </button>
      <TrendList trends={trends} />
    </div>
  );
}

export default App;
