import React from 'react';
import { AlertTriangle, Info, ArrowUp, DollarSign } from 'lucide-react';

export default function HeightContent() {
  const faqs = [
    {
      question: "How tall should my chimney be?",
      answer: "Generally, chimneys should extend at least 3 feet above the roof penetration point and 2 feet higher than any part of the building within 10 feet. Specific requirements may vary based on local codes and appliance type."
    },
    {
      question: "What affects chimney height requirements?",
      answer: "Key factors include building height, roof pitch, nearby structures or trees, type of heating appliance, local building codes, and draft requirements. Commercial buildings often have additional requirements."
    },
    {
      question: "Why is proper chimney height important?",
      answer: "Proper height ensures adequate draft, prevents smoke backup, reduces fire risk, improves efficiency, and complies with safety codes. It also helps prevent carbon monoxide from entering living spaces."
    },
    {
      question: "Can I extend my existing chimney?",
      answer: "Yes, chimneys can be extended using compatible materials and proper support. However, the existing structure must be evaluated to ensure it can support the additional weight and maintain proper draft."
    },
    {
      question: "How do building codes affect chimney height?",
      answer: "Building codes specify minimum height requirements, clearances from roof and structures, and safety standards. These vary by location and type of heating appliance. Always check local regulations."
    }
  ];

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section className="bg-white rounded-xl shadow-md p-6 border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Chimney Height Requirements</h2>
        <p className="text-gray-600 leading-relaxed">
          Proper chimney height is crucial for safety, efficiency, and code compliance. The right height
          ensures proper draft, reduces fire risk, and prevents smoke problems.
        </p>
      </section>

      {/* Height Requirements */}
      <section className="bg-white rounded-xl shadow-md p-6 border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Basic Height Requirements</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Minimum Standards</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>3 feet above roof penetration point</li>
              <li>2 feet higher than structures within 10 feet</li>
              <li>Clear of obstacles affecting draft</li>
              <li>Meets local building codes</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Additional Considerations</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Appliance type requirements</li>
              <li>Roof pitch adjustments</li>
              <li>Wind patterns and exposure</li>
              <li>Draft requirements</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cost Factors */}
      <section className="bg-white rounded-xl shadow-md p-6 border border-blue-200">
        <div className="flex items-center gap-2 mb-4">
          <DollarSign className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">Cost Factors</h2> </div>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Material Costs</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Brick: $100-150 per vertical foot</li>
              <li>Stone: $150-200 per vertical foot</li>
              <li>Stainless Steel: $200-250 per vertical foot</li>
              <li>Prefabricated: $175-225 per vertical foot</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Installation Factors</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Height and accessibility</li>
              <li>Complexity of installation</li>
              <li>Support requirements</li>
              <li>Local labor rates</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white rounded-xl shadow-md p-6 border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Safety Notice */}
      <section className="bg-orange-50 rounded-xl shadow-md p-6 border border-orange-200">
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-orange-800 mb-2">Important Safety Information</h3>
            <div className="text-orange-700 space-y-2">
              <p>Proper chimney height is crucial for:</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Ensuring adequate draft</li>
                <li>Preventing smoke backup</li>
                <li>Reducing fire risks</li>
                <li>Maintaining efficiency</li>
                <li>Meeting safety codes</li>
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
                <li>Get professional measurements</li>
                <li>Consider future modifications</li>
                <li>Document all specifications</li>
                <li>Schedule regular inspections</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}