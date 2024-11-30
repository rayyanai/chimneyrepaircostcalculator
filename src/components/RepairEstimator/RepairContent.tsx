import React from 'react';
import { AlertTriangle, Info, Wrench, DollarSign } from 'lucide-react';

export default function RepairContent() {
  const faqs = [
    {
      question: "How much does chimney repair typically cost?",
      answer: "Chimney repair costs vary widely based on the type and extent of damage. Basic repairs like cap replacement might cost $200-$600, while major structural repairs can range from $1,000-$3,000. A complete chimney rebuild can cost between $4,000-$15,000."
    },
    {
      question: "What factors affect chimney repair costs?",
      answer: "Several factors influence repair costs: type and extent of damage, chimney height and accessibility, materials required, local labor rates, permits needed, and whether emergency service is required. Additional factors include chimney type (masonry vs. prefabricated) and regional climate conditions."
    },
    {
      question: "How often should chimneys be inspected?",
      answer: "The National Fire Protection Association recommends annual chimney inspections. However, if you use your fireplace frequently (more than 3 times per week during winter), you might need more frequent inspections. Professional inspection helps identify potential issues before they become major problems."
    },
    {
      question: "What are common signs that my chimney needs repair?",
      answer: "Common signs include: white staining on brick (efflorescence), crumbling mortar, rust on firebox or damper, cracked or missing bricks, water damage inside or around the chimney, smoke entering your home, and strong odors. Any of these signs warrant professional inspection."
    },
    {
      question: "Is DIY chimney repair recommended?",
      answer: "While minor repairs might be possible for skilled DIYers, most chimney repairs should be handled by certified professionals due to safety concerns, building codes, and the specialized knowledge required. Improper repairs can lead to serious safety hazards and more costly repairs later."
    },
    {
      question: "What is included in a chimney inspection?",
      answer: "A professional chimney inspection typically includes: visual examination of interior and exterior components, check for structural damage, assessment of flue liner condition, evaluation of mortar joints, inspection of chimney crown and cap, and verification of proper clearances from combustibles."
    },
    {
      question: "How long do chimney repairs typically last?",
      answer: "The longevity of repairs depends on the type of repair, materials used, and maintenance. Quality masonry repairs can last 15-20 years or more. Chimney caps typically last 5-10 years, while liners can last 15-25 years with proper maintenance."
    },
    {
      question: "Should I repair or replace my chimney liner?",
      answer: "This decision depends on the liner's condition and type. Minor cracks in clay liners might be repairable, but significant damage usually requires replacement. Stainless steel liners typically need replacement if damaged. A professional inspection can determine the best course of action."
    },
    {
      question: "What type of mortar is used for chimney repairs?",
      answer: "Type N mortar is commonly used for above-grade chimney repairs due to its medium strength and good workability. For areas exposed to high heat, refractory mortar is required. The specific type depends on the repair location and local building codes."
    },
    {
      question: "Are chimney repairs covered by homeowners insurance?",
      answer: "Insurance typically covers chimney damage caused by sudden events like storms or accidents. However, damage from normal wear and tear, lack of maintenance, or age-related deterioration is usually not covered. Check your specific policy for coverage details."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="space-y-8">
      {/* Add FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      {/* Introduction */}
      <section className="bg-white rounded-xl shadow-md p-6 border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Chimney Repair Costs</h2>
        <p className="text-gray-600 leading-relaxed">
          Chimney repair costs typically range from $200 to $3,000, with complex repairs reaching up to $10,000. The exact cost depends on various factors including repair type, chimney height, material, and location.
        </p>
      </section>

      {/* Cost Factors */}
      <section className="bg-white rounded-xl shadow-md p-6 border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Cost Factors</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <DollarSign className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Material Costs</h3>
              <p className="text-gray-600">Material quality and type significantly impact repair costs. Premium materials offer better durability but come at a higher initial cost.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Wrench className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Labor Costs</h3>
              <p className="text-gray-600">Professional labor typically accounts for 40-60% of total repair costs. Specialized repairs may require certified technicians.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Repairs */}
      <section className="bg-white rounded-xl shadow-md p-6 border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Common Chimney Repairs</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Crown Repair</h3>
            <p className="text-gray-600 mb-2">Cost range: $150 to $1,500</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Prevents water damage to the entire chimney structure</li>
              <li>Minor repairs involve patching and sealing</li>
              <li>Major repairs require complete crown replacement</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Flashing Repair</h3>
            <p className="text-gray-600 mb-2">Cost range: $200 to $500</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Seals the area where chimney meets roof</li>
              <li>Prevents water leaks and structural damage</li>
              <li>May include replacing damaged flashing material</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Liner Replacement</h3>
            <p className="text-gray-600 mb-2">Cost range: $2,500 to $7,000</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Essential for proper venting and safety</li>
              <li>Different materials available (stainless steel, clay, cast-in-place)</li>
              <li>Protects home from heat and combustion gases</li>
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
              <p>Regular maintenance and timely repairs are crucial for:</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Preventing dangerous chimney fires</li>
                <li>Avoiding carbon monoxide poisoning</li>
                <li>Maintaining structural integrity</li>
                <li>Ensuring proper ventilation</li>
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
                <li>Always hire certified chimney professionals</li>
                <li>Get multiple quotes for major repairs</li>
                <li>Request detailed written estimates</li>
                <li>Verify contractor insurance and licenses</li>
                <li>Keep records of all repairs and inspections</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}