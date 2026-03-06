export function generateWebsiteStructuredData(url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Abraham Samuel',
    description:
      "Junior Software Developer with 2 years of experience building web applications with React, TypeScript, and Tailwind CSS.",
    url: url,
    author: {
      '@type': 'Person',
      name: 'Abraham Samuel Alejolowo',
      url: 'https://github.com/Abrahamalejolowo',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${url}/projects`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generatePersonStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Abraham Samuel Alejolowo',
    url: 'https://abraham-dev.vercel.app',
    sameAs: [
      'https://github.com/Abrahamalejolowo',
      'https://linkedin.com/in/abraham-alejolowo-b7ab97319',
    ],
    jobTitle: 'Junior Software Developer',
    email: 'abrahamalejolowo@gmail.com',
    telephone: '+2348136122120',
    areaServed: {
      '@type': 'Place',
      name: 'Ilorin, Kwara State, Nigeria',
    },
  }
}

export function generateBreadcrumbStructuredData(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}