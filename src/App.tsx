import { useMemo, useState } from 'react';
import { ChevronRight, ShieldCheck, Sparkles, HeartHandshake, Clock3 } from 'lucide-react';
import { Header, type Page } from './components/Header';
import { Footer } from './components/Footer';
import { ContactPage } from './components/ContactPage';
import { AboutPage } from './components/AboutPage';
import { PackagesPage } from './components/PackagesPage';
import { PackageEnquiryPopup } from './components/PackageEnquiryPopup';
import { SeoContent } from './components/SeoContent';
import {
  CATEGORY_FILTERS,
  PACKAGES,
  formatPrice,
  getCategoryCounts,
  type CategoryKey,
  type TravelPackage,
} from './data/packages';

const whyChooseReasons = [
  {
    icon: ShieldCheck,
    title: 'IATA Accredited Agency',
    description: 'Recognized under IATA Code 14038640, ensuring secure and professional travel services.',
  },
  {
    icon: HeartHandshake,
    title: 'Personalized Planning',
    description: 'Every itinerary is tailored to your needs, from honeymoons to group tours and luxury holidays.',
  },
  {
    icon: Clock3,
    title: '24×7 Customer Support',
    description: 'Our travel consultants are available around the clock, before, during and after your trip.',
  },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [packagesFilter, setPackagesFilter] = useState<CategoryKey | 'All Packages'>('All Packages');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<TravelPackage | null>(null);

  const chipCounts = useMemo(() => getCategoryCounts(), []);

  const openEnquiry = (pkg: TravelPackage) => {
    setSelectedPackage(pkg);
    setIsPopupOpen(true);
  };

  const goToPackages = (filter: CategoryKey | 'All Packages' = 'All Packages') => {
    setPackagesFilter(filter);
    setCurrentPage('packages');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  if (currentPage === 'about') {
    return (
      <>
        <AboutPage currentPage={currentPage} onNavigate={navigate} onEnquire={() => openEnquiry(PACKAGES[0])} />
        {isPopupOpen && selectedPackage && (
          <PackageEnquiryPopup
            isOpen={isPopupOpen}
            packageDetails={toPopupDetails(selectedPackage)}
            onClose={() => setIsPopupOpen(false)}
          />
        )}
      </>
    );
  }

  if (currentPage === 'contact') {
    return (
      <>
        <ContactPage currentPage={currentPage} onNavigate={navigate} />
        {isPopupOpen && selectedPackage && (
          <PackageEnquiryPopup
            isOpen={isPopupOpen}
            packageDetails={toPopupDetails(selectedPackage)}
            onClose={() => setIsPopupOpen(false)}
          />
        )}
      </>
    );
  }

  if (currentPage === 'packages') {
    return (
      <>
        <PackagesPage
          currentPage={currentPage}
          onNavigate={navigate}
          onEnquire={openEnquiry}
          activeFilter={packagesFilter}
          onFilterChange={setPackagesFilter}
        />
        {isPopupOpen && selectedPackage && (
          <PackageEnquiryPopup
            isOpen={isPopupOpen}
            packageDetails={toPopupDetails(selectedPackage)}
            onClose={() => setIsPopupOpen(false)}
          />
        )}
      </>
    );
  }

  const honeymoonDestinations = PACKAGES.filter((p) => p.categories.includes('Honeymoon')).slice(0, 4);
  const visaFreePackages = PACKAGES.filter((p) => p.categories.includes('Visa Free')).slice(0, 4);
  const trendingPackages = PACKAGES.filter((p) => p.categories.includes('Trending'));
  const groupTourPackages = PACKAGES.filter((p) => p.categories.includes('Group Tours')).slice(0, 4);
  const premiumLuxuryPackages = PACKAGES.filter(
    (p) => p.categories.includes('Premium') || p.categories.includes('Luxury')
  ).slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} onNavigate={navigate} onEnquireNow={() => openEnquiry(PACKAGES[0])} />

      {/* Mobile Quick Links */}
      <section className="lg:hidden px-4 py-6 bg-white">
        <div className="grid grid-cols-3 gap-2">
          <QuickTile label="Holiday Packages" onClick={() => goToPackages('All Packages')} icon="🧳" />
          <QuickTile label="About Us" onClick={() => navigate('about')} icon="ℹ️" />
          <QuickTile label="Contact Us" onClick={() => navigate('contact')} icon="✉️" />
        </div>
      </section>

      {/* Mobile Filter Chips */}
      <section className="lg:hidden px-4 py-4 bg-white border-t border-gray-100">
        <p className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">Browse by type</p>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {(['Visa Free', 'Trending', 'Group Tours', 'Honeymoon', 'Luxury'] as CategoryKey[]).map((key) => (
            <button
              key={key}
              onClick={() => goToPackages(key)}
              className="px-4 py-2 border border-gray-300 rounded-full text-sm whitespace-nowrap hover:bg-gray-50 hover:border-[#155DFC] hover:text-[#155DFC] transition-colors"
            >
              {key}
            </button>
          ))}
        </div>
      </section>

      {/* Desktop Hero/Filter Section */}
      <section className="hidden lg:block relative bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">What kind of holiday are you looking for?</h1>
            <p className="text-blue-100">Pick a style below to see matching packages, curated by our travel experts.</p>
          </div>
          <div className="bg-[rgba(24,23,23,0.69)] rounded-xl p-6">
            <div className="flex flex-wrap gap-3 justify-center">
              {CATEGORY_FILTERS.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => goToPackages(key)}
                  className="px-5 py-2.5 rounded-full text-sm font-medium transition-all bg-white/10 text-white border border-white/30 hover:bg-white hover:text-gray-900"
                >
                  {label}
                  <span className="ml-1.5 text-white/60">({chipCounts[key] ?? 0})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Honeymoon Destinations */}
      <PackageSection
        title="Honeymoon Destinations"
        subtitle="Dream Destinations, Zero Paperwork!"
        packages={honeymoonDestinations}
        onViewAll={() => goToPackages('Honeymoon')}
        onEnquire={openEnquiry}
      />

      {/* Visa Free Packages */}
      <PackageSection
        title="Visa Free Packages"
        subtitle="Embark on a journey to some of the world's most captivating destinations"
        packages={visaFreePackages}
        onViewAll={() => goToPackages('Visa Free')}
        onEnquire={openEnquiry}
        tint
      />

      {/* Trending Destinations */}
      <section className="px-4 lg:px-8 py-8 lg:py-12 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[#203066]">🚀 Trending Destinations</h2>
          <button
            onClick={() => goToPackages('Trending')}
            className="text-[#155DFC] text-sm font-medium flex items-center gap-1 hover:underline"
          >
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Desktop: Large Featured Cards with side images */}
        <div className="hidden lg:grid grid-cols-2 gap-6">
          {trendingPackages[0] && (
            <button
              type="button"
              onClick={() => openEnquiry(trendingPackages[0])}
              className="relative h-96 rounded-2xl overflow-hidden shadow-xl group cursor-pointer text-left"
            >
              <img
                src={trendingPackages[0].image}
                alt={trendingPackages[0].name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-3xl font-bold mb-2">{trendingPackages[0].name}</h3>
                <p className="text-lg">Starting {formatPrice(trendingPackages[0].price)} · {trendingPackages[0].duration}</p>
              </div>
            </button>
          )}
          <div className="grid grid-rows-2 gap-6">
            {trendingPackages.slice(1, 3).map((pkg) => (
              <button
                key={pkg.id}
                type="button"
                onClick={() => openEnquiry(pkg)}
                className="relative h-44 rounded-2xl overflow-hidden shadow-xl group cursor-pointer text-left"
              >
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">{pkg.name}</h3>
                  <p className="text-sm">Starting {formatPrice(pkg.price)} · {pkg.duration}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="lg:hidden flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {trendingPackages.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => openEnquiry(pkg)}
              className="min-w-[160px] group cursor-pointer text-left"
            >
              <div className="rounded-lg overflow-hidden mb-3 shadow-md">
                <img src={pkg.image} alt={pkg.name} className="w-full h-44 object-cover" />
              </div>
              <h3 className="text-sm font-semibold text-gray-900">{pkg.name}</h3>
              <p className="text-xs text-gray-600">Starting {formatPrice(pkg.price)} · {pkg.duration}</p>
            </button>
          ))}
        </div>
      </section>

      {/* Group Tour Packages */}
      <PackageSection
        title="👥 Group Tour Packages"
        packages={groupTourPackages}
        onViewAll={() => goToPackages('Group Tours')}
        onEnquire={openEnquiry}
        tint
      />

      {/* Why Choose to Travel Section */}
      <section className="px-4 lg:px-8 py-12 lg:py-16 max-w-7xl mx-auto">
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#203066] mb-3">Why Choose OMyTravel?</h2>
          <p className="text-gray-600 text-sm lg:text-lg">We make your travel experiences simple, safe and seamless</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {whyChooseReasons.map((reason, index) => (
            <div key={index} className="text-center p-6 lg:p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <reason.icon className="w-7 h-7 text-[#155DFC]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Premium & Luxury Escapes */}
      <section className="px-4 lg:px-8 py-8 lg:py-12 max-w-7xl mx-auto bg-white lg:bg-gray-50">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-[#203066] mb-2 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-[#155DFC]" /> Premium &amp; Luxury Escapes
            </h2>
            <p className="text-gray-600 text-sm hidden lg:block">Elevated stays and experiences for the discerning traveler</p>
          </div>
          <button
            onClick={() => goToPackages('Luxury')}
            className="text-[#155DFC] text-sm font-medium flex items-center gap-1 hover:underline"
          >
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {premiumLuxuryPackages.map((pkg) => (
            <button
              key={pkg.id}
              type="button"
              onClick={() => openEnquiry(pkg)}
              className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer h-56 lg:h-64 text-left"
            >
              <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-lg font-bold mb-1">{pkg.name}</h3>
                <p className="text-sm">From {formatPrice(pkg.price)}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <SeoContent onNavigate={navigate} onGoToPackages={goToPackages} />

      <Footer currentPage={currentPage} onNavigate={navigate} />

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {isPopupOpen && selectedPackage && (
        <PackageEnquiryPopup
          isOpen={isPopupOpen}
          packageDetails={toPopupDetails(selectedPackage)}
          onClose={() => setIsPopupOpen(false)}
        />
      )}
    </div>
  );
}

function toPopupDetails(pkg: TravelPackage) {
  return {
    name: pkg.name,
    price: formatPrice(pkg.price),
    image: pkg.image,
    flights: pkg.flights,
    hotels: pkg.hotels,
    activities: pkg.activities,
    tours: pkg.highlights,
  };
}

function QuickTile({ label, icon, onClick }: { label: string; icon: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center gap-2 hover:shadow-md transition-shadow"
    >
      <div className="bg-[#EFF6FF] rounded-lg p-3 text-xl">{icon}</div>
      <span className="text-xs font-semibold text-center">{label}</span>
    </button>
  );
}

function PackageSection({
  title,
  subtitle,
  packages,
  onViewAll,
  onEnquire,
  tint,
}: {
  title: string;
  subtitle?: string;
  packages: TravelPackage[];
  onViewAll: () => void;
  onEnquire: (pkg: TravelPackage) => void;
  tint?: boolean;
}) {
  return (
    <section className={`px-4 lg:px-8 py-8 lg:py-12 max-w-7xl mx-auto ${tint ? 'bg-white lg:bg-gray-50' : ''}`}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-[#203066] mb-2">{title}</h2>
          {subtitle && <p className="text-gray-600 text-sm hidden lg:block">{subtitle}</p>}
        </div>
        <button onClick={onViewAll} className="text-[#155DFC] text-sm font-medium flex items-center gap-1 hover:underline">
          View All <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Mobile: Horizontal Scroll */}
      <div className="lg:hidden flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {packages.map((pkg) => (
          <button key={pkg.id} onClick={() => onEnquire(pkg)} className="min-w-[160px] group cursor-pointer text-left">
            <div className="rounded-lg overflow-hidden mb-3 shadow-md relative">
              <img src={pkg.image} alt={pkg.name} className="w-full h-44 object-cover" />
              <span className="absolute top-2 left-2 bg-white/95 text-[10px] font-semibold text-[#203066] px-2 py-0.5 rounded-full">
                {pkg.duration}
              </span>
            </div>
            <h3 className="text-sm font-semibold text-gray-900">{pkg.name}</h3>
            <p className="text-xs text-gray-600">Starting {formatPrice(pkg.price)}</p>
          </button>
        ))}
      </div>

      {/* Desktop: Card Grid */}
      <div className="hidden lg:grid grid-cols-4 gap-5">
        {packages.map((pkg) => (
          <button key={pkg.id} onClick={() => onEnquire(pkg)} className="group cursor-pointer text-left">
            <div className="rounded-lg overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-shadow relative">
              <img
                src={pkg.image}
                alt={pkg.name}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-3 left-3 bg-white/95 text-xs font-semibold text-[#203066] px-2.5 py-1 rounded-full">
                {pkg.duration}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">{pkg.name}</h3>
            <p className="text-sm text-gray-500 mb-1">{pkg.location}</p>
            <p className="text-sm text-gray-600">Starting at {formatPrice(pkg.price)} Per person</p>
          </button>
        ))}
      </div>
    </section>
  );
}
