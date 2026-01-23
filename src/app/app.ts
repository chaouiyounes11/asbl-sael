import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer';
import { Navbar } from './components/navbar';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    Footer,
  ],
  template: `
    <app-navbar />
    <router-outlet />
    <app-footer />
  `,
  styles: [],
})
export class App {}
