import React, { useState } from 'react';
import { MapPin, Wrench } from 'lucide-react';
import LocationSelector from '../LocationSelector';

export default function RepairForm() {
  const [height, setHeight] = useState(15);
  const [chimneyAge, setChimneyAge] = useState(20);
  const [chimneyMaterial, setChimneyMaterial] = useState('');
  const [selectedRepairs, setSelectedRepairs] = useState<string[]>([]);
  const [selectedLiner, setSelectedLiner] = useState<string | null>(null);
  const [isEmergency, setIsEmergency] = useState(false);
  const [location, setLocation] = useState({ state: '', costIndex: 1 });
  const [dimensions, setDimensions] = useState({
    width: 32,
    depth: 32
  });
  const [damageSeverity, setDamageSeverity] = useState('moderate');

  const repairTypes = {
    cap: {
      name: 'Chimney Cap Repair/Installation',
      basePrice: 300,
      description: 'Repair or replace damaged chimney cap',
      heightMultiplier: 1.1,
      ageMultiplier: 1.2
    },
    damper: {
      name: 'Chimney Damper Repair',
      basePrice: 400,
      description: 'Fix or replace faulty damper system',
      heightMultiplier: 1.05,
      ageMultiplier: 1.15
    },
    flashing: {
      name: 'Chimney Flashing',
      basePrice: 600,
      description: 'Repair or replace roof flashing around chimney',
      heightMultiplier: 1.2,
      ageMultiplier: 1.1
    },
    flue: {
      name: 'Chimney Flue Repair',
      basePrice: 800,
      description: 'Fix damaged flue lining or structure',
      heightMultiplier: 1.3,
      ageMultiplier: 1.25
    },
    masonry: {
      name: 'Chimney Masonry Repair',
      basePrice: 900,
      description: 'Fix damaged bricks, stones, or mortar',
      heightMultiplier: 1.25,
      ageMultiplier: 1.2
    },
    tuckpointing: {
      name: 'Chimney Tuckpointing',
      basePrice: 15,
      description: 'Price per square foot of mortar repair',
      heightMultiplier: 1.2,
      ageMultiplier: 1.15
    },
    crown: {
      name: 'Crown Repair',
      basePrice: 800,
      description: 'Fix cracks or damage in chimney crown',
      heightMultiplier: 1.15,
      ageMultiplier: 1.2
    },
    waterproofing: {
      name: 'Waterproofing Treatment',
      basePrice: 400,
      description: 'Apply waterproof sealant to prevent water damage',
      heightMultiplier: 1.1,
      ageMultiplier: 1.1
    },
    rebuild: {
      name: 'Complete Chimney Rebuild',
      basePrice: 5000,
      description: 'Full reconstruction of severely damaged chimney',
      heightMultiplier: 1.4,
      ageMultiplier: 1.3
    }
  };

  const linerTypes = {
    ceramic: {
      name: 'Ceramic/Thermocrete',
      basePrice: 3500,
      description: 'Ceramic coating that creates a seamless, insulated liner',
      benefits: [
        'Excellent for high-temperature applications',
        'Forms a seamless barrier',
        'Superior insulation properties'
      ],
      lifespan: '20-25 years'
    },
    stainless: {
      name: 'Stainless Steel',
      basePrice: 2500,
      description: 'Heavy-duty stainless steel liner system',
      benefits: [
        'Highly durable and corrosion-resistant',
        'Quick installation',
        'Suitable for all fuel types'
      ],
      lifespan: '15-20 years'
    },
    proform: {
      name: 'Proform',
      basePrice: 3000,
      description: 'Composite liner with advanced heat resistance',
      benefits: [
        'Excellent heat distribution',
        'Crack and corrosion resistant',
        'Minimal clearance required'
      ],
      lifespan: '25-30 years'
    }
  };

  const materialMultipliers = {
    brick: 1.0,
    stone: 1.2,
    metal: 0.8,
    prefab: 0.9
  };

  const severityMultipliers = {
    minor: 1.0,
    moderate: 1.5,
    major: 2.0
  };

  const calculateTotal = () => {
    if (selectedRepairs.length === 0 && !selectedLiner) return 0;

    let total = selectedRepairs.reduce((sum, repair) => {
      const repairType = repairTypes[repair as keyof typeof repairTypes];
      if (!repairType) return sum;

      let repairCost = repairType.basePrice;
      
      // Apply height multiplier
      const heightFactor = Math.pow(repairType.heightMultiplier, Math.floor(height / 10));
      repairCost *= heightFactor;

      // Apply age multiplier
      const ageFactor = Math.pow(repairType.ageMultiplier, Math.floor(chimneyAge / 20));
      repairCost *= ageFactor;

      // Apply material multiplier
      if (chimneyMaterial && materialMultipliers[chimneyMaterial as keyof typeof materialMultipliers]) {
        repairCost *= materialMultipliers[chimneyMaterial as keyof typeof materialMultipliers];
      }

      // Apply severity multiplier
      repairCost *= severityMultipliers[damageSeverity as keyof typeof severityMultipliers];

      // Special calculation for tuckpointing based on surface area
      if (repair === 'tuckpointing') {
        repairCost *= height * ((dimensions.width + dimensions.depth) * 2) / 144; // Convert to square feet
      }

      return sum + repairCost;
    }, 0);

    // Add liner cost if selected
    if (selectedLiner && linerTypes[selectedLiner as keyof typeof linerTypes]) {
      let linerCost = linerTypes[selectedLiner as keyof typeof linerTypes].basePrice;
      // Adjust liner cost based on height
      if (height > 20) {
        linerCost *= 1 + ((height - 20) * 0.05);
      }
      // Apply material multiplier to liner cost
      if (chimneyMaterial && materialMultipliers[chimneyMaterial as keyof typeof materialMultipliers]) {
        linerCost *= materialMultipliers[chimneyMaterial as keyof typeof materialMultipliers];
      }
      total += linerCost;
    }

    // Emergency service fee
    if (isEmergency) {
      total *= 1.5;
    }

    // Location adjustment
    total *= location.costIndex;

    return Math.round(total);
  };

  return (
    <div className="space-y-8">
      {/* Basic Information */}
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Chimney Material
          </label>
          <select
            value={chimneyMaterial}
            onChange={(e) => setChimneyMaterial(e.target.value)}
            className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Material</option>
            <option value="brick">Brick</option>
            <option value="stone">Stone</option>
            <option value="metal">Metal</option>
            <option value="prefab">Prefabricated</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
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
              Chimney Age (years)
            </label>
            <input
              type="number"
              value={chimneyAge}
              onChange={(e) => setChimneyAge(Number(e.target.value))}
              className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              min="0"
              max="100"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Width (inches)
            </label>
            <input
              type="number"
              value={dimensions.width}
              onChange={(e) => setDimensions({ ...dimensions, width: Number(e.target.value) })}
              className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              min="24"
              max="96"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Depth (inches)
            </label>
            <input
              type="number"
              value={dimensions.depth}
              onChange={(e) => setDimensions({ ...dimensions, depth: Number(e.target.value) })}
              className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              min="24"
              max="96"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Damage Severity
          </label>
          <select
            value={damageSeverity}
            onChange={(e) => setDamageSeverity(e.target.value)}
            className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="minor">Minor Damage</option>
            <option value="moderate">Moderate Damage</option>
            <option value="major">Major Damage</option>
          </select>
        </div>
      </div>

      {/* Location */}
      <LocationSelector
        location={location}
        onChange={setLocation}
      />

      {/* Repair Selection */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Wrench className="w-5 h-5 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-800">Select Repairs Needed</h2>
        </div>

        <div className="space-y-3">
          {Object.entries(repairTypes).map(([key, repair]) => (
            <div key={key} className="flex items-start gap-3">
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
                className="mt-1 w-4 h-4 text-blue-600 border-blue-300 rounded focus:ring-blue-500"
              />
              <label htmlFor={key} className="flex-1">
                <span className="font-medium text-gray-800">{repair.name}</span>
                <span className="block text-sm text-gray-600">{repair.description}</span>
                <span className="text-sm font-medium text-blue-600">Starting at ${repair.basePrice}</span>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Liner Selection */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Wrench className="w-5 h-5 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-800">Select Liner Type (if needed)</h2>
        </div>

        <div className="space-y-4">
          {Object.entries(linerTypes).map(([key, liner]) => (
            <div
              key={key}
              className={`p-4 rounded-lg border cursor-pointer transition-all ${
                selectedLiner === key
                  ? 'bg-blue-50 border-blue-500'
                  : 'bg-white border-blue-200 hover:border-blue-300'
              }`}
              onClick={() => setSelectedLiner(selectedLiner === key ? null : key)}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold text-gray-800">{liner.name}</h4>
                  <p className="text-sm text-gray-600">{liner.description}</p>
                </div>
                <div className="text-lg font-bold text-blue-600">
                  ${liner.basePrice}
                </div>
              </div>
              
              <div className="mt-2">
                <div className="text-sm text-gray-600 mb-1">Benefits:</div>
                <ul className="text-sm text-gray-700 space-y-1">
                  {liner.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-2 text-sm">
                  <span className="text-gray-600">Expected lifespan: </span>
                  <span className="text-gray-800">{liner.lifespan}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Service */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="emergency"
          checked={isEmergency}
          onChange={(e) => setIsEmergency(e.target.checked)}
          className="w-4 h-4 text-blue-600 border-blue-300 rounded focus:ring-blue-500"
        />
        <label htmlFor="emergency" className="text-sm font-medium text-gray-700">
          Emergency Service Required (+50%)
        </label>
      </div>

      {/* Cost Estimate */}
      {(selectedRepairs.length > 0 || selectedLiner) && (
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
              ${calculateTotal().toLocaleString()}
            </div>
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
        <p className="text-sm text-gray-600">
          * These are estimated costs and may vary based on specific conditions, materials needed, and local factors. We recommend getting a professional inspection for accurate pricing.
        </p>
      </div>
    </div>
  );
}