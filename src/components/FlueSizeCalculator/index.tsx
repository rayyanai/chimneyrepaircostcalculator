import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Ruler } from 'lucide-react';
import FlueForm from './FlueForm';
import FlueContent from './FlueContent';

export default function FlueSizeCalculator() {
  return (
    <>
      <Helmet>
        <title>Chimney Flue Size Calculator | Professional Sizing Guide</title>
        <meta 
          name="description" 
          content="Calculate the correct chimney flue size for your fireplace. Get accurate dimensions based on fireplace size, type, and professional guidelines." 
        />
        <meta 
          name="keywords" 
          content="chimney flue calculator, flue sizing, chimney dimensions, fireplace flue" 
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
                    <Ruler className="w-8 h-8 text-blue-100" />
                    <h1 className="text-2xl font-bold">Chimney Flue Size Calculator</h1>
                  </div>
                  <p className="mt-2 text-blue-100">Get the right flue size for optimal draft and safety</p>
                </div>

                <div className="p-8">
                  <FlueForm />
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div>
              <FlueContent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}