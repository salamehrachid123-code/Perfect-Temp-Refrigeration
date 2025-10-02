import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Perfect Temp | Refrigeration, HVAC & Appliance Repair in Edmonton (780) 655-5017',
  description: 'Same-day refrigeration, heating, cooling, and appliance repair. Licensed & insured. Call Perfect Temp at (780) 655-5017.',
  keywords: 'refrigeration repair, HVAC repair, appliance repair, Edmonton, heating, cooling, furnace repair, air conditioning',
  authors: [{ name: 'Perfect Temp' }],
  openGraph: {
    title: 'Perfect Temp | Refrigeration, HVAC & Appliance Repair in Edmonton',
    description: 'Same-day refrigeration, heating, cooling, and appliance repair. Licensed & insured.',
    type: 'website',
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perfect Temp | Refrigeration, HVAC & Appliance Repair in Edmonton',
    description: 'Same-day refrigeration, heating, cooling, and appliance repair. Licensed & insured.',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Perfect Temp',
    description: 'Refrigeration, Heating & Air Conditioning / Appliances & Repair',
    telephone: '+1-780-655-5017',
    url: 'https://perfecttemp.ca',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Edmonton',
      addressRegion: 'AB',
      postalCode: 'T5T 5X9',
      addressCountry: 'CA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '53.5461',
      longitude: '-113.4938'
    },
    openingHours: [
      'Mo-Fr 07:00-17:00'
    ],
    areaServed: {
      '@type': 'City',
      name: 'Edmonton',
      addressRegion: 'AB'
    },
    serviceType: [
      'Appliance Repair',
      'Refrigerator Repair',
      'Freezer Repair',
      'Ice Maker Repair',
      'Heating & Furnace Repair',
      'Air Conditioning Repair'
    ],
    priceRange: '$$',
    paymentAccepted: 'Cash, Credit Card, Debit Card',
    currenciesAccepted: 'CAD'
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
