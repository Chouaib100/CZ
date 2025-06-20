
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Work = () => {
  const templates = [
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
    },
    {
      id: 5,
      title: 'BâtiPro Solutions',
      description: 'Reliable construction and real estate services for modern infrastructure.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=300&fit=crop',
      liveUrl: 'https://batirpro.vercel.app/'
    },
    {
      id: 6,
      title: 'Zah Construction',
      description: 'Professional building and real estate services for innovative development.',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&h=300&fit=crop',
      liveUrl: 'https://zah-bati.vercel.app/'
    },
    {
      id: 7,
      title: 'Construct Maroc',
      description: 'Industrial construction and engineering solutions for large-scale projects.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=300&fit=crop',
      liveUrl: 'https://constructmaroc.vercel.app/'
    },
    {
      id: 8,
      title: 'Structura CC Design',
      description: 'Smart construction and real estate services with civil engineering expertise.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop',
      liveUrl: 'https://orange-gray-architect.vercel.app/'
    },
    {
      id: 9,
      title: 'Batimex Construction',
      description: 'Trusted real estate, construction, and civil engineering services.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop',
      liveUrl: 'https://batmix01.vercel.app/'
    },
    {
      id: 10,
      title: 'Génie Atlas',
      description: 'Innovative civil engineering and real estate development solutions.',
      image: 'https://images.unsplash.com/photo-1590725175765-6e3c2e3c4e20?w=500&h=300&fit=crop',
      liveUrl: 'https://genieatlas.vercel.app/'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary/95 to-slate-900 font-inter text-white">
      {/* Header */}
      <header className="py-8 px-6">
        <div className="container mx-auto">
          <Link to="/" className="inline-flex items-center text-accent hover:text-accent/80 transition-colors mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              My <span className="text-accent">Work</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore my collection of construction and real estate website templates, each crafted with attention to detail and modern design principles.
            </p>
          </div>
        </div>
      </header>

      {/* Templates Grid */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {templates.map((template) => (
              <Card
                key={template.id}
                className="bg-primary/30 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105 group overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={template.image}
                    alt={template.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      className="bg-accent hover:bg-accent/90 text-primary"
                      onClick={() => window.open(template.liveUrl, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Template
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">{template.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{template.description}</p>
                  
                  <Button
                    variant="outline"
                    className="w-full border-accent text-accent hover:bg-accent hover:text-primary"
                    onClick={() => window.open(template.liveUrl, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Template
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
