import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WriterComponent } from "./writer/writer.component";
import { BooksComponent } from './books/books.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DUMMY_WRITERS } from '../dummy_writers';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, WriterComponent, BooksComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  writers = DUMMY_WRITERS; 

  selectedAuthorId: string | null = null;

  handleAuthorSelection(authorId: string) {
    if (this.selectedAuthorId === authorId) {
      this.selectedAuthorId = null;
    } else {
      this.selectedAuthorId = authorId;
    }
  }
}