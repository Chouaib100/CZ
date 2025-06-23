import { Download, Code, Smartphone, Database, Globe, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from '@/contexts/TranslationContext';

const AboutSection = () => {
  const { t } = useTranslation();

  const skills = [
    { name: 'HTML5', icon: Code, color: 'text-orange-400' },
    { name: 'CSS3', icon: Code, color: 'text-blue-400' },
    { name: 'JavaScript', icon: Code, color: 'text-yellow-400' },
    { name: 'PHP', icon: Code, color: 'text-purple-400' },
    { name: 'Laravel', icon: Code, color: 'text-red-400' },
    { name: 'React', icon: Code, color: 'text-cyan-400' },
    { name: 'MySQL', icon: Database, color: 'text-blue-500' },
    { name: 'WordPress', icon: Globe, color: 'text-blue-600' },
  ];

  const features = [
    {
      icon: Smartphone,
      title: t('about.responsive'),
      description: t('about.responsiveDesc')
    },
    {
      icon: Code,
      title: t('about.cleanCode'),
      description: t('about.cleanCodeDesc')
    },
    {
      icon: Globe,
      title: t('about.modern'),
      description: t('about.modernDesc')
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('about.title')} <span className="text-accent">{t('about.me')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto lg:mx-0 relative">
              <div className="w-full h-full bg-gradient-to-br from-accent to-cyan-500 rounded-full p-2 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src="/lovable-uploads/52016560-42f3-4e7b-929d-3f44b21c59e1.png"
                    alt="Developer working"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">{t('about.professional')}</h3>
            <p className="text-gray-300 leading-relaxed">
              {t('about.bio1')}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {t('about.bio2')}
            </p>
            
            <Button
              className="bg-accent hover:bg-accent/90 text-primary font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://gamma.app/docs/Chouaib-Zouine--6bctrm3vofstn2f', '_blank')}
            >
              <User className="mr-2 h-5 w-5" />
              About Me
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-primary/30 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <feature.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-3 text-white">{feature.title}</h4>
                <p className="text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-8">
            {t('about.skills')} <span className="text-accent">{t('about.skillsSpan')}</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-primary/30 rounded-lg p-6 hover:bg-primary/50 transition-all duration-300 hover:scale-105 border border-accent/20"
              >
                <skill.icon className={`h-8 w-8 ${skill.color} mx-auto mb-3`} />
                <p className="font-medium text-white">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
