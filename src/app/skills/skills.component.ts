import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

interface Skill {
  name: string;
  progress: number;
  category: string;
  icon: string;
}

interface Tool {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: Skill[] = [
    // Frontend Skills
    { name: 'HTML5', progress: 95, category: 'frontend', icon: 'fab fa-html5' },
    { name: 'CSS3', progress: 90, category: 'frontend', icon: 'fab fa-css3-alt' },
    { name: 'JavaScript', progress: 88, category: 'frontend', icon: 'fab fa-js-square' },
    { name: 'TypeScript', progress: 85, category: 'frontend', icon: 'fas fa-code' },
    { name: 'React', progress: 82, category: 'frontend', icon: 'fab fa-react' },
    { name: 'Angular', progress: 80, category: 'frontend', icon: 'fab fa-angular' },
    { name: 'Tailwind CSS', progress: 88, category: 'frontend', icon: 'fas fa-paint-brush' },
    
    // Backend Skills
    { name: 'Node.js', progress: 85, category: 'backend', icon: 'fab fa-node-js' },
    { name: 'Express.js', progress: 80, category: 'backend', icon: 'fas fa-server' },
    { name: 'Python', progress: 75, category: 'backend', icon: 'fab fa-python' },
    { name: 'GraphQL', progress: 82, category: 'backend', icon: 'fas fa-project-diagram' },
    { name: 'MongoDB', progress: 78, category: 'backend', icon: 'fas fa-database' },
    { name: 'Firebase', progress: 85, category: 'backend', icon: 'fas fa-fire' },
    { name: 'AWS', progress: 80, category: 'backend', icon: 'fab fa-aws' },
    { name: 'Azure', progress: 75, category: 'backend', icon: 'fab fa-microsoft' }
  ];

  tools: Tool[] = [
    { name: 'Git', icon: 'fab fa-git-alt' },
    { name: 'GitHub', icon: 'fab fa-github' },
    { name: 'VS Code', icon: 'fas fa-code' },
    { name: 'Docker', icon: 'fab fa-docker' },
    { name: 'Figma', icon: 'fab fa-figma' },
    { name: 'Postman', icon: 'fas fa-paper-plane' },
    { name: 'Webpack', icon: 'fas fa-cube' },
    { name: 'NPM', icon: 'fab fa-npm' },
    { name: 'Linux', icon: 'fab fa-linux' },
    { name: 'Jira', icon: 'fab fa-jira' }
  ];

  constructor(private TitleService: Title) {
    this.TitleService.setTitle("Ms Mathibela - Skills")
  }

  get categories(): string[] {
    return [...new Set(this.skills.map(skill => skill.category))];
  }
  
  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }
}
