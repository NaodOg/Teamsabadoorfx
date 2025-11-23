"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AboutPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the company profile when accessing the about page
    router.push('/TeamSabadoorFX.Store Profile.pdf');
  }, [router]);

  return null; // Render nothing since we're redirecting
}
