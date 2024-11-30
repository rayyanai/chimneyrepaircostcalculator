import React, { useState } from 'react';
import { Calculator, DollarSign } from 'lucide-react';

type FireplaceType = 'masonry' | 'factory' | 'stove' | 'insert';
type FuelType = 'wood' | 'gas' | 'pellet';
type FlueType = 'clay' | 'steel' | 'aluminum';

interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

interface CostEstimate {
  materialCost: number;
  laborCost: number;
  total: number;
  flueType: FlueType;
}

export default function FlueForm() {
  const [fireplaceType, setFireplaceType] = useState<FireplaceType | ''>('');
  const [fuelType, setFuelType] = useState<FuelType | ''>('');
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 36,
    height: 30,
    depth: 24
  });
  const [selectedFlueType, setSelectedFlueType] = useState<FlueType>('steel');
  const [output, setOutput] = useState<string | null>(null);
  const [costEstimate, setCostEstimate] = useState<CostEstimate | null>(null);

  const calculateFlueSize = () => {
    if (!fireplaceType || !fuelType) return;

    const openingArea = (dimensions.width * dimensions.height) / 144; // Convert to square feet
    let flueArea = 0;
    let recommendedSize = '';

    switch (fireplaceType) {
      case 'masonry':
        if (fuelType === 'wood') {
          flueArea = openingArea * 0.1;
        } else if (fuelType === 'gas') {
          flueArea = openingArea * 0.07;
        }
        break;
      case 'factory':
        if (fuelType === 'wood') {
          flueArea = openingArea * 0.12;
        } else if (fuelType === 'gas') {
          flueArea = openingArea * 0.08;
        }
        break;
      case 'stove':
        if (fuelType === 'wood') {
          flueArea = openingArea * 0.15;
        } else if (fuelType === 'pellet') {
          flueArea = openingArea * 0.09;
        }
        break;
      case 'insert':
        if (fuelType === 'wood') {
          flueArea = openingArea * 0.11;
        } else if (fuelType === 'gas') {
          flueArea = openingArea * 0.08;
        }
        break;
    }

    // Convert area to diameter and round to nearest standard size
    const diameter = Math.sqrt(flueArea * 144 / Math.PI);
    const standardSizes = [6, 7, 8, 10, 12, 14, 16, 18, 20, 24];
    const recommendedDiameter = standardSizes.find(size => size >= diameter) || 24;

    // Generate recommendation text
    recommendedSize = `${recommendedDiameter}" round`;
    if (recommendedDiameter >= 8) {
      const squareSize = Math.ceil(recommendedDiameter * 0.9);
      recommendedSize += ` or ${squareSize}"x${squareSize}" square`;
    }

    setOutput(recommendedSize);

    // Calculate cost estimate
    const baseCosts = {
      clay: { material: 15, labor: 25 }, // per inch of diameter
      steel: { material: 25, labor: 35 }, // per inch of diameter
      aluminum: { material: 20, labor: 30 }, // per inch of diameter
    };

    const heightMultiplier = dimensions.height / 12; // Convert to feet
    const materialCost = baseCosts[selectedFlueType].material * recommendedDiameter * heightMultiplier;
    const laborCost = baseCosts[selectedFlueType].labor * recommendedDiameter * heightMultiplier;

    setCostEstimate({
      materialCost,
      laborCost,
      total: materialCost + laborCost,
      flueType: selectedFlueType
    });
  };

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fireplace Type
          </label>
          <select
            value={fireplaceType}
            onChange={(e) => setFireplaceType(e.target.value as FireplaceType)}
            className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Type</option>
            <option value="masonry">Masonry Fireplace</option>
            <option value="factory">Factory-Built Fireplace</option>
            <option value="stove">Wood/Pellet Stove</option>
            <option value="insert">Fireplace Insert</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fuel Type
          </label>
          <select
            value={fuelType}
            onChange={(e) => setFuelType(e.target.value as FuelType)}
            className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Fuel</option>
            <option value="wood">Wood</option>
            <option value="gas">Gas</option>
            {fireplaceType === 'stove' && <option value="pellet">Pellet</option>}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Flue Material
          </label>
          <select
            value={selectedFlueType}
            onChange={(e) => setSelectedFlueType(e.target.value as FlueType)}
            className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="clay">Clay/Ceramic Liner</option>
            <option value="steel">Stainless Steel</option>
            <option value="aluminum">Aluminum</option>
          </select>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Width (inches)
            </label>
            <input
              type="number"
              value={dimensions.width}
              onChange={(e) => setDimensions({ ...dimensions, width: Number(e.target.value) })}
              className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              min="12"
              max="72"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Height (inches)
            </label>
            <input
              type="number"
              value={dimensions.height}
              onChange={(e) => setDimensions({ ...dimensions, height: Number(e.target.value) })}
              className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              min="12"
              max="72"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Depth (inches)
            </label>
            <input
              type="number"
              value={dimensions.depth}
              onChange={(e) => setDimensions({ ...dimensions, depth: Number(e.target.value) })}
              className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              min="12"
              max="48"
            />
          </div>
        </div>

        <button
          onClick={calculateFlueSize}
          className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        >
          <Calculator className="w-5 h-5" />
          Calculate Size & Cost
        </button>
      </div>

      {output && (
        <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Recommended Flue Size</h3>
            <p className="text-2xl font-bold text-blue-600">{output}</p>
            <p className="text-sm text-gray-600">
              This recommendation is based on standard sizing guidelines. Always consult with a professional
              for final verification and local code compliance.
            </p>
          </div>
        </div>
      )}

      {costEstimate && (
        <div className="mt-8 p-6 bg-green-50 rounded-xl border border-green-200">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              <h3 className="text-lg font-semibold text-gray-800">Cost Estimate</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-gray-600">
                <span>Materials ({costEstimate.flueType} liner):</span>
                <span className="font-medium">${Math.round(costEstimate.materialCost).toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Installation Labor:</span>
                <span className="font-medium">${Math.round(costEstimate.laborCost).toLocaleString()}</span>
              </div>
              <div className="pt-2 border-t border-green-200">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Estimated Total:</span>
                  <span className="text-green-600">${Math.round(costEstimate.total).toLocaleString()}</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              * Costs are estimates and may vary based on location, specific requirements, and market conditions.
            </p>
          </div>
        </div>
      )}

      <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
        <p className="text-sm text-gray-600">
          * These calculations are based on general guidelines and may need adjustment based on
          specific circumstances, local codes, and professional assessment.
        </p>
      </div>
    </div>
  );
}