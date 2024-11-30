import React from 'react';
import { Wrench } from 'lucide-react';
import { LinerType } from '../types';

type LinerSelectorProps = {
  selectedLiner: string | null;
  onSelect: (liner: string | null) => void;
  linerTypes: Record<string, LinerType>;
  height: number;
};

export default function LinerSelector({ selectedLiner, onSelect, linerTypes, height }: LinerSelectorProps) {
  const calculateLinerCost = (basePrice: number): number => {
    let cost = basePrice;
    if (height > 20) {
      cost *= 1 + ((height - 20) * 0.05);
    }
    return Math.round(cost);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-blue-600 mb-4">
        <Wrench className="w-5 h-5" />
        <h3 className="text-lg font-semibold text-gray-700">Select Liner Type</h3>
      </div>
      
      <div className="grid gap-4">
        {Object.entries(linerTypes).map(([key, liner]) => (
          <div
            key={key}
            className={`p-4 rounded-lg border cursor-pointer transition-all ${
              selectedLiner === key
                ? 'bg-blue-50 border-blue-500'
                : 'bg-white border-blue-200 hover:border-blue-300'
            }`}
            onClick={() => onSelect(selectedLiner === key ? null : key)}
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-semibold text-gray-800">{liner.name}</h4>
                <p className="text-sm text-gray-600">{liner.description}</p>
              </div>
              {selectedLiner === key && (
                <div className="text-lg font-bold text-blue-600">
                  ${calculateLinerCost(liner.basePrice).toLocaleString()}
                </div>
              )}
            </div>
            
            <div className="mt-3">
              <div className="text-sm text-gray-600 mb-2">Benefits:</div>
              <ul className="text-sm text-gray-700 grid grid-cols-2 gap-2">
                {liner.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="mt-3 text-sm">
                <span className="text-gray-600">Expected lifespan: </span>
                <span className="text-gray-800">{liner.lifespan}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}