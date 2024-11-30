import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import LocationSelector from '../LocationSelector';

type BuildingType = 'residential' | 'commercial';
type ChimneyMaterial = 'brick' | 'stone' | 'stainless' | 'prefab';
type ComplexityLevel = 'simple' | 'moderate' | 'complex';
type ApplianceType = 'woodStove' | 'gasFurnace' | 'fireplace' | 'pelletStove';

const materialCosts: Record<ChimneyMaterial, number> = {
  brick: 100,
  stone: 150,
  stainless: 200,
  prefab: 175
};

const complexityMultipliers: Record<ComplexityLevel, number> = {
  simple: 1,
  moderate: 1.3,
  complex: 1.6
};

export default function HeightForm() {
  const [buildingType, setBuildingType] = useState<BuildingType | ''>('');
  const [numFloors, setNumFloors] = useState<number>(1);
  const [material, setMaterial] = useState<ChimneyMaterial | ''>('');
  const [complexity, setComplexity] = useState<ComplexityLevel | ''>('');
  const [applianceType, setApplianceType] = useState<ApplianceType | ''>('');
  const [roofHeight, setRoofHeight] = useState<number>(0);
  const [location, setLocation] = useState<{ state: string; costIndex: number }>({
    state: '',
    costIndex: 1
  });

  const calculateRequiredHeight = () => {
    if (!buildingType || !numFloors || !roofHeight) return null;

    // Base height calculation
    let baseHeight = roofHeight + (numFloors * 8); // Assuming 8ft ceiling height per floor

    // Add minimum height above roof based on building codes
    let minHeightAboveRoof = 3; // 3 feet minimum above roof

    // Adjust based on appliance type
    if (applianceType) {
      switch (applianceType) {
        case 'woodStove':
          minHeightAboveRoof = 5;
          break;
        case 'gasFurnace':
          minHeightAboveRoof = 3;
          break;
        case 'fireplace':
          minHeightAboveRoof = 4;
          break;
        case 'pelletStove':
          minHeightAboveRoof = 3;
          break;
      }
    }

    // Add height above roof
    const totalHeight = baseHeight + minHeightAboveRoof;

    return {
      totalHeight,
      minHeightAboveRoof,
      baseHeight
    };
  };

  const calculateCost = () => {
    if (!material || !complexity || !buildingType) return null;

    const heightCalc = calculateRequiredHeight();
    if (!heightCalc) return null;

    let totalCost = heightCalc.totalHeight * materialCosts[material];

    // Apply complexity multiplier
    totalCost *= complexityMultipliers[complexity];

    // Apply building type multiplier
    if (buildingType === 'commercial') {
      totalCost *= 1.5; // Commercial projects cost more
    }

    // Apply location adjustment
    totalCost *= location.costIndex;

    return Math.round(totalCost);
  };

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Building Type
          </label>
          <select
            value={buildingType}
            onChange={(e) => setBuildingType(e.target.value as BuildingType)}
            className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Building Type</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Floors
          </label>
          <input
            type="number"
            value={numFloors}
            onChange={(e) => setNumFloors(Number(e.target.value))}
            className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            min="1"
            max="50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Roof Height (feet)
          </label>
          <input
            type="number"
            value={roofHeight}
            onChange={(e) => setRoofHeight(Number(e.target.value))}
            className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            min="0"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Chimney Material
          </label>
          <select
            value={material}
            onChange={(e) => setMaterial(e.target.value as ChimneyMaterial)}
            className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Material</option>
            <option value="brick">Brick</option>
            <option value="stone">Stone</option>
            <option value="stainless">Stainless Steel</option>
            <option value="prefab">Prefabricated</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Installation Complexity
          </label>
          <select
            value={complexity}
            onChange={(e) => setComplexity(e.target.value as ComplexityLevel)}
            className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Complexity</option>
            <option value="simple">Simple (Straight Run)</option>
            <option value="moderate">Moderate (Some Bends)</option>
            <option value="complex">Complex (Multiple Bends/Obstacles)</option>
          </select>
        </div>

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
            <option value="woodStove">Wood Stove</option>
            <option value="gasFurnace">Gas Furnace</option>
            <option value="fireplace">Fireplace</option>
            <option value="pelletStove">Pellet Stove</option>
          </select>
        </div>

        <LocationSelector
          location={location}
          onChange={setLocation}
        />
      </div>

      {calculateRequiredHeight() && (
        <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Height Requirements</h2>
              <div className="mt-2 space-y-2">
                <p className="text-gray-600">
                  Total Height: {calculateRequiredHeight()?.totalHeight} feet
                </p>
                <p className="text-gray-600">
                  Minimum Height Above Roof: {calculateRequiredHeight()?.minHeightAboveRoof} feet
                </p>
                <p className="text-gray-600">
                  Base Height: {calculateRequiredHeight()?.baseHeight} feet
                </p>
              </div>
            </div>

            {calculateCost() !== null && (
              <div className="pt-4 border-t border-blue-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Estimated Cost</h3>
                    <p className="text-sm text-gray-600">
                      {location.state ? 
                        `Price adjusted for ${location.state} rates` :
                        'Prices may vary based on location'}
                    </p>
                  </div>
                  <div className="text-3xl font-bold text-blue-600">
                    ${calculateCost()?.toLocaleString()}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
        <p className="text-sm text-gray-600">
          * These calculations are based on general building codes and industry standards.
          Always consult local building codes and a professional for final requirements.
        </p>
      </div>
    </div>
  );
}