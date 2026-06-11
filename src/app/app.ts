import { Component, afterNextRender, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer';
import { Navbar } from './components/navbar';
import { Modal } from './components/modal';
import { AnnouncementBanner } from './components/announcement-banner';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    Footer,
    Modal,
    AnnouncementBanner,
  ],
  template: `
    <app-announcement-banner />
    <app-navbar />
    <router-outlet />
    <app-footer />

    <app-modal [open]="showWelcome()" (closed)="showWelcome.set(false)" ariaLabel="Préinscriptions SAEL 2026-2027">
      <div class="px-6 py-8 sm:px-8 text-center">
        <!-- Badge année -->
        <span class="inline-block px-4 py-1 mb-4 rounded-full bg-bg-warm text-cta-primary text-sm font-bold tracking-wide">
          2026 – 2027
        </span>

        <h2 class="text-2xl sm:text-3xl font-extrabold text-text-primary mb-1">
          Préinscriptions SAEL
        </h2>
        <p class="inline-flex items-center justify-center gap-2 text-lg font-bold text-cta-primary mb-5">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.9 17.1a3 3 0 0 1-5.8 0m8.7-5.1a6 6 0 1 0-12 0c0 2.8-.7 4-1.4 4.9-.3.4 0 1 .5 1h14c.6 0 .8-.6.5-1-.7-1-1.3-2.1-1.3-4.9Z" />
          </svg>
          On y est !
        </p>

        <!-- Points clés -->
        <ul class="text-left space-y-3 mb-6 max-w-sm mx-auto">
          @for (item of highlights; track item.label) {
            <li class="flex items-start gap-3">
              <span class="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-bg-warm text-cta-primary">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24" aria-hidden="true">
                  @switch (item.icon) {
                    @case ('group') {
                      <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.7a3 3 0 0 0-5.4-1.8M18 18.7c0 .4 0 .8-.1 1.3M18 18.7a9.7 9.7 0 0 1 1.6.1c.4.1.8.3 1-.1.4-.7.1-1.8-.6-2.6a3.7 3.7 0 0 0-2-1.1M6 18.7a3 3 0 0 1 5.4-1.8M6 18.7c0 .4 0 .8.1 1.3M6 18.7a9.7 9.7 0 0 0-1.6.1c-.4.1-.8.3-1-.1-.4-.7-.1-1.8.6-2.6a3.7 3.7 0 0 1 2-1.1m6.5-3.2a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.3 2.3 0 1 1-4.5 0 2.3 2.3 0 0 1 4.5 0Zm-13.5 0a2.3 2.3 0 1 1-4.5 0 2.3 2.3 0 0 1 4.5 0Z" />
                    }
                    @case ('book') {
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.04A7.5 7.5 0 0 0 5 5.1 1 1 0 0 0 4.2 6v10.7a1 1 0 0 0 1 1c2.3-.4 4.7-.1 6.8 1 2-1.1 4.5-1.4 6.8-1a1 1 0 0 0 1-1V6a1 1 0 0 0-.8-1A7.5 7.5 0 0 0 12 6.04Zm0 0V18" />
                    }
                    @case ('gear') {
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9.6 3.9c.1-.8.8-1.4 1.6-1.4h1.6c.8 0 1.5.6 1.6 1.4l.2 1.2c.5.2 1 .5 1.5.8l1.1-.5c.7-.3 1.6 0 2 .7l.8 1.4c.4.7.2 1.5-.4 2l-1 .7a6 6 0 0 1 0 1.7l1 .7c.6.5.8 1.3.4 2l-.8 1.4c-.4.7-1.3 1-2 .7l-1.1-.5c-.5.3-1 .6-1.5.8l-.2 1.2c-.1.8-.8 1.4-1.6 1.4h-1.6c-.8 0-1.5-.6-1.6-1.4l-.2-1.2a6 6 0 0 1-1.5-.8l-1.1.5c-.7.3-1.6 0-2-.7l-.8-1.4c-.4-.7-.2-1.5.4-2l1-.7a6 6 0 0 1 0-1.7l-1-.7c-.6-.5-.8-1.3-.4-2l.8-1.4c.4-.7 1.3-1 2-.7l1.1.5c.5-.3 1-.6 1.5-.8l.2-1.2Z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                    }
                    @case ('heart') {
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.4-2-4.25-4.4-4.25-1.6 0-3 .9-3.6 2.2-.6-1.3-2-2.2-3.6-2.2C7 4 5 5.85 5 8.25c0 4.3 5.2 8 7 9.25 1.8-1.25 7-4.95 7-9.25Z" />
                    }
                  }
                </svg>
              </span>
              <span class="text-text-secondary leading-snug pt-1.5">{{ item.label }}</span>
            </li>
          }
        </ul>

        <!-- CTA -->
        <a
          href="https://tally.so/r/MeMg0Y"
          target="_blank"
          rel="noopener"
          (click)="showWelcome.set(false)"
          class="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 rounded-full bg-cta-primary hover:bg-cta-primary-hover text-white font-semibold transition-colors"
        >
          Je préinscris mon enfant
        </a>

        <p class="text-text-secondary text-sm mt-4">
          Une nouvelle année se prépare déjà — les petits groupes se remplissent vite.
        </p>
      </div>
    </app-modal>
  `,
  styles: [],
})
export class App {
  readonly showWelcome = signal(false);

  readonly highlights = [
    { icon: 'group', label: 'Petits groupes — Primaire & Secondaire' },
    { icon: 'book', label: 'Accompagnement socio-scolaire en ligne' },
    { icon: 'gear', label: 'Méthode, organisation, confiance & progression' },
    { icon: 'heart', label: 'Une équipe à l’écoute' },
  ];

  constructor() {
    // Ouverture côté navigateur uniquement (évite tout mismatch SSR/hydratation).
    afterNextRender(() => {
      this.showWelcome.set(true);
    });
  }
}
