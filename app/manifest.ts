import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ZIMPLAY ZW',
    short_name: 'ZIMPLAY',
    description: 'Stream the sound of Zimbabwe.',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#000000',
    theme_color: '#000000',
    categories: ['music', 'entertainment'],
    icons: [
      { src: '/zimplay-icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
      { src: '/zimplay-icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'maskable' },
    ],
  }
}
