import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Info, Shield, Calculator, Award } from 'lucide-react';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Chimney Service Calculators | Professional Chimney Calculators</title>
        <meta 
          name="description" 
          content="Learn about Chimney Service Calculators' comprehensive suite of professional chimney calculators and our commitment to safety and accuracy." 
        />
      </Helmet>

      <div className="min-h-screen bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              About Chimney Service Calculators
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional calculators for accurate chimney estimates and assessments by Approved Chimney LLC
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <Calculator className="w-8 h-8 text-blue-600" />
                <h2 className="text-xl font-bold text-gray-800">Precision Tools</h2>
              </div>
              <p className="text-gray-600">
                Our calculators provide accurate estimates based on industry standards and professional guidelines.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
                <h2 className="text-xl font-bold text-gray-800">Safety First</h2>
              </div>
              <p className="text-gray-600">
                We prioritize safety by incorporating building codes and industry best practices into our calculations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-blue-600" />
                <h2 className="text-xl font-bold text-gray-800">Professional Grade</h2>
              </div>
              <p className="text-gray-600">
                Designed for professionals and homeowners alike, our tools deliver reliable results.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-blue-200 p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Commitment</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                At Chimney Service Calculators, we're dedicated to providing accurate, reliable tools for chimney professionals and homeowners. Our calculators are developed with input from industry experts and regularly updated to reflect current standards.
              </p>
              <p>
                We understand the importance of precise calculations in chimney work, where safety and efficiency are paramount. Our tools help you make informed decisions about chimney construction, maintenance, and repairs.
              </p>
              <p>
                While our calculators provide excellent estimates, we always recommend consulting with certified professionals for final assessments and work implementation.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl shadow-md p-6 border border-blue-200">
            <div className="flex items-start gap-4">
              <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Professional Use</h2>
                <p className="text-gray-600">
                  Our calculators are designed as estimation tools to help guide decision-making and planning. Always verify calculations with local building codes and professional inspections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}