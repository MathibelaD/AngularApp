import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PdfService } from '../pdf/pdf.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  constructor(private titleService: Title, private pdfService: PdfService) {
    this.titleService.setTitle("Ms Mathibela");
  }



  downloadPdf() {
    this.pdfService.getPdf().subscribe(pdfBlob => {
      const url = window.URL.createObjectURL(pdfBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Ms-Mathibela-Resume.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    });
  }
}
