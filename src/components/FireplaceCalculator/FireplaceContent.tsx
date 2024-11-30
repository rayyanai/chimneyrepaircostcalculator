import React from 'react';
import { AlertTriangle, Info, Flame, DollarSign } from 'lucide-react';

export default function FireplaceContent() {
  const faqs = [
    {
      question: "How much does a new fireplace installation cost?",
      answer: "New fireplace installations typically range from $2,000 to $10,000+, depending on type and materials. Wood-burning fireplaces cost more due to additional construction requirements, while electric units are generally less expensive."
    },
    {
      question: "What affects fireplace installation costs?",
      answer: "Key factors include: type of fireplace (wood, gas, electric), materials used, size and location, venting requirements, local building codes, permits needed, and regional labor rates."
    },
    {
      question: "Do I need a permit for fireplace installation?",
      answer: "Yes, most jurisdictions require permits for new fireplace installations or major modifications. Requirements vary by location and type of fireplace. Always check local building codes."
    },
    {
      question: "What are the most energy-efficient options?",
      answer: "Modern gas fireplaces and EPA-certified wood stoves are highly efficient. Electric fireplaces are 100% efficient at converting energy to heat, though electricity costs vary by region."
    }
  ];

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section className="bg-white rounded-xl shadow-md p-6 border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Fireplace Costs</h2>
        <p className="text-gray-600 leading-relaxed">
          Fireplace costs vary significantly based on type, style, and regional factors. Our calculator
          provides accurate estimates based on current U.S. market rates and local requirements.
        </p>
      </section>

      {/* Types Comparison */}
      <section className="bg-white rounded-xl shadow-md p-6 border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Fireplace Types</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Wood-Burning</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Traditional ambiance and heat output</li>
              <li>Requires proper ventilation and chimney</li>
              <li>Higher installation costs</li>
              <li>Regular maintenance needed</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Gas</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Convenient operation and clean burning</li>
              <li>Lower maintenance requirements</li>
              <li>Moderate installation costs</li>
              <li>Various style options available</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Electric</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>No venting required</li>
              <li>Lowest installation costs</li>
              <li>Easy installation and maintenance</li>
              <li>Safe for any room</li>
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
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Installation Costs</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Labor rates by region</li>
              <li>Permit and inspection fees</li>
              <li>Venting requirements</li>
              <li>Material quality and type</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Additional Considerations</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Energy efficiency ratings</li>
              <li>Available rebates and incentives</li>
              <li>Maintenance requirements</li>
              <li>Fuel availability and costs</li>
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
              <p>Always consider:</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Local building codes and permits</li>
                <li>Professional installation requirements</li>
                <li>Proper ventilation needs</li>
                <li>Regular maintenance schedule</li>
                <li>Safety certifications</li>
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
                <li>Get multiple quotes from certified professionals</li>
                <li>Verify contractor licenses and insurance</li>
                <li>Review energy efficiency ratings</li>
                <li>Consider long-term maintenance costs</li>
                <li>Check warranty coverage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}