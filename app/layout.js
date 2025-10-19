import "./globals.css";
import Navbar from "./navbar/page";
import Footer from "./footer/page";
import { CartProvider } from "./context/CartContext";
import PerformanceMonitor from "./components/PerformanceMonitor";
import GoogleAnalytics from "./components/GoogleAnalytics";

// ===== Metadata =====
export const metadata = {
  title: {
    default: "MORVA - Premium Footwear & Shoes Store | Luxury Shoes Online",
    template: "MORVA - %s | Premium Footwear Store",
  },
  description: "Discover premium footwear at MORVA - Pakistan's leading luxury shoe store. Shop men's, women's, and kids' shoes with free shipping. Quality, comfort, and style guaranteed.",
  keywords: "shoes, footwear, luxury shoes, men shoes, women shoes, kids shoes, online shoe store, Pakistan, MORVA, premium footwear, athletic shoes, formal shoes, casual shoes",
  authors: [{ name: "MORVA" }],
  creator: "MORVA",
  publisher: "MORVA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://morva.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "MORVA - Premium Footwear & Shoes Store",
    description: "Discover premium footwear at MORVA - Pakistan's leading luxury shoe store. Shop men's, women's, and kids' shoes with free shipping.",
    url: 'https://morva.com',
    siteName: 'MORVA',
    images: [
      {
        url: '/comps/logo.png',
        width: 1200,
        height: 630,
        alt: 'MORVA Premium Footwear',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "MORVA - Premium Footwear & Shoes Store",
    description: "Discover premium footwear at MORVA - Pakistan's leading luxury shoe store.",
    images: ['/comps/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
};

// ===== Root Layout =====
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://placehold.co" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="MORVA" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body
        className="antialiased bg-white text-black"
      >
        <CartProvider>
          <PerformanceMonitor />
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
