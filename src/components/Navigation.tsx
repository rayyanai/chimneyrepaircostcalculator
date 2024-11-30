import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building, Wrench, Flame, Settings, Ruler, Brush, Layers, ArrowUp, ChevronDown, Menu, X } from 'lucide-react';

export default function Navigation() {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const isActive = (path: string) => location.pathname === path;

  const calculators = [
    { path: '/building-calculator', icon: Building, label: 'Building' },
    { path: '/repair-calculator', icon: Wrench, label: 'Repair' },
    { path: '/creosote-estimator', icon: Flame, label: 'Creosote' },
    { path: '/maintenance-estimator', icon: Settings, label: 'Maintenance' },
    { path: '/flue-calculator', icon: Ruler, label: 'Flue Size' },
    { path: '/cleaning-calculator', icon: Brush, label: 'Cleaning' },
    { path: '/lining-calculator', icon: Layers, label: 'Lining' },
    { path: '/height-calculator', icon: ArrowUp, label: 'Height' },
    { path: '/fireplace-calculator', icon: Flame, label: 'Fireplace' }
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className="bg-blue-50 shadow-md border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center px-2 py-2 text-slate-700 hover:text-slate-900">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 mr-2"
              >
                <rect x="6" y="2" width="12" height="20" rx="2" />
                <path d="M9 2v20" />
                <path d="M15 2v20" />
                <path d="M9 6h6" />
                <path d="M9 10h6" />
                <path d="M9 14h6" />
                <path d="M9 18h6" />
                <path d="M8 22h8" />
                <path d="M8 2h8" />
                <path d="M12 2v4" />
              </svg>
              <span className="font-semibold">Chimney Calculators</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 focus:outline-none"
              >
                Calculators
                <ChevronDown className={`w-4 h-4 ml-1 transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 z-50 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu">
                    {calculators.map(({ path, icon: Icon, label }) => (
                      <Link
                        key={path}
                        to={path}
                        className={`flex items-center px-4 py-2 text-sm ${
                          isActive(path)
                            ? 'bg-blue-50 text-blue-700'
                            : 'text-slate-600 hover:bg-blue-50 hover:text-blue-600'
                        }`}
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <Icon className="w-4 h-4 mr-2" />
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`flex items-center px-3 py-2 text-sm font-medium ${
                isActive('/about')
                  ? 'text-blue-700'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={`flex items-center px-3 py-2 text-sm font-medium ${
                isActive('/contact')
                  ? 'text-blue-700'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-blue-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="space-y-1">
              <div className="px-3 py-2 text-sm font-medium text-slate-600">Calculators</div>
              {calculators.map(({ path, icon: Icon, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center px-3 py-2 text-sm ${
                    isActive(path)
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-slate-600 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {label}
                </Link>
              ))}
            </div>
            <Link
              to="/about"
              className={`block px-3 py-2 text-sm font-medium ${
                isActive('/about')
                  ? 'text-blue-700'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 text-sm font-medium ${
                isActive('/contact')
                  ? 'text-blue-700'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}