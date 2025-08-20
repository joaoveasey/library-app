import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Writer } from "./writer/writer";
import { Books } from './books/books';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DUMMY_WRITERS } from '../dummy_writers';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Writer, Books, HeaderComponent, FooterComponent],
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