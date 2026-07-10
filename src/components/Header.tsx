import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import imgLogo from '../assets/omtlogo.svg';

export type Page = 'home' | 'packages' | 'about' | 'contact';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onEnquireNow: () => void;
}

const NAV_ITEMS: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'Packages', page: 'packages' },
  { label: 'About us', page: 'about' },
  { label: 'Contact', page: 'contact' },
];

export function Header({ currentPage, onNavigate, onEnquireNow }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const go = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Header */}
      <header className="lg:hidden bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 py-3">
          <button className="p-2 -ml-2" onClick={() => setMobileMenuOpen(true)} aria-label="Open menu">
            <Menu className="w-6 h-6 text-gray-800" />
          </button>
          <button onClick={() => go('home')} className="flex items-center gap-1">
            <img src={imgLogo} alt="OMT Logo" className="w-auto h-9" />
          </button>
          <button
            onClick={onEnquireNow}
            className="p-2 -mr-2 text-[#155DFC]"
            aria-label="Enquire now"
          >
            <Phone className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[60] bg-black/40" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="absolute top-0 left-0 bottom-0 w-72 bg-white shadow-2xl p-5 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <img src={imgLogo} alt="OMT Logo" className="w-auto h-9" />
              <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu" className="p-1">
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.page}
                  onClick={() => go(item.page)}
                  className={`text-left px-3 py-3 rounded-lg font-medium transition-colors ${
                    currentPage === item.page
                      ? 'bg-blue-50 text-[#155DFC]'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onEnquireNow();
              }}
              className="mt-6 bg-[#155DFC] text-white py-3 rounded-xl font-medium"
            >
              Enquire Now
            </button>
          </div>
        </div>
      )}

      {/* Desktop Header */}
      <header className="hidden lg:block bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-10">
              <button onClick={() => go('home')} className="flex items-center gap-1 cursor-pointer">
                <img src={imgLogo} alt="OMT Logo" className="w-auto h-10" />
              </button>
              <nav className="flex gap-7">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.page}
                    onClick={() => go(item.page)}
                    className={`font-medium transition-colors ${
                      currentPage === item.page
                        ? 'text-[#155DFC] font-semibold'
                        : 'text-gray-700 hover:text-[#203066]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <a href="mailto:sales@omytravel.com" className="hidden xl:flex items-center gap-2 text-gray-600 text-sm hover:text-[#155DFC]">
                <Mail className="w-4 h-4 text-[#155DFC]" />
                sales@omytravel.com
              </a>
              <button
                onClick={onEnquireNow}
                className="bg-[#155DFC] text-white px-6 py-2.5 rounded-lg hover:bg-[#1347d4] transition-colors font-medium"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
