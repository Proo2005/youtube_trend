import React from 'react';
import { useTranslation } from 'react-i18next';

const RegionSelector = ({ region, onChange }) => {
  const { t } = useTranslation();
  const regions = ['US', 'IN', 'JP', 'BR', 'DE', 'FR', 'KR', 'RU', 'MX', 'NG'];

  return (
    <div style={{ margin: '10px 0' }}>
      <label>{t('selectRegion')}:</label>
      <select value={region} onChange={(e) => onChange(e.target.value)}>
        {regions.map((r) => (
          <option key={r} value={r}>{r}</option>
        ))}
      </select>
    </div>
  );
};

export default RegionSelector;
