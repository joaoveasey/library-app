import { Component, Input } from '@angular/core';

interface Book {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.html',
  styleUrl: './book.css'
})
export class BookComponent {
  @Input({required: true}) book!: Book;
}