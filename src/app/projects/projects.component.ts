import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

interface Project {
  name: string;
  image: string;
  url: string;
  liveUrl?: string;
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
      url: "https://github.com/MathibelaD/qr-doc-share",
      liveUrl: "https://qr-doc-share.vercel.app/",
      description: "A modern QR code scanner and document sharing application. Features include QR code generation, document upload, secure sharing, and real-time scanning capabilities.",
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      stars: 8,
      forks: 2
    },
    { 
      name: "Photo Gallery", 
      image: "assets/images/photo_gallery.jpg", 
      url: "https://github.com/MathibelaD/firegram", 
      description: "An elegant photo sharing application with drag-and-drop uploads, real-time progress tracking, and smooth animations using Framer Motion.",
      technologies: ['React', 'Firebase', 'Framer Motion', 'CSS3'],
      stars: 8,
      forks: 2
    },
    { 
      name: "School Management System", 
      image: "assets/images/project.webp", 
      url: "https://github.com/siphonhata/school_management", 
      description: "A comprehensive school management solution featuring student records, grade tracking, attendance management, and parent-teacher communication tools.",
      technologies: ['Angular', 'Node.js', 'MongoDB', 'TypeScript'],
      stars: 15,
      forks: 5
    }
  ];
}
