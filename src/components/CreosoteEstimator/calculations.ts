export function calculateRiskFactors(inputs: {
  fuelType: string;
  frequency: string;
  woodType: string;
  moistureContent: string;
  lastCleaning: string;
  chimneyType: string;
  ventilation: string;
}) {
  let score = 0;

  // Fuel Type Risk
  if (inputs.fuelType === 'wood') score += 3;
  else if (inputs.fuelType === 'coal') score += 2;
  else if (inputs.fuelType === 'pellets') score += 1;

  // Usage Frequency Risk
  if (inputs.frequency === 'daily') score += 4;
  else if (inputs.frequency === 'weekly') score += 3;
  else if (inputs.frequency === 'monthly') score += 2;
  else if (inputs.frequency === 'occasionally') score += 1;

  // Wood Type Risk (if applicable)
  if (inputs.fuelType === 'wood') {
    if (inputs.woodType === 'softwood') score += 3;
    else if (inputs.woodType === 'mixed') score += 2;
    else if (inputs.woodType === 'hardwood') score += 1;
  }

  // Moisture Content Risk (if applicable)
  if (inputs.fuelType === 'wood') {
    if (inputs.moistureContent === 'unseasoned') score += 4;
    else if (inputs.moistureContent === 'partially') score += 2;
    else if (inputs.moistureContent === 'seasoned') score += 0;
  }

  // Last Cleaning Risk
  if (inputs.lastCleaning === 'unknown') score += 5;
  else if (inputs.lastCleaning === 'more') score += 4;
  else if (inputs.lastCleaning === '2years') score += 3;
  else if (inputs.lastCleaning === '1year') score += 1;
  else if (inputs.lastCleaning === '6months') score += 0;

  // Ventilation Risk
  if (inputs.ventilation === 'poor') score += 3;
  else if (inputs.ventilation === 'average') score += 2;
  else if (inputs.ventilation === 'good') score += 0;

  // Calculate risk levels based on score
  let creosoteLevel = '';
  let riskLevel = '';

  if (score <= 5) {
    creosoteLevel = 'Low buildup likely';
    riskLevel = 'safe';
  } else if (score <= 10) {
    creosoteLevel = 'Moderate buildup possible';
    riskLevel = 'caution';
  } else {
    creosoteLevel = 'High buildup probable';
    riskLevel = 'high';
  }

  return {
    creosoteLevel,
    riskLevel,
    score
  };
}