
import { Download, Code, Smartphone, Database, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
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
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring perfect user experience across all devices.'
    },
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code following industry best practices.'
    },
    {
      icon: Globe,
      title: 'Modern Technologies',
      description: 'Leveraging the latest web technologies for optimal performance.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate web developer with expertise in creating modern, scalable web applications. 
            I transform ideas into digital experiences that engage and inspire.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="w-64 h-64 mx-auto lg:mx-0 bg-gradient-to-br from-accent to-cyan-500 rounded-full flex items-center justify-center text-6xl font-bold text-primary">
              CZ
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Professional Web Developer</h3>
            <p className="text-gray-300 leading-relaxed">
              With years of experience in web development, I specialize in creating high-performance, 
              responsive websites that deliver exceptional user experiences. My expertise spans from 
              frontend technologies like React and modern CSS to backend development with PHP and Laravel.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I'm passionate about staying current with the latest web technologies and best practices, 
              ensuring that every project I work on is built with scalability, performance, and user 
              experience in mind.
            </p>
            
            <Button
              className="bg-accent hover:bg-accent/90 text-primary font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
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
            Technical <span className="text-accent">Skills</span>
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
