// app/sitemap.js
import { products } from "./data/products";

export default function sitemap() {
  const baseUrl = "https://morva.com";
  const currentDate = new Date().toISOString();

  // ✅ Static pages
  const staticPages = [
    { url: baseUrl, changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/men`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/women`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/kids`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/newarrival`, changeFrequency: "daily", priority: 0.8 },
    { url: `${baseUrl}/onsale`, changeFrequency: "daily", priority: 0.8 },
    { url: `${baseUrl}/acc`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/search`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${baseUrl}/size-guide`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/shipping-info`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/return-policy`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/faq`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/track`, changeFrequency: "monthly", priority: 0.5 },
  ].map(page => ({ ...page, lastModified: currentDate }));

  // ✅ Dynamic product pages (safe fallback if no updatedAt field)
  const productPages = (products || []).map(product => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: product.updatedAt
      ? new Date(product.updatedAt).toISOString()
      : currentDate,
    changeFrequency: "weekly",
    priority: product.featured ? 0.8 : 0.7,
  }));

  // ✅ Category pages (don’t overdo — keep it lean for SEO)
  const categoryPages = (products || [])
    .filter(product =>
      ["Men's Shoes", "Women's Shoes", "Kids' Shoes"].includes(product.category)
    )
    .map(product => ({
      url: `${baseUrl}/${product.category
        .toLowerCase()
        .replace(" ", "")
        .replace("'", "")}/products/${product.id}`,
      lastModified: product.updatedAt
        ? new Date(product.updatedAt).toISOString()
        : currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    }));

  return [...staticPages, ...productPages, ...categoryPages];
}
