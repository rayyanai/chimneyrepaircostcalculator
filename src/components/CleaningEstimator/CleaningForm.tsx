import React, { useState } from 'react';
import { Calculator, DollarSign } from 'lucide-react';
import LocationSelector from '../LocationSelector';

type ChimneyType = 'masonry' | 'metal' | 'prefab';
type HeightRange = 'under15' | '15to25' | 'over25';
type CleaningFrequency = 'firstTime' | 'annual' | 'seasonal';
type ChimneyCondition = 'light' | 'moderate' | 'heavy';

interface AddOnServices {
  inspection: boolean;
  smokeTest: boolean;
  capCleaning: boolean;
  minorRepairs: boolean;
}

const baseCleaningCosts: Record<ChimneyType, number> = {
  masonry: 250,
  metal: 175,
  prefab: 150
};

const heightMultipliers: Record<HeightRange, number> = {
  under15: 1.0,
  '15to25': 1.2,
  over25: 1.3
};

const conditionMultipliers: Record<ChimneyCondition, number> = {
  light: 1.0,
  moderate: 1.3,
  heavy: 1.6
};

const addOnCosts = {
  inspection: 150,
  smokeTest: 100,
  capCleaning: 75,
  minorRepairs: 300
};

export default function CleaningForm() {
  const [chimneyType, setChimneyType] = useState<ChimneyType | ''>('');
  const [height, setHeight] = useState<HeightRange | ''>('');
  const [frequency, setFrequency] = useState<CleaningFrequency | ''>('');
  const [condition, setCondition] = useState<ChimneyCondition | ''>('');
  const [addOns, setAddOns] = useState<AddOnServices>({
    inspection: false,
    smokeTest: false,
    capCleaning: false,
    minorRepairs: false
  });
  const [location, setLocation] = useState<{ state: string; costIndex: number }>({
    state: '',
    costIndex: 1
  });

  const calculateTotal = () => {
    if (!chimneyType || !height || !condition) return null;

    // Calculate base cost with multipliers
    let total = baseCleaningCosts[chimneyType];
    total *= heightMultipliers[height];
    total *= conditionMultipliers[condition];

    // Add selected services
    Object.entries(addOns).forEach(([service, selected]) => {
      if (selected) {
        total += addOnCosts[service as keyof typeof addOnCosts];
      }
    });

    // Apply location adjustment
    total *= location.costIndex;

    return Math.round(total);
  };

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Chimney Type
          </label>
          <select
            value={chimneyType}
            onChange={(e) => setChimneyType(e.target.value as ChimneyType)}
            className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Type</option>
            <option value="masonry">Masonry Chimney</option>
            <option value="metal">Metal Chimney</option>
            <option value="prefab">Prefabricated Chimney</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Chimney Height
          </label>
          <select
            value={height}
            onChange={(e) => setHeight(e.target.value as HeightRange)}
            className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Height</option>
            <option value="under15">Under 15 feet</option>
            <option value="15to25">15 to 25 feet</option>
            <option value="over25">Over 25 feet</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Cleaning Frequency
          </label>
          <select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value as CleaningFrequency)}
            className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Frequency</option>
            <option value="firstTime">First Time / Years Since Last</option>
            <option value="annual">Annual Cleaning</option>
            <option value="seasonal">Seasonal Cleaning</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current Condition
          </label>
          <select
            value={condition}
            onChange={(e) => setCondition(e.target.value as ChimneyCondition)}
            className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Condition</option>
            <option value="light">Clean, Light Soot Buildup</option>
            <option value="moderate">Moderate Creosote Buildup</option>
            <option value="heavy">Heavy Creosote or Blockage</option>
          </select>
        </div>

        <LocationSelector
          location={location}
          onChange={setLocation}
        />

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">Additional Services</h3>
          <div className="space-y-3">
            {Object.entries(addOnCosts).map(([service, cost]) => (
              <div key={service} className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id={service}
                  checked={addOns[service as keyof AddOnServices]}
                  onChange={(e) => setAddOns({
                    ...addOns,
                    [service]: e.target.checked
                  })}
                  className="mt-1 w-4 h-4 text-blue-600 border-blue-300 rounded focus:ring-blue-500"
                />
                <label htmlFor={service} className="flex-1">
                  <span className="font-medium text-gray-800">
                    {service.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  </span>
                  <span className="block text-sm text-blue-600">+${cost}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {calculateTotal() !== null && (
        <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Estimated Cost</h2>
              <p className="text-sm text-gray-600">
                {location.state ? 
                  `Price adjusted for ${location.state} rates` :
                  'Prices may vary based on location'}
              </p>
            </div>
            <div className="text-3xl font-bold text-blue-600">
              ${calculateTotal()?.toLocaleString()}
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
        <p className="text-sm text-gray-600">
          * These are estimated costs and may vary based on specific conditions,
          additional repairs needed, and local factors. We recommend getting a professional
          inspection for accurate pricing.
        </p>
      </div>
    </div>
  );
}