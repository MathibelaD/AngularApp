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
  activeTab = 'experience';

  tabs = [
    { id: 'experience', label: 'Experience', icon: 'fas fa-briefcase' },
    { id: 'certifications', label: 'Certifications', icon: 'fas fa-certificate' },
    { id: 'education', label: 'Education', icon: 'fas fa-graduation-cap' }
  ];

  experiences: Experience[] = [
    {
      title: 'Full-Stack Developer',
      company: 'Itthynk Smart Solutions',
      duration: 'Jan 2022 - Present',
      description: [
        'Developed scalable web applications',
        'Led frontend architecture improvements',
        'Implemented modern React and Angular solutions'
      ]
    },
    {
      title: 'Internship (Software Engineering)',
      company: 'Itthynk Smart Solutions',
      duration: 'July 2022 - July 2023',
      description: [
        'Developed scalable web applications',
        'Led frontend architecture improvements',
        'Implemented modern React and Angular solutions'
      ]
    },
    {
      title: 'Computer Lab Assistant',
      company: 'Tshwane University Of Technology',
      duration: 'June 2021 - June 2022',
      description: [
        'Support computer lab operations',
'Support faculty and students to use computer software and hardware',
'Respond to queries and introduce students to use of computers and peripheral equipment...etc',
      ]
    }
  ];

  achievements: Achievement[] = [
    {
      title: 'AWS Certified SysOps Administrator - Associate',
      issuer: 'Amazon Web Services (AWS)',
      date: 'Feb 2025',
    },
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services (AWS)',
      date: 'Oct 2024',
    },
    {
      title: 'AWS Partner: Cloud Economics Essentials',
      issuer: 'Amazon Web Services (AWS)',
      date: 'Oct 2024'
    },
    {
      title: 'AWS Partner: Sales Accreditation',
      issuer: 'Amazon Web Services (AWS)',
      date: 'Oct 2024'
    },
    {
      title: 'AWS Partner: Technical Accredited',
      issuer: 'Amazon Web Services (AWS)',
      date: 'Oct 2024'
    },
    {
      title: 'Graph Developer - Associate',
      issuer: 'Apollo GraphQL',
      date: 'Apr 2023',
    },
    {
      title: 'Microsoft Certified: Azure Fundamentals',
      issuer: 'Microsoft',
      date: 'Dec 2022'
    },
    {
      title: 'Microsoft Certified: Azure Developer Associate',
      issuer: 'Microsoft',
      date: 'Oct 2023',
    },
    {
      title: 'Advanced Web Development Certification',
      issuer: 'Online Learning Platform',
      date: 'June 2023'
    },
    // LinkedIn Certifications
    ...['Become a Software Developer', 
        'JavaScript Essential Training', 
        'Learning Data Analytics: 1 Foundations', 
        'Learning C#', 
        'Learning SQL Programming', 
        'Learning Java', 
        'CSS Essential Training', 
        'HTML Essential Training', 
        'Learning Python', 
        'Programming Foundations: Databases', 
        'Programming Foundations: Fundamentals'].map(title => ({
          title,
          issuer: 'LinkedIn',
          date: title.includes('Become a') ? 'Nov 2021' : 
                 title.includes('JavaScript') ? 'Nov 2021' :
                 title.includes('Data Analytics') ? 'Nov 2021' :
                 title.includes('C#') ? 'Oct 2021' :
                 title.includes('SQL') ? 'Oct 2021' :
                 title.includes('Java') ? 'Sep 2021' :
                 title.includes('CSS') ? 'Aug 2021' :
                 title.includes('HTML') ? 'Jul 2021' :
                 title.includes('Python') ? 'Jul 2021' :
                 title.includes('Databases') ? 'Jun 2021' :
                 title.includes('Fundamentals') ? 'Jun 2021' : 
                 'N/A'
        })),
    // Sololearn Certifications
    {
      title: 'HTML Fundamental',
      issuer: 'Sololearn',
      date: 'Jul 2020'
    },
    {
      title: 'C++ Tutorial Course',
      issuer: 'Sololearn',
      date: 'Apr 2020'
    }
  ];

  education: Education[] = [
    {
      degree: 'Diploma in Information Technology',
      institution: 'Tshwane University of Technology',
      graduationYear: '2023'
    },
    {
      degree: 'Matric Senior Certificate',
      institution: 'Kgadime Matsepe Secondary',
      graduationYear: '2017'
    }
    
  ];
}