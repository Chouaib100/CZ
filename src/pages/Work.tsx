
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
    },
    {
      id: 5,
      title: 'BâtiPro Solutions',
      description: 'Reliable construction and real estate services for modern infrastructure.',
      image: '/lovable-uploads/e4cb6c33-a0a8-49a0-8826-20d6fa85a9d1.png',
      liveUrl: 'https://batirpro.vercel.app/'
    },
    {
      id: 6,
      title: 'Zah Construction',
      description: 'Professional building and real estate services for innovative development.',
      image: '/lovable-uploads/0c6d5712-0619-43a3-bee0-9702d0ac4eac.png',
      liveUrl: 'https://zah-bati.vercel.app/'
    },
    {
      id: 7,
      title: 'Construct Maroc',
      description: 'Industrial construction and engineering solutions for large-scale projects.',
      image: '/lovable-uploads/f23521f7-79df-4d2f-be01-71a3538f1b35.png',
      liveUrl: 'https://constructmaroc.vercel.app/'
    },
    {
      id: 8,
      title: 'Structura CC Design',
      description: 'Smart construction and real estate services with civil engineering expertise.',
      image: '/lovable-uploads/b2f6d3a4-a905-42be-90c6-22eff2eb8712.png',
      liveUrl: 'https://orange-gray-architect.vercel.app/'
    },
    {
      id: 9,
      title: 'Batimex Construction',
      description: 'Trusted real estate, construction, and civil engineering services.',
      image: '/lovable-uploads/f37f37a8-17f9-435d-a851-81502b00634a.png',
      liveUrl: 'https://batmix01.vercel.app/'
    },
    {
      id: 10,
      title: 'Génie Atlas',
      description: 'Innovative civil engineering and real estate development solutions.',
      image: '/lovable-uploads/c1e27ea4-545a-4944-8d9a-92cf3cdf4a9f.png',
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {templates.map((template) => (
              <Card
                key={template.id}
                className="bg-primary/30 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105 group overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={template.image}
                    alt={template.title}
                    className="w-full h-40 sm:h-48 object-cover object-top transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      className="bg-accent hover:bg-accent/90 text-primary text-sm"
                      onClick={() => window.open(template.liveUrl, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Template
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">{template.title}</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">{template.description}</p>
                  
                  <Button
                    variant="outline"
                    className="w-full border-accent text-accent hover:bg-accent hover:text-primary text-xs sm:text-sm"
                    onClick={() => window.open(template.liveUrl, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
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
