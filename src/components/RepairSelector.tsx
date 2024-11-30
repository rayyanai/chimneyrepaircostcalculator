import React from 'react';
import { RepairType } from '../types';
import { Wrench } from 'lucide-react';

type RepairSelectorProps = {
  repairTypes: Record<string, RepairType>;
  selectedRepairs: string[];
  setSelectedRepairs: (repairs: string[]) => void;
};

export default function RepairSelector({
  repairTypes,
  selectedRepairs,
  setSelectedRepairs,
}: RepairSelectorProps) {
  const repairCategories = {
    chimney: ['cap', 'damper', 'flashing', 'flue', 'framing', 'masonry', 'siding', 'tuckpointing'],
    fireplace: ['electricFireplace', 'gasValve', 'fireplaceMasonry', 'panels', 'gasFireplace', 'pelletStove'],
    other: ['downdraft', 'smokeChamber']
  };

  return (
    <div>
      <div className="flex items-center gap-2 text-blue-600 mb-4">
        <Wrench className="w-5 h-5" />
        <h3 className="text-lg font-semibold text-gray-700">Select Repairs Needed</h3>
      </div>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium text-gray-600 mb-3">Chimney Repairs</h4>
          <div className="space-y-3">
            {repairCategories.chimney.map(key => (
              <div key={key} className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id={key}
                  checked={selectedRepairs.includes(key)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedRepairs([...selectedRepairs, key]);
                    } else {
                      setSelectedRepairs(selectedRepairs.filter(r => r !== key));
                    }
                  }}
                  className="mt-1 w-4 h-4 text-blue-600 bg-white border-blue-300 rounded focus:ring-blue-500"
                />
                <label htmlFor={key} className="flex-1">
                  <span className="font-medium text-gray-800">{repairTypes[key].name}</span>
                  <span className="block text-sm text-gray-600">{repairTypes[key].description}</span>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-600 mb-3">Fireplace Repairs</h4>
          <div className="space-y-3">
            {repairCategories.fireplace.map(key => (
              <div key={key} className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id={key}
                  checked={selectedRepairs.includes(key)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedRepairs([...selectedRepairs, key]);
                    } else {
                      setSelectedRepairs(selectedRepairs.filter(r => r !== key));
                    }
                  }}
                  className="mt-1 w-4 h-4 text-blue-600 bg-white border-blue-300 rounded focus:ring-blue-500"
                />
                <label htmlFor={key} className="flex-1">
                  <span className="font-medium text-gray-800">{repairTypes[key].name}</span>
                  <span className="block text-sm text-gray-600">{repairTypes[key].description}</span>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-600 mb-3">Other Repairs</h4>
          <div className="space-y-3">
            {repairCategories.other.map(key => (
              <div key={key} className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id={key}
                  checked={selectedRepairs.includes(key)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedRepairs([...selectedRepairs, key]);
                    } else {
                      setSelectedRepairs(selectedRepairs.filter(r => r !== key));
                    }
                  }}
                  className="mt-1 w-4 h-4 text-blue-600 bg-white border-blue-300 rounded focus:ring-blue-500"
                />
                <label htmlFor={key} className="flex-1">
                  <span className="font-medium text-gray-800">{repairTypes[key].name}</span>
                  <span className="block text-sm text-gray-600">{repairTypes[key].description}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}