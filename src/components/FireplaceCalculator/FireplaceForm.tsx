import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { ProjectDetails, BASE_COSTS, MATERIAL_MULTIPLIERS, STYLE_MULTIPLIERS, 
         REGION_MULTIPLIERS, PERMIT_COSTS, ENERGY_EFFICIENT_REBATE, VENTING_COSTS } from './types';
import LocationSelector from '../LocationSelector';

export default function FireplaceForm() {
  const [details, setDetails] = useState<ProjectDetails>({
    projectType: 'new',
    fireplaceType: 'wood',
    style: 'traditional',
    material: 'brick',
    dimensions: { width: 36, height: 32, depth: 24 },
    zipCode: '',
    region: 'midwest',
    energyEfficient: false,
    ventingRequired: true,
    permitRequired: true
  });

  const calculateTotal = () => {
    if (!details.projectType || !details.fireplaceType) return null;

    let total = BASE_COSTS[details.projectType][details.fireplaceType];

    // Apply material multiplier
    total *= MATERIAL_MULTIPLIERS[details.material];

    // Apply style multiplier
    total *= STYLE_MULTIPLIERS[details.style];

    // Apply regional cost adjustment
    total *= REGION_MULTIPLIERS[details.region];

    // Add permit costs if required
    if (details.permitRequired) {
      total += PERMIT_COSTS[details.region];
    }

    // Add venting costs if required
    if (details.ventingRequired) {
      total += VENTING_COSTS[details.fireplaceType];
    }

    // Apply energy efficiency rebate if applicable
    if (details.energyEfficient) {
      total -= ENERGY_EFFICIENT_REBATE;
    }

    // Size adjustment
    const standardSqFt = 12; // 36" × 32" = 8 sq ft standard
    const actualSqFt = (details.dimensions.width * details.dimensions.height) / 144;
    const sizeMultiplier = actualSqFt / standardSqFt;
    total *= Math.max(0.8, Math.min(1.5, sizeMultiplier));

    return Math.round(total);
  };

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Project Type
          </label>
          <select
            value={details.projectType}
            onChange={(e) => setDetails({ ...details, projectType: e.target.value as any })}
            className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="new">New Fireplace Installation</option>
            <option value="insert">Insert Installation</option>
            <option value="repair">Repair Existing Fireplace</option>
            <option value="conversion">Fireplace Conversion</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fireplace Type
          </label>
          <select
            value={details.fireplaceType}
            onChange={(e) => setDetails({ ...details, fireplaceType: e.target.value as any })}
            className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="wood">Wood-Burning Fireplace</option>
            <option value="gas">Gas Fireplace</option>
            <option value="electric">Electric Fireplace</option>
            <option value="ethanol">Ethanol Fireplace</option>
            <option value="pellet">Pellet Stove</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Style
          </label>
          <select
            value={details.style}
            onChange={(e) => setDetails({ ...details, style: e.target.value as any })}
            className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="traditional">Traditional</option>
            <option value="modern">Modern</option>
            <option value="rustic">Rustic</option>
            <option value="contemporary">Contemporary</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Primary Material
          </label>
          <select
            value={details.material}
            onChange={(e) => setDetails({ ...details, material: e.target.value as any })}
            className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="brick">Brick</option>
            <option value="stone">Natural Stone</option>
            <option value="marble">Marble</option>
            <option value="cast-iron">Cast Iron</option>
            <option value="steel">Steel</option>
          </select>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Width (inches)
            </label>
            <input
              type="number"
              value={details.dimensions.width}
              onChange={(e) => setDetails({
                ...details,
                dimensions: { ...details.dimensions, width: Number(e.target.value) }
              })}
              className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              min="24"
              max="72"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Height (inches)
            </label>
            <input
              type="number"
              value={details.dimensions.height}
              onChange={(e) => setDetails({
                ...details,
                dimensions: { ...details.dimensions, height: Number(e.target.value) }
              })}
              className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              min="24"
              max="72"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Depth (inches)
            </label>
            <input
              type="number"
              value={details.dimensions.depth}
              onChange={(e) => setDetails({
                ...details,
                dimensions: { ...details.dimensions, depth: Number(e.target.value) }
              })}
              className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              min="12"
              max="36"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ZIP Code
          </label>
          <input
            type="text"
            value={details.zipCode}
            onChange={(e) => setDetails({ ...details, zipCode: e.target.value })}
            className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            pattern="[0-9]{5}"
            maxLength={5}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Region
          </label>
          <select
            value={details.region}
            onChange={(e) => setDetails({ ...details, region: e.target.value as any })}
            className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="northeast">Northeast</option>
            <option value="midwest">Midwest</option>
            <option value="south">South</option>
            <option value="west">West</option>
          </select>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="energyEfficient"
              checked={details.energyEfficient}
              onChange={(e) => setDetails({ ...details, energyEfficient: e.target.checked })}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="energyEfficient" className="text-gray-700">
              Energy Efficient Model (Qualifies for Rebate)
            </label>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="ventingRequired"
              checked={details.ventingRequired}
              onChange={(e) => setDetails({ ...details, ventingRequired: e.target.checked })}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="ventingRequired" className="text-gray-700">
              Venting Installation Required
            </label>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="permitRequired"
              checked={details.permitRequired}
              onChange={(e) => setDetails({ ...details, permitRequired: e.target.checked })}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="permitRequired" className="text-gray-700">
              Local Permit Required
            </label>
          </div>
        </div>
      </div>

      {calculateTotal() !== null && (
        <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Estimated Cost</h2>
              <p className="text-sm text-gray-600">
                {details.region && details.zipCode ? 
                  `Price adjusted for ${details.region.charAt(0).toUpperCase() + details.region.slice(1)} region` :
                  'Prices may vary based on location'}
              </p>
            </div>
            <div className="text-3xl font-bold text-blue-600">
              ${calculateTotal()?.toLocaleString()}
            </div>
          </div>

          {details.energyEfficient && (
            <div className="mt-4 pt-4 border-t border-blue-200">
              <p className="text-sm text-blue-600">
                Includes ${ENERGY_EFFICIENT_REBATE} energy efficiency rebate
              </p>
            </div>
          )}
        </div>
      )}

      <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
        <p className="text-sm text-gray-600">
          * These are estimated costs and may vary based on specific conditions,
          local regulations, and market factors. We recommend getting a professional
          inspection for accurate pricing.
        </p>
      </div>
    </div>
  );
}