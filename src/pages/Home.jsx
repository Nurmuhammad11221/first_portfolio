import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Home = () => {
  const { t } = useContext(AppContext);

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>{t.home.heroTitle}</h1>
            <p>{t.home.heroText}</p>
            <a href={t.home.featuredProjectUrl} target="_blank" rel="noreferrer" className="btn" style={{ display: 'inline-block' }}>
              {t.home.resumeButton}
            </a>
          </div>
          <div className="hero-image">
            <img src="https://ui-avatars.com/api/?name=Nurmuhammad&background=random&size=243" alt="Nurmuhammad" />
          </div>
        </div>
      </section>

      <section className="recent-posts">
        <div className="container">
          <div className="section-header">
            <h3>{t.home.recentPosts}</h3>
            <Link to="/blog">{t.home.viewAll}</Link>
          </div>
          <div className="posts-grid">
            {t.blog.posts.slice(0, 2).map((post) => (
              <div className="post-card" key={post.title}>
                <h4>{post.title}</h4>
                <div className="post-meta">
                  <span>{post.date}</span>
                  <div className="divider"></div>
                  <span>{post.category}</span>
                </div>
                <p>{post.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-works">
        <div className="container">
          <div className="section-header">
            <h3>{t.home.featuredWorks}</h3>
            <Link to="/works">{t.home.viewAll}</Link>
          </div>

          <div className="work-card">
            <a href={t.home.featuredProjectUrl} target="_blank" rel="noreferrer" className="work-image">
              <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=80" alt={t.home.featuredProjectTitle} style={{ objectFit: 'cover' }} />
            </a>
            <div className="work-content">
              <h4>
                <a href={t.home.featuredProjectUrl} target="_blank" rel="noreferrer">
                  {t.home.featuredProjectTitle}
                </a>
              </h4>
              <div className="work-meta">
                <span className="work-year">2026</span>
                <span className="work-category">Full-Stack</span>
              </div>
              <p>{t.home.featuredProjectDescription}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
