import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Abdugafforov Nurmuhammad</h1>
            <p>Men Najot Ta'limda stajyor sifatida bilimimni oshirmoqdaman. Front-end yo'nalishida React, Vue va qisman Next.js texnologiyalarini bilaman. Backend bo'yicha Node.js (Express va NestJS) ni o'rtacha darajada o'zlashtirganman, C++ tilini esa oldin ko'rganman va kam bilaman. Dasturlashga ilk qadamni Fayz Ta'limda boshlaganman, hozirda esa Najot Ta'limda Full-Stack yo'nalishini chuqur o'rganmoqdaman.</p>
            <a href="https://docs.google.com/document/d/1qEWYBKG9d3wANEyCSJWEdT9gEKaQNGJ5mTuVim7I_FE/edit?pli=1&tab=t.0" target="_blank" rel="noreferrer" className="btn" style={{ display: 'inline-block' }}>Rezyumeni yuklash</a>
          </div>
          <div className="hero-image">
            <img src="https://ui-avatars.com/api/?name=Nurmuhammad&background=random&size=243" alt="Nurmuhammad" />
          </div>
        </div>
      </section>

      <section className="recent-posts">
        <div className="container">
          <div className="section-header">
            <h3>Oxirgi postlar</h3>
            <Link to="/blog">Barchasini ko'rish</Link>
          </div>
          <div className="posts-grid">
            <div className="post-card">
              <h4>React va Vue.js da dastur tuzish asoslari</h4>
              <div className="post-meta">
                <span>24 Iyun 2024</span>
                <div className="divider"></div>
                <span>Frontend, React</span>
              </div>
              <p>React, Vue va Next.js kabi zamonaviy texnologiyalar yordamida tezkor va qulay interfeyslarni qanday yaratish haqida bilimlarim va tajribalarim bo'lishiladi.</p>
            </div>
            <div className="post-card">
              <h4>Node.js, Express va NestJS yordamida API qurish</h4>
              <div className="post-meta">
                <span>15 May 2023</span>
                <div className="divider"></div>
                <span>Node.js, Backend</span>
              </div>
              <p>Backend yo'nalishida Node.js arxitekturasi va uning Express hamda NestJS freymvorklaridan foydalanib API yozish bo'yicha bilim va tajribalarim.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-works">
        <div className="container">
          <div className="section-header">
            <h3>Tanlangan ishlar</h3> 
            <Link to="/works">Barchasini ko'rish</Link>
          </div>
          
          <div className="work-card">
            <a href="https://najot-coin.vercel.app/" target="_blank" rel="noreferrer" className="work-image">
              <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=80" alt="Najot Coin loyihasi" style={{ objectFit: 'cover' }} />
            </a>
            <div className="work-content">
              <h4><a href="https://najot-coin.vercel.app/" target="_blank" rel="noreferrer">Najot Ta'lim - Full-Stack Loyihalarim</a></h4>
              <div className="work-meta">
                <span className="work-year">2026</span>
                <span className="work-category">Full-Stack</span>      
              </div>
              <p>Najot Ta'limda o'rganilayotgan ilg'or backend va frontend texnologiyalari yordamida yaratilgan "Najot Coin" tizimi.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
