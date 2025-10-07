import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'
import Image from 'next/image'

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Image
            src="/img/logo.png"   // puxa de public/img/logo.png
            alt="Logo AgroMart"
            width={32}
            height={32}
            priority
          />
          <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
            AgroMart
          </span>
        </div>
      ),
      // links que aparecem à direita
      links: [
        { text: 'GitHub', url: 'https://github.com/SEU-USUARIO/SEU-REPO' },
        { text: 'LinkedIn', url: 'https://www.linkedin.com/in/SEU-LINKEDIN' },
        { text: 'Contato', url: '/contato' }, // pode ser página interna
      ],
    },
  }
}
