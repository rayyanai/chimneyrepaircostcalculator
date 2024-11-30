import React from 'react';
import { Ruler } from 'lucide-react';

type Props = {
  dimensions: {
    height: number;
    width: number;
    depth: number;
  };
  onChange: (dimensions: any) => void;
};

export default function DimensionsInput({ dimensions, onChange }: Props) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Ruler className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold text-gray-800">Dimensions</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Height (feet)
          </label>
          <input
            type="number"
            value={dimensions.height}
            onChange={(e) => onChange({ ...dimensions, height: Number(e.target.value) })}
            min="5"
            max="50"
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Width (inches)
          </label>
          <input
            type="number"
            value={dimensions.width}
            onChange={(e) => onChange({ ...dimensions, width: Number(e.target.value) })}
            min="24"
            max="96"
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Depth (inches)
          </label>
          <input
            type="number"
            value={dimensions.depth}
            onChange={(e) => onChange({ ...dimensions, depth: Number(e.target.value) })}
            min="24"
            max="96"
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      <p className="text-sm text-gray-600">
        Standard chimney dimensions typically range from 24" to 96" in width and depth,
        and 5' to 50' in height above the roofline.
      </p>
    </div>
  );
}