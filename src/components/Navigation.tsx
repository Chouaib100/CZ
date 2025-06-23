
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '@/contexts/TranslationContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: t('nav.home'), id: 'hero', isSection: true },
    { label: t('nav.about'), id: 'about', isSection: true },
    { label: t('nav.work'), path: '/work', isSection: false },
    { label: t('nav.contact'), id: 'contact', isSection: true },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-accent">
            CZ
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              item.isSection ? (
                <button
                  key={item.id}
                  onClick={() => {
                    if (location.pathname !== '/') {
                      window.location.href = `/#${item.id}`;
                    } else {
                      scrollToSection(item.id);
                    }
                  }}
                  className="text-white hover:text-accent transition-colors duration-300 font-medium"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  className="text-white hover:text-accent transition-colors duration-300 font-medium"
                >
                  {item.label}
                </Link>
              )
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button and Language Switcher */}
          <div className="md:hidden flex items-center space-x-3">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-accent"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4 bg-primary/95 rounded-lg p-4 backdrop-blur-md border border-accent/20">
              {navItems.map((item) => (
                item.isSection ? (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (location.pathname !== '/') {
                        window.location.href = `/#${item.id}`;
                      } else {
                        scrollToSection(item.id);
                      }
                    }}
                    className="text-white hover:text-accent transition-colors duration-300 font-medium text-left py-2"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="text-white hover:text-accent transition-colors duration-300 font-medium text-left py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
