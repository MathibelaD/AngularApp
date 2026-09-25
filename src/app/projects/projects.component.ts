import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

interface Project {
  name: string;
  image: string;
  repoUrl?: string;
  liveUrl?: string;
  badge?: string;
  description: string;
  technologies?: string[];
  stars?: number;
  forks?: number;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  constructor(private TitleService: Title) {
    this.TitleService.setTitle("Ms Mathibela")
  }

  projects: Project[] = [
    {
      name: "QR Scanner",
      image: "assets/images/qrscanner.png",
      repoUrl: "https://github.com/MathibelaD/qr-doc-share",
      liveUrl: "https://qr-doc-share.vercel.app/",
      description: "A modern QR code scanner and document sharing application. Features include QR code generation, document upload, secure sharing, and real-time scanning capabilities.",
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      stars: 8,
      forks: 2
    },
    {
      name: "AmorNest",
      image: "assets/images/amornest.jpg",
      liveUrl: "https://amornest.vercel.app/",
      badge: "Mobile App",
      description: "A date-planning app for South African couples. It turns what your partner enjoys into date ideas with real costs in Rands, a budget tracker, a prep checklist and a calendar for the day.",
      technologies: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'Tailwind CSS']
    },
    {
      name: "FullStack Kotas",
      image: "assets/images/fullstack-kotas.jpg",
      liveUrl: "https://somemore-monate-galore-admin-5847.vercel.app/",
      badge: "Full Platform",
      description: "A restaurant platform for a kota business, built as a monorepo: a marketing site and a mobile ordering app for customers, sharing one Supabase backend with the admin dashboard.",
      technologies: ['React', 'React Native', 'Expo', 'Supabase', 'TypeScript']
    },
    {
      name: "SmartWebSync Solutions",
      image: "assets/images/smartwebsync.jpg",
      liveUrl: "https://www.smartwebsync.co.za/",
      badge: "Co-founder",
      description: "The website of the software company I co-founded. It has service pages, a portfolio of client work, a blog, and an admin area for managing that content.",
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Framer Motion']
    },
    {
      name: "FullStack Kotas Admin",
      image: "assets/images/kotas-admin.jpg",
      liveUrl: "https://somemore-monate-galore-admin.vercel.app/",
      badge: "Dashboard",
      description: "The staff dashboard behind FullStack Kotas: live order tracking, menu and inventory management, waste and equipment tracking, customer reviews and sales analytics.",
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Recharts', 'Tailwind CSS']
    }
  ];
}
