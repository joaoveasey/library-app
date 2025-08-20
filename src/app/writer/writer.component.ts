import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-writer',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.css']
})
export class WriterComponent {

  @Input() author: { name: string, avatar: string } | null = null;

  get imagePath(): string {
    if (!this.author || !this.author.avatar) {
      return '';
    }
    return `assets/writers/${this.author.avatar}`;
  }
}