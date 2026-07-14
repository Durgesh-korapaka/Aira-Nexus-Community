interface SEOProps {
  title: string;
  description: string;
  path: string;
}

export default function SEO({ title, description, path }: SEOProps) {
  const url = `https://airanexus.com${path}`;

  const updateTag = (selector: string, attr: string, value: string) => {
    let tag = document.head.querySelector(selector) as HTMLMetaElement | null;
    if (!tag) {
      tag = document.createElement('meta');
      const [, name] = selector.match(/meta\[(?:name|property)="(.+)"\]/) || [];
      if (selector.startsWith('meta[property')) {
        tag.setAttribute('property', name);
      } else {
        tag.setAttribute('name', name);
      }
      document.head.appendChild(tag);
    }
    tag.setAttribute(attr, value);
  };

  const updateLink = (rel: string, href: string) => {
    let link = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', rel);
      document.head.appendChild(link);
    }
    link.setAttribute('href', href);
  };

  const setPageJsonLd = (jsonLd: object) => {
    const id = 'page-jsonld';
    document.getElementById(id)?.remove();
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
  };

  if (typeof document !== 'undefined') {
    document.title = title;
    updateTag('meta[name="description"]', 'content', description);
    updateTag('meta[property="og:title"]', 'content', title);
    updateTag('meta[property="og:description"]', 'content', description);
    updateTag('meta[property="og:url"]', 'content', url);
    updateTag('meta[name="twitter:title"]', 'content', title);
    updateTag('meta[name="twitter:description"]', 'content', description);
    updateTag('meta[name="twitter:url"]', 'content', url);
    updateLink('canonical', url);

    setPageJsonLd({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description,
      url,
    });
  }

  return null;
}
