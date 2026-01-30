'use client';

export default function NotFoundPage() {
  return (
    <div style={{
      backgroundColor: '#000',
      color: '#fff',
      fontFamily: 'monospace',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '72px', fontWeight: 'bold', color: '#C76F1A', margin: '0 0 20px 0' }}>404</h1>
      <h2 style={{ fontSize: '24px', fontWeight: 'normal', margin: '0 0 20px 0' }}>NOT FOUND</h2>
      <p style={{ fontSize: '16px', marginBottom: '30px' }}>
        The requested URL was not found on this server.
      </p>
      <a
        href="/"
        style={{
          color: '#C76F1A',
          textDecoration: 'underline',
          fontSize: '16px'
        }}
      >
        Go to Homepage
      </a>
    </div>
  );
}