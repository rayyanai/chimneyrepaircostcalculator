import React from 'react';
import { CreosoteInputs } from './index';

type Props = {
  inputs: CreosoteInputs;
  setInputs: (inputs: CreosoteInputs) => void;
};

export default function InputSection({ inputs, setInputs }: Props) {
  const handleChange = (field: keyof CreosoteInputs, value: string) => {
    setInputs({ ...inputs, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Type of Fuel Used
        </label>
        <select
          value={inputs.fuelType}
          onChange={(e) => handleChange('fuelType', e.target.value)}
          className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select Fuel Type</option>
          <option value="wood">Wood</option>
          <option value="coal">Coal</option>
          <option value="gas">Gas</option>
          <option value="pellets">Wood Pellets</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Frequency of Fireplace Use
        </label>
        <select
          value={inputs.frequency}
          onChange={(e) => handleChange('frequency', e.target.value)}
          className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select Usage Frequency</option>
          <option value="daily">Daily (During Season)</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="occasionally">Occasionally</option>
        </select>
      </div>

      {inputs.fuelType === 'wood' && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Type of Wood Burned
          </label>
          <select
            value={inputs.woodType}
            onChange={(e) => handleChange('woodType', e.target.value)}
            className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Wood Type</option>
            <option value="hardwood">Hardwood (Oak, Maple)</option>
            <option value="softwood">Softwood (Pine, Fir)</option>
            <option value="mixed">Mixed Woods</option>
          </select>
        </div>
      )}

      {inputs.fuelType === 'wood' && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Wood Moisture Content
          </label>
          <select
            value={inputs.moistureContent}
            onChange={(e) => handleChange('moistureContent', e.target.value)}
            className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Moisture Level</option>
            <option value="seasoned">Well-Seasoned (Less than 20% moisture)</option>
            <option value="partially">Partially Seasoned (20-25% moisture)</option>
            <option value="unseasoned">Unseasoned/Wet (Over 25% moisture)</option>
          </select>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Last Chimney Cleaning
        </label>
        <select
          value={inputs.lastCleaning}
          onChange={(e) => handleChange('lastCleaning', e.target.value)}
          className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select Last Cleaning</option>
          <option value="6months">Within 6 months</option>
          <option value="1year">Within 1 year</option>
          <option value="2years">1-2 years ago</option>
          <option value="more">More than 2 years ago</option>
          <option value="unknown">Unknown/Never</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Chimney Type
        </label>
        <select
          value={inputs.chimneyType}
          onChange={(e) => handleChange('chimneyType', e.target.value)}
          className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select Chimney Type</option>
          <option value="masonry">Masonry</option>
          <option value="metal">Metal</option>
          <option value="prefab">Prefabricated</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Ventilation Quality
        </label>
        <select
          value={inputs.ventilation}
          onChange={(e) => handleChange('ventilation', e.target.value)}
          className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select Ventilation Quality</option>
          <option value="good">Good (Strong draft, no smoke backup)</option>
          <option value="average">Average (Occasional smoke issues)</option>
          <option value="poor">Poor (Frequent smoke backup)</option>
        </select>
      </div>
    </div>
  );
}