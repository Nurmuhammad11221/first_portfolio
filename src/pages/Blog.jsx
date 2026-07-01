const Blog = () => {
  const posts = [
    {
      title: "React'da state va props: sodda tushuntirish",
      date: '24 Iyun 2024',
      category: 'React',
      text: "Componentlar orasida ma'lumot uzatish, state bilan UI holatini boshqarish va kichik misollar orqali React asoslarini mustahkamlash.",
    },
    {
      title: 'React Router bilan sahifalar orasida yurish',
      date: '12 Iyun 2024',
      category: 'React',
      text: "Portfolio va kichik ilovalarda route tuzish, NavLink orqali aktiv menyu ko'rsatish va sahifalarni tartibli ajratish haqida qaydlar.",
    },
    {
      title: "Deploy qilishda uchragan xatolar va yechimlar",
      date: '2 Iyun 2024',
      category: 'Deploy',
      text: "Loyihani serverga chiqarishda environment, build va route muammolari bilan ishlash bo'yicha amaliy qaydlar.",
    },
    {
      title: "React'da API ma'lumotlarini chiqarish",
      date: '18 May 2024',
      category: 'Frontend',
      text: "Fetch orqali ma'lumot olish, loading holatini ko'rsatish va kelgan data asosida chiroyli kartalar yasash bo'yicha o'rganganlarim.",
    },
    {
      title: 'Vue va React: menga sezilgan farqlar',
      date: '6 May 2024',
      category: 'Frontend',
      text: "Ikkala texnologiyada component, state va template yozish uslublarini solishtirib, qaysi joylari qulay tuyulganini yozib boraman.",
    },
  ];

  return (
    <section className="blog-page page-entry">
      <div className="container">
        <div className="blog-header">
          <h1 className="page-title">Blog</h1>
          <p>O'rganayotgan texnologiyalarim, loyihalarda uchragan xatolar va dasturlash bo'yicha qisqa qaydlar.</p>
        </div>

        <div className="blog-grid">
          {posts.map((post) => (
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
