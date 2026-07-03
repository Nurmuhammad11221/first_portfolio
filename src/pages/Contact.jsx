import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Contact = () => {
  const { t } = useContext(AppContext);

  return (
    <section className="contact-page page-entry">
      <div className="container">
        <div className="contact-header">
          <h1 className="page-title">{t.contact.title}</h1>
          <p>{t.contact.description}</p>
        </div>

        <div className="contact-grid">
          {t.contact.cards.map((contact) => (
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
