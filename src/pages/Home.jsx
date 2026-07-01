const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Abdugafforov Nurmuhammad</h1>
            <p>Men Najot Ta'limda stajyor sifatida bilimimni oshirmoqdaman. Front-end yo'nalishida React, Vue va qisman Next.js texnologiyalarini bilaman. Dasturlashga ilk qadamni Fayz Ta'limda Full-Stack yo'nalishida o'qib boshlaganman. Keyin PDP akademiyasida C++ tilini, hozirda esa Najot Ta'limda Full-Stack yo'nalishini o'rganmoqdaman.</p>
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
            <a href="#">Barchasini ko'rish</a>
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
              <h4>C++ orqali algoritmik muammolarni hal qilish</h4>
              <div className="post-meta">
                <span>15 May 2023</span>
                <div className="divider"></div>
                <span>C++, Algoritmlar</span>
              </div>
              <p>PDP akademiyasida o'rgangan C++ bilimlarim asosida murakkab masalalarni optimal usulda ishlash yo'llari haqida tushunchalar.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-works">
        <div className="container">
          <h3>Tanlangan ishlar</h3> 
          
          <div className="work-card">
            <div className="work-image">
              <img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://imtihon-azure-eta.vercel.app/&size=256" alt="Loyiha logosi" style={{ objectFit: 'contain', padding: '20px', backgroundColor: '#EDF7FA' }} />
            </div>
            <div className="work-content">
              <h4><a href="https://imtihon-azure-eta.vercel.app/" target="_blank" rel="noreferrer">Najot Ta'lim - Full-Stack Loyihalarim</a></h4>
              <div className="work-meta">
                <span className="work-year">2024</span>
                <span className="work-category">Full-Stack</span>      
              </div>
              <p>Najot Ta'limda o'rganilayotgan ilg'or backend va frontend texnologiyalari yordamida yaratilayotgan real loyihalar.</p>
            </div>
          </div>
                                                               
          <div className="work-card">
            <div className="work-image"> 
            </div>
            <div className="work-content">
              <h4>Fayz Ta'lim - Python va Django da ishlar</h4>
              <div className="work-meta">
                <span className="work-year">2023</span>
                <span className="work-category">Backend</span>
              </div>
              <p>Fayz Ta'limda o'qish davrida Python va Django freymvorki orqali qilingan dastlabki backend loyihalarim tajribasi.</p>
            </div>
          </div>

          <div className="work-card">
            <div className="work-image">
              <img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://imtihon-azure-eta.vercel.app/&size=256" alt="Loyiha logosi" style={{ objectFit: 'contain', padding: '20px', backgroundColor: '#EDF7FA' }} />
            </div>
            <div className="work-content">
              <h4>HTML, CSS va Bootstrap - Ilk qadamlar</h4>
              <div className="work-meta">
                <span className="work-year">2022</span>
                <span className="work-category">Frontend</span>
              </div>
              <p>Dasturlashga kirib kelgan ilk vaqtlarimda asosan HTML, CSS va Bootstrap dan foydalanib yozilgan statik veb-sahifalar.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
