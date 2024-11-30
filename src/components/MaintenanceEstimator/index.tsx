import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Settings } from 'lucide-react';
import MaintenanceForm from './MaintenanceForm';
import MaintenanceContent from './MaintenanceContent';

export default function MaintenanceEstimator() {
  return (
    <>
      <Helmet>
        <title>Annual Chimney Maintenance Cost Calculator | Professional Estimates</title>
        <meta 
          name="description" 
          content="Calculate your annual chimney maintenance costs with our professional estimator. Get detailed estimates for inspections, cleaning, and preventive maintenance." 
        />
        <meta 
          name="keywords" 
          content="chimney maintenance cost, annual inspection cost, chimney cleaning estimate, preventive maintenance" 
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
                    <Settings className="w-8 h-8 text-blue-100" />
                    <h1 className="text-2xl font-bold">Annual Maintenance Cost Calculator</h1>
                  </div>
                  <p className="mt-2 text-blue-100">Estimate your yearly chimney maintenance costs</p>
                </div>

                <div className="p-8">
                  <MaintenanceForm />
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div>
              <MaintenanceContent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}