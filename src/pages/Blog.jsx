import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Blog = () => {
  const { t } = useContext(AppContext);

  return (
    <section className="blog-page page-entry">
      <div className="container">
        <div className="blog-header">
          <h1 className="page-title">{t.blog.title}</h1>
          <p>{t.blog.description}</p>
        </div>

        <div className="blog-grid">
          {t.blog.posts.map((post) => (
            <article className="blog-card" key={post.title}>
              <span className="blog-tag">{post.category}</span>
              <h2>{post.title}</h2>
              <div className="post-meta">
                <span>{post.date}</span>
                <div className="divider"></div>
                <span>{post.category}</span>
              </div>
              <p>{post.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
