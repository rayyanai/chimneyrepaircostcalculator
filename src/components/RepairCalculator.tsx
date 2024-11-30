import React, { useState } from 'react';
import { repairTypes, linerTypes } from '../types';
import Header from './Header';
import InputSection from './InputSection';
import RepairSelector from './RepairSelector';
import LinerSelector from './LinerSelector';
import TotalCost from './TotalCost';
import Disclaimer from './Disclaimer';
import LocationSelector from './LocationSelector';

export default function RepairCalculator() {
  const [height, setHeight] = useState<number>(15);
  const [selectedRepairs, setSelectedRepairs] = useState<string[]>([]);
  const [selectedLiner, setSelectedLiner] = useState<string | null>(null);
  const [chimneyAge, setChimneyAge] = useState<number>(20);
  const [isEmergency, setIsEmergency] = useState<boolean>(false);
  const [location, setLocation] = useState<{ state: string; costIndex: number }>({
    state: '',
    costIndex: 1
  });

  const calculateTotal = () => {
    if (selectedRepairs.length === 0 && !selectedLiner) return null;

    let total = 0;

    selectedRepairs.forEach((repair) => {
      const repairType = repairTypes[repair];
      if (!repairType) return;

      let repairCost = repairType.basePrice;
      const heightFactor = Math.pow(repairType.heightMultiplier, Math.floor(height / 10));
      repairCost *= heightFactor;

      const ageFactor = Math.pow(repairType.ageMultiplier, Math.floor(chimneyAge / 20));
      repairCost *= ageFactor;

      if (repair === 'tuckpointing') {
        repairCost *= height * 3;
      }

      total += repairCost;
    });

    if (selectedLiner && linerTypes[selectedLiner]) {
      total += linerTypes[selectedLiner].basePrice;
    }

    if (isEmergency) total *= 1.4;
    
    // Apply location-based cost adjustment
    total *= location.costIndex;

    return Math.round(total);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-200">
        <Header />

        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <InputSection
                height={height}
                setHeight={setHeight}
                chimneyAge={chimneyAge}
                setChimneyAge={setChimneyAge}
                isEmergency={isEmergency}
                setIsEmergency={setIsEmergency}
              />

              <LocationSelector
                location={location}
                onChange={setLocation}
              />

              <RepairSelector
                repairTypes={repairTypes}
                selectedRepairs={selectedRepairs}
                setSelectedRepairs={setSelectedRepairs}
              />
            </div>

            <div>
              <LinerSelector
                selectedLiner={selectedLiner}
                onSelect={setSelectedLiner}
                linerTypes={linerTypes}
                height={height}
              />
            </div>
          </div>

          {calculateTotal() !== null && (
            <TotalCost total={calculateTotal() || 0} location={location} />
          )}
          <Disclaimer />
        </div>
      </div>
    </div>
  );
}