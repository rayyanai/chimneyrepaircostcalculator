import React from 'react';
import { Helmet } from 'react-helmet-async';
import { HardHat } from 'lucide-react';
import BuildingForm from './BuildingForm';
import BuildingContent from './BuildingContent';

export default function BuildingCalculator() {
  return (
    <>
      <Helmet>
        <title>Chimney Building & Restoration Cost Calculator | Professional Estimates</title>
        <meta 
          name="description" 
          content="Calculate accurate costs for chimney building and restoration projects. Get detailed estimates based on materials, size, and specifications." 
        />
        <meta 
          name="keywords" 
          content="chimney building cost, chimney restoration, masonry calculator, chimney construction estimate" 
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
                    <HardHat className="w-8 h-8 text-blue-100" />
                    <h1 className="text-2xl font-bold">Chimney Building & Restoration Calculator</h1>
                  </div>
                  <p className="mt-2 text-blue-100">Get detailed cost estimates for your project</p>
                </div>

                <div className="p-8">
                  <BuildingForm />
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div>
              <BuildingContent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}