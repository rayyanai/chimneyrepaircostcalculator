import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import LocationSelector from '../LocationSelector';
import MaterialSelector from './MaterialSelector';
import DimensionsInput from './DimensionsInput';
import CostBreakdown from './CostBreakdown';

export default function BuildingForm() {
  const [dimensions, setDimensions] = useState({
    height: 15,
    width: 32,
    depth: 32,
  });

  const [materials, setMaterials] = useState({
    type: '',
    quality: 'standard',
    lining: false,
    cap: false,
  });

  const [location, setLocation] = useState({
    state: '',
    costIndex: 1,
  });

  const [additionalFeatures, setAdditionalFeatures] = useState({
    damper: false,
    cricketFlashing: false,
    cleanout: false,
    reinforcement: false,
  });

  return (
    <div className="space-y-8">
      <MaterialSelector 
        materials={materials} 
        onChange={setMaterials} 
      />

      <DimensionsInput 
        dimensions={dimensions} 
        onChange={setDimensions} 
      />

      <LocationSelector 
        location={location} 
        onChange={setLocation} 
      />

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Additional Features</h3>
        <div className="space-y-3">
          {Object.entries({
            damper: 'Chimney Damper',
            cricketFlashing: 'Cricket Flashing',
            cleanout: 'Clean-out Door',
            reinforcement: 'Steel Reinforcement',
          }).map(([key, label]) => (
            <div key={key} className="flex items-center gap-3">
              <input
                type="checkbox"
                id={key}
                checked={additionalFeatures[key as keyof typeof additionalFeatures]}
                onChange={(e) => setAdditionalFeatures({
                  ...additionalFeatures,
                  [key]: e.target.checked,
                })}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor={key} className="text-gray-700">{label}</label>
            </div>
          ))}
        </div>
      </div>

      <CostBreakdown
        dimensions={dimensions}
        materials={materials}
        location={location}
        additionalFeatures={additionalFeatures}
      />
    </div>
  );
}