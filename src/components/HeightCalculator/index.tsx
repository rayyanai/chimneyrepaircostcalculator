import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowUp } from 'lucide-react';
import HeightForm from './HeightForm';
import HeightContent from './HeightContent';

export default function HeightCalculator() {
  return (
    <>
      <Helmet>
        <title>Chimney Height Calculator | Professional Height Requirements</title>
        <meta 
          name="description" 
          content="Calculate proper chimney height and estimate construction costs. Get accurate measurements based on building codes and safety requirements." 
        />
        <meta 
          name="keywords" 
          content="chimney height calculator, chimney requirements, building codes, construction costs" 
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
                    <ArrowUp className="w-8 h-8 text-blue-100" />
                    <h1 className="text-2xl font-bold">Chimney Height Calculator</h1>
                  </div>
                  <p className="mt-2 text-blue-100">Calculate proper chimney height and estimate costs</p>
                </div>

                <div className="p-8">
                  <HeightForm />
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div>
              <HeightContent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}