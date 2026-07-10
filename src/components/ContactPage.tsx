import { Mail, MapPin, ArrowRight } from 'lucide-react';
import { Header, type Page } from './Header';
import { Footer } from './Footer';

interface ContactPageProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const ADDRESS = 'TOWER A, LOGIX TECHNOVA, A-616, Block A, Sector 132, Noida, Uttar Pradesh 201304';
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

export function ContactPage({ currentPage, onNavigate }: ContactPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={onNavigate} onEnquireNow={() => onNavigate('packages')} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#155DFC] to-[#203066] text-white py-14 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold mb-3">Contact Us</h1>
          <p className="text-blue-100 text-base lg:text-lg">We'd love to help you plan your next journey.</p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 lg:px-8 -mt-10 lg:-mt-14 relative z-10 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
          <a
            href="mailto:sales@omytravel.com"
            className="group bg-white rounded-2xl shadow-xl border border-gray-100 p-6 lg:p-8 hover:shadow-2xl hover:-translate-y-0.5 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-[#155DFC]" />
            </div>
            <h2 className="text-base font-semibold text-gray-900 mb-1">Email us</h2>
            <p className="text-[#155DFC] font-medium mb-3 break-all">sales@omytravel.com</p>
            <span className="inline-flex items-center gap-1 text-sm text-gray-500 group-hover:text-[#155DFC]">
              Send an email <ArrowRight className="w-4 h-4" />
            </span>
          </a>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl shadow-xl border border-gray-100 p-6 lg:p-8 hover:shadow-2xl hover:-translate-y-0.5 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-[#155DFC]" />
            </div>
            <h2 className="text-base font-semibold text-gray-900 mb-1">Visit our office</h2>
            <p className="text-gray-700 leading-relaxed mb-3">{ADDRESS}</p>
            <span className="inline-flex items-center gap-1 text-sm text-gray-500 group-hover:text-[#155DFC]">
              Get directions <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>

        <div className="mt-10 bg-gray-50 border border-gray-100 rounded-2xl p-6 lg:p-8 text-center">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Planning a trip?</h2>
          <p className="text-gray-600 text-sm mb-5">
            Browse our holiday packages and enquire directly — our team will get back to you shortly.
          </p>
          <button
            onClick={() => onNavigate('packages')}
            className="bg-[#155DFC] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1347d4] transition-colors"
          >
            Explore Packages
          </button>
        </div>
      </main>

      <Footer currentPage={currentPage} onNavigate={onNavigate} />
    </div>
  );
}
