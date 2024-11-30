import React, { useState } from 'react';
import { AlertTriangle, Info } from 'lucide-react';

interface CreosoteEstimate {
  buildupLevel: 'low' | 'moderate' | 'high';
  riskLevel: 'safe' | 'caution' | 'high risk';
  recommendations: string[];
}

export default function ChimneyGuide() {
  const [formData, setFormData] = useState({
    fuelType: '',
    frequency: '',
    woodType: '',
    moistureContent: '',
    cleaningFrequency: '',
    chimneyType: '',
    ventilation: '',
  });

  const calculateCreosoteRisk = (): CreosoteEstimate => {
    let riskScore = 0;

    // Fuel type assessment
    if (formData.fuelType === 'wood') riskScore += 3;
    if (formData.fuelType === 'coal') riskScore += 2;

    // Usage frequency assessment
    if (formData.frequency === 'daily') riskScore += 3;
    if (formData.frequency === 'weekly') riskScore += 2;

    // Wood type assessment
    if (formData.woodType === 'softwood') riskScore += 2;

    // Moisture content assessment
    if (formData.moistureContent === 'wet') riskScore += 3;

    // Cleaning frequency assessment
    if (formData.cleaningFrequency === 'rarely') riskScore += 3;

    // Ventilation assessment
    if (formData.ventilation === 'poor') riskScore += 2;

    const buildupLevel = riskScore <= 5 ? 'low' : riskScore <= 10 ? 'moderate' : 'high';
    const riskLevel = riskScore <= 5 ? 'safe' : riskScore <= 10 ? 'caution' : 'high risk';

    const recommendations = [
      'Schedule regular professional inspections',
      'Use only well-seasoned wood',
      'Ensure proper ventilation',
      'Consider installing a chimney cap',
    ];

    return { buildupLevel, riskLevel, recommendations };
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const estimate = calculateCreosoteRisk();

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-blue-200 overflow-hidden">
      <div className="bg-blue-600 p-6 text-white">
        <h2 className="text-2xl font-bold">Creosote Buildup Estimator</h2>
        <p className="mt-2 text-blue-100">Assess your chimney's creosote buildup risk</p>
      </div>

      <div className="p-8 space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type of Fuel Used
            </label>
            <select
              name="fuelType"
              value={formData.fuelType}
              onChange={handleInputChange}
              className="w-full rounded-md border border-gray-300 p-2"
            >
              <option value="">Select fuel type</option>
              <option value="wood">Wood</option>
              <option value="coal">Coal</option>
              <option value="gas">Gas</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Frequency of Use
            </label>
            <select
              name="frequency"
              value={formData.frequency}
              onChange={handleInputChange}
              className="w-full rounded-md border border-gray-300 p-2"
            >
              <option value="">Select frequency</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="occasionally">Occasionally</option>
              <option value="seasonally">Seasonally</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type of Wood
            </label>
            <select
              name="woodType"
              value={formData.woodType}
              onChange={handleInputChange}
              className="w-full rounded-md border border-gray-300 p-2"
            >
              <option value="">Select wood type</option>
              <option value="hardwood">Hardwood (Oak, Maple)</option>
              <option value="softwood">Softwood (Pine, Fir)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Wood Moisture Content
            </label>
            <select
              name="moistureContent"
              value={formData.moistureContent}
              onChange={handleInputChange}
              className="w-full rounded-md border border-gray-300 p-2"
            >
              <option value="">Select moisture level</option>
              <option value="seasoned">Well-seasoned</option>
              <option value="wet">Wet</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cleaning Frequency
            </label>
            <select
              name="cleaningFrequency"
              value={formData.cleaningFrequency}
              onChange={handleInputChange}
              className="w-full rounded-md border border-gray-300 p-2"
            >
              <option value="">Select cleaning frequency</option>
              <option value="annually">Annually</option>
              <option value="rarely">Rarely</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ventilation Quality
            </label>
            <select
              name="ventilation"
              value={formData.ventilation}
              onChange={handleInputChange}
              className="w-full rounded-md border border-gray-300 p-2"
            >
              <option value="">Select ventilation quality</option>
              <option value="good">Good</option>
              <option value="average">Average</option>
              <option value="poor">Poor</option>
            </select>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Estimation Results</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium">Estimated Creosote Buildup Level:</p>
                <p className={`text-lg font-bold ${
                  estimate.buildupLevel === 'high' ? 'text-red-600' :
                  estimate.buildupLevel === 'moderate' ? 'text-yellow-600' :
                  'text-green-600'
                }`}>
                  {estimate.buildupLevel.toUpperCase()}
                </p>
              </div>
              
              <div>
                <p className="font-medium">Risk Level:</p>
                <p className={`text-lg font-bold ${
                  estimate.riskLevel === 'high risk' ? 'text-red-600' :
                  estimate.riskLevel === 'caution' ? 'text-yellow-600' :
                  'text-green-600'
                }`}>
                  {estimate.riskLevel.toUpperCase()}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Recommendations</h3>
                <ul className="list-disc ml-5 space-y-2 text-blue-700">
                  {estimate.recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-orange-800 mb-2">Safety Notice</h3>
                <p className="text-orange-700">
                  This is an estimation tool only. Regular professional inspections are essential for maintaining chimney safety. Contact a certified chimney sweep for accurate assessment and cleaning services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}