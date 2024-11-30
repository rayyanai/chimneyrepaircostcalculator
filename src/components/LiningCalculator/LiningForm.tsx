import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import LocationSelector from '../LocationSelector';

type ApplianceType = 'wood' | 'gas' | 'oil' | 'pellet';
type ChimneyCondition = 'good' | 'fair' | 'poor';
type InstallationType = 'standard' | 'complex';
type LinerType = 'stainless' | 'clay' | 'aluminum' | 'castInPlace' | 'thermocrete' | 'proform' | 'furanflex';

interface SizeRecommendation {
  minSize: number;
  recommendedSize: number;
  notes: string[];
}

const calculateLinerSize = (
  applianceType: ApplianceType,
  fireplaceArea?: number
): SizeRecommendation => {
  let minSize = 0;
  let recommendedSize = 0;
  const notes: string[] = [];

  if (fireplaceArea) {
    switch (applianceType) {
      case 'wood':
        recommendedSize = Math.ceil(Math.sqrt((fireplaceArea * 0.12) / Math.PI) * 2);
        minSize = Math.ceil(Math.sqrt((fireplaceArea * 0.1) / Math.PI) * 2);
        notes.push('Wood fireplaces require 1/10 to 1/12 of fireplace opening area');
        break;
      case 'gas':
        recommendedSize = Math.ceil(Math.sqrt((fireplaceArea * 0.08) / Math.PI) * 2);
        minSize = Math.ceil(Math.sqrt((fireplaceArea * 0.07) / Math.PI) * 2);
        notes.push('Gas appliances typically need 1/12 to 1/14 of fireplace opening area');
        break;
      case 'oil':
        recommendedSize = Math.ceil(Math.sqrt((fireplaceArea * 0.09) / Math.PI) * 2);
        minSize = Math.ceil(Math.sqrt((fireplaceArea * 0.08) / Math.PI) * 2);
        notes.push('Oil appliances require 1/11 to 1/13 of fireplace opening area');
        break;
      case 'pellet':
        recommendedSize = Math.ceil(Math.sqrt((fireplaceArea * 0.07) / Math.PI) * 2);
        minSize = Math.ceil(Math.sqrt((fireplaceArea * 0.06) / Math.PI) * 2);
        notes.push('Pellet stoves need smaller flue sizes due to forced draft');
        break;
    }
  } else {
    switch (applianceType) {
      case 'wood':
        minSize = 6;
        recommendedSize = 8;
        notes.push('Standard wood stove typically requires 6-8" flue');
        break;
      case 'gas':
        minSize = 4;
        recommendedSize = 6;
        notes.push('Most gas appliances work well with 4-6" flue');
        break;
      case 'oil':
        minSize = 5;
        recommendedSize = 6;
        notes.push('Oil appliances generally need 5-6" flue');
        break;
      case 'pellet':
        minSize = 3;
        recommendedSize = 4;
        notes.push('Pellet stoves usually require 3-4" flue');
        break;
    }
  }

  notes.push('Final size should be verified by a professional');
  notes.push('Local codes may have specific requirements');

  return { minSize, recommendedSize, notes };
};

const linerBaseCosts: Record<LinerType, number> = {
  stainless: 50,
  clay: 30,
  aluminum: 25,
  castInPlace: 80,
  thermocrete: 70,
  proform: 90,
  furanflex: 100
};

export default function LiningForm() {
  const [applianceType, setApplianceType] = useState<ApplianceType | ''>('');
  const [chimneyHeight, setChimneyHeight] = useState<number>(0);
  const [chimneyCondition, setChimneyCondition] = useState<ChimneyCondition | ''>('');
  const [installationType, setInstallationType] = useState<InstallationType | ''>('');
  const [selectedLiner, setSelectedLiner] = useState<LinerType | ''>('');
  const [location, setLocation] = useState<{ state: string; costIndex: number }>({
    state: '',
    costIndex: 1
  });
  const [fireplaceDimensions, setFireplaceDimensions] = useState({
    width: 0,
    height: 0
  });
  const [showSizeCalculator, setShowSizeCalculator] = useState(false);

  const getFireplaceArea = () => {
    return fireplaceDimensions.width * fireplaceDimensions.height;
  };

  const sizeRecommendation = applianceType ? 
    calculateLinerSize(applianceType, showSizeCalculator ? getFireplaceArea() : undefined) 
    : null;

  const calculateTotal = () => {
    if (!selectedLiner || !chimneyHeight || !chimneyCondition || !installationType) return null;

    let total = linerBaseCosts[selectedLiner] * chimneyHeight;

    // Apply condition multiplier
    const conditionMultipliers = {
      good: 1,
      fair: 1.2,
      poor: 1.5
    };
    total *= conditionMultipliers[chimneyCondition];

    // Apply installation complexity multiplier
    const installationMultipliers = {
      standard: 1,
      complex: 1.4
    };
    total *= installationMultipliers[installationType];

    // Apply location adjustment
    total *= location.costIndex;

    return Math.round(total);
  };

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Appliance Type
          </label>
          <select
            value={applianceType}
            onChange={(e) => setApplianceType(e.target.value as ApplianceType)}
            className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Appliance Type</option>
            <option value="wood">Wood Burning</option>
            <option value="gas">Gas</option>
            <option value="oil">Oil</option>
            <option value="pellet">Pellet</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Liner Type
          </label>
          <select
            value={selectedLiner}
            onChange={(e) => setSelectedLiner(e.target.value as LinerType)}
            className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Liner Type</option>
            <option value="stainless">Stainless Steel</option>
            <option value="clay">Clay Tile</option>
            <option value="aluminum">Aluminum</option>
            <option value="castInPlace">Cast-in-Place</option>
            <option value="thermocrete">Thermocrete</option>
            <option value="proform">ProForm</option>
            <option value="furanflex">FuranFlex</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Chimney Height (feet)
          </label>
          <input
            type="number"
            value={chimneyHeight}
            onChange={(e) => setChimneyHeight(Number(e.target.value))}
            className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            min="0"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Chimney Condition
          </label>
          <select
            value={chimneyCondition}
            onChange={(e) => setChimneyCondition(e.target.value as ChimneyCondition)}
            className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Condition</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Installation Type
          </label>
          <select
            value={installationType}
            onChange={(e) => setInstallationType(e.target.value as InstallationType)}
            className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Installation Type</option>
            <option value="standard">Standard (Straight Run)</option>
            <option value="complex">Complex (Offsets/Bends)</option>
          </select>
        </div>

        <LocationSelector
          location={location}
          onChange={setLocation}
        />

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Flue Size Calculator
            </label>
            <button
              type="button"
              onClick={() => setShowSizeCalculator(!showSizeCalculator)}
              className="text-sm text-blue-600 hover:text-blue-700"
            >
              {showSizeCalculator ? 'Hide Calculator' : 'Show Calculator'}
            </button>
          </div>

          {showSizeCalculator && (
            <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Opening Width (inches)
                  </label>
                  <input
                    type="number"
                    value={fireplaceDimensions.width}
                    onChange={(e) => setFireplaceDimensions(prev => ({
                      ...prev,
                      width: Number(e.target.value)
                    }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Opening Height (inches)
                  </label>
                  <input
                    type="number"
                    value={fireplaceDimensions.height}
                    onChange={(e) => setFireplaceDimensions(prev => ({
                      ...prev,
                      height: Number(e.target.value)
                    }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>

              {sizeRecommendation && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <h4 className="font-medium text-gray-800 mb-2">Recommended Flue Size</h4>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      Minimum size: {sizeRecommendation.minSize}" diameter
                    </p>
                    <p className="text-sm text-gray-600">
                      Recommended size: {sizeRecommendation.recommendedSize}" diameter
                    </p>
                    <div className="text-sm text-gray-600">
                      <p className="font-medium mb-1">Notes:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        {sizeRecommendation.notes.map((note, index) => (
                          <li key={index}>{note}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {calculateTotal() !== null && (
        <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Estimated Total Cost</h2>
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

          {sizeRecommendation && (
            <div className="mt-4 pt-4 border-t border-blue-200">
              <p className="text-sm text-gray-600">
                Recommended liner size: {sizeRecommendation.recommendedSize}" diameter
                (minimum {sizeRecommendation.minSize}")
              </p>
            </div>
          )}
        </div>
      )}

      <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
        <p className="text-sm text-gray-600">
          * These are estimated costs and may vary based on specific conditions,
          additional repairs needed, and local factors. We recommend getting a professional inspection
          for accurate pricing.
        </p>
      </div>
    </div>
  );
}