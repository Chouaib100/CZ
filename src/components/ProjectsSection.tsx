
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/contexts/TranslationContext';

const ProjectsSection = () => {
  const { t } = useTranslation();

  const featuredProjects = [
    {
      id: 1,
      title: 'Habinor Constructions',
      description: 'Modern real estate and civil engineering solutions for urban growth.',
      image: '/lovable-uploads/ba7252cf-9cb1-43cb-b8a1-e89017db546b.png',
      liveUrl: 'https://wsmqyd7m6b.space.minimax.io/'
    },
    {
      id: 2,
      title: 'Pro Architecture',
      description: 'Innovative architecture and construction services for modern real estate.',
      image: '/lovable-uploads/19e44320-7c27-4193-8f87-dd939720a31d.png',
      liveUrl: 'https://atelier-lumina-design.lovable.app'
    },
    {
      id: 3,
      title: 'Batimex Builders',
      description: 'Expert solutions in construction, real estate, and civil engineering.',
      image: '/lovable-uploads/96e276d1-2acb-454c-93b5-19e97d09f12c.png',
      liveUrl: 'https://batimex.vercel.app/'
    },
    {
      id: 4,
      title: 'Atlas Constructions',
      description: 'Complete building and real estate services with professional engineering touch.',
      image: '/lovable-uploads/42230f0c-9528-4f71-9ddb-9a2731bbf677.png',
      liveUrl: 'https://atlasbtp-pied.vercel.app/'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('projects.title')} <span className="text-accent">{t('projects.work')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              className="bg-primary/30 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover object-top transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    className="bg-accent hover:bg-accent/90 text-primary"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {t('projects.viewTemplate')}
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <Button
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-primary"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {t('projects.viewTemplate')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Work Button */}
        <div className="text-center">
          <Link to="/work">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-primary px-8 py-3 text-lg font-semibold"
            >
              {t('projects.viewAllWork')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
