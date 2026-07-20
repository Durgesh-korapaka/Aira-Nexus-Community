import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  canonical?: string;
  type?: 'website' | 'article';
  jsonLd?: Record<string, unknown>;
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function upsertJsonLd(id: string, data: Record<string, unknown>) {
  let el = document.head.querySelector<HTMLScriptElement>(`script[data-seo="${id}"]`);
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.setAttribute('data-seo', id);
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export default function SEO({
  title,
  description = 'AiraNexus is the all-in-one society & apartment management software for Indian residential communities.',
  image = 'https://airanexus.com/favicon-512x512.png',
  canonical,
  type = 'website',
  jsonLd,
}: SEOProps) {
  useEffect(() => {
    document.title = title;
    upsertMeta('name', 'description', description);

    // Open Graph
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:image', image);
    upsertMeta('property', 'og:type', type);
    if (canonical) upsertMeta('property', 'og:url', canonical);

    // Twitter
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', image);

    // Canonical
    if (canonical) upsertLink('canonical', canonical);

    // JSON-LD
    if (jsonLd) upsertJsonLd('page-jsonld', jsonLd);

    return () => {
      // leave tags in place on cleanup; React handles re-runs
    };
  }, [title, description, image, canonical, type, jsonLd]);

  return null;
}
