"use client";

import Navbar from '@/components/navbar';
import HoverFooter from '@/components/ui/hover-footer-demo';
import GoogleForm from '@/components/GoogleForm';

export default function BookingPage() {
  // Replace this URL with your actual Google Form URL for booking services
  const bookingFormUrl = "YOUR_BOOKING_GOOGLE_FORM_URL_HERE";

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Book Our Services</h1>
            <p className="text-neutral-300 max-w-2xl mx-auto">
              Fill out the form below to book our event production services, equipment rental, or technical support.
            </p>
          </div>
          <div className="flex justify-center">
            <GoogleForm 
              formUrl={bookingFormUrl}
              title="Booking Form"
              description="Please fill out all required fields"
            />
          </div>
        </div>
      </div>
      <HoverFooter />
    </div>
  );
}