import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AppContext } from './context/AppContext';
import { translations } from './translations';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Works from './pages/Works';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  const [lang, setLang] = useState('uz');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedLang = localStorage.getItem('portfolio-lang');
    const storedTheme = localStorage.getItem('portfolio-theme');

    if (storedLang) {
      setLang(storedLang);
    }
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('portfolio-lang', lang);
  }, [lang]);

  const t = translations[lang] || translations.uz;

  return (
    <AppContext.Provider value={{ lang, setLang, theme, setTheme, t }}>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/works" element={<Works />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
