import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  path?: string
  image?: string
}

const SITE_NAME = 'Aira Nexus'
const SITE_URL = 'https://airanexus.com'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`

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

function setJsonLd(id: string, data: Record<string, unknown>) {
  let el = document.getElementById(id) as HTMLScriptElement | null
  if (!el) {
    el = document.createElement('script')
    el.id = id
    el.type = 'application/ld+json'
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

export default function SEO({ title, description, path = '', image }: SEOProps) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`
  const url = `${SITE_URL}${path}`
  const ogImage = image ?? DEFAULT_IMAGE

  useEffect(() => {
    document.title = fullTitle
    setMeta('name', 'description', description)
    setLink('canonical', url)

    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:image', ogImage)
    setMeta('property', 'og:site_name', SITE_NAME)
    setMeta('property', 'og:locale', 'en_US')

    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:url', url)
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', ogImage)

    setJsonLd('seo-jsonld-page', {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: fullTitle,
      description,
      url,
      image: ogImage,
      isPartOf: {
        '@type': 'WebSite',
        name: SITE_NAME,
        url: SITE_URL,
      },
    })

    return () => {
      const el = document.getElementById('seo-jsonld-page')
      if (el) el.remove()
    }
  }, [fullTitle, description, url, ogImage])

  return null
}
