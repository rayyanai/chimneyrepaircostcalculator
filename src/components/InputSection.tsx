import React from 'react';

type InputSectionProps = {
  height: number;
  setHeight: (height: number) => void;
  chimneyAge: number;
  setChimneyAge: (age: number) => void;
  isEmergency: boolean;
  setIsEmergency: (emergency: boolean) => void;
};

export default function InputSection({
  height,
  setHeight,
  chimneyAge,
  setChimneyAge,
  isEmergency,
  setIsEmergency,
}: InputSectionProps) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Chimney Height (feet)
        </label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
          className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
          min="5"
          max="50"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Chimney Age (years)
        </label>
        <input
          type="number"
          value={chimneyAge}
          onChange={(e) => setChimneyAge(Number(e.target.value))}
          className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
          min="0"
          max="100"
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="emergency"
          checked={isEmergency}
          onChange={(e) => setIsEmergency(e.target.checked)}
          className="w-4 h-4 text-blue-600 bg-white border-blue-300 rounded focus:ring-blue-500"
        />
        <label htmlFor="emergency" className="text-sm font-medium text-gray-700">
          Emergency Service Required (+40%)
        </label>
      </div>
    </div>
  );
}