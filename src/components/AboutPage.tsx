import {
  ShieldCheck,
  Plane,
  Hotel,
  FileCheck2,
  Umbrella,
  Briefcase,
  Users,
  Gem,
  MapPinned,
  Ship,
  Car,
  Map,
  Target,
  Eye,
  Heart,
  CheckCircle2,
} from 'lucide-react';
import { Header, type Page } from './Header';
import { Footer } from './Footer';

interface AboutPageProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onEnquire: () => void;
}

const offerings = [
  { icon: Map, label: 'Domestic & International Holiday Packages' },
  { icon: Plane, label: 'Flight Bookings' },
  { icon: Hotel, label: 'Hotel Reservations' },
  { icon: FileCheck2, label: 'Visa Assistance' },
  { icon: Umbrella, label: 'Travel Insurance' },
  { icon: Briefcase, label: 'Corporate Travel Solutions' },
  { icon: Users, label: 'MICE (Meetings, Incentives, Conferences & Exhibitions)' },
  { icon: Users, label: 'Group Tours & Fixed Departures' },
  { icon: Gem, label: 'Honeymoon & Luxury Holidays' },
  { icon: MapPinned, label: 'Pilgrimage Tours' },
  { icon: Ship, label: 'Cruise Holidays' },
  { icon: Car, label: 'Airport Transfers & Transportation' },
];

const whyChoose = [
  'IATA Accredited Agency (Code: 14038640)',
  'Personalized Travel Planning',
  'Competitive & Transparent Pricing',
  'Carefully Selected Hotels & Trusted Partners',
  '24×7 Customer Support',
  'Safe, Secure & Hassle-Free Bookings',
  'Experienced Travel Consultants',
  'Tailor-Made Holiday Experiences',
  'End-to-End Travel Management',
];

const values = [
  'Customer First',
  'Transparency & Trust',
  'Professional Excellence',
  'Innovation',
  'Reliability',
  'Commitment to Quality',
];

export function AboutPage({ currentPage, onNavigate, onEnquire }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={onNavigate} onEnquireNow={onEnquire} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#155DFC] to-[#203066] text-white py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <ShieldCheck className="w-4 h-4 text-emerald-300" />
            <span className="text-xs font-medium">IATA Accredited Travel Agency · Code 14038640</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">About OMyTravel</h1>
          <p className="text-lg lg:text-xl text-blue-100">Your Journey, Our Passion</p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 lg:px-8 -mt-10 lg:-mt-14 relative z-10 pb-4">
        {/* Intro */}
        <section className="bg-white rounded-2xl shadow-xl p-6 lg:p-12 mb-10 lg:mb-14">
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to <strong>OMyTravel</strong>, your trusted travel partner for creating unforgettable journeys
            across India and around the world. We believe that every trip is more than just a destination—it's an
            experience, a memory, and a story waiting to be told.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            With a commitment to quality, transparency, and personalized service, OMyTravel specializes in designing
            travel experiences that match every traveler's needs, whether it's a family vacation, honeymoon,
            corporate travel, group tour, luxury holiday, pilgrimage, adventure, or international getaway.
          </p>
          <p className="text-gray-700 leading-relaxed">
            As an <strong>IATA Accredited Travel Agency (IATA Code: 14038640)</strong>, we adhere to globally
            recognized standards in the travel industry, ensuring secure, reliable, and professional travel services
            for our clients.
          </p>
        </section>

        {/* What We Offer */}
        <section className="mb-10 lg:mb-14">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 lg:mb-8">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {offerings.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-blue-100 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-[#155DFC]" />
                </div>
                <span className="text-sm text-gray-800 font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose */}
        <section className="bg-gradient-to-br from-[#1c398e] to-[#1447e6] rounded-2xl shadow-xl p-6 lg:p-12 mb-10 lg:mb-14 text-white">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8">Why Choose OMyTravel?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
            {whyChoose.map((item, index) => (
              <div key={index} className="flex items-start gap-2.5 bg-white/10 rounded-lg p-3.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-300 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-blue-50">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Mission / Vision / Values */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10 lg:mb-14">
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 lg:p-8">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-[#155DFC]" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Our Mission</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              To make travel simple, enjoyable, and accessible by delivering exceptional customer service,
              innovative travel solutions, and unforgettable experiences at the best value.
            </p>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 lg:p-8">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-[#155DFC]" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Our Vision</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              To become one of India's most trusted and preferred travel companies by providing world-class travel
              experiences through integrity, innovation, and customer satisfaction.
            </p>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 lg:p-8">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-[#155DFC]" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Our Values</h3>
            <ul className="text-sm text-gray-600 leading-relaxed space-y-1">
              {values.map((v) => (
                <li key={v}>• {v}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Our Promise */}
        <section className="bg-white rounded-2xl shadow-xl p-6 lg:p-12 mb-10 lg:mb-14 border border-gray-100">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Our Promise</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Whether you're planning a weekend getaway, an international vacation, a corporate event, or a
            once-in-a-lifetime luxury holiday, our team is dedicated to ensuring every detail is managed with care
            and professionalism.
          </p>
          <p className="text-gray-700 leading-relaxed">
            From the moment you start planning until you return home, OMyTravel is with you every step of the
            journey.
          </p>
          <p className="mt-6 text-lg lg:text-xl font-semibold text-[#155DFC]">
            Travel with Confidence. Explore with Passion. Experience the World with OMyTravel.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl shadow-xl p-8 lg:p-12 mb-12 text-white text-center">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-base lg:text-lg mb-8 text-blue-100">Get in touch with us to plan your perfect vacation</p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-[#203066] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </button>
        </section>
      </main>

      <Footer currentPage={currentPage} onNavigate={onNavigate} />
    </div>
  );
}
