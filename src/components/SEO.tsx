import { useEffect } from 'react'

interface SEOProps {
  title: string
  description?: string
  path?: string
  image?: string
  type?: string
}

const BASE_URL = 'https://airanexus.com'
const DEFAULT_IMAGE = 'https://airanexus.com/favicon-512x512.png'

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function setJsonLd(id: string, json: object) {
  let el = document.head.querySelector<HTMLScriptElement>(`script[data-seo="${id}"]`)
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.setAttribute('data-seo', id)
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(json)
}

export default function SEO({
  title,
  description = 'AiraNexus is the AI-powered community management platform for apartments, gated communities, and residential complexes.',
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
}: SEOProps) {
  useEffect(() => {
    const fullTitle = title.includes('AiraNexus') ? title : `${title} — AiraNexus`
    const url = `${BASE_URL}${path}`

    document.title = fullTitle
    setMeta('name', 'description', description)
    setLink('canonical', url)

    // Open Graph
    setMeta('property', 'og:type', type)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:image', image)
    setMeta('property', 'og:site_name', 'AiraNexus')
    setMeta('property', 'og:locale', 'en_IN')

    // Twitter
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:url', url)
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', image)

    // JSON-LD breadcrumb
    setJsonLd('breadcrumb', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: BASE_URL,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: title,
          item: url,
        },
      ],
    })
  }, [title, description, path, image, type])

  return null
}
