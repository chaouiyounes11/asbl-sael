import {
  Component,
  HostListener,
  PLATFORM_ID,
  effect,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

/**
 * Modale réutilisable responsive, contrôlée par le parent.
 *
 * - Mobile (≤ 640px) : bottom-sheet, glisse du bas vers le haut à l'ouverture
 *   et du haut vers le bas à la fermeture.
 * - Desktop (≥ 641px) : panneau centré avec animation scale + fondu.
 *
 * L'état appartient au parent via l'input `open` ; le composant émet `closed`
 * lorsqu'une fermeture est demandée (backdrop, bouton X, Échap) et joue
 * l'animation de sortie avant de se démonter du DOM.
 */
@Component({
  selector: 'app-modal',
  template: `
    @if (mounted()) {
      <!-- Backdrop -->
      <div
        class="modal-backdrop"
        [class.is-open]="entered()"
        (click)="onBackdrop()"
      ></div>

      <!-- Viewport de positionnement (bas sur mobile, centré sur desktop) -->
      <div class="modal-viewport" [class.is-open]="entered()">
        <div
          class="modal-panel"
          role="dialog"
          aria-modal="true"
          [attr.aria-label]="ariaLabel() || null"
          (click)="$event.stopPropagation()"
          (transitionend)="onTransitionEnd($event)"
        >
          @if (showClose()) {
            <button
              type="button"
              class="modal-close"
              aria-label="Fermer"
              (click)="requestClose()"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          }

          <ng-content />
        </div>
      </div>
    }
  `,
  styles: `
    :host {
      display: contents;
    }

    .modal-backdrop {
      position: fixed;
      inset: 0;
      z-index: 40;
      background: rgba(0, 0, 0, 0.5);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .modal-backdrop.is-open {
      opacity: 1;
    }

    .modal-viewport {
      position: fixed;
      inset: 0;
      z-index: 50;
      display: flex;
      align-items: flex-end; /* bas sur mobile */
      justify-content: center;
      pointer-events: none; /* seul le panneau capte les clics */
    }

    .modal-panel {
      position: relative;
      pointer-events: auto;
      background: #fff;
      width: 100%;
      max-height: 90vh;
      overflow-y: auto;
      border-radius: 1rem 1rem 0 0;
      box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.15);
      /* état fermé mobile : hors écran en bas */
      transform: translateY(100%);
      transition: transform 0.3s ease;
    }

    .modal-viewport.is-open .modal-panel {
      transform: translateY(0);
    }

    /* Bouton de fermeture (rond, cohérent avec .arrow-btn du carousel) */
    .modal-close {
      position: absolute;
      top: 0.75rem;
      right: 0.75rem;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: white;
      border: 1px solid #e5e7eb;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #374151;
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      z-index: 10;
    }

    .modal-close:hover {
      background: #f9fafb;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      transform: scale(1.08);
    }

    .modal-close:active {
      transform: scale(0.95);
    }

    /* Desktop : panneau centré + animation scale */
    @media (min-width: 641px) {
      .modal-viewport {
        align-items: center;
        padding: 1rem;
      }

      .modal-panel {
        width: auto;
        max-width: 32rem;
        border-radius: 1rem;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        transform: scale(0.95);
        opacity: 0;
        transition: transform 0.25s ease, opacity 0.25s ease;
      }

      .modal-viewport.is-open .modal-panel {
        transform: scale(1);
        opacity: 1;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .modal-backdrop,
      .modal-panel {
        transition: none;
      }
    }
  `,
})
export class Modal {
  // Inputs
  readonly open = input(false);
  readonly showClose = input(true);
  readonly closeOnBackdrop = input(true);
  readonly closeOnEscape = input(true);
  readonly ariaLabel = input<string>('');
  readonly lockScroll = input(true);

  // Outputs
  readonly closed = output<void>();

  // État interne (machine à états d'animation)
  readonly mounted = signal(false); // présence dans le DOM
  readonly entered = signal(false); // bascule la classe .is-open

  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  private closeTimer: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    // Pilote l'ouverture/fermeture en fonction de l'input `open`.
    effect(() => {
      const shouldOpen = this.open();

      if (shouldOpen) {
        this.clearCloseTimer();
        this.mounted.set(true);
        this.lock(true);
        // Frame suivant : déclenche la transition d'entrée.
        if (this.isBrowser) {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => this.entered.set(true));
          });
        } else {
          this.entered.set(true);
        }
      } else if (this.mounted()) {
        // Joue la sortie puis démonte (via transitionend ou fallback).
        this.entered.set(false);
        if (this.isBrowser) {
          this.clearCloseTimer();
          this.closeTimer = setTimeout(() => this.finalizeClose(), 350);
        } else {
          this.finalizeClose();
        }
      }
    });
  }

  /** Demande de fermeture : le parent remettra `open` à false. */
  requestClose(): void {
    this.closed.emit();
  }

  onBackdrop(): void {
    if (this.closeOnBackdrop()) {
      this.requestClose();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.closeOnEscape() && this.mounted() && this.entered()) {
      this.requestClose();
    }
  }

  /** Fin de l'animation de sortie sur le panneau → démontage. */
  onTransitionEnd(event: TransitionEvent): void {
    if (event.target !== event.currentTarget) return;
    if (!this.entered() && this.mounted()) {
      this.finalizeClose();
    }
  }

  private finalizeClose(): void {
    this.clearCloseTimer();
    this.mounted.set(false);
    this.lock(false);
  }

  private clearCloseTimer(): void {
    if (this.closeTimer !== null) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  }

  private lock(active: boolean): void {
    if (!this.isBrowser || !this.lockScroll()) return;
    this.document.body.style.overflow = active ? 'hidden' : '';
  }
}
