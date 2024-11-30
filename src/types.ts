export type RepairType = {
  name: string;
  basePrice: number;
  description: string;
  heightMultiplier: number;
  ageMultiplier: number;
};

export type LinerType = {
  name: string;
  basePrice: number;
  description: string;
  benefits: string[];
  lifespan: string;
};

export const repairTypes: Record<string, RepairType> = {
  cap: {
    name: 'Chimney Cap Repair',
    basePrice: 300,
    description: 'Repair or replace damaged chimney cap',
    heightMultiplier: 1.1,
    ageMultiplier: 1.2
  },
  damper: {
    name: 'Chimney Damper Repair',
    basePrice: 400,
    description: 'Fix or replace faulty damper system',
    heightMultiplier: 1.05,
    ageMultiplier: 1.15
  },
  flashing: {
    name: 'Chimney Flashing',
    basePrice: 600,
    description: 'Repair or replace roof flashing around chimney',
    heightMultiplier: 1.2,
    ageMultiplier: 1.1
  },
  flue: {
    name: 'Chimney Flue Repair',
    basePrice: 800,
    description: 'Fix damaged flue lining or structure',
    heightMultiplier: 1.3,
    ageMultiplier: 1.25
  },
  framing: {
    name: 'Chimney Framing Repair',
    basePrice: 1200,
    description: 'Structural repairs to chimney framing',
    heightMultiplier: 1.15,
    ageMultiplier: 1.3
  },
  masonry: {
    name: 'Chimney Masonry Repair',
    basePrice: 900,
    description: 'Fix damaged bricks, stones, or mortar',
    heightMultiplier: 1.25,
    ageMultiplier: 1.2
  },
  siding: {
    name: 'Chimney Siding Repair',
    basePrice: 700,
    description: 'Repair or replace chimney siding',
    heightMultiplier: 1.15,
    ageMultiplier: 1.1
  },
  tuckpointing: {
    name: 'Chimney Tuckpointing',
    basePrice: 15,
    description: 'Price per square foot of mortar repair',
    heightMultiplier: 1.2,
    ageMultiplier: 1.15
  },
  downdraft: {
    name: 'Downdraft Repair',
    basePrice: 500,
    description: 'Fix downdraft issues and improve draft',
    heightMultiplier: 1.1,
    ageMultiplier: 1.1
  },
  electricFireplace: {
    name: 'Electric Fireplace Repair',
    basePrice: 350,
    description: 'Repair electrical components and controls',
    heightMultiplier: 1,
    ageMultiplier: 1.2
  },
  gasValve: {
    name: 'Fireplace Gas Valve Repair',
    basePrice: 450,
    description: 'Fix or replace faulty gas valves',
    heightMultiplier: 1,
    ageMultiplier: 1.15
  },
  fireplaceMasonry: {
    name: 'Fireplace Masonry Repair',
    basePrice: 800,
    description: 'Repair damaged fireplace masonry',
    heightMultiplier: 1.1,
    ageMultiplier: 1.25
  },
  panels: {
    name: 'Fireplace Panels Repair',
    basePrice: 400,
    description: 'Replace or repair fireplace panels',
    heightMultiplier: 1,
    ageMultiplier: 1.1
  },
  gasFireplace: {
    name: 'Gas Fireplace Repair',
    basePrice: 600,
    description: 'General gas fireplace repairs',
    heightMultiplier: 1,
    ageMultiplier: 1.2
  },
  pelletStove: {
    name: 'Pellet Stove Repair',
    basePrice: 550,
    description: 'Fix pellet stove components',
    heightMultiplier: 1,
    ageMultiplier: 1.15
  },
  smokeChamber: {
    name: 'Smoke Chamber Repair',
    basePrice: 700,
    description: 'Repair damaged smoke chamber',
    heightMultiplier: 1.2,
    ageMultiplier: 1.2
  }
};

export const linerTypes: Record<string, LinerType> = {
  ceramic: {
    name: 'Ceramic/Thermocrete',
    basePrice: 3500,
    description: 'Ceramic coating that creates a seamless, insulated liner',
    benefits: [
      'Excellent for high-temperature applications',
      'Forms a seamless barrier',
      'Superior insulation properties',
      'Ideal for irregular flues'
    ],
    lifespan: '20-25 years'
  },
  stainless: {
    name: 'Stainless Steel',
    basePrice: 2500,
    description: 'Heavy-duty stainless steel liner system',
    benefits: [
      'Highly durable and corrosion-resistant',
      'Quick installation',
      'Suitable for all fuel types',
      'Easy to inspect and clean'
    ],
    lifespan: '15-20 years'
  },
  proform: {
    name: 'Proform',
    basePrice: 3000,
    description: 'Composite liner with advanced heat resistance',
    benefits: [
      'Excellent heat distribution',
      'Crack and corrosion resistant',
      'Minimal clearance required',
      'Ideal for wood-burning appliances'
    ],
    lifespan: '25-30 years'
  }
};