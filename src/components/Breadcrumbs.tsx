import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useEffect, useMemo } from 'react';

interface BreadcrumbItem {
  name: string;
  path: string;
}

const routeNames: Record<string, string> = {
  '/features': 'Features',
  '/solutions': 'Solutions',
  '/pricing': 'Pricing',
  '/about': 'About',
  '/contact': 'Contact',
  '/request-demo': 'Request Demo',
  '/blog': 'Blog',
  '/faq': 'FAQ',
  '/privacy': 'Privacy Policy',
  '/terms': 'Terms of Service',
  '/login': 'Login',
  '/apartment-management-software': 'Apartment Management Software',
  '/society-management-software': 'Society Management Software',
  '/maintenance-billing-software': 'Maintenance Billing Software',
  '/mygate-alternative': 'MyGate Alternative',
  '/community-management-platform': 'Community Management Platform',
};

export default function Breadcrumbs() {
  const location = useLocation();
  const path = location.pathname;

  const items = useMemo<BreadcrumbItem[]>(() => {
    if (path === '/') return [];
    const segments = path.split('/').filter(Boolean);
    const result: BreadcrumbItem[] = [{ name: 'Home', path: '/' }];
    let currentPath = '';
    segments.forEach((segment) => {
      currentPath += '/' + segment;
      const name = routeNames[currentPath] || segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
      result.push({ name, path: currentPath });
    });
    return result;
  }, [path]);

  useEffect(() => {
    if (items.length === 0) return;

    const existing = document.getElementById('breadcrumb-jsonld');
    if (existing) existing.remove();

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `https://airanexus.com${item.path}`,
      })),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'breadcrumb-jsonld';
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('breadcrumb-jsonld');
      if (el) el.remove();
    };
  }, [items]);

  if (path === '/' || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="container-custom pt-24 lg:pt-28 pb-0">
      <ol className="flex items-center flex-wrap gap-1 text-sm text-neutral-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1">
              {index === 0 ? (
                <Link
                  to={item.path}
                  className="flex items-center gap-1 hover:text-primary-500 transition-colors"
                  aria-label="Go to homepage"
                >
                  <Home className="w-3.5 h-3.5" aria-hidden="true" />
                  <span className="sr-only">Home</span>
                </Link>
              ) : isLast ? (
                <span aria-current="page" className="text-charcoal-900 font-medium">
                  {item.name}
                </span>
              ) : (
                <Link to={item.path} className="hover:text-primary-500 transition-colors">
                  {item.name}
                </Link>
              )}
              {!isLast && <ChevronRight className="w-3.5 h-3.5 text-neutral-300" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
