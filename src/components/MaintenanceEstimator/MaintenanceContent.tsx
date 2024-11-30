import React from 'react';
import { AlertTriangle, Info, Settings, DollarSign } from 'lucide-react';

export default function MaintenanceContent() {
  const faqs = [
    {
      question: "How often should I have my chimney inspected?",
      answer: "The National Fire Protection Association recommends annual chimney inspections. However, if you use your fireplace frequently (more than 3 times per week during winter), you might need more frequent inspections."
    },
    {
      question: "What's included in annual chimney maintenance?",
      answer: "Annual maintenance typically includes inspection of all components, cleaning (sweeping), checking for creosote buildup, assessing structural integrity, and minor repairs if needed. Additional services may include waterproofing, cap replacement, or crown sealing."
    },
    {
      question: "How much does annual chimney maintenance cost?",
      answer: "Basic annual maintenance, including inspection and cleaning, typically costs between $200-$500. Additional services like waterproofing ($300-$500), cap replacement ($200-$600), or minor repairs can increase the total cost."
    },
    {
      question: "What factors affect maintenance costs?",
      answer: "Several factors influence maintenance costs: chimney type (masonry, metal, or prefab), height, age, usage frequency, location, and any additional services needed. The condition of your chimney and local labor rates also impact costs."
    },
    {
      question: "Can I do chimney maintenance myself?",
      answer: "While some basic maintenance tasks can be done by homeowners, professional inspection and cleaning are recommended for safety and thoroughness. Certified chimney sweeps have the proper tools and expertise to identify potential issues."
    },
    {
      question: "What are signs that my chimney needs maintenance?",
      answer: "Common signs include: difficulty starting fires, poor draft, smoke entering the home, white staining on exterior bricks, rust on damper or firebox, and crumbling mortar. Any of these signs warrant professional inspection."
    },
    {
      question: "Is chimney maintenance really necessary?",
      answer: "Yes, regular maintenance is crucial for safety and efficiency. It helps prevent chimney fires, carbon monoxide hazards, and structural damage. Proper maintenance can also extend your chimney's lifespan and prevent costly repairs."
    },
    {
      question: "What's the difference between inspection levels?",
      answer: "Level 1 inspections are basic visual checks for obvious issues. Level 2 inspections are more thorough, using cameras to examine the flue interior, and are required when selling a home or after events like storms. Level 3 inspections involve partial demolition to access hidden areas."
    },
    {
      question: "How can I reduce maintenance costs?",
      answer: "Regular use of dry, seasoned wood, proper damper operation, and addressing minor issues promptly can help reduce maintenance costs. Installing a quality chimney cap and maintaining good ventilation also help prevent expensive problems."
    },
    {
      question: "Should I get a maintenance contract?",
      answer: "Annual maintenance contracts can be cost-effective, often including priority service and discounts on repairs. They help ensure regular maintenance isn't overlooked and can include benefits like free emergency inspections."
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
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Chimney Maintenance Costs</h2>
        <p className="text-gray-600 leading-relaxed">
          Regular chimney maintenance is crucial for safety and efficiency. Annual costs typically range from $200 to $800, depending on your chimney type, condition, and additional services needed.
        </p>
      </section>

      {/* Cost Factors */}
      <section className="bg-white rounded-xl shadow-md p-6 border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Cost Factors</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <DollarSign className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Basic Services</h3>
              <p className="text-gray-600">Annual inspection and cleaning costs vary by chimney type and condition. More frequent use may require additional cleanings.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Settings className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Additional Services</h3>
              <p className="text-gray-600">Waterproofing, cap replacement, and minor repairs add to annual maintenance costs but help prevent expensive problems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="bg-white rounded-xl shadow-md p-6 border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Maintenance Services</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Annual Inspection</h3>
            <p className="text-gray-600 mb-2">Cost range: $100 to $300</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Visual inspection of all components</li>
              <li>Assessment of structural integrity</li>
              <li>Check for creosote buildup</li>
              <li>Identification of potential issues</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Chimney Cleaning</h3>
            <p className="text-gray-600 mb-2">Cost range: $150 to $300</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Removal of creosote and debris</li>
              <li>Cleaning of firebox and damper</li>
              <li>Inspection of flue liner</li>
              <li>Basic maintenance recommendations</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Preventive Services</h3>
            <p className="text-gray-600 mb-2">Cost range: $200 to $500 per service</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Waterproofing treatments</li>
              <li>Cap installation or replacement</li>
              <li>Crown sealing</li>
              <li>Minor masonry repairs</li>
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
              <p>Regular maintenance is essential for:</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Preventing dangerous chimney fires</li>
                <li>Avoiding carbon monoxide hazards</li>
                <li>Maintaining proper draft</li>
                <li>Extending chimney lifespan</li>
                <li>Preventing costly repairs</li>
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
                <li>Schedule annual inspections before heating season</li>
                <li>Keep detailed maintenance records</li>
                <li>Address minor issues promptly</li>
                <li>Consider a maintenance contract for cost savings</li>
                <li>Work only with certified professionals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}