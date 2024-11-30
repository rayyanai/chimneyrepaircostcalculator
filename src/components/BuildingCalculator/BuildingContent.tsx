import React from 'react';
import { AlertTriangle, Info, Wrench, DollarSign } from 'lucide-react';

export default function BuildingContent() {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section className="bg-white rounded-xl shadow-md p-6 border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Chimney Building Costs</h2>
        <p className="text-gray-600 leading-relaxed">
          Building or restoring a chimney is a significant investment that typically ranges from $5,000 to $25,000. The exact cost depends on various factors including size, materials, design complexity, and location.
        </p>
      </section>

      {/* Cost Factors */}
      <section className="bg-white rounded-xl shadow-md p-6 border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Cost Factors</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <DollarSign className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Material Selection</h3>
              <p className="text-gray-600">Choice of materials significantly impacts cost. Natural stone is typically most expensive, followed by brick, with concrete block being most economical.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Wrench className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Construction Complexity</h3>
              <p className="text-gray-600">Design features, height requirements, and additional components like caps and liners affect overall costs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Material Types */}
      <section className="bg-white rounded-xl shadow-md p-6 border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Material Options</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Brick Construction</h3>
            <p className="text-gray-600 mb-2">Cost range: $100-$200 per square foot</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Traditional appearance and proven durability</li>
              <li>Excellent heat resistance and longevity</li>
              <li>Multiple style and color options</li>
              <li>Good value for long-term investment</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Natural Stone</h3>
            <p className="text-gray-600 mb-2">Cost range: $150-$300 per square foot</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Premium appearance and unique character</li>
              <li>Exceptional durability and weather resistance</li>
              <li>Various stone types and patterns available</li>
              <li>Highest initial cost but excellent resale value</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Concrete Block</h3>
            <p className="text-gray-600 mb-2">Cost range: $75-$150 per square foot</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Most economical building option</li>
              <li>Quick installation and good durability</li>
              <li>Can be faced with brick or stone veneer</li>
              <li>Ideal for budget-conscious projects</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Safety Notice */}
      <section className="bg-orange-50 rounded-xl shadow-md p-6 border border-orange-200">
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-orange-800 mb-2">Important Construction Considerations</h3>
            <div className="text-orange-700 space-y-2">
              <p>Proper chimney construction is crucial for:</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Ensuring structural integrity and safety</li>
                <li>Meeting local building codes and regulations</li>
                <li>Proper ventilation and draft</li>
                <li>Long-term durability and performance</li>
                <li>Fire prevention and home safety</li>
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
                <li>Always work with licensed and insured contractors</li>
                <li>Obtain necessary building permits</li>
                <li>Request detailed written proposals</li>
                <li>Verify contractor references and past work</li>
                <li>Ensure compliance with local building codes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}