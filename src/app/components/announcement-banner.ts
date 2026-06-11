import { Component } from '@angular/core';

/**
 * Bandeau d'annonce sticky, placé au-dessus de la navbar.
 *
 * - Fond orange (contraste fort avec le menu blanc).
 * - Mobile : le texte défile en marquee (contenu dupliqué pour une boucle fluide).
 * - Desktop (≥ 768px) : texte fixe, centré, avec pastille d'appel à l'action.
 *
 * Toute la barre est un lien vers le formulaire de préinscription.
 */
@Component({
  selector: 'app-announcement-banner',
  template: `
    <a
      href="https://tally.so/r/MeMg0Y"
      target="_blank"
      rel="noopener"
      class="banner group fixed top-0 left-0 right-0 flex items-center h-10 overflow-hidden bg-gradient-to-r from-cta-primary to-cta-secondary text-white"
      aria-label="Préinscriptions SAEL 2026-2027 — ouvrir le formulaire"
    >
      <!-- Mobile : marquee défilant -->
      <div class="marquee-wrap md:hidden">
        <div class="marquee-track">
          @for (copy of [0, 1]; track copy) {
            <span class="marquee-content" [attr.aria-hidden]="copy === 1 ? 'true' : null">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84 6 17V7l4.34 1.16M10.34 15.84 16 18V6l-5.66 2.16M10.34 15.84V8.16M19 9v6" />
              </svg>
              Préinscriptions 2026–2027 ouvertes · Petits groupes Primaire &amp; Secondaire · Réservez la place de votre enfant
              <span class="font-bold underline underline-offset-2">Je préinscris →</span>
            </span>
          }
        </div>
      </div>

      <!-- Desktop : texte fixe centré -->
      <div class="hidden md:flex items-center justify-center gap-3 w-full px-6 text-sm font-medium">
        <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84 6 17V7l4.34 1.16M10.34 15.84 16 18V6l-5.66 2.16M10.34 15.84V8.16M19 9v6" />
        </svg>
        <span>
          <span class="font-bold">Préinscriptions 2026–2027 ouvertes</span>
          — réservez la place de votre enfant en petit groupe.
        </span>
        <span class="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-white/20 font-semibold transition-colors group-hover:bg-white/30">
          Je préinscris →
        </span>
      </div>
    </a>
  `,
  styles: `
    :host {
      display: block;
    }

    /* Au-dessus de la navbar (z-50) et de la modale (backdrop 40 / panneau 50)
       pour rester visible en permanence. z-index défini ici (et non via une
       classe Tailwind arbitraire) pour garantir sa génération. */
    .banner {
      z-index: 70;
    }

    .banner:hover .marquee-content span {
      text-decoration-thickness: 2px;
    }

    /* Marquee mobile : le wrapper occupe la largeur dispo et clippe ;
       la piste garde sa largeur réelle (indépendante du flex parent). */
    .marquee-wrap {
      flex: 1 1 auto;
      min-width: 0;
      overflow: hidden;
    }

    .marquee-track {
      display: flex;
      width: max-content;
      flex: none;
      align-items: center;
      animation: marquee 20s linear infinite;
    }

    .marquee-content {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0 1.25rem;
      white-space: nowrap;
      font-size: 0.8125rem;
      font-weight: 500;
    }

    @keyframes marquee {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-50%);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .marquee {
        animation: none;
      }
    }
  `,
})
export class AnnouncementBanner {}
