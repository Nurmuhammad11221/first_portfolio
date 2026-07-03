const Works = () => {
  const projects = [
    {
      title: 'Najot Coin',
      year: '2026',
      category: 'Fullstack (React, Node.js)',
      url: 'https://najot-coin.vercel.app/',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=80',
      description: "Najot Coin loyihasi backend va frontend qismlaridan tashkil topgan to'liq (Fullstack) dastur hisoblanadi. Tizimda 3 xil foydalanuvchi roli mavjud: Superadmin, Teacher (O'qituvchi) va Student (O'quvchi). Har bir rol o'ziga xos imkoniyatlarga ega alohida panel orqali boshqariladi.",
    },
    {
      title: 'MoviesVeb',
      year: '2026',
      category: 'React',
      url: 'https://moviesveb.netlify.app/',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80',
      description: "Kino ko'rish uchun React texnologiyasida qilingan proekt. Cardlar Swagger orqali kelgan, ya'ni backend ham frontend ham bor.",
    },
    {
      title: 'E-Tarix',
      year: '2026',
      category: 'React',
      url: 'https://e-tarix-swart.vercel.app/',
      image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=900&q=80',
      description: "Proekt Hilol Nashr uchun qilingan. Tarix mavzusidagi web loyiha bo'lib, sahifalar tuzilishi va frontend UI ustida ishlangan.",
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
