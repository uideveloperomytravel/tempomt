import imgThailand from "figma:asset/3c5cdd1b11b55adc84f1abf772de7dc53629134a.png";
import imgBali from "figma:asset/9b4b55218bf29fea824686411a1f02abd191926e.png";
import imgSingapore from "figma:asset/8a0c90534a15869a007842b30714ab6ecc18f127.png";
import imgDubai from "figma:asset/3e195ca68f361e2a08c4a56843d9ac08a394d044.png";
import imgGoa from "figma:asset/cc176334d1d2f05c05a68374eb963671a620307d.png";
import imgKerala from "figma:asset/22d626b5db71fa1b442bc1ca0bdc4f940f9dd4a9.png";
import imgOoty from "figma:asset/04f001a258d8ba3ec30ead5b222b8cc27ab8bd45.png";
import imgShimla from "figma:asset/c0b8ff5284804a493b219148448ef602d7fd555f.png";

export type CategoryKey =
  | 'Honeymoon'
  | 'Family'
  | 'Premium'
  | 'Luxury'
  | 'Group Tours'
  | 'Visa Free'
  | 'Trending'
  | 'Domestic'
  | 'International';

export const CATEGORY_FILTERS: { key: CategoryKey | 'All Packages'; label: string }[] = [
  { key: 'All Packages', label: 'All Packages' },
  { key: 'Honeymoon', label: 'Honeymoon' },
  { key: 'Family', label: 'Family' },
  { key: 'Premium', label: 'Premium' },
  { key: 'Luxury', label: 'Luxury' },
  { key: 'Group Tours', label: 'Group Tours' },
  { key: 'Visa Free', label: 'Visa Free' },
  { key: 'Trending', label: 'Trending' },
  { key: 'Domestic', label: 'Domestic' },
  { key: 'International', label: 'International' },
];

export interface TravelPackage {
  id: string;
  name: string;
  location: string;
  price: number;
  duration: string;
  image: string;
  categories: CategoryKey[];
  flights: string;
  hotels: string;
  activities: string;
  highlights: string[];
}

export const PACKAGES: TravelPackage[] = [
  {
    id: 'thailand',
    name: 'Thailand',
    location: 'Bangkok, Phuket & Krabi',
    price: 27999,
    duration: '5N/6D',
    image: imgThailand,
    categories: ['Visa Free', 'International', 'Family', 'Group Tours'],
    flights: 'Round Trip Flights Included',
    hotels: '4★ Beachfront Hotels',
    activities: '6 Guided Activities',
    highlights: ['Poda Islands Tour', 'James Bond Island Tour', 'Phi Phi Islands Tour'],
  },
  {
    id: 'bali',
    name: 'Bali',
    location: 'Ubud, Seminyak & Kuta',
    price: 32999,
    duration: '6N/7D',
    image: imgBali,
    categories: ['Visa Free', 'International', 'Honeymoon', 'Premium', 'Group Tours'],
    flights: 'Round Trip Flights Included',
    hotels: '4★ & 3★ Boutique Hotels',
    activities: '7 Guided Activities',
    highlights: ['Ubud Rice Terrace Tour', 'Water Temple Visit', 'Volcano Sunrise Trek'],
  },
  {
    id: 'singapore',
    name: 'Singapore',
    location: 'Marina Bay & Sentosa',
    price: 35999,
    duration: '4N/5D',
    image: imgSingapore,
    categories: ['Visa Free', 'International', 'Family', 'Premium'],
    flights: 'Direct Flights Included',
    hotels: '5★ Luxury Hotels',
    activities: '8 Guided Activities',
    highlights: ['Marina Bay Tour', 'Gardens by the Bay', 'Universal Studios'],
  },
  {
    id: 'dubai',
    name: 'Dubai',
    location: 'Dubai & Abu Dhabi',
    price: 33999,
    duration: '5N/6D',
    image: imgDubai,
    categories: ['Visa Free', 'International', 'Luxury', 'Premium', 'Group Tours'],
    flights: 'Premium Economy Flights',
    hotels: '5★ Luxury Hotels',
    activities: '6 Guided Activities',
    highlights: ['Burj Khalifa Visit', 'Desert Safari', 'Palm Jumeirah Cruise'],
  },
  {
    id: 'goa',
    name: 'Goa',
    location: 'North & South Goa',
    price: 13999,
    duration: '3N/4D',
    image: imgGoa,
    categories: ['Domestic', 'Honeymoon', 'Trending', 'Family'],
    flights: 'Airport Transfers Included',
    hotels: '3★ Beach Resorts',
    activities: '5 Guided Activities',
    highlights: ['Beach Hopping Tour', 'Old Goa Heritage Walk', 'Sunset Cruise'],
  },
  {
    id: 'kerala',
    name: 'Kerala',
    location: 'Munnar, Alleppey & Kochi',
    price: 18499,
    duration: '4N/5D',
    image: imgKerala,
    categories: ['Domestic', 'Honeymoon', 'Family'],
    flights: 'Airport Transfers Included',
    hotels: 'Houseboat + 4★ Resorts',
    activities: '6 Guided Activities',
    highlights: ['Backwater Houseboat', 'Tea Plantation Visit', 'Ayurveda Spa Session'],
  },
  {
    id: 'ooty',
    name: 'Ooty & Coorg',
    location: 'Nilgiris & Coorg Hills',
    price: 15999,
    duration: '4N/5D',
    image: imgOoty,
    categories: ['Domestic', 'Honeymoon', 'Trending'],
    flights: 'Airport Transfers Included',
    hotels: '3★ Hill Resorts',
    activities: '5 Guided Activities',
    highlights: ['Botanical Gardens', 'Toy Train Ride', 'Tea Estate Tour'],
  },
  {
    id: 'shimla-manali',
    name: 'Shimla Manali',
    location: 'Himachal Pradesh',
    price: 16999,
    duration: '5N/6D',
    image: imgShimla,
    categories: ['Domestic', 'Honeymoon', 'Family'],
    flights: 'Airport Transfers Included',
    hotels: '3★ & 4★ Hill Resorts',
    activities: '6 Guided Activities',
    highlights: ['Mall Road Walk', 'Rohtang Pass', 'Solang Valley'],
  },
  {
    id: 'hongkong',
    name: 'Hong Kong',
    location: 'Hong Kong Island & Kowloon',
    price: 21999,
    duration: '6N/7D',
    image:
      'https://images.unsplash.com/photo-1471347025057-68ff089f54cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    categories: ['International', 'Trending', 'Premium'],
    flights: 'Round Trip Flights Included',
    hotels: '4★ City Hotels',
    activities: '6 Guided Activities',
    highlights: ['Victoria Peak Tram', 'Star Ferry Ride', 'Disneyland Pass'],
  },
  {
    id: 'mauritius',
    name: 'Mauritius',
    location: 'Port Louis & Grand Baie',
    price: 42999,
    duration: '5N/6D',
    image:
      'https://images.unsplash.com/photo-1716115927980-7fac8b0f96c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    categories: ['International', 'Honeymoon', 'Luxury'],
    flights: 'Round Trip Flights Included',
    hotels: '5★ Beach Resorts',
    activities: '5 Guided Activities',
    highlights: ['Ile aux Cerfs Island', 'Underwater Walk', 'Catamaran Cruise'],
  },
  {
    id: 'kyoto',
    name: 'Kyoto',
    location: 'Kyoto & Osaka',
    price: 45999,
    duration: '7N/8D',
    image:
      'https://images.unsplash.com/photo-1729864881494-d96345092845?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    categories: ['International', 'Premium', 'Trending'],
    flights: 'Round Trip Flights Included',
    hotels: 'Boutique Ryokan Stays',
    activities: '7 Guided Activities',
    highlights: ['Bamboo Forest Walk', 'Golden Pavilion', 'Tea Ceremony'],
  },
  {
    id: 'trichy',
    name: 'Trichy',
    location: 'Tiruchirappalli, Tamil Nadu',
    price: 9999,
    duration: '2N/3D',
    image:
      'https://images.unsplash.com/photo-1554880369-f762cfa9832a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    categories: ['Domestic', 'Group Tours', 'Trending'],
    flights: 'AC Coach Transfers',
    hotels: '3★ City Hotels',
    activities: '4 Guided Activities',
    highlights: ['Rock Fort Temple', 'Sri Ranganathaswamy Temple', 'Kallanai Dam'],
  },
];

export const formatPrice = (price: number) => `₹${price.toLocaleString('en-IN')}`;

export const getCategoryCounts = (): Record<string, number> => {
  const counts: Record<string, number> = { 'All Packages': PACKAGES.length };
  CATEGORY_FILTERS.forEach(({ key }) => {
    if (key === 'All Packages') return;
    counts[key] = PACKAGES.filter((pkg) => pkg.categories.includes(key)).length;
  });
  return counts;
};
