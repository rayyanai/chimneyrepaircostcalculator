import React, { useState } from 'react';
import { Brush, AlertCircle } from 'lucide-react';
import LocationSelector from './LocationSelector';

type ChimneyType = {
  name: string;
  basePrice: number;
  description: string;
  cleaningTime: string;
  maintenanceInterval: string;
};

const chimneyTypes: Record<string, ChimneyType> = {
  masonry: {
    name: 'Masonry Chimney',
    basePrice: 250,
    description: 'Traditional brick or stone chimney',
    cleaningTime: '2-3 hours',
    maintenanceInterval: '1-2 times per year'
  },
  prefabricated: {
    name: 'Prefabricated Chimney',
    basePrice: 200,
    description: 'Factory-built metal chimney',
    cleaningTime: '1-2 hours',
    maintenanceInterval: 'Once per year'
  },
  woodStove: {
    name: 'Wood Stove Chimney',
    basePrice: 275,
    description: 'Specialized chimney for wood stoves',
    cleaningTime: '2-4 hours',
    maintenanceInterval: '2-4 times per year'
  },
  gasFireplace: {
    name: 'Gas Fireplace Chimney',
    basePrice: 175,
    description: 'Venting system for gas fireplaces',
    cleaningTime: '1-2 hours',
    maintenanceInterval: 'Once per year'
  }
};

export default function CleaningCalculator() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [height, setHeight] = useState<number>(15);
  const [lastCleaning, setLastCleaning] = useState<number>(12);
  const [creosoteLevel, setCreosoteLevel] = useState<number>(1);
  const [isEmergency, setIsEmergency] = useState<boolean>(false);
  const [location, setLocation] = useState<{ state: string; costIndex: number }>({
    state: '',
    costIndex: 1
  });

  const calculateTotal = () => {
    if (!selectedType) return null;

    let total = chimneyTypes[selectedType].basePrice;

    // Height adjustment
    if (height > 20) {
      total += (height - 20) * 15;
    }

    // Creosote level adjustment
    if (creosoteLevel === 2) total *= 1.3;
    if (creosoteLevel === 3) total *= 1.8;

    // Time since last cleaning adjustment
    if (lastCleaning > 24) total *= 1.2;
    if (lastCleaning > 36) total *= 1.4;

    // Emergency service fee
    if (isEmergency) total *= 1.5;

    // Apply location-based cost adjustment
    total *= location.costIndex;

    return Math.round(total);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-200">
        <div className="bg-blue-600 p-6 text-white">
          <div className="flex items-center gap-3">
            <Brush className="w-8 h-8 text-blue-100" />
            <h1 className="text-2xl font-bold">Chimney Cleaning Cost Calculator</h1>
          </div>
          <p className="mt-2 text-blue-100">Get an instant estimate for professional chimney cleaning services</p>
        </div>

        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Chimney Height (feet)
                </label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  min="5"
                  max="50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Months Since Last Cleaning
                </label>
                <input
                  type="number"
                  value={lastCleaning}
                  onChange={(e) => setLastCleaning(Number(e.target.value))}
                  className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  min="0"
                  max="120"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Creosote Level
                </label>
                <select
                  value={creosoteLevel}
                  onChange={(e) => setCreosoteLevel(Number(e.target.value))}
                  className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value={1}>Level 1 - Light Coating</option>
                  <option value={2}>Level 2 - Moderate Buildup</option>
                  <option value={3}>Level 3 - Heavy Buildup</option>
                </select>
              </div>

              <LocationSelector
                location={location}
                onChange={setLocation}
              />

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="emergency"
                  checked={isEmergency}
                  onChange={(e) => setIsEmergency(e.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-white border-blue-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="emergency" className="text-sm font-medium text-gray-700">
                  Emergency Service Required (+50%)
                </label>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Select Chimney Type</h3>
              <div className="space-y-4">
                {Object.entries(chimneyTypes).map(([key, type]) => (
                  <div
                    key={key}
                    className={`p-4 rounded-lg border cursor-pointer transition-all ${
                      selectedType === key
                        ? 'bg-blue-50 border-blue-500'
                        : 'bg-white border-blue-200 hover:border-blue-300'
                    }`}
                    onClick={() => setSelectedType(selectedType === key ? null : key)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-gray-800">{type.name}</h4>
                        <p className="text-sm text-gray-600">{type.description}</p>
                      </div>
                      {selectedType === key && (
                        <div className="text-lg font-bold text-blue-600">
                          ${type.basePrice}
                        </div>
                      )}
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      <div>Typical cleaning time: {type.cleaningTime}</div>
                      <div>Recommended cleaning: {type.maintenanceInterval}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {calculateTotal() !== null && (
            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">Estimated Cleaning Cost</h2>
                  <p className="text-sm text-gray-600">
                    {location.state ? 
                      `Price adjusted for ${location.state} rates` :
                      'Final price may vary based on inspection'}
                  </p>
                </div>
                <div className="text-3xl font-bold text-blue-600">
                  ${calculateTotal()?.toLocaleString()}
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
            <div className="flex items-center gap-2 text-gray-700 mb-3">
              <AlertCircle className="w-5 h-5" />
              <h3 className="font-semibold">Important Notes</h3>
            </div>
            <div className="text-sm text-gray-600 space-y-4">
              <p>This calculator provides an estimate only. Final costs may vary based on:</p>
              <ul className="list-disc ml-5 space-y-2">
                <li>Actual chimney condition upon inspection</li>
                <li>Accessibility and safety requirements</li>
                <li>Additional services needed (inspection, repairs)</li>
                <li>Local market rates and seasonal factors</li>
                <li>Special equipment requirements</li>
              </ul>
              <p className="text-xs">We recommend scheduling a professional inspection for accurate pricing.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}