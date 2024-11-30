import React from 'react';
import { AlertTriangle, Info, Flame } from 'lucide-react';

export default function CreosoteContent() {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section className="bg-white rounded-xl shadow-md p-6 border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Creosote Buildup</h2>
        <p className="text-gray-600 leading-relaxed">
          Creosote is a highly flammable substance that builds up in chimneys over time. Regular assessment and cleaning are essential for preventing chimney fires and ensuring safe operation of your fireplace.
        </p>
      </section>

      {/* Risk Factors */}
      <section className="bg-white rounded-xl shadow-md p-6 border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Risk Factors</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <Flame className="w-6 h-6 text-orange-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Fuel Type</h3>
              <p className="text-gray-600">Different fuels produce varying amounts of creosote. Wood, especially when burned improperly, creates the most buildup.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Flame className="w-6 h-6 text-orange-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Burning Practices</h3>
              <p className="text-gray-600">Slow, smoldering fires and wet wood contribute significantly to creosote accumulation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Notice */}
      <section className="bg-orange-50 rounded-xl shadow-md p-6 border border-orange-200">
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-orange-800 mb-2">Important Safety Information</h3>
            <div className="text-orange-700 space-y-2">
              <p>High creosote levels can lead to:</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Dangerous chimney fires</li>
                <li>Reduced draft efficiency</li>
                <li>Carbon monoxide hazards</li>
                <li>Structural damage to the chimney</li>
                <li>Expensive repairs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Advice */}
      <section className="bg-blue-50 rounded-xl shadow-md p-6 border border-blue-200">
        <div className="flex items-start gap-4">
          <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Professional Recommendations</h3>
            <div className="text-blue-700 space-y-2">
              <ul className="list-disc ml-5 space-y-1">
                <li>Schedule annual professional inspections</li>
                <li>Use only well-seasoned firewood</li>
                <li>Maintain proper draft conditions</li>
                <li>Install a chimney cap</li>
                <li>Keep detailed maintenance records</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}