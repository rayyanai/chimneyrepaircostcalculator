import React, { useState } from 'react';
import { Settings, DollarSign } from 'lucide-react';
import LocationSelector from '../LocationSelector';

export default function MaintenanceForm() {
  const [chimneyType, setChimneyType] = useState('');
  const [usage, setUsage] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [location, setLocation] = useState({ state: '', costIndex: 1 });
  const [additionalServices, setAdditionalServices] = useState({
    waterproofing: false,
    capReplacement: false,
    minorRepairs: false,
    crownSealing: false
  });

  const baseCosts = {
    inspection: {
      masonry: 200,
      metal: 150,
      prefab: 150
    },
    cleaning: {
      masonry: 250,
      metal: 200,
      prefab: 200
    },
    additionalServices: {
      waterproofing: 300,
      capReplacement: 400,
      minorRepairs: 500,
      crownSealing: 300
    }
  };

  const usageMultipliers = {
    daily: 1.5,
    weekly: 1.2,
    occasional: 1.0
  };

  const ageMultipliers = {
    'under-5': 1.0,
    '5-10': 1.2,
    'over-10': 1.4
  };

  const heightMultipliers = {
    'under-15': 1.0,
    '15-25': 1.2,
    'over-25': 1.4
  };

  const calculateTotal = () => {
    if (!chimneyType || !usage || !age || !height) return null;

    let total = 0;

    // Base inspection and cleaning costs
    total += baseCosts.inspection[chimneyType as keyof typeof baseCosts.inspection];
    total += baseCosts.cleaning[chimneyType as keyof typeof baseCosts.cleaning];

    // Apply multipliers
    total *= usageMultipliers[usage as keyof typeof usageMultipliers];
    total *= ageMultipliers[age as keyof typeof ageMultipliers];
    total *= heightMultipliers[height as keyof typeof heightMultipliers];

    // Add additional services
    Object.entries(additionalServices).forEach(([service, selected]) => {
      if (selected) {
        total += baseCosts.additionalServices[service as keyof typeof baseCosts.additionalServices];
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
            onChange={(e) => setChimneyType(e.target.value)}
            className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Type</option>
            <option value="masonry">Masonry</option>
            <option value="metal">Metal</option>
            <option value="prefab">Prefabricated</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Usage Frequency
          </label>
          <select
            value={usage}
            onChange={(e) => setUsage(e.target.value)}
            className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Usage</option>
            <option value="daily">Daily (During Season)</option>
            <option value="weekly">Weekly</option>
            <option value="occasional">Occasional</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Chimney Age
          </label>
          <select
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Age</option>
            <option value="under-5">Under 5 Years</option>
            <option value="5-10">5-10 Years</option>
            <option value="over-10">Over 10 Years</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Chimney Height
          </label>
          <select
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Height</option>
            <option value="under-15">Under 15 Feet</option>
            <option value="15-25">15-25 Feet</option>
            <option value="over-25">Over 25 Feet</option>
          </select>
        </div>
      </div>

      <LocationSelector
        location={location}
        onChange={setLocation}
      />

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Settings className="w-5 h-5 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-800">Additional Services</h2>
        </div>

        <div className="space-y-3">
          {[
            { id: 'waterproofing', name: 'Waterproofing Treatment', price: 300 },
            { id: 'capReplacement', name: 'Cap Replacement', price: 400 },
            { id: 'minorRepairs', name: 'Minor Masonry Repairs', price: 500 },
            { id: 'crownSealing', name: 'Crown Sealing', price: 300 }
          ].map(service => (
            <div key={service.id} className="flex items-start gap-3">
              <input
                type="checkbox"
                id={service.id}
                checked={additionalServices[service.id as keyof typeof additionalServices]}
                onChange={(e) => setAdditionalServices({
                  ...additionalServices,
                  [service.id]: e.target.checked
                })}
                className="mt-1 w-4 h-4 text-blue-600 border-blue-300 rounded focus:ring-blue-500"
              />
              <label htmlFor={service.id} className="flex-1">
                <span className="font-medium text-gray-800">{service.name}</span>
                <span className="block text-sm text-blue-600">+${service.price}</span>
              </label>
            </div>
          ))}
        </div>
      </div>

      {calculateTotal() !== null && (
        <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Estimated Annual Cost</h2>
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
          * These are estimated annual maintenance costs and may vary based on specific conditions,
          additional repairs needed, and local factors. We recommend getting a professional inspection
          for accurate pricing.
        </p>
      </div>
    </div>
  );
}