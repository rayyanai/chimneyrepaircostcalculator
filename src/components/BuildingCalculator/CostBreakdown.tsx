import React from 'react';
import { DollarSign } from 'lucide-react';

type Props = {
  dimensions: {
    height: number;
    width: number;
    depth: number;
  };
  materials: {
    type: string;
    quality: string;
    lining: boolean;
    cap: boolean;
  };
  location: {
    state: string;
    costIndex: number;
  };
  additionalFeatures: {
    damper: boolean;
    cricketFlashing: boolean;
    cleanout: boolean;
    reinforcement: boolean;
  };
};

export default function CostBreakdown({
  dimensions,
  materials,
  location,
  additionalFeatures,
}: Props) {
  const calculateBaseCost = () => {
    const volume = (dimensions.width * dimensions.depth * dimensions.height) / 144; // Convert to cubic feet
    let baseCost = volume * 250; // Base cost per cubic foot

    // Material type multipliers
    const materialMultipliers = {
      brick: 1,
      stone: 1.4,
      block: 0.8,
    };

    // Quality multipliers
    const qualityMultipliers = {
      standard: 1,
      premium: 1.3,
      antique: 1.5,
      custom: 2,
      reinforced: 1.2,
    };

    if (materials.type) {
      baseCost *= materialMultipliers[materials.type as keyof typeof materialMultipliers];
    }

    if (materials.quality) {
      baseCost *= qualityMultipliers[materials.quality as keyof typeof qualityMultipliers];
    }

    return Math.round(baseCost);
  };

  const calculateAdditionalCosts = () => {
    let additional = 0;

    if (materials.lining) additional += 2500;
    if (materials.cap) additional += 500;
    if (additionalFeatures.damper) additional += 400;
    if (additionalFeatures.cricketFlashing) additional += 600;
    if (additionalFeatures.cleanout) additional += 300;
    if (additionalFeatures.reinforcement) additional += 1200;

    return additional;
  };

  const baseCost = calculateBaseCost();
  const additionalCosts = calculateAdditionalCosts();
  const totalCost = Math.round((baseCost + additionalCosts) * location.costIndex);

  return (
    <div className="mt-8">
      <div className="bg-blue-50 rounded-xl border border-blue-200 overflow-hidden">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-800">Cost Breakdown</h2>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between text-gray-600">
              <span>Base Construction Cost:</span>
              <span className="font-medium">${baseCost.toLocaleString()}</span>
            </div>

            <div className="flex justify-between text-gray-600">
              <span>Additional Features:</span>
              <span className="font-medium">${additionalCosts.toLocaleString()}</span>
            </div>

            {location.state && (
              <div className="flex justify-between text-gray-600">
                <span>Location Adjustment:</span>
                <span className="font-medium">
                  {location.costIndex > 1 ? '+' : '-'}
                  {Math.abs((location.costIndex - 1) * 100).toFixed(0)}%
                </span>
              </div>
            )}

            <div className="pt-4 border-t border-blue-200">
              <div className="flex justify-between text-lg font-semibold">
                <span>Estimated Total:</span>
                <span className="text-blue-600">${totalCost.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-4 text-sm text-gray-500">
        * Estimates are based on average costs and may vary based on specific requirements,
        site conditions, and local factors.
      </p>
    </div>
  );
}