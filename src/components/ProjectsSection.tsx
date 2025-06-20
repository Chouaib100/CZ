
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  const featuredProjects = [
    {
      id: 1,
      title: 'Habinor Constructions',
      description: 'Modern real estate and civil engineering solutions for urban growth.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&h=300&fit=crop',
      liveUrl: 'https://wsmqyd7m6b.space.minimax.io/'
    },
    {
      id: 2,
      title: 'Pro Architecture',
      description: 'Innovative architecture and construction services for modern real estate.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&h=300&fit=crop',
      liveUrl: 'https://atelier-lumina-design.lovable.app'
    },
    {
      id: 3,
      title: 'Batimex Builders',
      description: 'Expert solutions in construction, real estate, and civil engineering.',
      image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=500&h=300&fit=crop',
      liveUrl: 'https://batimex.vercel.app/'
    },
    {
      id: 4,
      title: 'Atlas Constructions',
      description: 'Complete building and real estate services with professional engineering touch.',
      image: 'https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=500&h=300&fit=crop',
      liveUrl: 'https://atlasbtp-pied.vercel.app/'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-accent">Work</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A selection of my best projects and website templates that showcase modern design 
            and functionality for construction and real estate businesses.
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
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    className="bg-accent hover:bg-accent/90 text-primary"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Template
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
                  View Template
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
              View All Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
