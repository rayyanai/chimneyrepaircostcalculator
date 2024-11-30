import React from 'react';
import { AlertTriangle, Info, Gauge, DollarSign } from 'lucide-react';

export default function FuelContent() {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section className="bg-white rounded-xl shadow-md p-6 border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Heating Efficiency</h2>
        <p className="text-gray-600 leading-relaxed">
          Different heating appliances and fuel types offer varying levels of efficiency and cost-effectiveness.
          Understanding these differences can help you make informed decisions about your heating system.
        </p>
      </section>

      {/* Fuel Type Comparison */}
      <section className="bg-white rounded-xl shadow-md p-6 border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Fuel Type Comparison</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Wood</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Renewable resource with varying costs</li>
              <li>Efficiency depends on wood type and moisture content</li>
              <li>Requires storage and handling</li>
              <li>Regular maintenance needed</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Natural Gas</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Consistent heat output</li>
              <li>Clean burning with high efficiency</li>
              <li>Price varies by region and season</li>
              <li>Requires proper ventilation</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Pellets</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Manufactured for consistent burning</li>
              <li>High efficiency and low emissions</li>
              <li>Requires electricity for operation</li>
              <li>Storage space needed</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Electric</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Nearly 100% efficient at point of use</li>
              <li>No venting or chimney required</li>
              <li>Zero direct emissions in home</li>
              <li>Easy installation and maintenance</li>
              <li>Operating cost varies with electricity rates</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Efficiency Factors */}
      <section className="bg-white rounded-xl shadow-md p-6 border border-blue-200">
        <div className="flex items-center gap-2 mb-4">
          <Gauge className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">Efficiency Factors</h2>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Appliance Type</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Open fireplaces: 10-25% efficient</li>
              <li>Wood stoves: 50-85% efficient</li>
              <li>Gas fireplaces: 65-95% efficient</li>
              <li>Pellet stoves: 70-90% efficient</li>
              <li>Electric fireplaces: 95-99% efficient</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Operating Costs</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Fuel availability and local prices</li>
              <li>Maintenance requirements</li>
              <li>Equipment lifespan</li>
              <li>Installation costs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="bg-green-50 rounded-xl shadow-md p-6 border border-green-200">
        <div className="flex items-start gap-4">
          <Info className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-green-800 mb-2">Environmental Considerations</h3>
            <div className="text-green-700 space-y-2">
              <ul className="list-disc ml-5 space-y-1">
                <li>Carbon emissions per unit of heat</li>
                <li>Renewable vs. non-renewable sources</li>
                <li>Local air quality impact</li>
                <li>Energy source sustainability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Notice */}
      <section className="bg-orange-50 rounded-xl shadow-md p-6 border border-orange-200">
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-orange-800 mb-2">Safety Considerations</h3>
            <div className="text-orange-700 space-y-2">
              <ul className="list-disc ml-5 space-y-1">
                <li>Proper ventilation requirements</li>
                <li>Carbon monoxide risks</li>
                <li>Fire safety measures</li>
                <li>Regular maintenance needs</li>
                <li>Professional installation importance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}