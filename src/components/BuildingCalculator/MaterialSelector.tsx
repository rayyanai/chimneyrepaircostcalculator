import React from 'react';
import { Blocks } from 'lucide-react';

const materialTypes = {
  brick: {
    name: 'Brick',
    description: 'Traditional clay brick construction',
    qualities: {
      standard: { name: 'Standard', multiplier: 1 },
      premium: { name: 'Premium', multiplier: 1.3 },
      antique: { name: 'Antique Style', multiplier: 1.5 },
    },
  },
  stone: {
    name: 'Natural Stone',
    description: 'Durable natural stone construction',
    qualities: {
      standard: { name: 'Standard', multiplier: 1.4 },
      premium: { name: 'Premium', multiplier: 1.7 },
      custom: { name: 'Custom Cut', multiplier: 2 },
    },
  },
  block: {
    name: 'Concrete Block',
    description: 'Cost-effective concrete block construction',
    qualities: {
      standard: { name: 'Standard', multiplier: 0.8 },
      premium: { name: 'Premium', multiplier: 1 },
      reinforced: { name: 'Reinforced', multiplier: 1.2 },
    },
  },
};

type Props = {
  materials: {
    type: string;
    quality: string;
    lining: boolean;
    cap: boolean;
  };
  onChange: (materials: any) => void;
};

export default function MaterialSelector({ materials, onChange }: Props) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Blocks className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold text-gray-800">Materials</h2>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Material Type
        </label>
        <div className="grid gap-4 md:grid-cols-3">
          {Object.entries(materialTypes).map(([type, info]) => (
            <div
              key={type}
              className={`p-4 rounded-lg border cursor-pointer transition-all ${
                materials.type === type
                  ? 'bg-blue-50 border-blue-500'
                  : 'bg-white border-gray-200 hover:border-blue-300'
              }`}
              onClick={() => onChange({ ...materials, type })}
            >
              <h3 className="font-medium text-gray-900">{info.name}</h3>
              <p className="text-sm text-gray-600">{info.description}</p>
            </div>
          ))}
        </div>
      </div>

      {materials.type && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Material Quality
          </label>
          <select
            value={materials.quality}
            onChange={(e) => onChange({ ...materials, quality: e.target.value })}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {Object.entries(materialTypes[materials.type as keyof typeof materialTypes].qualities).map(([quality, info]) => (
              <option key={quality} value={quality}>
                {info.name}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="lining"
            checked={materials.lining}
            onChange={(e) => onChange({ ...materials, lining: e.target.checked })}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="lining" className="text-gray-700">
            Include Chimney Liner
          </label>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="cap"
            checked={materials.cap}
            onChange={(e) => onChange({ ...materials, cap: e.target.checked })}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="cap" className="text-gray-700">
            Include Chimney Cap
          </label>
        </div>
      </div>
    </div>
  );
}