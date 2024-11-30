import React from 'react';
import { AlertTriangle, Info, Brush, DollarSign } from 'lucide-react';

export default function CleaningContent() {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section className="bg-white rounded-xl shadow-md p-6 border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Chimney Cleaning Costs</h2>
        <p className="text-gray-600 leading-relaxed">
          Regular chimney cleaning is essential for safety and efficiency. Costs typically range from
          $150 to $500, depending on various factors including chimney type, condition, and location.
        </p>
      </section>

      {/* Cost Factors */}
      <section className="bg-white rounded-xl shadow-md p-6 border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Cost Factors</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <DollarSign className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Base Cleaning</h3>
              <p className="text-gray-600">Includes standard cleaning and basic inspection. Price varies by chimney type and accessibility.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Brush className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Additional Services</h3>
              <p className="text-gray-600">Optional services like detailed inspection, smoke tests, and minor repairs add to the total cost.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="bg-white rounded-xl shadow-md p-6 border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Service Options</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Standard Cleaning</h3>
            <p className="text-gray-600 mb-2">Cost range: $150-$300</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Removal of soot and creosote</li>
              <li>Basic visual inspection</li>
              <li>Cleaning of firebox and damper</li>
              <li>Basic maintenance recommendations</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Professional Inspection</h3>
            <p className="text-gray-600 mb-2">Cost range: $100-$200</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Detailed component examination</li>
              <li>Video inspection if needed</li>
              <li>Written condition report</li>
              <li>Safety recommendations</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Additional Services</h3>
            <p className="text-gray-600 mb-2">Cost range: $75-$500 per service</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Smoke and draft testing</li>
              <li>Cap cleaning and repair</li>
              <li>Minor masonry repairs</li>
              <li>Waterproofing treatment</li>
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
              <p>Regular cleaning is crucial for:</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Preventing chimney fires</li>
                <li>Ensuring proper ventilation</li>
                <li>Reducing carbon monoxide risks</li>
                <li>Maintaining efficiency</li>
                <li>Extending chimney lifespan</li>
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
                <li>Schedule annual inspections and cleaning</li>
                <li>Use certified chimney sweeps</li>
                <li>Keep detailed maintenance records</li>
                <li>Address issues promptly</li>
                <li>Follow safety guidelines and codes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}