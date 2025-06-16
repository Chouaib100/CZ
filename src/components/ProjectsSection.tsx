
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with advanced features and seamless user experience.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      category: 'Full-Stack',
      technologies: ['React', 'Laravel', 'MySQL'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'Responsive portfolio website showcasing creative work with smooth animations.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
      category: 'Frontend',
      technologies: ['React', 'CSS3', 'JavaScript'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Business Landing Page',
      description: 'Professional landing page with conversion-focused design and CMS integration.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      category: 'WordPress',
      technologies: ['WordPress', 'PHP', 'CSS3'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Restaurant Management System',
      description: 'Complete restaurant management solution with online ordering and admin panel.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=300&fit=crop',
      category: 'Full-Stack',
      technologies: ['Laravel', 'Vue.js', 'MySQL'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Mobile App Landing',
      description: 'Modern landing page for mobile application with interactive elements.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop',
      category: 'Frontend',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'Custom blog platform with advanced content management features.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop',
      category: 'PHP',
      technologies: ['PHP', 'MySQL', 'JavaScript'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const categories = ['All', 'Frontend', 'Full-Stack', 'WordPress', 'PHP'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-accent">Work</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my best projects, from modern web applications to custom solutions 
            that solve real-world problems.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? 'default' : 'outline'}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-accent text-primary hover:bg-accent/90'
                  : 'border-accent text-accent hover:bg-accent hover:text-primary'
              }`}
              onClick={() => setActiveFilter(category)}
            >
              <Filter className="mr-2 h-4 w-4" />
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
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
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button
                    size="sm"
                    className="bg-accent hover:bg-accent/90 text-primary"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-primary"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
