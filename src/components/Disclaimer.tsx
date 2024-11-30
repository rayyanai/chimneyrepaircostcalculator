import React from 'react';
import { AlertCircle } from 'lucide-react';

export default function Disclaimer() {
  return (
    <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
      <div className="flex items-center gap-2 text-gray-700 mb-3">
        <AlertCircle className="w-5 h-5" />
        <h3 className="font-semibold">Important Notes</h3>
      </div>
      <div className="text-sm text-gray-600 space-y-4">
        <p>This calculator provides an estimate only. Final costs may vary based on:</p>
        <ul className="list-disc ml-5 space-y-2">
          <li>Local labor and material costs in your area</li>
          <li>Specific damage conditions and repair complexity</li>
          <li>Accessibility and safety requirements</li>
          <li>Additional repairs discovered during inspection</li>
          <li>Seasonal pricing variations</li>
          <li>Permit requirements and local regulations</li>
        </ul>
        <p className="text-xs">We recommend getting a professional inspection and detailed quote for accurate pricing.</p>
      </div>
    </div>
  );
}