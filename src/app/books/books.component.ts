import { Component, Input } from '@angular/core';

interface Book {
  id: string;
  title: string;
  writerId: string;
  imageUrl: string;
  genre: string;
  summary: string;
}

@Component({
  selector: 'app-books',
  imports: [],
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  @Input() books: Book[] = [];
  @Input() authorName: string = '';
  @Input() authorGenre: string = '';
}
