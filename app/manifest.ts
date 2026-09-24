import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Aayush Srivastava — Architecture Atelier',
    short_name: 'Aayush.Arch',
    description:
      'Architecture Portfolio of Aayush Srivastava (B.Arch, Vellore Institute of Technology, Vellore). Modern, sustainable residential sanctuaries, cultural pavilions, and tectonic modernism.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAFAFA',
    theme_color: '#111111',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
