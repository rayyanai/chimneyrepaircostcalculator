import React from 'react';
import { HardHat } from 'lucide-react';

export default function Header() {
  return (
    <div className="bg-blue-600 p-6 text-white">
      <div className="flex items-center gap-3">
        <HardHat className="w-8 h-8 text-blue-100" />
        <h1 className="text-2xl font-bold">Chimney Repair Cost Calculator</h1>
      </div>
      <p className="mt-2 text-blue-100">Get an instant estimate for your chimney repairs</p>
    </div>
  );
}