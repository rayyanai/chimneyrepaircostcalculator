export type ProjectType = 'new' | 'insert' | 'repair' | 'conversion';
export type FireplaceType = 'wood' | 'gas' | 'electric' | 'ethanol' | 'pellet';
export type Style = 'traditional' | 'modern' | 'rustic' | 'contemporary';
export type Material = 'brick' | 'stone' | 'marble' | 'cast-iron' | 'steel';
export type Region = 'northeast' | 'midwest' | 'south' | 'west';

export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface ProjectDetails {
  projectType: ProjectType;
  fireplaceType: FireplaceType;
  style: Style;
  material: Material;
  dimensions: Dimensions;
  zipCode: string;
  region: Region;
  energyEfficient: boolean;
  ventingRequired: boolean;
  permitRequired: boolean;
}

export const BASE_COSTS = {
  new: {
    wood: 5000,
    gas: 4000,
    electric: 2000,
    ethanol: 3000,
    pellet: 3500
  },
  insert: {
    wood: 3000,
    gas: 2500,
    electric: 1200,
    ethanol: 2000,
    pellet: 2800
  },
  repair: {
    wood: 800,
    gas: 600,
    electric: 400,
    ethanol: 500,
    pellet: 700
  },
  conversion: {
    wood: 2500,
    gas: 2000,
    electric: 1500,
    ethanol: 1800,
    pellet: 2200
  }
};

export const MATERIAL_MULTIPLIERS = {
  brick: 1.0,
  stone: 1.4,
  marble: 1.8,
  'cast-iron': 1.2,
  steel: 1.0
};

export const STYLE_MULTIPLIERS = {
  traditional: 1.0,
  modern: 1.2,
  rustic: 1.1,
  contemporary: 1.3
};

export const REGION_MULTIPLIERS = {
  northeast: 1.2,
  midwest: 1.0,
  south: 0.9,
  west: 1.3
};

export const PERMIT_COSTS = {
  northeast: 500,
  midwest: 300,
  south: 250,
  west: 600
};

export const ENERGY_EFFICIENT_REBATE = 500;

export const VENTING_COSTS = {
  wood: 1000,
  gas: 800,
  pellet: 900,
  ethanol: 600,
  electric: 0
};