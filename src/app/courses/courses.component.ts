import { Component } from '@angular/core';

interface Course {
  title: string;
  level: string;
  icon: string;
  gradient: string;
  url: string;
  description: string;
  stats: string[];
  projectName: string;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses: Course[] = [
    {
      title: "Programming Foundations",
      level: "Beginner · JavaScript",
      icon: "fas fa-seedling",
      gradient: "linear-gradient(135deg, #f59e0b, #f97316)",
      url: "https://programming-foundations.mathibela.guru/",
      description: "Teaches complete beginners to code, from variables and loops to functions, arrays and objects.",
      stats: ["62 lessons", "50+ hours", "112 exercises"],
      projectName: "Budget Buddy"
    },
    {
      title: "C# & .NET Developer Hub",
      level: "Intermediate → Job-ready",
      icon: "fas fa-server",
      gradient: "linear-gradient(135deg, #7c3aed, #6366f1)",
      url: "https://learn.mathibela.guru/",
      description: "A roadmap from modern C# to production .NET: ASP.NET Core, EF Core, security, testing and Docker.",
      stats: ["104 lessons", "70+ hours", "99 exercises"],
      projectName: "TaskFlow API"
    }
  ];
}
