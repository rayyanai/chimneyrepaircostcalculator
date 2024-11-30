import React from 'react';
import { AlertTriangle, ThermometerSun } from 'lucide-react';

type Props = {
  assessment: {
    creosoteLevel: string;
    riskLevel: string;
    score: number;
  };
};

export default function RiskAssessment({ assessment }: Props) {
  const getColorClasses = () => {
    switch (assessment.riskLevel) {
      case 'safe':
        return 'bg-green-50 border-green-200 text-green-700';
      case 'caution':
        return 'bg-yellow-50 border-yellow-200 text-yellow-700';
      case 'high':
        return 'bg-red-50 border-red-200 text-red-700';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-700';
    }
  };

  const getIcon = () => {
    switch (assessment.riskLevel) {
      case 'safe':
        return <ThermometerSun className="w-8 h-8 text-green-500" />;
      case 'caution':
        return <AlertTriangle className="w-8 h-8 text-yellow-500" />;
      case 'high':
        return <AlertTriangle className="w-8 h-8 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className={`p-6 rounded-xl border ${getColorClasses()}`}>
      <div className="flex items-start gap-4">
        {getIcon()}
        <div>
          <h2 className="text-xl font-semibold mb-2">Risk Assessment</h2>
          <div className="space-y-3">
            <div>
              <p className="font-medium">Creosote Buildup Level:</p>
              <p className="text-lg">{assessment.creosoteLevel}</p>
            </div>
            <div>
              <p className="font-medium">Risk Level:</p>
              <p className="text-lg">{assessment.riskLevel.charAt(0).toUpperCase() + assessment.riskLevel.slice(1)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}