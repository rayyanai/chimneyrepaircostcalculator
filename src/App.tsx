import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import BuildingCalculator from './components/BuildingCalculator';
import RepairEstimator from './components/RepairEstimator';
import CreosoteEstimator from './components/CreosoteEstimator';
import MaintenanceEstimator from './components/MaintenanceEstimator';
import FlueSizeCalculator from './components/FlueSizeCalculator';
import CleaningEstimator from './components/CleaningEstimator';
import LiningCalculator from './components/LiningCalculator';
import HeightCalculator from './components/HeightCalculator';
import FireplaceCalculator from './components/FireplaceCalculator';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/building-calculator" element={<BuildingCalculator />} />
          <Route path="/repair-calculator" element={<RepairEstimator />} />
          <Route path="/creosote-estimator" element={<CreosoteEstimator />} />
          <Route path="/maintenance-estimator" element={<MaintenanceEstimator />} />
          <Route path="/flue-calculator" element={<FlueSizeCalculator />} />
          <Route path="/cleaning-calculator" element={<CleaningEstimator />} />
          <Route path="/lining-calculator" element={<LiningCalculator />} />
          <Route path="/height-calculator" element={<HeightCalculator />} />
          <Route path="/fireplace-calculator" element={<FireplaceCalculator />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}