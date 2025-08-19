import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Writer } from "./writer/writer";
import { DUMMY_WRITERS } from '../dummy_writers';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Writer, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('library-app');
  protected readonly writers = DUMMY_WRITERS;
}
