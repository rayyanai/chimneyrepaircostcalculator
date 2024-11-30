import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Flame } from 'lucide-react';
import FireplaceForm from './FireplaceForm';
import FireplaceContent from './FireplaceContent';

export default function FireplaceCalculator() {
  return (
    <>
      <Helmet>
        <title>Fireplace Insert & Repair Cost Calculator | Professional Estimates</title>
        <meta 
          name="description" 
          content="Calculate costs for fireplace inserts, repairs, and new installations. Get accurate estimates based on U.S. standards and local requirements." 
        />
        <meta 
          name="keywords" 
          content="fireplace calculator, insert costs, repair estimate, installation costs, US building codes" 
        />
      </Helmet>

      <div className="min-h-screen bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Column */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl border border-blue-200 overflow-hidden">
                <div className="bg-blue-600 p-6 text-white">
                  <div className="flex items-center gap-3">
                    <Flame className="w-8 h-8 text-blue-100" />
                    <h1 className="text-2xl font-bold">Fireplace Cost Calculator</h1>
                  </div>
                  <p className="mt-2 text-blue-100">Get accurate estimates for fireplace projects</p>
                </div>

                <div className="p-8">
                  <FireplaceForm />
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:mt-0 mt-8">
              <FireplaceContent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}