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
      name: "AmorNest",
      image: "assets/images/amornest.jpg",
      liveUrl: "https://amornest.vercel.app/",
      badge: "Mobile App",
      description: "A date-planning app for South African couples. It turns what your partner enjoys into date ideas with real costs in Rands, a budget tracker, a prep checklist and a calendar for the day.",
      technologies: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'Tailwind CSS']
    },
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
      name: "School Management System",
      image: "assets/images/project.webp",
      repoUrl: "https://github.com/siphonhata/school_management",
      description: "A comprehensive school management solution featuring student records, grade tracking, attendance management, and parent-teacher communication tools.",
      technologies: ['Angular', 'Node.js', 'MongoDB', 'TypeScript'],
      stars: 15,
      forks: 5
    }
  ];
}
