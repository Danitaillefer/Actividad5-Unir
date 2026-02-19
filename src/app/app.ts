import { Component, signal } from '@angular/core';

import { BlogComponents } from './components/blog/blog.components';


@Component({
  selector: 'app-root',
  imports: [BlogComponents],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Actividad5');
}
