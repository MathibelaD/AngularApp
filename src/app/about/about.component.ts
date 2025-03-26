// import { Component } from '@angular/core';
// import { Title } from '@angular/platform-browser';

// @Component({
//   selector: 'app-about',
//   templateUrl: './about.component.html',
//   styleUrls: ['./about.component.css']
// })
// export class AboutComponent {
//   constructor(private TitleService: Title) {
//     this.TitleService.setTitle("Ms Mathibela - About")
//   }
// }

import { Component } from '@angular/core';

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string[];
}

interface Achievement {
  title: string;
  issuer: string;
  date: string;
}

interface Education {
  degree: string;
  institution: string;
  graduationYear: string;
}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  name = 'Your Name';
  professionalTitle = 'Your Professional Title';

  experiences: Experience[] = [
    {
      title: 'Software Engineer',
      company: 'Tech Innovations Inc.',
      duration: 'Jan 2022 - Present',
      description: [
        'Developed scalable web applications',
        'Led frontend architecture improvements',
        'Implemented modern React and Angular solutions'
      ]
    },
    // Add more experiences as needed
  ];

  achievements: Achievement[] = [
    {
      title: 'Advanced Web Development Certification',
      issuer: 'Online Learning Platform',
      date: 'June 2023'
    },
    // Add more achievements
  ];

  education: Education[] = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      graduationYear: '2021'
    }
    // Add more education entries
  ];
}