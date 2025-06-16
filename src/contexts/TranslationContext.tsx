
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.work': 'Work',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': '👋',
    'hero.title': "Hello, I'm",
    'hero.name': 'Chouaib Zouine',
    'hero.subtitle': 'I build high-performance, responsive websites across various industries. Specializing in modern web technologies and creating exceptional user experiences.',
    'hero.seeWork': 'See My Work',
    'hero.contactMe': 'Contact Me',
    
    // About Section
    'about.title': 'About',
    'about.me': 'Me',
    'about.subtitle': 'Passionate web developer with expertise in creating modern, scalable web applications. I transform ideas into digital experiences that engage and inspire.',
    'about.professional': 'Professional Web Developer',
    'about.bio1': 'With years of experience in web development, I specialize in creating high-performance, responsive websites that deliver exceptional user experiences. My expertise spans from frontend technologies like React and modern CSS to backend development with PHP and Laravel.',
    'about.bio2': "I'm passionate about staying current with the latest web technologies and best practices, ensuring that every project I work on is built with scalability, performance, and user experience in mind.",
    'about.downloadCV': 'Download CV',
    'about.responsive': 'Responsive Design',
    'about.responsiveDesc': 'Mobile-first approach ensuring perfect user experience across all devices.',
    'about.cleanCode': 'Clean Code',
    'about.cleanCodeDesc': 'Writing maintainable, scalable code following industry best practices.',
    'about.modern': 'Modern Technologies',
    'about.modernDesc': 'Leveraging the latest web technologies for optimal performance.',
    'about.skills': 'Technical',
    'about.skillsSpan': 'Skills',
    
    // Projects Section
    'projects.title': 'Featured',
    'projects.work': 'Work',
    'projects.subtitle': 'A selection of my best projects and website templates that showcase modern design and functionality.',
    'projects.viewTemplate': 'View Template',
    'projects.viewAllWork': 'View All Work',
    'projects.ecommerce': 'E-Commerce Platform',
    'projects.ecommerceDesc': 'Modern online shopping experience with seamless checkout and product showcase.',
    'projects.portfolio': 'Creative Portfolio',
    'projects.portfolioDesc': 'Stunning portfolio website showcasing creative work with smooth animations.',
    'projects.business': 'Business Landing Page',
    'projects.businessDesc': 'Professional landing page designed to convert visitors into customers.',
    'projects.restaurant': 'Restaurant Website',
    'projects.restaurantDesc': 'Appetizing restaurant website with online ordering and reservation system.',
    
    // Contact Section
    'contact.title': 'Get In',
    'contact.touch': 'Touch',
    'contact.subtitle': "Ready to start your next project? Let's discuss how I can help bring your ideas to life.",
    'contact.connect': "Let's Connect",
    'contact.connectDesc': "I'm always interested in discussing new opportunities and exciting projects. Whether you need a complete website, want to improve your existing site, or just have a question, feel free to reach out.",
    'contact.email': 'Email',
    'contact.location': 'Location',
    'contact.locationValue': 'Available Worldwide',
    'contact.followMe': 'Follow Me',
    'contact.name': 'Name',
    'contact.namePlaceholder': 'Your name',
    'contact.emailPlaceholder': 'your.email@example.com',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Tell me about your project...',
    'contact.sendMessage': 'Send Message',
    'contact.messageSent': 'Message Sent!',
    'contact.messageSuccess': "Thank you for your message. I'll get back to you soon!",
    'contact.error': 'Error',
    'contact.fillFields': 'Please fill in all fields.',
    
    // Footer
    'footer.developer': 'Web Developer & Designer',
    'footer.madeWith': '© 2025 Chouaib Zouine. Made with',
    'footer.coffee': 'and lots of coffee',
    
    // Work Page
    'work.back': 'Back to Home',
    'work.title': 'My',
    'work.workTitle': 'Work',
    'work.subtitle': 'Explore my collection of website templates and projects, each crafted with attention to detail and modern design principles.',
    'work.mobileApp': 'Mobile App Landing',
    'work.mobileAppDesc': 'Modern landing page for mobile applications with interactive elements.',
    'work.blog': 'Blog Platform',
    'work.blogDesc': 'Clean and elegant blog platform with advanced content management.',
    'work.corporate': 'Corporate Website',
    'work.corporateDesc': 'Professional corporate website with company information and services.',
    'work.realEstate': 'Real Estate Portal',
    'work.realEstateDesc': 'Complete real estate platform with property listings and search functionality.',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.work': 'Travaux',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': '👋',
    'hero.title': 'Bonjour, je suis',
    'hero.name': 'Chouaib Zouine',
    'hero.subtitle': 'Je crée des sites web performants et réactifs dans diverses industries. Spécialisé dans les technologies web modernes et la création d\'expériences utilisateur exceptionnelles.',
    'hero.seeWork': 'Voir Mon Travail',
    'hero.contactMe': 'Me Contacter',
    
    // About Section
    'about.title': 'À',
    'about.me': 'Propos',
    'about.subtitle': 'Développeur web passionné avec une expertise dans la création d\'applications web modernes et évolutives. Je transforme les idées en expériences numériques qui engagent et inspirent.',
    'about.professional': 'Développeur Web Professionnel',
    'about.bio1': 'Avec des années d\'expérience en développement web, je me spécialise dans la création de sites web performants et réactifs qui offrent des expériences utilisateur exceptionnelles. Mon expertise s\'étend des technologies frontend comme React et CSS moderne au développement backend avec PHP et Laravel.',
    'about.bio2': 'Je suis passionné par les dernières technologies web et les meilleures pratiques, m\'assurant que chaque projet sur lequel je travaille est construit avec l\'évolutivité, la performance et l\'expérience utilisateur à l\'esprit.',
    'about.downloadCV': 'Télécharger CV',
    'about.responsive': 'Design Réactif',
    'about.responsiveDesc': 'Approche mobile-first garantissant une expérience utilisateur parfaite sur tous les appareils.',
    'about.cleanCode': 'Code Propre',
    'about.cleanCodeDesc': 'Écriture de code maintenable et évolutif suivant les meilleures pratiques de l\'industrie.',
    'about.modern': 'Technologies Modernes',
    'about.modernDesc': 'Exploitation des dernières technologies web pour des performances optimales.',
    'about.skills': 'Compétences',
    'about.skillsSpan': 'Techniques',
    
    // Projects Section
    'projects.title': 'Travaux',
    'projects.work': 'Sélectionnés',
    'projects.subtitle': 'Une sélection de mes meilleurs projets et modèles de sites web qui présentent un design moderne et des fonctionnalités.',
    'projects.viewTemplate': 'Voir le Modèle',
    'projects.viewAllWork': 'Voir Tous les Travaux',
    'projects.ecommerce': 'Plateforme E-Commerce',
    'projects.ecommerceDesc': 'Expérience d\'achat en ligne moderne avec commande fluide et vitrine de produits.',
    'projects.portfolio': 'Portfolio Créatif',
    'projects.portfolioDesc': 'Site portfolio époustouflant présentant un travail créatif avec des animations fluides.',
    'projects.business': 'Page d\'Atterrissage Business',
    'projects.businessDesc': 'Page d\'atterrissage professionnelle conçue pour convertir les visiteurs en clients.',
    'projects.restaurant': 'Site Web de Restaurant',
    'projects.restaurantDesc': 'Site web de restaurant appétissant avec commande en ligne et système de réservation.',
    
    // Contact Section
    'contact.title': 'Entrer En',
    'contact.touch': 'Contact',
    'contact.subtitle': 'Prêt à commencer votre prochain projet ? Discutons de la façon dont je peux vous aider à donner vie à vos idées.',
    'contact.connect': 'Connectons-nous',
    'contact.connectDesc': 'Je suis toujours intéressé à discuter de nouvelles opportunités et de projets passionnants. Que vous ayez besoin d\'un site web complet, que vous souhaitiez améliorer votre site existant, ou que vous ayez simplement une question, n\'hésitez pas à me contacter.',
    'contact.email': 'Email',
    'contact.location': 'Localisation',
    'contact.locationValue': 'Disponible dans le Monde Entier',
    'contact.followMe': 'Suivez-moi',
    'contact.name': 'Nom',
    'contact.namePlaceholder': 'Votre nom',
    'contact.emailPlaceholder': 'votre.email@exemple.com',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Parlez-moi de votre projet...',
    'contact.sendMessage': 'Envoyer le Message',
    'contact.messageSent': 'Message Envoyé !',
    'contact.messageSuccess': 'Merci pour votre message. Je vous répondrai bientôt !',
    'contact.error': 'Erreur',
    'contact.fillFields': 'Veuillez remplir tous les champs.',
    
    // Footer
    'footer.developer': 'Développeur Web & Designer',
    'footer.madeWith': '© 2025 Chouaib Zouine. Fait avec',
    'footer.coffee': 'et beaucoup de café',
    
    // Work Page
    'work.back': 'Retour à l\'Accueil',
    'work.title': 'Mes',
    'work.workTitle': 'Travaux',
    'work.subtitle': 'Explorez ma collection de modèles de sites web et de projets, chacun conçu avec attention aux détails et aux principes de design modernes.',
    'work.mobileApp': 'Page d\'Atterrissage App Mobile',
    'work.mobileAppDesc': 'Page d\'atterrissage moderne pour applications mobiles avec éléments interactifs.',
    'work.blog': 'Plateforme de Blog',
    'work.blogDesc': 'Plateforme de blog propre et élégante avec gestion de contenu avancée.',
    'work.corporate': 'Site Web d\'Entreprise',
    'work.corporateDesc': 'Site web d\'entreprise professionnel avec informations et services de l\'entreprise.',
    'work.realEstate': 'Portail Immobilier',
    'work.realEstateDesc': 'Plateforme immobilière complète avec listes de propriétés et fonctionnalité de recherche.',
  }
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
