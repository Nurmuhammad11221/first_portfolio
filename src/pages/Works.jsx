const Works = () => {
  const projects = [
    {
      title: 'E-Tarix',
      year: '2026',
      category: 'React',
      url: 'https://e-tarix-swart.vercel.app/',
      image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=900&q=80',
      description: "Proekt Hilol Nashr uchun qilingan. Tarix mavzusidagi web loyiha bo'lib, sahifalar tuzilishi va frontend UI ustida ishlangan.",
    },
    {
      title: 'MoviesVeb',
      year: '2026',
      category: 'React',
      url: 'https://moviesveb.netlify.app/',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80',
      description: "Kino ko'rish uchun React texnologiyasida qilingan proekt. Cardlar Swagger orqali kelgan, ya'ni backend ham frontend ham bor.",
    },
  ];

  return (
    <section className="works-page page-entry">
      <div className="container">
        <div className="works-header">
          <h1 className="page-title">Loyihalar</h1>
          <p>Hozirgacha qilgan ishlarim va amaliy frontend loyihalarim.</p>
        </div>

        <div className="works-list">
          {projects.map((project) => (
            <article className="work-card" key={project.title}>
              <a className="work-image" href={project.url} target="_blank" rel="noreferrer">
                <img src={project.image} alt={`${project.title} logosi`} />
              </a>
              <div className="work-content">
                <h4>
                  <a href={project.url} target="_blank" rel="noreferrer">{project.title}</a>
                </h4>
                <div className="work-meta">
                  <span className="work-year">{project.year}</span>
                  <span className="work-category">{project.category}</span>
                </div>
                <p>{project.description}</p>
                <a className="project-link" href={project.url} target="_blank" rel="noreferrer">Loyihani ko'rish</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
