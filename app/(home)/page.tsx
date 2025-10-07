import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'AgroMart',
};

export default function HomePage() {
  return (
    <main
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: 'rgba(240, 248, 241, 0.29)',
      }}
    >
      <Image
        src="/img/logo.png"   // coloca sua logo em public/img/logo.png
        alt="Logo AgroMart"
        width={80}
        height={80}
        style={{ marginBottom: '1rem' }}
      />

      <h1
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
        }}
      >
        AgroMart
      </h1>

      <p
        style={{
          maxWidth: '600px',
          fontSize: '1.1rem',
          color: '#0c0c0cff',
          marginBottom: '2rem',
        }}
      >
        Bem-vindo à plataforma AgroMart!  
        Aqui você encontra toda a documentação e guias para começar sua própria CSA.
      </p>

      <Link
        href="/docs"
        style={{
          backgroundColor: '#159044ff',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: '8px',
          fontWeight: '600',
          textDecoration: 'none',
        }}
      >
        📖 Acessar documentação
      </Link>
      
    </main>
  );
}
