import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Premium Perfume Website',
    description: 'An elegant e-commerce platform for luxury perfumes with modern design and seamless user experience.',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=1000',
    tags: ['React', 'E-commerce', 'UI/UX'],
    links: {
      demo: 'https://stackblitz.com/~/github.com/zatchbell1311/sb1-qsgex1'
    }
  },
  {
    title: 'AI Live News App',
    description: 'Real-time news aggregator powered by AI, delivering personalized news content.',
    image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=1000',
    tags: ['React', 'AI', 'News API'],
    links: {
      demo: 'https://stackblitz.com/~/github.com/zatchbell1311/AInews-'
    }
  },
  {
    title: 'iPhone Premium Website',
    description: 'Sleek and modern showcase website for premium iPhone products.',
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&q=80&w=1000',
    tags: ['React', 'Animation', 'Premium'],
    links: {
      demo: 'https://stackblitz.com/edit/sb1-ylldge?file=package.json'
    }
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                  >
                    <ExternalLink className="w-5 h-5" />
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}