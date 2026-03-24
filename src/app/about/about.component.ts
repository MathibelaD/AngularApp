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

interface AchievementGroup {
  issuer: string;
  icon: string;
  iconColor: string;
  badgeStyle: string;
  items: Achievement[];
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
  expandedGroups = new Set<string>();

  toggleGroup(issuer: string): void {
    if (this.expandedGroups.has(issuer)) {
      this.expandedGroups.delete(issuer);
    } else {
      this.expandedGroups.add(issuer);
    }
  }

  isGroupExpanded(issuer: string): boolean {
    return this.expandedGroups.has(issuer);
  }

  getVisibleCerts(group: AchievementGroup): Achievement[] {
    return this.isGroupExpanded(group.issuer) ? group.items : group.items.slice(0, 2);
  }

  tabs = [
    { id: 'experience', label: 'Experience', icon: 'fas fa-briefcase' },
    { id: 'certifications', label: 'Certifications', icon: 'fas fa-certificate' },
    { id: 'education', label: 'Education', icon: 'fas fa-graduation-cap' }
  ];

  experiences: Experience[] = [
    {
      title: 'Full-Stack Developer',
      company: 'Itthynk Smart Solutions',
      duration: 'August 2023 - Present',
      description: [
        'Architect and deliver full-stack web applications using React, Angular, and Node.js',
        'Lead frontend development and enforce best practices across the team',
        'Design and maintain REST and GraphQL APIs integrated with cloud services on AWS and Azure'
      ]
    },
    {
      title: 'Internship (Software Engineering)',
      company: 'Itthynk Smart Solutions',
      duration: 'July 2022 - July 2023',
      description: [
        'Built and maintained web application features under senior developer mentorship',
        'Contributed to UI component libraries and responsive design improvements',
        'Participated in agile sprints, code reviews, and deployment pipelines'
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

  private issuerMeta: Record<string, { icon: string; iconColor: string; badgeStyle: string }> = {
    'Amazon Web Services (AWS)': {
      icon: 'fab fa-aws',
      iconColor: '#f97316',
      badgeStyle: 'background:#fff7ed; border-color:#fed7aa; color:#c2410c;'
    },
    'Microsoft': {
      icon: 'fab fa-microsoft',
      iconColor: '#3b82f6',
      badgeStyle: 'background:#eff6ff; border-color:#bfdbfe; color:#1d4ed8;'
    },
    'Apollo GraphQL': {
      icon: 'fas fa-project-diagram',
      iconColor: '#7c3aed',
      badgeStyle: 'background:#f5f3ff; border-color:#ddd6fe; color:#6d28d9;'
    },
    'LinkedIn': {
      icon: 'fab fa-linkedin',
      iconColor: '#0a66c2',
      badgeStyle: 'background:#eff6ff; border-color:#bfdbfe; color:#1e40af;'
    },
    'Sololearn': {
      icon: 'fas fa-graduation-cap',
      iconColor: '#6366f1',
      badgeStyle: 'background:#eef2ff; border-color:#c7d2fe; color:#4338ca;'
    },
    'Online Learning Platform': {
      icon: 'fas fa-globe',
      iconColor: '#10b981',
      badgeStyle: 'background:#ecfdf5; border-color:#a7f3d0; color:#065f46;'
    }
  };

  get groupedAchievements(): AchievementGroup[] {
    const map = new Map<string, Achievement[]>();
    for (const a of this.achievements) {
      if (!map.has(a.issuer)) map.set(a.issuer, []);
      map.get(a.issuer)!.push(a);
    }
    return Array.from(map.entries()).map(([issuer, items]) => ({
      issuer,
      items,
      icon: this.issuerMeta[issuer]?.icon ?? 'fas fa-certificate',
      iconColor: this.issuerMeta[issuer]?.iconColor ?? '#d946ef',
      badgeStyle: this.issuerMeta[issuer]?.badgeStyle ?? 'background:#fdf4ff; border-color:#f5d0fe; color:#a21caf;'
    }));
  }

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