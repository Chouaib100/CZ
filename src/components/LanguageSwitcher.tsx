
import { Languages, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/contexts/TranslationContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="relative text-white hover:text-accent hover:bg-accent/10 transition-all duration-300 flex items-center space-x-2 px-3 py-2 rounded-full border border-accent/20 hover:border-accent/40 backdrop-blur-sm bg-primary/20 hover:bg-primary/30"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium text-sm">{language === 'en' ? 'FR' : 'EN'}</span>
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
    </Button>
  );
};

export default LanguageSwitcher;
