import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const headerData = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'client-interceptor-demo';

  private http = inject(HttpClient);

  constructor() {
    this.http.get('https://testestset.com/', headerData).subscribe({
      next: (res) => console.log('success', res),
      error: (err) => console.error('error', err),
    });
  }
}
