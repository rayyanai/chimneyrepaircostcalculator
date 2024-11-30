import React from 'react';
import { AlertTriangle, Info, Ruler, DollarSign } from 'lucide-react';

export default function FlueContent() {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section className="bg-white rounded-xl shadow-md p-6 border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Flue Sizing</h2>
        <p className="text-gray-600 leading-relaxed">
          Proper flue sizing is crucial for optimal fireplace performance and safety. A correctly sized
          flue ensures proper draft, efficient burning, and prevents dangerous conditions like smoke
          backup and creosote buildup.
        </p>
      </section>

      {/* Material Types */}
      <section className="bg-white rounded-xl shadow-md p-6 border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Flue Materials</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Clay/Ceramic Liner</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Traditional and cost-effective option</li>
              <li>Excellent heat resistance</li>
              <li>Long lifespan (50+ years)</li>
              <li>Best for new masonry chimneys</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Stainless Steel</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Versatile and durable</li>
              <li>Suitable for all fuel types</li>
              <li>Easy installation</li>
              <li>Ideal for repairs and retrofits</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Aluminum</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Economical choice for gas appliances</li>
              <li>Lightweight and easy to install</li>
              <li>Not suitable for wood or coal</li>
              <li>Shorter lifespan than other options</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cost Factors */}
      <section className="bg-white rounded-xl shadow-md p-6 border border-blue-200">
        <div className="flex items-center gap-2 mb-4">
          <DollarSign className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">Cost Factors</h2>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Material Costs</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Clay liners: $15-30 per inch of diameter per foot</li>
              <li>Stainless steel: $25-45 per inch of diameter per foot</li>
              <li>Aluminum: $20-35 per inch of diameter per foot</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Installation Factors</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Chimney height and accessibility</li>
              <li>Removal of existing liner if needed</li>
              <li>Additional materials (insulation, connections)</li>
              <li>Local labor rates and permits</li>
            </ul>
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
              <p>Proper flue sizing is critical for:</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Preventing dangerous smoke backup</li>
                <li>Ensuring complete combustion</li>
                <li>Minimizing creosote buildup</li>
                <li>Maintaining proper draft</li>
                <li>Avoiding carbon monoxide hazards</li>
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
                <li>Always consult local building codes</li>
                <li>Verify calculations with a certified professional</li>
                <li>Consider climate and altitude factors</li>
                <li>Account for future fuel type changes</li>
                <li>Document all specifications for future reference</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}