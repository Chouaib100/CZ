
import { Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const footerLinks = [
    { label: 'Home', id: 'hero', isSection: true },
    { label: 'About', id: 'about', isSection: true },
    { label: 'Work', path: '/work', isSection: false },
    { label: 'Contact', id: 'contact', isSection: true },
  ];

  return (
    <footer className="bg-primary border-t border-accent/20 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-accent mb-2">Chouaib Zouine</h3>
            <p className="text-gray-300">Web Developer & Designer</p>
          </div>

          <div className="flex space-x-8 mb-6 md:mb-0">
            {footerLinks.map((link) => (
              link.isSection ? (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-300 hover:text-accent transition-colors duration-300"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-gray-300 hover:text-accent transition-colors duration-300"
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
        </div>

        <div className="border-t border-accent/20 mt-8 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center">
            © 2025 Chouaib Zouine. Made with{' '}
            <Heart className="h-4 w-4 text-red-500 mx-2 animate-pulse" />
            and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
