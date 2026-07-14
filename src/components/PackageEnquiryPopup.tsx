import React, { useState } from 'react';
import { X, Check, Loader2 } from 'lucide-react';

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

interface PackageDetails {
  name: string;
  price: string;
  image: string;
  flights: string;
  hotels: string;
  activities: string;
  tours: string[];
}

interface PackageEnquiryPopupProps {
  isOpen: boolean;
  onClose: () => void;
  packageDetails: PackageDetails;
}

export function PackageEnquiryPopup({ isOpen, onClose, packageDetails }: PackageEnquiryPopupProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    travelers: '',
    travelDate: '',
    requirements: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!GOOGLE_SCRIPT_URL) {
      alert('Google Sheet is not configured. Please set VITE_GOOGLE_SCRIPT_URL. See google-apps-script/OMTEnquiry.gs for setup.');
      return;
    }
    setIsSubmitting(true);
    try {
      const payload = {
        packageName: packageDetails.name,
        packagePrice: packageDetails.price,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        travelers: formData.travelers,
        travelDate: formData.travelDate,
        requirements: formData.requirements,
        flights: packageDetails.flights,
        hotels: packageDetails.hotels,
        activities: packageDetails.activities,
        tours: packageDetails.tours
      };
      const url = import.meta.env.DEV ? '/api/sheet' : GOOGLE_SCRIPT_URL;
      const res = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload)
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(result?.error || `Request failed (${res.status})`);
      if (result && result.success === false) throw new Error(result.error || 'Failed to save');
      alert('Thank you for your enquiry! We will contact you soon.');
      onClose();
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Request failed';
      alert(`Enquiry could not be saved: ${message}\n\nCheck:\n1. .env has VITE_GOOGLE_SCRIPT_URL set to your Web app URL\n2. In Apps Script, Deploy as Web app → Who has access: Anyone\n3. Open the Web app URL once in a browser and authorize if asked`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      travelers: '',
      travelDate: '',
      requirements: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 lg:px-10 py-4 lg:py-5 flex items-center justify-between z-10">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Travel Enquiry</h2>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-10">
          {/* Left Side - Package Details */}
          <div className="space-y-4">
            <div className="rounded-lg overflow-hidden">
              <img 
                src={packageDetails.image} 
                alt={packageDetails.name} 
                className="w-full h-64 lg:h-72 object-cover"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{packageDetails.name}</h3>
              <p className="text-sm text-gray-600">Starting at {packageDetails.price} Per person</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-start gap-2">
                <span className="text-gray-400 text-xl leading-7">•</span>
                <span className="text-gray-700">{packageDetails.flights}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-gray-400 text-xl leading-7">•</span>
                <span className="text-gray-700">{packageDetails.hotels}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-gray-400 text-xl leading-7">•</span>
                <span className="text-gray-700">{packageDetails.activities}</span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              {packageDetails.tours.map((tour, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <span className="text-teal-600">{tour}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Full Name *</label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Email Address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Phone Number *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Number of Travelers */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Number of Travelers</label>
              <select
                value={formData.travelers}
                onChange={(e) => setFormData({...formData, travelers: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
              >
                <option value="">Select number of travelers</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5+">5+</option>
              </select>
            </div>

            {/* Travel Date */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Preferred Travel Date</label>
              <input
                type="date"
                value={formData.travelDate}
                onChange={(e) => setFormData({...formData, travelDate: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Additional Requirements */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Additional Requirements</label>
              <textarea
                value={formData.requirements}
                onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                placeholder="Any special requests or questions..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-[#203066] text-white py-3 rounded-xl font-medium hover:bg-[#1a2651] transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Saving...
                  </>
                ) : (
                  'Submit Enquiry'
                )}
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
