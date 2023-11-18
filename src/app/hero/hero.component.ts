import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  constructor(private titleService: Title) {
    this.titleService.setTitle("Ms Mathibela - Home");
  }

  roles = ['Backend Developer', 'Frontend Developer'];
  currentRoleIndex = 0;
  typingSpeed = 150;
  textElement: HTMLElement | null = null;
  typingInterval: any;

  ngOnInit(): void {
    this.textElement = document.getElementById('developerRole');

    if (this.textElement) {
      this.typeNextRole();
    }
  }

  typeNextRole(): void {
    if (this.textElement) {
      const currentRole = this.roles[this.currentRoleIndex];
      const characters = currentRole.split('');

      let i = 0;
      this.typingInterval = setInterval(() => {
        if (i < characters.length) {
          this.textElement!.textContent += characters[i];
          i++;
        } else {
          clearInterval(this.typingInterval);
          setTimeout(() => {
            this.deleteCurrentRole();
          }, 1500);
        }
      }, this.typingSpeed);
    }
  }

  deleteCurrentRole(): void {
    if (this.textElement) {
      const currentText = this.textElement.textContent!;
      let i = currentText.length - 1;

      const interval = setInterval(() => {
        if (i >= 0) {
          this.textElement!.textContent = currentText.slice(0, i);
          i--;
        } else {
          clearInterval(interval);
          this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
          setTimeout(() => {
            this.typeNextRole();
          }, 1500);
        }
      }, this.typingSpeed);
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.typingInterval);
  }
}
