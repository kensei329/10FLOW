import React, { useEffect, useRef } from 'react';
import './index.css';

function App() {
  const driveLink = "https://drive.google.com/drive/folders/1H26Lkc2TLSWgRu4HmvHEUL1i0wF1w6Bp?usp=sharing";

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

      {/* ─── Header ─── */}
      <header className="site-header">
        <div className="container header-content">
          <div className="logo-wrap">
            <img src="/logo.svg" alt="10FLOW" className="header-logo" />
          </div>
          <nav className="header-nav">
            <a href="#product" className="nav-link">製品情報</a>
            <a href="#pricing" className="nav-link">料金</a>
            <a href="#notice" className="nav-link">電子公告</a>
            <a href="#company" className="nav-link">会社情報</a>
          </nav>
        </div>
      </header>

      <main style={{ flex: 1 }}>

        {/* ─── Hero ─── */}
        <section className="hero-section">
          <div className="hero-bg-grid" />
          <div className="container hero-inner">
            <div className="hero-badge fade-in">2026年4月1日 販売開始予定</div>
            <h1 className="hero-title fade-in">
              自由診療の売上を、<br />
              <span className="brand-red">戦略的に</span>伸ばす。
            </h1>
            <p className="hero-subtitle fade-in">
              価格メニュー管理・見積書作成・キャンペーン設計を一元化。<br />
              患者ごとの最適提案で、成約率向上と業務効率化を同時に実現します。
            </p>
            <div className="hero-cta-group fade-in">
              <a href="#pricing" className="btn btn-primary btn-lg">料金・詳細を見る</a>
              <a href="#product" className="btn btn-outline btn-lg">製品を詳しく知る</a>
            </div>
            <div className="hero-stats fade-in">
              <div className="stat-item">
                <span className="stat-num">¥29,800</span>
                <span className="stat-label">月額（税抜）</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-num">3機能</span>
                <span className="stat-label">完全一元化</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-num">全国</span>
                <span className="stat-label">展開対応</span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Pain Points ─── */}
        <section id="product" className="section pain-section">
          <div className="container">
            <div className="section-header fade-in">
              <span className="section-tag">こんなお悩みはありませんか？</span>
              <h2>自由診療クリニックが<br />抱える3つの課題</h2>
            </div>
            <div className="pain-grid">
              {[
                {
                  icon: '⚠',
                  title: 'スタッフによって説明内容がバラバラ',
                  desc: '価格やキャンペーン内容がスタッフごとに異なり、患者からの信頼損失やクレームに繋がっている。',
                },
                {
                  icon: '📋',
                  title: '見積書・提案書の作成に時間がかかる',
                  desc: '手作業でのExcel作成や都度確認が発生し、診察時間の圧迫や機会損失を招いている。',
                },
                {
                  icon: '📉',
                  title: 'アップセルの機会を活かしきれない',
                  desc: '患者ニーズに合った追加提案のタイミングやトークが標準化されておらず、成約率が伸び悩んでいる。',
                },
              ].map((item, i) => (
                <div className="pain-card fade-in" key={i}>
                  <span className="pain-icon">{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Solution / Features ─── */}
        <section className="section feature-section">
          <div className="container">
            <div className="section-header fade-in">
              <span className="section-tag brand-red-tag">10FLOWの解決策</span>
              <h2>3つの機能で、<br />自由診療の収益構造を変える</h2>
              <p className="section-desc">
                10FLOWは、自由診療を提供する医療機関向けに特化した<br />
                売上最大化ソフトウェアです。
              </p>
            </div>

            <div className="feature-grid">
              <div className="feature-card feature-card--accent fade-in">
                <div className="feature-num">01</div>
                <div className="feature-icon-wrap">
                  <span className="feature-icon">💴</span>
                </div>
                <h3>価格メニュー管理</h3>
                <p>
                  施術・治療の料金体系をクラウド上で一元管理。
                  スタッフ全員が常に最新・正確な価格情報を提示できます。
                  説明のばらつきをゼロにし、患者からの信頼を高めます。
                </p>
                <ul className="feature-list">
                  <li>メニューの即時更新・全スタッフ同期</li>
                  <li>施術別・コース別の料金設定</li>
                  <li>患者向け見やすい提示フォーマット</li>
                </ul>
              </div>

              <div className="feature-card fade-in">
                <div className="feature-num">02</div>
                <div className="feature-icon-wrap">
                  <span className="feature-icon">📄</span>
                </div>
                <h3>見積書作成</h3>
                <p>
                  診察室でその場で、プロフェッショナルな見積書を数分で作成。
                  患者ごとに最適化された提案書で、納得感ある説明が可能になります。
                </p>
                <ul className="feature-list">
                  <li>テンプレートから素早く作成</li>
                  <li>患者情報・施術プランを自動反映</li>
                  <li>PDF出力・印刷・デジタル共有対応</li>
                </ul>
              </div>

              <div className="feature-card fade-in">
                <div className="feature-num">03</div>
                <div className="feature-icon-wrap">
                  <span className="feature-icon">📢</span>
                </div>
                <h3>キャンペーン設計</h3>
                <p>
                  季節・症状・患者層に合わせた戦略的なキャンペーンを設計・管理。
                  タイムリーな特別オファーで来院動機を高め、リピート率を向上させます。
                </p>
                <ul className="feature-list">
                  <li>期間限定キャンペーンの一括設定</li>
                  <li>対象患者セグメントの絞り込み</li>
                  <li>効果測定と改善サイクルの可視化</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Impact Metrics ─── */}
        <section className="section metrics-section">
          <div className="container">
            <div className="section-header fade-in" style={{ color: '#fff' }}>
              <span className="section-tag" style={{ color: '#fca5a5', borderColor: '#fca5a5' }}>導入効果</span>
              <h2 style={{ color: '#fff' }}>10FLOWが変える、<br />クリニックの現場</h2>
            </div>
            <div className="metrics-grid">
              {[
                { icon: '📈', title: '成約率の向上', desc: '患者ごとに最適化された提案が、その場での意思決定を促進。アップセルの機会を最大化します。' },
                { icon: '⚡', title: '業務効率の改善', desc: '見積書作成・料金確認の時間を大幅削減。診察に集中できる環境を整えます。' },
                { icon: '🎯', title: '説明品質の標準化', desc: 'どのスタッフが対応しても同質の情報提供。患者満足度と院の信頼性を同時に高めます。' },
                { icon: '💼', title: '戦略的な売上管理', desc: 'キャンペーン設計と効果測定で、感覚ではなくデータに基づいた収益改善が可能です。' },
              ].map((m, i) => (
                <div className="metric-card fade-in" key={i}>
                  <span className="metric-icon">{m.icon}</span>
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Sales Channels ─── */}
        <section className="section channel-section">
          <div className="container">
            <div className="channel-inner">
              <div className="channel-text fade-in">
                <span className="section-tag">導入・集客サポート</span>
                <h2>現場定着まで、<br />伴走します。</h2>
                <p>
                  導入時の設定支援や運用アドバイスを提供し、スムーズな現場定着を後押しします。
                  個別提案・デモ説明も積極的に実施しています。
                </p>
                <p>
                  医療機関への直接営業、既存顧客からの紹介、業界団体・学会・セミナーでの案内、
                  自社Webサイト・SNS・導入事例の発信を通じて、全国への展開を目指します。
                </p>
                <div className="channel-badges">
                  {['直接営業', '既存顧客紹介', '学会・セミナー', 'Web・SNS', '導入事例発信', '代理店連携'].map((b, i) => (
                    <span className="channel-badge" key={i}>{b}</span>
                  ))}
                </div>
              </div>
              <div className="channel-visual fade-in">
                <div className="channel-card-stack">
                  <div className="channel-card-item">
                    <span>🏥</span>
                    <span>クリニック直接訪問</span>
                  </div>
                  <div className="channel-card-item">
                    <span>🎓</span>
                    <span>医師向けセミナー登壇</span>
                  </div>
                  <div className="channel-card-item">
                    <span>💻</span>
                    <span>オンラインデモ対応</span>
                  </div>
                  <div className="channel-card-item">
                    <span>🤝</span>
                    <span>代理店ネットワーク拡大</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Pricing ─── */}
        <section id="pricing" className="section pricing-section">
          <div className="container">
            <div className="section-header fade-in">
              <span className="section-tag">料金プラン</span>
              <h2>明確な料金体系で、<br />導入しやすい設計</h2>
              <p className="section-desc">
                継続利用しやすい料金設計で、中長期的な収益改善をサポートします。
              </p>
            </div>
            <div className="pricing-card-wrap fade-in">
              <div className="pricing-card">
                <div className="pricing-launch-badge">2026年4月1日 販売開始予定</div>
                <h3 className="pricing-plan-name">スタンダードプラン</h3>
                <div className="pricing-row">
                  <div className="pricing-item">
                    <span className="pricing-label">初期費用</span>
                    <div className="pricing-amount">
                      <span className="pricing-yen">¥</span>
                      <span className="pricing-num">300,000</span>
                      <span className="pricing-unit">（税抜）</span>
                    </div>
                    <span className="pricing-note">設定支援・導入サポート込み</span>
                  </div>
                  <div className="pricing-divider-v" />
                  <div className="pricing-item">
                    <span className="pricing-label">月額費用</span>
                    <div className="pricing-amount">
                      <span className="pricing-yen">¥</span>
                      <span className="pricing-num">29,800</span>
                      <span className="pricing-unit">/月（税抜）</span>
                    </div>
                    <span className="pricing-note">運用アドバイス・サポート含む</span>
                  </div>
                </div>
                <div className="pricing-includes">
                  <h4>含まれるもの</h4>
                  <div className="pricing-includes-grid">
                    {[
                      '価格メニュー管理機能',
                      '見積書作成機能',
                      'キャンペーン設計機能',
                      '導入時設定支援',
                      '運用アドバイス',
                      '全国対応サポート',
                    ].map((item, i) => (
                      <div className="pricing-include-item" key={i}>
                        <span className="check-icon">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pricing-cta">
                  <a href="mailto:info@10flow.ai" className="btn btn-primary btn-lg btn-full">
                    導入のお問い合わせ・デモ申し込み
                  </a>
                  <p className="pricing-contact-note">
                    個別提案・デモ説明も積極的に実施しています。まずはお気軽にご連絡ください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 電子公告 ─── */}
        <section id="notice" className="section notice-section">
          <div className="container">
            <div className="notice-inner fade-in">
              <div className="notice-label">電子公告</div>
              <h2>電子公告</h2>
              <p>
                10FLOW株式会社の電子公告をご覧いただけます。
                以下のボタンをクリックして、Google Drive上の公開フォルダへアクセスしてください。
              </p>
              <a
                href={driveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                電子公告を閲覧する →
              </a>
            </div>
          </div>
        </section>

        {/* ─── Company Info ─── */}
        <section id="company" className="section" style={{ backgroundColor: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
          <div className="container">
            <div className="card company-card fade-in">
              <h2 style={{ fontSize: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
                会社基本情報
              </h2>
              <dl className="company-dl">
                <dt>会社名</dt>
                <dd>10FLOW株式会社</dd>

                <dt>主事業</dt>
                <dd>クリニック・病院向けの自由診療アップセルツールの販売</dd>

                <dt>住所</dt>
                <dd>〒802-0001 福岡県北九州市小倉北区浅野3丁目8−1 AIMビル 6階</dd>

                <dt>連絡先</dt>
                <dd>
                  <a href="mailto:info@10flow.ai" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>
                    info@10flow.ai
                  </a>
                </dd>
              </dl>
            </div>
          </div>
        </section>

      </main>

      {/* ─── Footer ─── */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <img src="/logo.svg" alt="10FLOW" className="footer-logo" />
          <p className="footer-tagline">自由診療の売上を、戦略的に伸ばす。</p>
          <div className="footer-links">
            <a href="mailto:info@10flow.ai">info@10flow.ai</a>
            <span className="footer-sep">|</span>
            <a href="#notice">電子公告</a>
            <span className="footer-sep">|</span>
            <a href="#company">会社情報</a>
          </div>
          <p className="footer-copy">&copy; {new Date().getFullYear()} 10FLOW Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
