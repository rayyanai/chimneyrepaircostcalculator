import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

type ApplianceType = 'openFireplace' | 'woodStove' | 'gasFireplace' | 'pelletStove' | 'electricFireplace';
type FuelType = 'wood' | 'gas' | 'pellets' | 'electricity';
type EfficiencyLevel = 'poor' | 'average' | 'good' | 'excellent';

interface FuelUsage {
  amount: number;
  unit: string;
}

const applianceEfficiencies: Record<ApplianceType, { min: number; max: number }> = {
  openFireplace: { min: 10, max: 25 },
  woodStove: { min: 50, max: 85 },
  gasFireplace: { min: 65, max: 95 },
  pelletStove: { min: 70, max: 90 },
  electricFireplace: { min: 95, max: 99 }
};

const fuelUnits: Record<FuelType, string> = {
  wood: 'cords',
  gas: 'therms',
  pellets: 'tons',
  electricity: 'kWh'
};

export default function FuelForm() {
  const [applianceType, setApplianceType] = useState<ApplianceType | ''>('');
  const [fuelType, setFuelType] = useState<FuelType | ''>('');
  const [currentEfficiency, setCurrentEfficiency] = useState<EfficiencyLevel | ''>('');
  const [upgradeGoal, setUpgradeGoal] = useState<EfficiencyLevel | ''>('');
  const [fuelUsage, setFuelUsage] = useState<FuelUsage>({ amount: 0, unit: '' });
  const [fuelCost, setFuelCost] = useState<number>(0);
  const [results, setResults] = useState<{
    currentCost: number;
    upgradedCost: number;
    savings: number;
    payback?: number;
  } | null>(null);

  const getEfficiencyPercentage = (level: EfficiencyLevel): number => {
    switch (level) {
      case 'poor': return 0.4;
      case 'average': return 0.6;
      case 'good': return 0.8;
      case 'excellent': return 0.95;
      default: return 0;
    }
  };

  const calculateSavings = () => {
    if (!applianceType || !fuelType || !currentEfficiency || !upgradeGoal || !fuelUsage.amount || !fuelCost) return;

    const currentEfficiencyPercent = getEfficiencyPercentage(currentEfficiency);
    const upgradedEfficiencyPercent = getEfficiencyPercentage(upgradeGoal);
    
    const annualFuelCost = fuelUsage.amount * fuelCost;
    const currentCost = annualFuelCost / currentEfficiencyPercent;
    const upgradedCost = annualFuelCost / upgradedEfficiencyPercent;
    const savings = currentCost - upgradedCost;

    // Estimate upgrade costs based on appliance type
    const upgradeCosts: Record<ApplianceType, number> = {
      openFireplace: 3000,
      woodStove: 2500,
      gasFireplace: 2000,
      pelletStove: 3500,
      electricFireplace: 1500
    };

    const payback = upgradeCosts[applianceType] / savings;

    setResults({
      currentCost: Math.round(currentCost),
      upgradedCost: Math.round(upgradedCost),
      savings: Math.round(savings),
      payback: Math.round(payback * 10) / 10
    });
  };

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Heating Appliance Type
          </label>
          <select
            value={applianceType}
            onChange={(e) => {
              setApplianceType(e.target.value as ApplianceType);
              // Update fuel type options based on appliance
              setFuelType('');
            }}
            className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Appliance Type</option>
            <option value="openFireplace">Open Fireplace</option>
            <option value="woodStove">Wood Stove</option>
            <option value="gasFireplace">Gas Fireplace</option>
            <option value="pelletStove">Pellet Stove</option>
            <option value="electricFireplace">Electric Fireplace</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fuel Type
          </label>
          <select
            value={fuelType}
            onChange={(e) => {
              setFuelType(e.target.value as FuelType);
              setFuelUsage({ ...fuelUsage, unit: fuelUnits[e.target.value as FuelType] });
            }}
            className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Fuel Type</option>
            {applianceType === 'openFireplace' || applianceType === 'woodStove' && <option value="wood">Wood</option>}
            {applianceType === 'gasFireplace' && <option value="gas">Natural Gas</option>}
            {applianceType === 'pelletStove' && <option value="pellets">Wood Pellets</option>}
            {applianceType === 'electricFireplace' && <option value="electricity">Electricity</option>}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current Efficiency Level
          </label>
          <select
            value={currentEfficiency}
            onChange={(e) => setCurrentEfficiency(e.target.value as EfficiencyLevel)}
            className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Current Efficiency</option>
            <option value="poor">Poor (40%)</option>
            <option value="average">Average (60%)</option>
            <option value="good">Good (80%)</option>
            <option value="excellent">Excellent (95%)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Target Efficiency Level
          </label>
          <select
            value={upgradeGoal}
            onChange={(e) => setUpgradeGoal(e.target.value as EfficiencyLevel)}
            className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Target Efficiency</option>
            <option value="average">Average (60%)</option>
            <option value="good">Good (80%)</option>
            <option value="excellent">Excellent (95%)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Annual Fuel Usage ({fuelUsage.unit || 'units'})
          </label>
          <input
            type="number"
            value={fuelUsage.amount}
            onChange={(e) => setFuelUsage({ ...fuelUsage, amount: Number(e.target.value) })}
            className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            min="0"
            step="0.1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fuel Cost ($ per {fuelUsage.unit || 'unit'})
          </label>
          <input
            type="number"
            value={fuelCost}
            onChange={(e) => setFuelCost(Number(e.target.value))}
            className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            min="0"
            step="0.01"
          />
        </div>

        <button
          onClick={calculateSavings}
          disabled={!applianceType || !fuelType || !currentEfficiency || !upgradeGoal || !fuelUsage.amount || !fuelCost}
          className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          <Calculator className="w-5 h-5" />
          Calculate Savings
        </button>
      </div>

      {results && (
        <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Annual Cost Analysis</h3>
          <div className="space-y-3">
            <div className="flex justify-between text-gray-600">
              <span>Current Annual Cost:</span>
              <span className="font-medium">${results.currentCost.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Projected Cost After Upgrade:</span>
              <span className="font-medium">${results.upgradedCost.toLocaleString()}</span>
            </div>
            <div className="pt-3 border-t border-blue-200">
              <div className="flex justify-between text-lg font-semibold">
                <span>Potential Annual Savings:</span>
                <span className="text-green-600">${results.savings.toLocaleString()}</span>
              </div>
            </div>
            {results.payback && (
              <div className="pt-3 text-sm text-gray-600">
                <span>Estimated payback period: </span>
                <span className="font-medium">{results.payback} years</span>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
        <p className="text-sm text-gray-600">
          * These calculations are estimates based on typical efficiency ratings and average upgrade costs.
          Actual savings may vary based on specific conditions, usage patterns, and local factors.
        </p>
      </div>
    </div>
  );
}