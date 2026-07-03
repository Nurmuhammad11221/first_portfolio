import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Works = () => {
  const { t } = useContext(AppContext);

  return (
    <section className="works-page page-entry">
      <div className="container">
        <div className="works-header">
          <h1 className="page-title">{t.works.title}</h1>
          <p>{t.works.description}</p>
        </div>

        <div className="works-list">
          {t.works.projects.map((project) => (
            <article className="work-card" key={project.title}>
              <a className="work-image" href={project.url} target="_blank" rel="noreferrer">
                <img src={project.image} alt={`${project.title} logo`} />
              </a>
              <div className="work-content">
                <h4>
                  <a href={project.url} target="_blank" rel="noreferrer">
                    {project.title}
                  </a>
                </h4>
                <div className="work-meta">
                  <span className="work-year">{project.year}</span>
                  <span className="work-category">{project.category}</span>
                </div>
                <p>{project.description}</p>
                <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
                  {t.home.featuredProjectLink}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
