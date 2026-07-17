import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

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
}

export default function Breadcrumbs() {
  const location = useLocation()
  const path = location.pathname

  useEffect(() => {
    const existing = document.getElementById('breadcrumb-jsonld')
    if (existing) existing.remove()

    if (path === '/' || !routeNames[path]) return

    const items = [
      { name: 'Home', url: 'https://airanexus.com/' },
      { name: routeNames[path], url: `https://airanexus.com${path}` },
    ].map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    }))

    const el = document.createElement('script')
    el.id = 'breadcrumb-jsonld'
    el.type = 'application/ld+json'
    el.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items,
    })
    document.head.appendChild(el)

    return () => {
      const el2 = document.getElementById('breadcrumb-jsonld')
      if (el2) el2.remove()
    }
  }, [path])

  if (path === '/' || !routeNames[path]) return null

  return (
    <nav aria-label="Breadcrumb" className="border-b border-charcoal-100 bg-white/60 backdrop-blur-sm">
      <div className="container-custom flex items-center gap-1.5 py-3 text-sm">
        <Link
          to="/"
          className="flex items-center gap-1 text-charcoal-500 transition-colors hover:text-primary-600"
        >
          <Home className="h-3.5 w-3.5" />
          <span className="sr-only">Home</span>
        </Link>
        <ChevronRight className="h-3.5 w-3.5 text-charcoal-300" aria-hidden="true" />
        <span className="font-medium text-charcoal-700" aria-current="page">
          {routeNames[path]}
        </span>
      </div>
    </nav>
  )
}
