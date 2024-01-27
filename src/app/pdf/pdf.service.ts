import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PdfService {
    getPdf(): Observable<Blob> {
        const pdfUrl = 'assets/Dineo-Mathibela-Resume.pdf';
        return new Observable<Blob>((observer) => {
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = () => {
                observer.next(xhr.response);
                observer.complete();
            };
            xhr.open('GET', pdfUrl);
            xhr.send();
        });
    }
}
