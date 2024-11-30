import React from 'react';
import { CheckCircle2, AlertTriangle } from 'lucide-react';
import { CreosoteInputs } from './index';

type Props = {
  assessment: {
    creosoteLevel: string;
    riskLevel: string;
    score: number;
  };
  inputs: CreosoteInputs;
};

export default function Recommendations({ assessment, inputs }: Props) {
  const getRecommendations = () => {
    const recommendations = [];

    if (assessment.riskLevel === 'high') {
      recommendations.push({
        priority: 'Immediate',
        action: 'Schedule professional cleaning and inspection',
        icon: <AlertTriangle className="w-5 h-5 text-red-500" />
      });
    }

    if (inputs.lastCleaning === 'more' || inputs.lastCleaning === 'unknown') {
      recommendations.push({
        priority: 'High',
        action: 'Book annual chimney inspection and cleaning',
        icon: <CheckCircle2 className="w-5 h-5 text-blue-500" />
      });
    }

    if (inputs.moistureContent === 'unseasoned') {
      recommendations.push({
        priority: 'Important',
        action: 'Use only well-seasoned wood (moisture content below 20%)',
        icon: <CheckCircle2 className="w-5 h-5 text-blue-500" />
      });
    }

    if (inputs.ventilation === 'poor') {
      recommendations.push({
        priority: 'High',
        action: 'Have ventilation system inspected and improved',
        icon: <CheckCircle2 className="w-5 h-5 text-blue-500" />
      });
    }

    if (inputs.woodType === 'softwood') {
      recommendations.push({
        priority: 'Recommended',
        action: 'Consider using hardwoods for slower, hotter burns',
        icon: <CheckCircle2 className="w-5 h-5 text-blue-500" />
      });
    }

    // Add default recommendations
    recommendations.push({
      priority: 'Maintenance',
      action: 'Install a chimney cap if not present',
      icon: <CheckCircle2 className="w-5 h-5 text-blue-500" />
    });

    return recommendations;
  };

  return (
    <div className="bg-white rounded-xl border border-blue-200 p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Recommended Actions</h2>
      <div className="space-y-4">
        {getRecommendations().map((rec, index) => (
          <div key={index} className="flex items-start gap-3">
            {rec.icon}
            <div>
              <p className="font-medium text-gray-900">{rec.priority}</p>
              <p className="text-gray-600">{rec.action}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}