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

export interface GalleryPhoto {
  id: number;
  url: string;
  caption: string;
  location: string;
  date: string; // Add date field
  tags?: string[];
  isExpanded?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  readonly siteConfig = {
    // Meta information
    title: 'GR',
    metaDescription: 'Personal portfolio showcasing web development projects',
    analytics: {
      googleAnalytics: {
        measurementId: 'G-7P4V4SWCY5' // Replace with your actual Measurement ID
      }
    },

    // Hero section
    hero: {
      title: 'Hi There, I’m Gangadhar',
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
      description: 'Exploring my professional journey through various roles and responsibilities. Each step represents growth, learning, and impactful contributions to innovative projects and team success.',
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

    // Gallery section
    gallery: {
      sectionTitle: 'What else I do, Visual Vertex',
      description: 'A collection of moments captured through my lens, reflecting my journey through different places and experiences. Each photo tells a unique story of discovery and creativity.',
      items: [
        {
          id: 1,
          url: '/assets/images/gallery/selfie.JPG',
          caption: 'Sunset at the Beach',
          location: 'Hyderabad, Telangana',
          date: '2023-12-15', // Add dates to your photos
          tags: ['Nature', 'Sunset', 'Beach']
        },
        {
          id: 2,
          url: '/assets/images/gallery/nithin.JPG',
          caption: 'City Lights',
          location: 'Hyderabad, Telangana',
          date: '2023-11-30',
          tags: ['Urban', 'Night', 'Architecture']
        },
        // Add more photos as needed
      ] as GalleryPhoto[]
    },

    // Footer
    footer: {
      copyright: 'Built with  Augment Code & ❤️ using AI by GR ',
      socialLinks: [
        {
          platform: 'GitHub',
          url: 'https://github.com/gangadhar04051996',
          icon: 'fab fa-github'
        },
        {
          platform: 'LinkedIn',
          url: 'https://linkedin.com/in/balagangadharreddy',
          icon: 'fab fa-linkedin'
        },
        {
          platform: 'Twitter',
          url: 'https://twitter.com/myselfgangadhar',
          icon: 'fab fa-twitter'
        },
        {
          platform: 'Instagram',
          url: 'https://instagram.com/myselfgangadhar',
          icon: 'fab fa-instagram'
        }
      ] as SocialLink[]
    },

    // Navigation
    navigation: {
      brand: 'GR♾️',
      links: [
        { path: '/', label: '🏠 Home' },
        { path: '/profile', label: '👨🏽‍🦱 Timeline' },
        { path: '/gallery', label: '📸 Vault' },
        { path: '/contact', label: 'Let\'s Connect' }
      ]
    }
  };

  getConfig() {
    return this.siteConfig;
  }

  getGoogleAnalyticsId() {
    return this.siteConfig.analytics.googleAnalytics.measurementId;
  }
}





