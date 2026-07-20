import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const routeNames: Record<string, string> = {
  '/': 'Home',
  '/features': 'Features',
  '/solutions': 'Solutions',
  '/pricing': 'Pricing',
  '/about': 'About Us',
  '/contact': 'Contact',
  '/request-demo': 'Request Demo',
  '/blog': 'Blog',
  '/faq': 'FAQ',
  '/login': 'Login',
  '/privacy': 'Privacy Policy',
  '/terms': 'Terms of Service',
  '/apartment-management-software': 'Apartment Management Software',
  '/society-management-software': 'Society Management Software',
  '/maintenance-billing-software': 'Maintenance Billing Software',
  '/mygate-alternative': 'MyGate Alternative',
  '/community-management-platform': 'Community Management Platform',
};

export default function Breadcrumbs() {
  const location = useLocation();

  useEffect(() => {
    const items = [
      { name: 'Home', url: 'https://airanexus.com/' },
      { name: routeNames[location.pathname] ?? 'Page', url: `https://airanexus.com${location.pathname}` },
    ];
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo', 'breadcrumb-jsonld');
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        item: item.url,
      })),
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [location.pathname]);

  if (location.pathname === '/') return null;

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: routeNames[location.pathname] ?? 'Page', path: location.pathname },
  ];

  return (
    <nav aria-label="Breadcrumb" className="border-b border-charcoal-100 bg-white">
      <div className="container-custom py-3">
        <ol className="flex items-center gap-1.5 text-sm text-charcoal-500">
          <li>
            <Link
              to="/"
              className="inline-flex items-center gap-1 transition-colors hover:text-primary-600"
            >
              <Home className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          {crumbs.map((crumb, i) => (
            <li key={crumb.path} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5 text-charcoal-300" aria-hidden="true" />
              {i === crumbs.length - 1 ? (
                <span className="font-medium text-charcoal-900" aria-current="page">
                  {crumb.name}
                </span>
              ) : (
                <Link to={crumb.path} className="transition-colors hover:text-primary-600">
                  {crumb.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
