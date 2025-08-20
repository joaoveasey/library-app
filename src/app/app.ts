import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WriterComponent } from "./writer/writer.component";
import { BooksComponent } from './books/books.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DUMMY_WRITERS } from '../dummy_writers';
import { DUMMY_BOOKS } from '../dummy_books';

interface Writer {
  id: string;
  name: string;
  genre: string;
  avatar: string;
}

interface Book {
  id: string;
  title: string;
  writerId: string;
  imageUrl: string;
  genre: string;
  summary: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, WriterComponent, BooksComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  writers: Writer[] = DUMMY_WRITERS; 
  books: Book[] = DUMMY_BOOKS;

  selectedAuthorId: string | null = null;

  handleAuthorSelection(authorId: string) {
    if (this.selectedAuthorId === authorId) {
      this.selectedAuthorId = null;
    } else {
      this.selectedAuthorId = authorId;
    }
  }

  getSelectedAuthorBooks(): Book[] {
    if (!this.selectedAuthorId) {
      return [];
    }
    return this.books.filter(book => book.writerId === this.selectedAuthorId);
  }

  getSelectedAuthorName(): string {
    if (!this.selectedAuthorId) {
      return '';
    }
    const writer = this.writers.find(writer => writer.id === this.selectedAuthorId);
    return writer ? writer.name : '';
  }
}