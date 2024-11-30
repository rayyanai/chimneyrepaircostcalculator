import React from 'react';
import { AlertTriangle, Info, Layers, DollarSign } from 'lucide-react';

export default function LiningContent() {
  const faqs = [
    {
      question: "How long do chimney liners last?",
      answer: "Lifespan varies by material: stainless steel (20-25 years), clay tile (50+ years), cast-in-place (50+ years), aluminum (10-15 years), and composite liners (25-30 years). Proper maintenance can extend these lifespans."
    },
    {
      question: "Do I need to reline my chimney?",
      answer: "Relining may be necessary if: your existing liner is damaged, you're changing fuel types, installing a new appliance, or your chimney has no liner. A professional inspection can determine if relining is needed."
    },
    {
      question: "Which liner type is best?",
      answer: "The best liner depends on your specific needs. Stainless steel is versatile and durable, clay is traditional and long-lasting, while newer options like ProForm and FuranFlex offer unique benefits for specific applications."
    },
    {
      question: "What affects liner installation costs?",
      answer: "Key factors include: chimney height and diameter, liner material, installation complexity (bends/offsets), chimney condition, local labor rates, and whether additional repairs are needed."
    },
    {
      question: "Is professional installation required?",
      answer: "Yes, professional installation is strongly recommended and often required by code. Proper installation is crucial for safety and performance, and improper installation can create serious hazards."
    }
  ];

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section className="bg-white rounded-xl shadow-md p-6 border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Chimney Liners</h2>
        <p className="text-gray-600 leading-relaxed">
          Chimney liners are essential for safety and efficiency. They protect your home's structure,
          improve draft, and ensure proper venting of combustion gases. Choosing the right liner and
          proper installation are crucial for long-term performance.
        </p>
      </section>

      {/* Liner Types */}
      <section className="bg-white rounded-xl shadow-md p-6 border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Liner Types</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Stainless Steel</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Versatile and durable</li>
              <li>Suitable for all fuel types</li>
              <li>Easy installation</li>
              <li>20+ year lifespan</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Clay Tile</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Traditional and long-lasting</li>
              <li>Excellent heat resistance</li>
              <li>Cost-effective</li>
              <li>50+ year lifespan</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Modern Solutions</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>ProForm: Ideal for gas/oil appliances</li>
              <li>FuranFlex: Flexible and corrosion-resistant</li>
              <li>Thermocrete: Excellent for restoration</li>
              <li>Cast-in-place: Custom fit solution</li>
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
              <li>Stainless steel: $30-70 per foot</li>
              <li>Clay tile: $20-40 per foot</li>
              <li>Cast-in-place: $60-100 per foot</li>
              <li>Premium solutions: $70-120 per foot</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Installation Factors</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Chimney height and diameter</li>
              <li>Installation complexity</li>
              <li>Additional materials needed</li>
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
              <p>Proper chimney lining is crucial for:</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Preventing carbon monoxide leakage</li>
                <li>Protecting your home's structure</li>
                <li>Ensuring proper draft</li>
                <li>Meeting building codes</li>
                <li>Maintaining appliance efficiency</li>
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
                <li>Always get a professional inspection first</li>
                <li>Choose certified installers</li>
                <li>Verify warranty coverage</li>
                <li>Maintain documentation of installation</li>
                <li>Schedule regular inspections</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}