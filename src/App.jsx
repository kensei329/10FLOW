import React from 'react';
import './index.css';

function App() {
  const driveLink = "https://drive.google.com/drive/folders/1H26Lkc2TLSWgRu4HmvHEUL1i0wF1w6Bp?usp=sharing";

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <header className="site-header">
        <div className="container header-content">
          <div className="logo">10FLOW</div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ flex: 1 }}>
        {/* Hero Section */}
        <section className="section" style={{ textAlign: 'center', padding: '6rem 0' }}>
          <div className="container">
            <h1>電子公告</h1>
            <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.125rem', color: 'var(--color-text-muted)' }}>
              10FLOW株式会社の電子公告をご覧いただけます。
              以下のボタンをクリックして、Google Drive上の公開フォルダへアクセスしてください。
            </p>
            <a 
              href={driveLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
              style={{ fontSize: '1.25rem', padding: '1rem 2.5rem' }}
            >
              電子公告を閲覧する
            </a>
          </div>
        </section>

        {/* Company Info Section */}
        <section className="section" style={{ backgroundColor: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
          <div className="container">
            <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>会社基本情報</h2>
              
              <dl style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, auto) 1fr', gap: '1rem' }}>
                <dt style={{ fontWeight: '600', color: 'var(--color-text-muted)' }}>会社名</dt>
                <dd style={{ fontWeight: '500' }}>10FLOW株式会社</dd>

                <dt style={{ fontWeight: '600', color: 'var(--color-text-muted)' }}>主事業</dt>
                <dd>クリニック・病院向けの自由診療アップセルツールの販売</dd>

                <dt style={{ fontWeight: '600', color: 'var(--color-text-muted)' }}>住所</dt>
                <dd>〒802-0001 福岡県北九州市小倉北区浅野3丁目8−1 AIMビル 6階</dd>

                <dt style={{ fontWeight: '600', color: 'var(--color-text-muted)' }}>連絡先</dt>
                <dd><a href="mailto:info@10flow.ai" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>info@10flow.ai</a></dd>
              </dl>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} 10FLOW Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
