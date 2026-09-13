import { Mail, MapPin, ShieldCheck, Home, Package, Info, Phone, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import imgLogo from '../assets/omtlogo.svg';
import type { Page } from './Header';

interface FooterProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0a12 12 0 0 0-4.373 23.178c-.035-.987-.008-2.174.24-3.25.266-1.113 1.712-7.213 1.712-7.213s-.437-.87-.437-2.157c0-2.02 1.171-3.53 2.63-3.53 1.24 0 1.84.932 1.84 2.05 0 1.248-.795 3.116-1.205 4.848-.343 1.448.727 2.63 2.155 2.63 2.586 0 4.577-2.727 4.577-6.663 0-3.484-2.503-5.92-6.077-5.92-4.14 0-6.573 3.106-6.573 6.317 0 1.25.482 2.591 1.084 3.32a.436.436 0 0 1 .101.419c-.11.458-.355 1.448-.404 1.65-.063.264-.207.32-.477.194-1.782-.83-2.896-3.436-2.896-5.532 0-4.501 3.27-8.635 9.428-8.635 4.949 0 8.797 3.526 8.797 8.24 0 4.914-3.099 8.868-7.4 8.868-1.446 0-2.804-.75-3.269-1.635l-.89 3.395c-.322 1.24-1.192 2.792-1.774 3.738A12 12 0 1 0 12 0z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://www.facebook.com/o.my.travel.tour/', icon: Facebook },
  { label: 'Instagram', href: 'https://www.instagram.com/o.my.travel/', icon: Instagram },
  { label: 'Pinterest', href: 'https://in.pinterest.com/omytravel/', icon: PinterestIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/omytravel/', icon: Linkedin },
  { label: 'YouTube', href: 'https://www.youtube.com/@OMy.Travel', icon: Youtube },
];

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
            <img
              src={imgLogo}
              alt="OMT Logo"
              className="w-auto h-10 mb-4"
              style={{ background: '#fff', padding: '0px 8px', borderRadius: '20px' }}
            />
            <p className="text-gray-300 text-sm max-w-sm leading-relaxed">
              Your trusted travel partner for creating unforgettable journeys across India and around the world.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-lg px-3 py-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-xs text-gray-200">IATA Accredited Agency &middot; Code 14038640</span>
            </div>

            <div className="flex items-center gap-3 mt-5">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 border border-white/15 hover:bg-white/20 transition-colors"
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
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
