import React from 'react';

type TotalCostProps = {
  total: number;
  location: { state: string; costIndex: number };
};

export default function TotalCost({ total, location }: TotalCostProps) {
  return (
    <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Estimated Total Cost</h2>
          <p className="text-sm text-gray-600">
            {location.state ? 
              `Price adjusted for ${location.state} rates` :
              'Prices may vary based on location'}
          </p>
        </div>
        <div className="text-3xl font-bold text-blue-600">
          ${total.toLocaleString()}
        </div>
      </div>
    </div>
  );
}