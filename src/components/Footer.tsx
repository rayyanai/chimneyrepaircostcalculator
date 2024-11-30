import React from 'react';
import { Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const navigation = {
    calculators: [
      { name: 'Building Calculator', href: '/building-calculator' },
      { name: 'Repair Calculator', href: '/repair-calculator' },
      { name: 'Creosote Estimator', href: '/creosote-estimator' },
      { name: 'Maintenance Calculator', href: '/maintenance-estimator' }
    ],
    more: [
      { name: 'Flue Calculator', href: '/flue-calculator' },
      { name: 'Cleaning Calculator', href: '/cleaning-calculator' },
      { name: 'Lining Calculator', href: '/lining-calculator' },
      { name: 'Height Calculator', href: '/height-calculator' }
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' }
    ],
    social: [
      { 
        name: 'Facebook', 
        href: 'https://www.facebook.com/approvedchimneyllc', 
        icon: Facebook 
      },
      { 
        name: 'LinkedIn', 
        href: 'https://www.linkedin.com/company/approved-chimney-llc', 
        icon: Linkedin 
      },
      { 
        name: 'Instagram', 
        href: 'https://www.instagram.com/approved_chimney/', 
        icon: Instagram 
      },
      { 
        name: 'YouTube', 
        href: 'https://www.youtube.com/@ApprovedChimney', 
        icon: Youtube 
      }
    ]
  };

  return (
    <footer className="bg-blue-50 border-t border-blue-100 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">
              Calculators
            </h3>
            <ul className="space-y-3">
              {navigation.calculators.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-gray-500 hover:text-blue-600">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">
              More Tools
            </h3>
            <ul className="space-y-3">
              {navigation.more.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-gray-500 hover:text-blue-600">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-gray-500 hover:text-blue-600">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Designed and Developed by{' '}
              <a 
                href="https://bizitron.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700"
              >
                Bizitron LLC
              </a>
              {' '}for{' '}
              <a 
                href="https://approvedchimney.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700"
              >
                Approved Chimney LLC
              </a>
            </div>
            <div className="mt-4 md:mt-0 text-sm text-gray-500">
              <a 
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 mr-2"
              >
                Sitemap
              </a>
              All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}