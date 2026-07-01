const Contact = () => {
  const contacts = [
    {
      label: 'Telefon',
      value: '+998 91 798 77 00',
      href: 'tel:+9987987700',
      icon: 'TEL',
      className: 'phone',
    },
    {
      label: 'Telegram',
      value: '@obonetnedastupen',
      href: 'https://t.me/obonetnedastupen',
      icon: 'TG',
      className: 'telegram',
    },
    {
      label: 'Gmail',
      value: 'ituchun935@gmail.com',
      href: 'mailto:ituchun935@gmail.com',
      icon: 'GM',
      className: 'gmail',
    },
    {
      label: 'GitHub',
      value: 'Nurmuhammad11221',
      href: 'https://github.com/Nurmuhammad11221',
      icon: 'GH',
      className: 'github',
    },
  ];

  return (
    <section className="contact-page page-entry">
      <div className="container">
        <div className="contact-header">
          <h1 className="page-title">Aloqa</h1>
          <p>Savol, taklif yoki loyiha bo'lsa, quyidagi manzillar orqali bog'lanishingiz mumkin.</p>
        </div>
                                        
        <div className="contact-grid">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              className={`contact-card ${contact.className}`}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <span className="contact-icon">{contact.icon}</span>
              <span className="contact-info">
                <span>{contact.label}</span>
                <strong>{contact.value}</strong>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
