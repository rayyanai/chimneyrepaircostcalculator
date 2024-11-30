import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brush } from 'lucide-react';
import CleaningForm from './CleaningForm';
import CleaningContent from './CleaningContent';

export default function CleaningCalculator() {
  return (
    <>
      <Helmet>
        <title>Chimney Sweep & Cleaning Cost Calculator | Professional Estimates</title>
        <meta 
          name="description" 
          content="Calculate chimney cleaning and sweep costs with our professional estimator. Get accurate estimates based on chimney type, condition, and location." 
        />
        <meta 
          name="keywords" 
          content="chimney cleaning cost, chimney sweep estimate, cleaning calculator, chimney maintenance" 
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
                    <Brush className="w-8 h-8 text-blue-100" />
                    <h1 className="text-2xl font-bold">Chimney Sweep & Cleaning Calculator</h1>
                  </div>
                  <p className="mt-2 text-blue-100">Get accurate estimates for professional chimney cleaning</p>
                </div>

                <div className="p-8">
                  <CleaningForm />
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div>
              <CleaningContent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}