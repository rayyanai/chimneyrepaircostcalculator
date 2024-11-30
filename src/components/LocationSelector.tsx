import React from 'react';
import { MapPin } from 'lucide-react';

const locationCostIndices: Record<string, { name: string; costIndex: number }> = {
  'AL': { name: 'Alabama', costIndex: 0.85 },
  'AK': { name: 'Alaska', costIndex: 1.45 },
  'AZ': { name: 'Arizona', costIndex: 0.95 },
  'AR': { name: 'Arkansas', costIndex: 0.82 },
  'CA': { name: 'California', costIndex: 1.42 },
  'CO': { name: 'Colorado', costIndex: 1.12 },
  'CT': { name: 'Connecticut', costIndex: 1.28 },
  'DE': { name: 'Delaware', costIndex: 1.15 },
  'FL': { name: 'Florida', costIndex: 1.08 },
  'GA': { name: 'Georgia', costIndex: 0.92 },
  'HI': { name: 'Hawaii', costIndex: 1.48 },
  'ID': { name: 'Idaho', costIndex: 0.88 },
  'IL': { name: 'Illinois', costIndex: 1.18 },
  'IN': { name: 'Indiana', costIndex: 0.90 },
  'IA': { name: 'Iowa', costIndex: 0.88 },
  'KS': { name: 'Kansas', costIndex: 0.85 },
  'KY': { name: 'Kentucky', costIndex: 0.88 },
  'LA': { name: 'Louisiana', costIndex: 0.90 },
  'ME': { name: 'Maine', costIndex: 1.05 },
  'MD': { name: 'Maryland', costIndex: 1.22 },
  'MA': { name: 'Massachusetts', costIndex: 1.35 },
  'MI': { name: 'Michigan', costIndex: 0.95 },
  'MN': { name: 'Minnesota', costIndex: 1.02 },
  'MS': { name: 'Mississippi', costIndex: 0.82 },
  'MO': { name: 'Missouri', costIndex: 0.88 },
  'MT': { name: 'Montana', costIndex: 0.92 },
  'NE': { name: 'Nebraska', costIndex: 0.88 },
  'NV': { name: 'Nevada', costIndex: 1.08 },
  'NH': { name: 'New Hampshire', costIndex: 1.15 },
  'NJ': { name: 'New Jersey', costIndex: 1.32 },
  'NM': { name: 'New Mexico', costIndex: 0.92 },
  'NY': { name: 'New York', costIndex: 1.38 },
  'NC': { name: 'North Carolina', costIndex: 0.95 },
  'ND': { name: 'North Dakota', costIndex: 0.92 },
  'OH': { name: 'Ohio', costIndex: 0.92 },
  'OK': { name: 'Oklahoma', costIndex: 0.85 },
  'OR': { name: 'Oregon', costIndex: 1.12 },
  'PA': { name: 'Pennsylvania', costIndex: 1.15 },
  'RI': { name: 'Rhode Island', costIndex: 1.25 },
  'SC': { name: 'South Carolina', costIndex: 0.88 },
  'SD': { name: 'South Dakota', costIndex: 0.85 },
  'TN': { name: 'Tennessee', costIndex: 0.88 },
  'TX': { name: 'Texas', costIndex: 0.92 },
  'UT': { name: 'Utah', costIndex: 0.95 },
  'VT': { name: 'Vermont', costIndex: 1.12 },
  'VA': { name: 'Virginia', costIndex: 1.08 },
  'WA': { name: 'Washington', costIndex: 1.18 },
  'WV': { name: 'West Virginia', costIndex: 0.85 },
  'WI': { name: 'Wisconsin', costIndex: 0.95 },
  'WY': { name: 'Wyoming', costIndex: 0.92 }
};

type LocationSelectorProps = {
  location: { state: string; costIndex: number };
  onChange: (location: { state: string; costIndex: number }) => void;
};

export default function LocationSelector({ location, onChange }: LocationSelectorProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <MapPin className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold text-gray-800">Location</h2>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Your State
        </label>
        <select
          value={location.state}
          onChange={(e) => {
            const state = e.target.value;
            onChange({
              state,
              costIndex: locationCostIndices[state]?.costIndex || 1
            });
          }}
          className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select State</option>
          {Object.entries(locationCostIndices)
            .sort((a, b) => a[1].name.localeCompare(b[1].name))
            .map(([code, { name }]) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
        </select>
        
        {location.state && (
          <div className="mt-3 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <h3 className="font-medium text-gray-800 mb-1">Regional Cost Factor</h3>
            <p className="text-sm text-gray-600">
              Labor and material costs in {locationCostIndices[location.state]?.name} are{' '}
              <span className="font-medium text-blue-700">
                {Math.abs((locationCostIndices[location.state].costIndex * 100 - 100)).toFixed(0)}%
                {locationCostIndices[location.state].costIndex > 1 ? ' higher' : ' lower'}
              </span>{' '}
              than the national average.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Factors include local labor rates, material costs, and regional regulations.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}