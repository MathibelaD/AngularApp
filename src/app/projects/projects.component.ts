import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  constructor(private TitleService: Title) {
    this.TitleService.setTitle("Ms Mathibela - Projects")
  }

  projects = [
    { name: "House Market Place", image: "assets/images/market_place.jpg", url: "https://github.com/MathibelaD/marketplace", description: "Explore a wide range of properties in our House Market Place. Whether you're searching for your dream home or looking to sell, our platform offers a seamless experience for buyers and sellers alike." },
    { name: "Photo Gallery", image: "assets/images/photo_gallery.jpg", url: "https://github.com/MathibelaD/firegram", description: "Immerse yourself in a stunning collection of photographs from around the world in our Photo Gallery. From breathtaking landscapes to captivating portraits, discover the artistry of photography at its finest." },
    { name: "School Management System", image: "assets/images/project.webp", url: "https://github.com/siphonhata/school_management", description: "Streamline administrative tasks, manage student records, and enhance communication between teachers, students, and parents for a more efficient and effective learning environment." }
  ];
}
