import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-writer',
  imports: [],
  templateUrl: './writer.html',
  styleUrl: './writer.css'
})
export class Writer {
  @Input() avatar!: string;
  @Input() name!: string;
  @Input() genre!: string;

  get imagePath() {
    return 'assets/writers/' + this.avatar;
  }

  onSelectWriter() {
    
  }
}
