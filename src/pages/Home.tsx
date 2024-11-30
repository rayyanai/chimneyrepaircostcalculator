import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calculator, Flame, Ruler, Brush, Building, Wrench, Settings, Layers, ArrowUp, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const calculators = [
    {
      title: 'Building Calculator',
      description: 'Calculate chimney construction costs',
      icon: Building,
      path: '/building-calculator'
    },
    {
      title: 'Repair Calculator',
      description: 'Estimate repair and maintenance costs',
      icon: Wrench,
      path: '/repair-calculator'
    },
    {
      title: 'Creosote Estimator',
      description: 'Assess creosote buildup risk',
      icon: Flame,
      path: '/creosote-estimator'
    },
    {
      title: 'Maintenance Calculator',
      description: 'Plan annual maintenance costs',
      icon: Settings,
      path: '/maintenance-estimator'
    },
    {
      title: 'Flue Calculator',
      description: 'Determine optimal flue size',
      icon: Ruler,
      path: '/flue-calculator'
    },
    {
      title: 'Cleaning Calculator',
      description: 'Estimate cleaning service costs',
      icon: Brush,
      path: '/cleaning-calculator'
    },
    {
      title: 'Lining Calculator',
      description: 'Calculate chimney liner costs',
      icon: Layers,
      path: '/lining-calculator'
    },
    {
      title: 'Height Calculator',
      description: 'Determine proper chimney height',
      icon: ArrowUp,
      path: '/height-calculator'
    },
    {
      title: 'Fireplace Calculator',
      description: 'Estimate fireplace costs and repairs',
      icon: Flame,
      path: '/fireplace-calculator'
    }
  ];

  const faqs = [
    {
      question: "How accurate are these calculators?",
      answer: "Our calculators provide professional-grade estimates based on industry standards and current market rates. However, final costs may vary based on local factors and specific conditions."
    },
    {
      question: "Do I still need a professional inspection?",
      answer: "Yes. While our calculators provide accurate estimates, a professional inspection is always recommended for final assessments and safety verification."
    },
    {
      question: "How often should I have my chimney serviced?",
      answer: "The National Fire Protection Association recommends annual inspections and cleaning. However, frequency may increase based on usage and fuel type."
    },
    {
      question: "What factors affect chimney maintenance costs?",
      answer: "Key factors include chimney type, age, condition, height, location, and usage frequency. Additional factors include local labor rates and material costs."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Chimney Service Calculators | Professional Chimney Calculators</title>
        <meta 
          name="description" 
          content="Professional chimney calculators for accurate estimates and assessments" 
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Professional Chimney Service Calculators
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get accurate estimates and assessments for your chimney projects with our comprehensive suite of professional calculators - By <a href="https://approvedchimney.com" className="text-blue-600 hover:text-blue-700">Approved Chimney LLC</a>
            </p>
          </div>

          {/* Calculator Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {calculators.map((calc, index) => (
              <Link
                key={index}
                to={calc.path}
                className="bg-white rounded-xl shadow-md p-6 border border-blue-200 hover:border-blue-400 transition-colors"
              >
                <div className="flex flex-col items-center text-center">
                  <calc.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{calc.title}</h2>
                  <p className="text-gray-600">{calc.description}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Features Section */}
          <div className="bg-white rounded-xl shadow-md border border-blue-200 p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Why Use Our Calculators?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Professional Accuracy</h3>
                <p className="text-gray-600">
                  Based on industry standards and professional guidelines for reliable estimates.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Comprehensive Tools</h3>
                <p className="text-gray-600">
                  Cover all aspects of chimney service from repairs to maintenance.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Easy to Use</h3>
                <p className="text-gray-600">
                  Simple interface with detailed results and recommendations.
                </p>
              </div>
            </div>
          </div>

          {/* FAQs Section */}
          <div className="bg-white rounded-xl shadow-md border border-blue-200 p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Safety Notice */}
          <div className="bg-orange-50 rounded-xl shadow-md border border-orange-200 p-6 mb-16">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-orange-800 mb-2">Important Safety Notice</h3>
                <p className="text-orange-700">
                  While our calculators provide accurate estimates, always consult with certified professionals for final assessments and safety inspections. Regular maintenance and inspections are crucial for chimney safety.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-8">
              Choose a calculator above to begin your chimney service estimation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}