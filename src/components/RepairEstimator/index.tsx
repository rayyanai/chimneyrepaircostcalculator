import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wrench } from 'lucide-react';
import RepairForm from './RepairForm';
import RepairContent from './RepairContent';

export default function RepairEstimator() {
  return (
    <>
      <Helmet>
        <title>Chimney Repair Cost Calculator | Professional Repair Estimates</title>
        <meta 
          name="description" 
          content="Calculate accurate chimney repair costs with our professional estimator. Get instant estimates based on your location, repair type, and chimney specifications." 
        />
        <meta 
          name="keywords" 
          content="chimney repair calculator, repair cost estimator, chimney maintenance cost, chimney repair guide" 
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Column */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl border border-blue-200 overflow-hidden h-full">
                <div className="bg-blue-600 p-6 text-white">
                  <div className="flex items-center gap-3">
                    <Wrench className="w-8 h-8 text-blue-100" />
                    <h1 className="text-2xl font-bold">Chimney Repair Cost Calculator</h1>
                  </div>
                  <p className="mt-2 text-blue-100">Get accurate estimates for your chimney repairs</p>
                </div>

                <div className="p-8">
                  <RepairForm />
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div>
              <RepairContent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}