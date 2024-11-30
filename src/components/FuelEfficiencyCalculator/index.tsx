import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Gauge } from 'lucide-react';
import FuelForm from './FuelForm';
import FuelContent from './FuelContent';

export default function FuelEfficiencyCalculator() {
  return (
    <>
      <Helmet>
        <title>Chimney Fuel Efficiency Calculator | Cost Savings Estimator</title>
        <meta 
          name="description" 
          content="Calculate potential cost savings and efficiency improvements for your chimney. Compare different fuel types and estimate annual savings." 
        />
        <meta 
          name="keywords" 
          content="chimney efficiency, fuel cost calculator, heating cost comparison, energy savings" 
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
                    <Gauge className="w-8 h-8 text-blue-100" />
                    <h1 className="text-2xl font-bold">Fuel Efficiency Calculator</h1>
                  </div>
                  <p className="mt-2 text-blue-100">Compare fuel types and estimate potential savings</p>
                </div>

                <div className="p-8">
                  <FuelForm />
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div>
              <FuelContent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}