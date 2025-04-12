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
  skills?: string[];
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
        measurementId: 'G-M0937KY9ZQ' // Replace with your actual Measurement ID
      }
    },

    // Hero section
    hero: {
      title: 'Hi There, I’m Gangadhar',
      subtitle: "I Craft the latest tech into seamless experiences 🚀",
      ctaText: 'Find my work ⚡'
    },

    // Projects section
    projects: {
      sectionTitle: 'Showcase ',
      items: [
        {
          title: 'Log Time',
          description: 'Log your work and recollect handy app',
          imageUrl: '/assets/projects/project1.jpeg',
          githubUrl: 'https://github.com/gangadhar04051996/log_time',
          technologies: ['Python', 'Docker', 'FastAPI', 'PostgreSQL']
        },
        {
          title: 'Kafka Stream Analytics App',
          description: 'Streaming App that captures the data and process for real time analytics',
          imageUrl: '/assets/projects/project2.jpeg',
          githubUrl: 'https://github.com/gangadhar04051996/stream_app',
          technologies: ['Python', 'SQL', 'Kafka', 'HTML']
        },
        {
          title: 'Coincap Crypto Dashboard',
          description: 'Full-stack e-commerce solution with real-time updates',
          imageUrl: '/assets/projects/project3.jpeg',
          githubUrl: 'https://github.com/gangadhar04051996/CoinCapPriceDashboard',
          technologies: ['Grafana', 'Docker', 'Python', 'PostgreSQL']
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
          period: 'Nov 2024 - Present',
          institution: 'ProspectIntel',
          place: 'USA',
          description: 'Sr Software Engineer',
          logoUrl: 'assets/images/companies/prospectintel-logo.png',
          isPresent: true,
          responsibilities: [
            'Architected a configuration‑driven Generative AI system for personalized sales pitches, boosting engagement and conversions',
            'Built data ingestion pipelines into GCP BigQuery and AlloyDB for vector storage from multiple third‑party providers',
            'Automated scheduled data refreshes and workflows using GCP Cloud Scheduler and Workflows',
            'Developed secure FastAPI endpoints with Firebase storage and GCP Secrets for credential management',
            'Implemented incremental ETL and CDC pipelines with Databricks Medallion architecture and PySpark'
          ],
          skills: ['Generative AI', 'GCP (BigQuery, Workflows)', 'FastAPI', 'Databricks']
        },
        {
          period: 'Jul 2021 - Feb 2024',
          institution: 'Tech Mahindra / Amazon',
          place: 'India',
          description: 'Sr Software Engineer',
          logoUrl: 'assets/images/companies/amazon-logo.png',
          responsibilities: [
            'Executed Salesforce‑to‑Redshift migration with SQL scripts, data mapping & custom transformation logic',
            'Implemented event‑driven ETL with AWS Lambda, Glue & S3 (KMS‑encrypted) under strict IAM policies',
            'Automated workflows using AWS Step Functions and Bash scripts for seamless data processing',
            'Configured S3 lifecycle policies and optimized Redshift distribution & sort keys for performance & cost',
            'Set up CI/CD pipelines with CodePipeline & CodeBuild and managed sprint planning in Jira'
          ],
          skills: ['Redshift', 'AWS Glue', 'Step Functions', 'Redshift', 'QuickSight']
        },
        {
          period: 'Jan 2020 - Jun 2021',
          institution: '3LOQ Kagami',
          place: 'India',
          description: 'Data Analytics Engineer',
          logoUrl: 'assets/images/companies/triloq-logo.png',
          responsibilities: [
            'Developed & optimized Spark and Spark Streaming jobs on Hadoop & Kafka for real‑time data processing',
            'Built ETL pipelines with Airflow, Scala & Python, integrating Hadoop, Spark & MongoDB',
            'Created Flask & Pyramid web apps for customer segmentation and campaign analytics',
            'Secured Kafka clusters (TLS/SSL, SASL) and automated ingestion with Python scripts',
            'Implemented CI/CD with Jenkins & GitHub Actions and real‑time monitoring with Grafana'
          ],
          skills: ['Spark', 'Kafka', 'Airflow', 'Flask', 'CI/CD']
        },
        {
          period: 'April 2018 - Dec 2019',
          institution: 'Tata Consultancy Services / Lloyds Banking Group',
          place: 'Hyderabad, India',
          description: 'Associate Software Engineer',
          logoUrl: 'assets/images/companies/tcs-logo.png',
          responsibilities: [
            'Implemented serverless ETL with Azure Functions & Event Grid for Blob Storage ingestion',
            'Developed Python & Pandas ETL pipelines with Airflow, integrating SQL Server, DB2 & Sybase',
            'Automated workflows using Airflow DAGs and Bash operators to improve reliability',
            'Optimized DB2 & Sybase queries via indexing & caching, reducing latency by 35%',
            'Delivered clean, analysis‑ready datasets through custom Python transformation scripts'
          ],
          skills: ['Azure Functions', 'Airflow', 'Python', 'DB2', 'Pandas']
        },
        {
          period: 'Jun 2017 - Dec 2017',
          institution: 'Sourceeasy Pvt Ltd',
          place: 'Hyderabad, India',
          description: 'Python Developer',
          logoUrl: 'assets/images/companies/sourceeasy-logo.png',
          responsibilities: [
            'Developed HR services portal (payroll, document mgmt) with Flask & Angular',
            'Built RESTful APIs using Flask, PostgreSQL, SQLAlchemy & Psycopg2',
            'Implemented secure session management and state handling with Flask‑Session & cookies',
            'Designed responsive single‑page interfaces with Angular and Jinja2 templating',
            'Established automated testing & CI/CD pipelines with Pytest, Unittest & GitHub Actions'
          ],
          skills: ['Flask', 'Angular', 'PostgreSQL', 'SQLAlchemy', 'GitHub Actions']
        },
        // Add more timeline items here
      ] as TimelineItem[]
    },

    // Gallery section
    gallery: {
      sectionTitle: 'What else I do? Snapshot Showcase...',
      description: 'A collection of moments captured through my lens, reflecting my journey through different places and experiences. Each photo tells a unique story of discovery and creativity.',
      items: [
        {
          id: 5,
          url: '/assets/images/gallery/monument.jpg',
          caption: 'Standing Tall',
          location: 'DC, USA',
          date: '03-25-2025', // Use consistent YYYY-MM-DD format
          tags: ['Washington', 'Monument', 'DC']
        },
        {
          id: 1,
          url: '/assets/images/gallery/idk1.jpg',
          caption: 'Architecture Design',
          location: 'DC, USA',
          date: '03-25-2025', // Use consistent YYYY-MM-DD format
          tags: ['City', 'DC', 'Architecture']
        },
        {
          id: 4,
          url: '/assets/images/gallery/capitol.jpg',
          caption: 'Capitol Building',
          location: 'DC, USA',
          date: '03-25-2025', // Use consistent YYYY-MM-DD format
          tags: ['Capitol', 'Architecture', 'Government']
        },
        {
          id: 3,
          url: '/assets/images/gallery/museum.jpg',
          caption: 'Elephant in the Room',
          location: 'DC, USA',
          date: '03-25-2025', // Use consistent YYYY-MM-DD format
          tags: ['National Museum', 'History', 'Elephant']
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








