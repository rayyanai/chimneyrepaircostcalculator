import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Layers } from 'lucide-react';
import LiningForm from './LiningForm';
import LiningContent from './LiningContent';

export default function LiningCalculator() {
  return (
    <>
      <Helmet>
        <title>Chimney Liner Cost Calculator | Professional Estimates</title>
        <meta 
          name="description" 
          content="Calculate chimney liner costs with our professional estimator. Get accurate estimates based on liner type, dimensions, and installation requirements." 
        />
        <meta 
          name="keywords" 
          content="chimney liner cost, liner calculator, relining estimate, chimney restoration" 
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Column */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl border border-blue-200 overflow-hidden">
                <div className="bg-blue-600 p-6 text-white">
                  <div className="flex items-center gap-3">
                    <Layers className="w-8 h-8 text-blue-100" />
                    <h1 className="text-2xl font-bold">Chimney Liner Calculator</h1>
                  </div>
                  <p className="mt-2 text-blue-100">Get accurate estimates for chimney liner installation</p>
                </div>

                <div className="p-8">
                  <LiningForm />
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div>
              <LiningContent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}