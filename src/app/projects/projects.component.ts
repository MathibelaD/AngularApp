import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

interface Project {
  name: string;
  image: string;
  url: string;
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
    this.TitleService.setTitle("Ms Mathibela - Projects")
  }

  projects: Project[] = [
    { 
      name: "House Market Place", 
      image: "assets/images/market_place.jpg", 
      url: "https://github.com/MathibelaD/marketplace", 
      description: "A modern real estate platform built with React and Firebase. Features include property listings, user authentication, image uploads, and real-time data synchronization.",
      technologies: ['React', 'Firebase', 'CSS3', 'JavaScript'],
      stars: 12,
      forks: 3
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
