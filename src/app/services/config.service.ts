import { Injectable } from '@angular/core';

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  technologies: string[];
}

export interface TimelineItem {
  period: string;
  institution: string;
  place: string;
  description: string;
  logoUrl?: string;
  isPresent?: boolean;
  responsibilities: string[];
  isExpanded?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  readonly siteConfig = {
    // Meta information
    title: 'GR',
    metaDescription: 'Personal portfolio showcasing web development projects',

    // Hero section
    hero: {
      title: 'Hey There, I’m Gangadhar',
      subtitle: "Crafting the latest tech into seamless experiences 🚀",
      ctaText: 'Let\'s Geek Out'
    },

    // Projects section
    projects: {
      sectionTitle: 'Showcase ',
      items: [
        {
          title: 'Portfolio Website',
          description: 'A modern portfolio website built with Angular and TypeScript',
          imageUrl: '/assets/projects/project1.PNG',
          githubUrl: 'https://github.com/yourusername/portfolio',
          technologies: ['Angular', 'TypeScript', 'SCSS']
        },
        {
          title: 'E-Commerce Platform2',
          description: 'Full-stack e-commerce solution with real-time updates',
          imageUrl: '/assets/projects/project2.PNG',
          githubUrl: 'https://github.com/yourusername/ecommerce',
          technologies: ['Node.js', 'Express', 'MongoDB', 'React']
        },
        {
          title: 'E-Commerce Platform',
          description: 'Full-stack e-commerce solution with real-time updates',
          imageUrl: '/assets/projects/project2.PNG',
          githubUrl: 'https://github.com/yourusername/ecommerce',
          technologies: ['Node.js', 'Express', 'MongoDB', 'React']
        },
        // Add more projects here
      ] as Project[]
    },

    // Timeline/Journey section
    timeline: {
      sectionTitle: 'What\'s So Far...',
      items: [
        {
          period: '2023 - Present',
          institution: 'Tech Solutions Inc.',
          place: 'San Francisco, CA',
          description: 'Senior Software Engineer',
          logoUrl: 'assets/images/companies/amazon-logo.png',
          isPresent: true,
          responsibilities: [
            'Led development of microservices architecture using Node.js and TypeScript',
            'Architected and implemented real-time data processing pipeline handling 1M+ daily transactions',
            'Mentored junior developers and conducted code reviews for team of 8 engineers',
            'Implemented CI/CD pipeline reducing deployment time by 60%',
            'Optimized application performance resulting in 40% improvement in load times'
          ]
        },
        {
          period: '2020 - 2023',
          institution: 'Digital Innovations Corp',
          place: 'New York, NY',
          description: 'Full Stack Developer',
          logoUrl: 'assets/images/companies/tcs-logo.png',
          responsibilities: [
            'Developed and maintained multiple React-based web applications',
            'Implemented authentication system serving 100K+ users',
            'Created reusable component library used across 5 different projects',
            'Optimized database queries reducing response time by 50%',
            'Collaborated with UX team to implement responsive design patterns'
          ]
        },
        {
          period: '2018 - 2020',
          institution: 'StartUp Solutions',
          place: 'Boston, MA',
          description: 'Frontend Developer',
          logoUrl: 'assets/images/companies/startup-solutions-logo.png',
          responsibilities: [
            'Built interactive dashboards using Angular and D3.js',
            'Implemented responsive designs for mobile-first applications',
            'Reduced bundle size by 40% through code splitting and lazy loading',
            'Integrated third-party APIs and payment gateways',
            'Developed automated testing suite with 80% code coverage'
          ]
        },
        // Add more timeline items here
      ] as TimelineItem[]
    },

    // Footer
    footer: {
      copyright: 'GR — Built with ⚡ & ❤️ using Angular',
      socialLinks: [
        {
          platform: 'GitHub',
          url: 'https://github.com/yourusername',
          icon: 'fab fa-github'
        },
        {
          platform: 'LinkedIn',
          url: 'https://linkedin.com/in/yourusername',
          icon: 'fab fa-linkedin'
        },
        {
          platform: 'Twitter',
          url: 'https://twitter.com/yourusername',
          icon: 'fab fa-twitter'
        }
      ] as SocialLink[]
    },

    // Navigation
    navigation: {
      brand: 'GR♾️',
      links: [
        { path: '/', label: '🏠 Home' },
        { path: '/profile', label: 'Profile 👨🏽‍🦱' },
        { path: '/contact', label: 'Let\'s Talk 📧' }
      ]
    }
  };

  getConfig() {
    return this.siteConfig;
  }
}