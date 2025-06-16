
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Work = () => {
  const templates = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Modern online shopping experience with seamless checkout and product showcase.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      liveUrl: '#'
    },
    {
      id: 2,
      title: 'Creative Portfolio',
      description: 'Stunning portfolio website showcasing creative work with smooth animations.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
      liveUrl: '#'
    },
    {
      id: 3,
      title: 'Business Landing Page',
      description: 'Professional landing page designed to convert visitors into customers.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      liveUrl: '#'
    },
    {
      id: 4,
      title: 'Restaurant Website',
      description: 'Appetizing restaurant website with online ordering and reservation system.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=300&fit=crop',
      liveUrl: '#'
    },
    {
      id: 5,
      title: 'Mobile App Landing',
      description: 'Modern landing page for mobile applications with interactive elements.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop',
      liveUrl: '#'
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'Clean and elegant blog platform with advanced content management.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop',
      liveUrl: '#'
    },
    {
      id: 7,
      title: 'Corporate Website',
      description: 'Professional corporate website with company information and services.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop',
      liveUrl: '#'
    },
    {
      id: 8,
      title: 'Real Estate Portal',
      description: 'Complete real estate platform with property listings and search functionality.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop',
      liveUrl: '#'
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
              Explore my collection of website templates and projects, each crafted with attention to detail and modern design principles.
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
