import { useMemo, useState } from 'react';
import { Search, MapPin, Clock, Plane, Hotel, Compass, SlidersHorizontal } from 'lucide-react';
import { Header, type Page } from './Header';
import { Footer } from './Footer';
import { CATEGORY_FILTERS, PACKAGES, formatPrice, getCategoryCounts, type CategoryKey, type TravelPackage } from '../data/packages';

type SortOption = 'popular' | 'price-low' | 'price-high';

interface PackagesPageProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onEnquire: (pkg: TravelPackage) => void;
  activeFilter: CategoryKey | 'All Packages';
  onFilterChange: (filter: CategoryKey | 'All Packages') => void;
}

export function PackagesPage({ currentPage, onNavigate, onEnquire, activeFilter, onFilterChange }: PackagesPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('popular');

  const countsByCategory = useMemo(() => getCategoryCounts(), []);

  const filteredPackages = useMemo(() => {
    let list = PACKAGES;
    if (activeFilter !== 'All Packages') {
      list = list.filter((pkg) => pkg.categories.includes(activeFilter));
    }
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      list = list.filter(
        (pkg) => pkg.name.toLowerCase().includes(q) || pkg.location.toLowerCase().includes(q)
      );
    }
    const sorted = [...list];
    if (sortBy === 'price-low') sorted.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') sorted.sort((a, b) => b.price - a.price);
    return sorted;
  }, [activeFilter, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} onNavigate={onNavigate} onEnquireNow={() => onEnquire(PACKAGES[0])} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#155DFC] to-[#203066] text-white py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h1 className="text-2xl lg:text-4xl font-bold mb-2">Holiday Packages</h1>
          <p className="text-blue-100 text-sm lg:text-base">
            Handpicked domestic &amp; international itineraries, curated by our travel consultants.
          </p>

          {/* Search */}
          <div className="mt-6 relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search destination, e.g. Bali, Goa, Dubai..."
              className="w-full pl-11 pr-4 py-3 rounded-xl text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-white/60"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 lg:py-10">
        {/* Filter chips */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
          {CATEGORY_FILTERS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => onFilterChange(key)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all border ${
                activeFilter === key
                  ? 'bg-[#155DFC] text-white border-[#155DFC] shadow-md'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-[#155DFC] hover:text-[#155DFC]'
              }`}
            >
              {label}
              <span className={`ml-1.5 ${activeFilter === key ? 'text-blue-100' : 'text-gray-400'}`}>
                ({countsByCategory[key] ?? 0})
              </span>
            </button>
          ))}
        </div>

        {/* Results header */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-900">{filteredPackages.length}</span> packages found
          </p>
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-gray-400 hidden sm:block" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 outline-none focus:ring-2 focus:ring-blue-200"
            >
              <option value="popular">Sort: Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Package grid */}
        {filteredPackages.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
            <Compass className="w-10 h-10 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-600 font-medium">No packages match your search.</p>
            <p className="text-gray-400 text-sm mt-1">Try a different destination or filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-shadow flex flex-col"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-[#203066] flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {pkg.duration}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-lg font-bold text-gray-900">{pkg.name}</h3>
                  </div>
                  <p className="text-xs text-gray-500 flex items-center gap-1 mb-3">
                    <MapPin className="w-3.5 h-3.5" /> {pkg.location}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {pkg.categories.slice(0, 3).map((cat) => (
                      <span
                        key={cat}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-blue-50 text-[#155DFC]"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-1.5 text-xs text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Plane className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" /> {pkg.flights}
                    </div>
                    <div className="flex items-center gap-2">
                      <Hotel className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" /> {pkg.hotels}
                    </div>
                  </div>

                  <ul className="text-xs text-gray-500 space-y-1 mb-4">
                    {pkg.highlights.slice(0, 2).map((h) => (
                      <li key={h} className="flex items-start gap-1.5">
                        <span className="text-[#155DFC] mt-0.5">•</span> {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <p className="text-[11px] text-gray-400">Starting from</p>
                      <p className="text-lg font-bold text-gray-900">{formatPrice(pkg.price)}</p>
                    </div>
                    <button
                      onClick={() => onEnquire(pkg)}
                      className="bg-[#155DFC] text-white text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-[#1347d4] transition-colors"
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer currentPage={currentPage} onNavigate={onNavigate} />

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
