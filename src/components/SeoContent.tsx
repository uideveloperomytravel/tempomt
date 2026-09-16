import type { Page } from './Header';
import type { CategoryKey } from '../data/packages';

interface SeoContentProps {
  onNavigate: (page: Page) => void;
  onGoToPackages: (filter: CategoryKey | 'All Packages') => void;
}

const SERVICES = [
  {
    title: 'Flight Booking',
    description: 'Book domestic and international flights with convenient travel options for your next journey.',
  },
  {
    title: 'Hotel Booking',
    description: 'Choose suitable hotels and accommodations based on your destination, budget and travel preferences.',
  },
  {
    title: 'Holiday & Tour Packages',
    description: 'Explore professionally planned holiday and tour packages for popular destinations across India and around the world.',
  },
  {
    title: 'Domestic Tour Packages',
    description: 'Discover the beauty of India with customized domestic holiday packages covering beaches, mountains, heritage destinations, wildlife and more.',
  },
  {
    title: 'International Tour Packages',
    description: 'Plan memorable international holidays to destinations including Dubai, Thailand, Singapore, Bali, Vietnam, Malaysia and many more.',
  },
  {
    title: 'Customized Holidays',
    description: 'Create personalized itineraries based on your travel dates, interests, budget, accommodation preferences and activities.',
  },
  {
    title: 'Visa Assistance',
    description: 'Get assistance with international travel visa requirements, documentation and application preparation.',
  },
  {
    title: 'Travel Insurance',
    description: 'Explore suitable travel insurance options to help protect your trip and travel with greater peace of mind.',
  },
  {
    title: 'Transfers & Car Rentals',
    description: 'Arrange airport transfers, local transportation and car rental services for a convenient travel experience.',
  },
];

const DOMESTIC_DESTINATIONS = [
  { name: 'Kerala', description: 'Backwaters, beaches, hill stations and luxury stays.' },
  { name: 'Goa', description: 'Beaches, nightlife, adventure and relaxing holidays.' },
  { name: 'Manali', description: 'Mountains, adventure and scenic Himalayan experiences.' },
  { name: 'Shimla', description: 'Beautiful landscapes, colonial charm and family holidays.' },
  { name: 'Andaman', description: 'Tropical beaches, water activities and island experiences.' },
  { name: 'Ladakh', description: 'Mountains, adventure and unforgettable road journeys.' },
];

const INTERNATIONAL_DESTINATIONS = [
  { name: 'Dubai', description: 'Luxury, shopping, entertainment and iconic attractions.' },
  { name: 'Thailand', description: 'Beaches, islands, nightlife and cultural experiences.' },
  { name: 'Bali', description: 'Tropical beaches, temples, nature and unique experiences.' },
  { name: 'Vietnam', description: 'Scenic landscapes, culture, cuisine and fascinating cities.' },
  { name: 'Singapore', description: 'World-class attractions, entertainment and family experiences.' },
  { name: 'Malaysia', description: 'Modern cities, islands, culture and diverse attractions.' },
];

const WHY_CHOOSE_US = [
  {
    title: 'Personalized Travel Planning',
    description: 'We understand your travel requirements and help create itineraries based on your preferences.',
  },
  {
    title: 'Complete Travel Solutions',
    description: 'Get flights, hotels, holiday packages, transfers, visa assistance and travel insurance through one travel partner.',
  },
  {
    title: 'Domestic & International Travel',
    description: 'Explore destinations across India and around the world with professionally planned travel packages.',
  },
  {
    title: 'Hassle-Free Support',
    description: 'Our team assists you throughout your travel planning process so you can focus on enjoying your journey.',
  },
  {
    title: 'Value-Focused Packages',
    description: 'Choose travel options designed to balance comfort, experiences and your travel budget.',
  },
  {
    title: 'Customer First',
    description: 'Your requirements and travel experience remain at the heart of our travel planning approach.',
  },
];

const TRAVEL_CATEGORIES = [
  {
    title: 'Family Holidays',
    description: 'Enjoy memorable vacations with comfortable stays, sightseeing and experiences for the whole family.',
  },
  {
    title: 'Honeymoon Packages',
    description: 'Plan a romantic getaway with customized itineraries, beautiful destinations and memorable experiences.',
  },
  {
    title: 'Luxury Holidays',
    description: 'Experience premium stays, personalized services and carefully planned luxury travel experiences.',
  },
  {
    title: 'Group Tours',
    description: 'Discover destinations together with friends, family or groups through professionally organized tours.',
  },
];

export function SeoContent({ onNavigate, onGoToPackages }: SeoContentProps) {
  return (
    <div className="bg-white">
      {/* Intro */}
      <section className="px-4 lg:px-8 py-12 lg:py-16 max-w-7xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold text-[#203066] mb-5">
          OMy Travel – Your Trusted Travel Agency for Unforgettable Journeys
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Welcome to <strong className="text-gray-900">OMy Travel</strong>, your trusted travel agency for
          unforgettable journeys across India and around the world. Explore carefully planned{' '}
          <strong className="text-gray-900">holiday packages, tour packages, domestic tours and international
          holidays</strong> designed around your travel preferences, budget and interests.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          From flights and hotels to sightseeing, transfers, visa assistance and travel insurance, OMy Travel
          provides complete travel solutions to make your journey comfortable, convenient and memorable.
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => onGoToPackages('All Packages')}
            className="bg-[#155DFC] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1347d4] transition-colors"
          >
            Explore Holiday Packages
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="border border-[#155DFC] text-[#155DFC] px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            Plan Your Trip
          </button>
        </div>
      </section>

      {/* About OMy Travel */}
      <section className="px-4 lg:px-8 py-12 lg:py-16 max-w-7xl mx-auto bg-gray-50">
        <h2 className="text-2xl lg:text-3xl font-bold text-[#203066] mb-5">Discover the World with OMy Travel</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          <strong className="text-gray-900">OMy Travel</strong> is a professional travel agency offering
          customized travel experiences for individuals, families, couples, groups and corporate travellers. Our
          goal is to make travel planning simple by bringing flights, hotels, holiday packages, sightseeing,
          transfers and other travel services together.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Whether you are planning a relaxing family vacation, a romantic honeymoon, an exciting group tour, a
          luxury holiday or an international getaway, our travel experts can help you create an itinerary that
          matches your requirements.
        </p>
        <p className="text-gray-600 leading-relaxed">
          With <strong className="text-gray-900">OMy Travel</strong>, you can explore popular destinations across
          India and worldwide while enjoying personalized travel planning and hassle-free support.
        </p>
      </section>

      {/* Travel Services */}
      <section className="px-4 lg:px-8 py-12 lg:py-16 max-w-7xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold text-[#203066] mb-5">Our Travel Services</h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          OMy Travel offers a wide range of travel services to help you plan your complete journey from one
          place.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service) => (
            <article key={service.title} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Domestic Holidays */}
      <section className="px-4 lg:px-8 py-12 lg:py-16 max-w-7xl mx-auto bg-gray-50">
        <h2 className="text-2xl lg:text-3xl font-bold text-[#203066] mb-5">Explore India with OMy Travel</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Discover incredible destinations across India with{' '}
          <strong className="text-gray-900">OMy Travel domestic tour packages</strong>. From scenic mountains and
          beautiful beaches to cultural cities and peaceful backwaters, explore India with thoughtfully planned
          holidays.
        </p>
        <ul className="space-y-2 mb-8 list-disc list-inside marker:text-[#155DFC]">
          {DOMESTIC_DESTINATIONS.map((dest) => (
            <li key={dest.name} className="text-gray-600">
              <strong className="text-gray-900">{dest.name}</strong> – {dest.description}
            </li>
          ))}
        </ul>
        <button
          onClick={() => onGoToPackages('Domestic')}
          className="bg-[#155DFC] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1347d4] transition-colors"
        >
          Explore Domestic Tour Packages
        </button>
      </section>

      {/* International Holidays */}
      <section className="px-4 lg:px-8 py-12 lg:py-16 max-w-7xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold text-[#203066] mb-5">Explore International Destinations</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Travel beyond India with <strong className="text-gray-900">OMy Travel international holiday
          packages</strong>. Experience new cultures, beautiful destinations, exciting attractions and
          unforgettable adventures with professionally planned international tours.
        </p>
        <ul className="space-y-2 mb-8 list-disc list-inside marker:text-[#155DFC]">
          {INTERNATIONAL_DESTINATIONS.map((dest) => (
            <li key={dest.name} className="text-gray-600">
              <strong className="text-gray-900">{dest.name}</strong> – {dest.description}
            </li>
          ))}
        </ul>
        <button
          onClick={() => onGoToPackages('International')}
          className="bg-[#155DFC] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1347d4] transition-colors"
        >
          Explore International Tour Packages
        </button>
      </section>

      {/* Customized Travel */}
      <section className="px-4 lg:px-8 py-12 lg:py-16 max-w-7xl mx-auto bg-gray-50">
        <h2 className="text-2xl lg:text-3xl font-bold text-[#203066] mb-5">Customized Travel Packages Designed for You</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Every traveller has different expectations. At <strong className="text-gray-900">OMy Travel</strong>,
          we help you create customized travel packages according to your destination, travel dates, budget,
          accommodation preferences and interests.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Whether you are planning a <strong className="text-gray-900">family vacation, honeymoon, group tour,
          luxury holiday, adventure trip, corporate travel or international vacation</strong>, our team can help
          you organize the important details of your journey.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          From flights and hotels to sightseeing, activities, transfers and travel assistance, we aim to make
          your holiday planning simple and hassle-free.
        </p>
        <button
          onClick={() => onNavigate('contact')}
          className="bg-[#155DFC] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1347d4] transition-colors"
        >
          Create Your Custom Holiday
        </button>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 lg:px-8 py-12 lg:py-16 max-w-7xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold text-[#203066] mb-8">Why Choose OMy Travel?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_CHOOSE_US.map((item) => (
            <article key={item.title} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Travel Inspiration */}
      <section className="px-4 lg:px-8 py-12 lg:py-16 max-w-7xl mx-auto bg-gray-50">
        <h2 className="text-2xl lg:text-3xl font-bold text-[#203066] mb-5">Find Your Perfect Holiday</h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          Looking for your next adventure? Explore our range of{' '}
          <strong className="text-gray-900">holiday packages and tour packages</strong> and discover destinations
          that match your travel style.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TRAVEL_CATEGORIES.map((category) => (
            <article key={category.title} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{category.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 lg:px-8 py-12 lg:py-16 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-[#203066] mb-4">Plan Your Next Journey with OMy Travel</h2>
        <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto">
          Ready to explore the world? Let <strong className="text-gray-900">OMy Travel</strong> help you turn
          your travel plans into memorable experiences. Whether you are looking for a domestic holiday,
          international vacation, family trip, honeymoon, group tour or luxury getaway, we are here to help.
        </p>
        <button
          onClick={() => onNavigate('contact')}
          className="bg-[#155DFC] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1347d4] transition-colors"
        >
          Plan Your Trip with OMy Travel
        </button>
      </section>

      {/* Brand Closing */}
      <section className="px-4 lg:px-8 py-12 lg:py-16 max-w-7xl mx-auto text-center bg-[#0f1b3d] text-white rounded-2xl mb-12 lg:mb-16">
        <h2 className="text-2xl lg:text-3xl font-bold mb-3">OMy Travel – Your Journey, Our Passion</h2>
        <p className="text-gray-300">
          Explore more. Experience more. Travel better with <strong className="text-white">OMy Travel</strong>.
        </p>
      </section>
    </div>
  );
}
