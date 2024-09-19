import Header from '@/app/ui/Header';
import Footer from '@/app/ui/Footer';
import StructuredData from './scss/components/StructuredData';
import { Poppins, Open_Sans } from 'next/font/google';
import 'swiper/css';
import 'swiper/css/pagination';
import './scss/index.scss';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--primary-font',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--secondary-font',
});

export const metadata = {
  title: 'Keja Plus - Revolutionizing Property Management in Kenya',
  description: 'Keja Plus is the leading proptech platform in East Africa, offering innovative solutions for property management, rental experiences, and real estate ecosystem in Kenya.',
  keywords: 'property management, real estate software, Kenya, proptech, rental management, Mpesa integration, student housing',
  openGraph: {
    title: 'Keja Plus - Kenya\'s Premier Property Management Software',
    description: 'Streamline your property management with Keja Plus. Automated invoicing, financial dashboards, and more for Kenya\'s dynamic rental market.',
    images: [{ url: 'https://kejaplus.com/og-image.jpg', width: 1200, height: 630, alt: 'Keja Plus Dashboard' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keja Plus - Transforming Property Management in Kenya',
    description: 'Discover how Keja Plus is revolutionizing the Kenyan real estate market with cutting-edge property management tools.',
    images: ['https://kejaplus.com/twitter-image.jpg'],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Keja Plus",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "KES"
  },
  "description": "Keja Plus is an innovative property management application designed for the Kenyan real estate market, offering tools for renters, landlords, and property owners."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Keja Plus" />
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://www.kejaplus.com" />
        <StructuredData data={structuredData} />
      </head>
      <body className={`${openSans.variable} ${poppins.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}