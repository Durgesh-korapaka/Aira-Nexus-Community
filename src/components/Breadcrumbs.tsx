import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'
import { useEffect } from 'react'

const ROUTE_NAMES: Record<string, string> = {
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
}

export default function Breadcrumbs() {
  const location = useLocation()
  const path = location.pathname

  useEffect(() => {
    if (path === '/') return
    const crumbs = path.split('/').filter(Boolean)
    const items = crumbs.map((c, i) => {
      const href = '/' + crumbs.slice(0, i + 1).join('/')
      return { name: ROUTE_NAMES[href] ?? decodeURIComponent(c), url: href }
    })
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-breadcrumb', 'true')
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://airanexus.com' },
        ...items.map((it, i) => ({
          '@type': 'ListItem',
          position: i + 2,
          name: it.name,
          item: `https://airanexus.com${it.url}`,
        })),
      ],
    })
    document.head.appendChild(script)
    return () => {
      document.head.removeChild(script)
    }
  }, [path])

  if (path === '/') return null

  const segments = path.split('/').filter(Boolean)
  const items = segments.map((seg, i) => {
    const href = '/' + segments.slice(0, i + 1).join('/')
    return { name: ROUTE_NAMES[href] ?? decodeURIComponent(seg), url: href }
  })

  return (
    <nav aria-label="Breadcrumb" className="container-custom pt-24">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-charcoal-500">
        <li>
          <Link
            to="/"
            aria-label="Home"
            className="inline-flex items-center transition-colors hover:text-primary-600"
          >
            <Home className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </li>
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <li key={item.url} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5 text-charcoal-300" aria-hidden="true" />
              {isLast ? (
                <span className="font-medium text-charcoal-900" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link to={item.url} className="transition-colors hover:text-primary-600">
                  {item.name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
