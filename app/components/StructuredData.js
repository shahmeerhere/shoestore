"use client";
import React from 'react';

export default function StructuredData({ type, data }) {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "MORVA",
          "alternateName": "MORVA Footwear",
          "description": "Pakistan's leading luxury shoe store offering premium footwear for men, women, and kids with free shipping nationwide.",
          "url": "https://morva.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://morva.com/comps/logo.png",
            "width": 200,
            "height": 200
          },
          "foundingDate": "2020",
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+92-300-1234567",
              "contactType": "customer service",
              "availableLanguage": ["English", "Urdu"],
              "areaServed": "PK",
              "hoursAvailable": "Mo-Su 09:00-22:00"
            },
            {
              "@type": "ContactPoint",
              "email": "info@morva.com",
              "contactType": "customer service",
              "availableLanguage": ["English", "Urdu"]
            }
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Fashion Street, Gulshan-e-Iqbal",
            "addressLocality": "Karachi",
            "addressRegion": "Sindh",
            "postalCode": "75300",
            "addressCountry": "PK"
          },
          "sameAs": [
            "https://facebook.com/morva",
            "https://instagram.com/morva",
            "https://twitter.com/morva",
            "https://youtube.com/morva"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "MORVA Shoe Collection",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "Men's Shoes",
                  "description": "Premium men's footwear collection"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "Women's Shoes",
                  "description": "Elegant women's footwear collection"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "Kids' Shoes",
                  "description": "Comfortable kids' footwear collection"
                }
              }
            ]
          }
        };

      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "MORVA - Premium Footwear Store",
          "alternateName": "MORVA",
          "url": "https://morva.com",
          "description": "Pakistan's leading online shoe store offering premium footwear for men, women, and kids with free shipping.",
          "inLanguage": "en",
          "copyrightYear": "2024",
          "publisher": {
            "@type": "Organization",
            "name": "MORVA",
            "url": "https://morva.com"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://morva.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        };

      case 'store':
        return {
          "@context": "https://schema.org",
          "@type": "Store",
          "name": "MORVA Store",
          "description": "Premium footwear store offering luxury shoes for men, women, and kids with nationwide delivery",
          "url": "https://morva.com",
          "image": [
            "https://morva.com/comps/logo.png",
            "https://morva.com/comps/heropic.jpeg"
          ],
          "telephone": "+92-300-1234567",
          "email": "info@morva.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Fashion Street, Gulshan-e-Iqbal",
            "addressLocality": "Karachi",
            "addressRegion": "Sindh",
            "postalCode": "75300",
            "addressCountry": "PK"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "24.8607",
            "longitude": "67.0011"
          },
          "openingHours": "Mo-Su 09:00-22:00",
          "priceRange": "$$",
          "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "JazzCash", "EasyPaisa", "Bank Transfer"],
          "currenciesAccepted": "PKR",
          "hasMap": "https://maps.google.com/?q=24.8607,67.0011",
          "sameAs": [
            "https://facebook.com/morva",
            "https://instagram.com/morva",
            "https://twitter.com/morva"
          ]
        };

      case 'product':
        return {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": data.name,
          "description": data.description,
          "image": data.images,
          "brand": {
            "@type": "Brand",
            "name": data.brand,
            "logo": "https://morva.com/comps/logo.png"
          },
          "category": data.category,
          "sku": `MORVA-${data.id}`,
          "mpn": `MORVA-${data.id}`,
          "gtin": `1234567890${data.id.toString().padStart(3, '0')}`,
          "offers": {
            "@type": "Offer",
            "price": data.discountedPrice,
            "priceCurrency": "PKR",
            "priceValidUntil": new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            "availability": data.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
            "itemCondition": "https://schema.org/NewCondition",
            "seller": {
              "@type": "Organization",
              "name": "MORVA",
              "url": "https://morva.com"
            },
            "shippingDetails": {
              "@type": "OfferShippingDetails",
              "shippingRate": {
                "@type": "MonetaryAmount",
                "value": "0",
                "currency": "PKR"
              },
              "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "businessDays": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
                },
                "cutoffTime": "14:00",
                "handlingTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 1,
                  "maxValue": 2,
                  "unitCode": "DAY"
                },
                "transitTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 2,
                  "maxValue": 5,
                  "unitCode": "DAY"
                }
              }
            },
            "returnPolicy": {
              "@type": "MerchantReturnPolicy",
              "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
              "merchantReturnDays": 30,
              "returnMethod": "https://schema.org/ReturnByMail",
              "returnFees": "https://schema.org/FreeReturn"
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": data.rating,
            "reviewCount": data.reviews,
            "bestRating": 5,
            "worstRating": 1
          },
          "additionalProperty": data.specifications ? Object.entries(data.specifications).map(([key, value]) => ({
            "@type": "PropertyValue",
            "name": key,
            "value": value
          })) : []
        };

      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          }))
        };

      case 'collection':
        return {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": data.name,
          "description": data.description,
          "url": data.url,
          "mainEntity": {
            "@type": "ItemList",
            "numberOfItems": data.products?.length || 0,
            "itemListElement": data.products?.map((product, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Product",
                "name": product.name,
                "url": `https://morva.com/products/${product.id}`,
                "image": product.images?.[0],
                "offers": {
                  "@type": "Offer",
                  "price": product.discountedPrice,
                  "priceCurrency": "PKR"
                }
              }
            })) || []
          }
        };

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        };

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
