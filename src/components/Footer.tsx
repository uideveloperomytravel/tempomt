import { Mail, MapPin, ShieldCheck, Home, Package, Info, Phone } from 'lucide-react';
import imgLogo from '../assets/omtlogo.svg';
import type { Page } from './Header';

interface FooterProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const TAB_ITEMS: { label: string; page: Page; icon: typeof Home }[] = [
  { label: 'Home', page: 'home', icon: Home },
  { label: 'Packages', page: 'packages', icon: Package },
  { label: 'About', page: 'about', icon: Info },
  { label: 'Contact', page: 'contact', icon: Phone },
];

export function Footer({ currentPage, onNavigate }: FooterProps) {
  return (
    <>
    <footer className="bg-[#0f1b3d] text-white mt-12 lg:mt-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="lg:col-span-2">
            <img src={imgLogo} alt="OMT Logo" className="w-auto h-10 mb-4 brightness-0 invert" />
            <p className="text-gray-300 text-sm max-w-sm leading-relaxed">
              Your trusted travel partner for creating unforgettable journeys across India and around the world.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-lg px-3 py-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-xs text-gray-200">IATA Accredited Agency &middot; Code 14038640</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('packages')} className="hover:text-white transition-colors">
                  Holiday Packages
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <a
                  href="mailto:sales@omytravel.com"
                  className="flex items-start gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  sales@omytravel.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=TOWER+A+LOGIX+TECHNOVA+A-616+Block+A+Sector+132+Noida+Uttar+Pradesh+201304"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-white transition-colors"
                >
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>TOWER A, LOGIX TECHNOVA, A-616, Block A, Sector 132, Noida, Uttar Pradesh 201304</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/15 mt-10 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} O My Travel. All rights reserved.
        </div>
      </div>
    </footer>

    {/* Mobile bottom tab bar */}
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex items-center justify-around py-2.5">
        {TAB_ITEMS.map(({ label, page, icon: Icon }) => (
          <button
            key={page}
            onClick={() => onNavigate(page)}
            className={`flex flex-col items-center gap-1 px-4 py-1 ${
              currentPage === page ? 'text-[#155DFC]' : 'text-gray-500'
            }`}
          >
            <Icon className="w-5 h-5" />
            <span className="text-xs font-medium">{label}</span>
          </button>
        ))}
      </div>
    </nav>
    <div className="lg:hidden h-16" />
    </>
  );
}
