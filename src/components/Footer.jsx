import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="contact-cta" style={{ marginBottom: '30px' }}>
          <h3 style={{ marginBottom: '15px', color: '#21243D' }}>Loyihangiz bormi yoki savollaringiz?</h3>
          <Link to="/contact" className="btn" style={{ display: 'inline-block', fontSize: '1.1rem', padding: '12px 35px', borderRadius: '50px', background: '#FF6464', color: '#fff', textDecoration: 'none', fontWeight: 'bold', boxShadow: '0 4px 10px rgba(255, 100, 100, 0.3)' }}>
            Men bilan bog'lanish (Contact with me)
          </Link>
        </div>
        <p>Copyright © {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
