import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: { name: string, progress: number, category: string }[] = [
    { name: 'HTML', progress: 90, category: 'frontend' },
    { name: 'GraphQL', progress: 85, category: 'backend' },
    { name: 'JavaScript/TypeScript', progress: 80, category: 'frontend' },
    { name: 'Node.js', progress: 85, category: 'backend' },
    { name: 'Express.js', progress: 80, category: 'backend' },
    { name: 'Python', progress: 70, category: 'backend' },
    { name: 'React', progress: 80, category: 'frontend' },
    { name: 'Angular', progress: 75, category: 'frontend' },
    // Add more skills as needed
  ];
  constructor(private TitleService: Title) {
    this.TitleService.setTitle("Ms Mathibela - skills")
  }

  get categories(): string[] {
    return [...new Set(this.skills.map(skill => skill.category))];
  }
  
  getSkillsByCategory(category: string): any[] {
    return this.skills.filter(skill => skill.category === category);
  }
  
}
