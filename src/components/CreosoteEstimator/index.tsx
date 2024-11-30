import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Flame } from 'lucide-react';
import CreosoteForm from './CreosoteForm';
import CreosoteContent from './CreosoteContent';

export default function CreosoteEstimator() {
  return (
    <>
      <Helmet>
        <title>Chimney Creosote Buildup Estimator | Risk Assessment Tool</title>
        <meta 
          name="description" 
          content="Assess your chimney's creosote buildup risk with our professional estimator. Get personalized recommendations based on your fireplace usage and maintenance." 
        />
        <meta 
          name="keywords" 
          content="creosote buildup, chimney fire risk, chimney safety, creosote assessment" 
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
                    <Flame className="w-8 h-8 text-blue-100" />
                    <h1 className="text-2xl font-bold">Creosote Buildup Estimator</h1>
                  </div>
                  <p className="mt-2 text-blue-100">Assess your chimney's creosote buildup risk</p>
                </div>

                <div className="p-8">
                  <CreosoteForm />
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div>
              <CreosoteContent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}