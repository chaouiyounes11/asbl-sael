import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import {
  afterNextRender,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  PLATFORM_ID,
  signal,
  viewChild,
} from '@angular/core';

interface NavLink {
  label: string;
  anchor: string;
}

@Component({
  selector: 'app-navbar',
  template: `
    <!-- Desktop + Mobile Navbar -->
    <header
      #headerEl
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      [class]="
        menuOpen()
          ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800'
          : scrolled()
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
      "
    >
      <nav class="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <a
          href="#hero"
          (click)="scrollTo($event, 'hero')"
          class="relative z-50 text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 h-16 w-16"
          [class]="scrolled() ? 'text-text-primary' : 'text-white'"
        >
          <img
            [ngSrc]="menuOpen() || !scrolled() ? 'logo-blanc.png' : 'logo.png'"
            width="500"
            height="500"
            alt="logo"
          />
        </a>

        <!-- Desktop Nav Links -->
        <ul class="hidden lg:flex items-center gap-1">
          @for (link of navLinks; track link.anchor) {
            <li>
              <a
                [href]="'#' + link.anchor"
                (click)="scrollTo($event, link.anchor)"
                class="relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300"
                [class]="getDesktopLinkClass(link.anchor)"
              >
                {{ link.label }}
                <!-- Active indicator -->
                <span
                  class="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-cta-primary rounded-full transition-all duration-300"
                  [class]="activeSection() === link.anchor ? 'w-6 opacity-100' : 'w-0 opacity-0'"
                ></span>
              </a>
            </li>
          }
        </ul>

        <!-- Desktop CTA -->
        <a
          href="#contact"
          (click)="scrollTo($event, 'contact')"
          class="hidden lg:inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          [class]="
            scrolled()
              ? 'bg-cta-primary text-white hover:bg-cta-primary-hover shadow-md'
              : 'bg-white/15 text-white border border-white/30 hover:bg-white/25 backdrop-blur-sm'
          "
        >
          Prendre rendez-vous
        </a>

        <!-- Mobile Hamburger Button -->
        <button
          (click)="toggleMenu()"
          class="relative z-50 lg:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors duration-300"
          [class]="
            menuOpen() ? 'text-text-primary' : scrolled() ? 'text-text-primary' : 'text-white'
          "
          [attr.aria-expanded]="menuOpen()"
          aria-label="Menu de navigation"
        >
          <div class="w-6 h-5 relative flex flex-col justify-between">
            <!-- Top line -->
            <span
              class="block h-0.5 rounded-full transition-all duration-400 origin-center"
              [class]="
                menuOpen()
                  ? 'bg-white rotate-45 translate-y-[9px]'
                  : scrolled()
                    ? 'bg-text-primary'
                    : 'bg-white'
              "
            ></span>
            <!-- Middle line -->
            <span
              class="block h-0.5 rounded-full transition-all duration-300"
              [class]="
                menuOpen()
                  ? 'bg-white opacity-0 scale-x-0'
                  : scrolled()
                    ? 'bg-text-primary opacity-100'
                    : 'bg-white opacity-100'
              "
            ></span>
            <!-- Bottom line -->
            <span
              class="block h-0.5 rounded-full transition-all duration-400 origin-center"
              [class]="
                menuOpen()
                  ? 'bg-white -rotate-45 -translate-y-[9px]'
                  : scrolled()
                    ? 'bg-text-primary'
                    : 'bg-white'
              "
            ></span>
          </div>
        </button>
      </nav>
    </header>

    <!-- Mobile Menu Overlay -->
    @if (menuOpen()) {
      <div
        class="fixed inset-0 z-40 lg:hidden"
        [class]="menuAnimating() ? 'pointer-events-auto' : 'pointer-events-none'"
      >
        <!-- Backdrop -->
        <div
          class="absolute inset-0 bg-black/60 backdrop-blur-sm"
          [class]="menuVisible() ? 'animate-fade-in' : 'animate-fade-out'"
          (click)="closeMenu()"
        ></div>

        <!-- Menu Panel -->
        <div
          class="absolute top-0 right-0 h-full w-full sm:w-80 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 shadow-2xl flex flex-col"
          [class]="menuVisible() ? 'animate-slide-in-right' : 'animate-slide-out-right'"
        >
          <!-- Menu Header spacer -->
          <div class="h-20"></div>

          <!-- Nav Links -->
          <nav class="flex-1 px-8 py-6">
            <ul class="space-y-1">
              @for (link of navLinks; track link.anchor; let i = $index) {
                <li
                  class="opacity-0"
                  [class]="menuVisible() ? 'animate-stagger-in' : ''"
                  [style.animation-delay]="i * 60 + 100 + 'ms'"
                >
                  <a
                    [href]="'#' + link.anchor"
                    (click)="scrollTo($event, link.anchor); closeMenu()"
                    class="group flex items-center gap-4 px-4 py-3.5 rounded-xl text-lg font-medium transition-all duration-300"
                    [class]="
                      activeSection() === link.anchor
                        ? 'text-sael-yellow bg-white/10'
                        : 'text-white/80 hover:text-white hover:bg-white/5'
                    "
                  >
                    <!-- Active dot indicator -->
                    <span
                      class="w-2 h-2 rounded-full transition-all duration-300"
                      [class]="
                        activeSection() === link.anchor
                          ? 'bg-sael-yellow scale-100'
                          : 'bg-white/20 scale-75 group-hover:bg-white/40 group-hover:scale-100'
                      "
                    ></span>
                    {{ link.label }}
                  </a>
                </li>
              }
            </ul>
          </nav>

          <!-- Mobile CTA -->
          <div
            class="px-8 pb-10 opacity-0"
            [class]="menuVisible() ? 'animate-stagger-in' : ''"
            [style.animation-delay]="navLinks.length * 60 + 200 + 'ms'"
          >
            <a
              href="#contact"
              (click)="scrollTo($event, 'contact'); closeMenu()"
              class="flex items-center justify-center gap-2 w-full px-6 py-4 bg-cta-primary hover:bg-cta-primary-hover text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-cta-primary/25"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Prendre rendez-vous
            </a>

            <!-- WhatsApp -->
            <a
              href="https://wa.me/32XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              (click)="closeMenu()"
              class="flex items-center justify-center gap-2 w-full mt-3 px-6 py-3.5 border border-white/20 text-white/80 hover:text-white hover:border-white/40 font-medium rounded-xl transition-all duration-300"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    }
  `,
  styles: `
    :host {
      display: block;
    }

    /* Mobile menu animations */
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @keyframes fadeOut {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
    @keyframes slideInRight {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(0);
      }
    }
    @keyframes slideOutRight {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(100%);
      }
    }
    @keyframes staggerIn {
      from {
        opacity: 0;
        transform: translateX(2rem);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .animate-fade-in {
      animation: fadeIn 0.35s ease-out forwards;
    }
    .animate-fade-out {
      animation: fadeOut 0.25s ease-in forwards;
    }
    .animate-slide-in-right {
      animation: slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    .animate-slide-out-right {
      animation: slideOutRight 0.3s cubic-bezier(0.7, 0, 0.84, 0) forwards;
    }
    .animate-stagger-in {
      animation: staggerIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
  `,
  imports: [NgOptimizedImage],
})
export class Navbar {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);
  private readonly headerEl = viewChild<ElementRef<HTMLElement>>('headerEl');

  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);
  readonly menuVisible = signal(false);
  readonly menuAnimating = signal(true);
  readonly activeSection = signal('hero');

  readonly navLinks: NavLink[] = [
    { label: 'Accueil', anchor: 'hero' },
    { label: 'Méthode', anchor: 'methodology' },
    { label: 'Niveaux', anchor: 'audience' },
    { label: 'CEB & CE1D', anchor: 'exam-prep' },
    { label: 'Tarifs', anchor: 'pricing' },
    { label: 'Témoignages', anchor: 'testimonials' },
    { label: 'FAQ', anchor: 'faq' },
    { label: 'Contact', anchor: 'contact' },
  ];

  private closeTimeout: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) return;

      // Scroll handler for sticky effect
      const onScroll = () => {
        this.scrolled.set(window.scrollY > 50);
        this.detectActiveSection();
      };

      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();

      this.destroyRef.onDestroy(() => {
        window.removeEventListener('scroll', onScroll);
        if (this.closeTimeout) clearTimeout(this.closeTimeout);
      });
    });
  }

  getDesktopLinkClass(anchor: string): string {
    const isActive = this.activeSection() === anchor;
    const isScrolled = this.scrolled();

    if (isActive) {
      return isScrolled ? 'text-cta-primary' : 'text-sael-yellow';
    }
    return isScrolled
      ? 'text-text-secondary hover:text-text-primary hover:bg-gray-100'
      : 'text-white/80 hover:text-white hover:bg-white/10';
  }

  scrollTo(event: Event, sectionId: string): void {
    event.preventDefault();
    if (!isPlatformBrowser(this.platformId)) return;

    const el = document.getElementById(sectionId);
    if (el) {
      const headerHeight = this.headerEl()?.nativeElement.offsetHeight ?? 80;
      const top = el.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  toggleMenu(): void {
    if (this.menuOpen()) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  openMenu(): void {
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
      this.closeTimeout = null;
    }
    this.menuOpen.set(true);
    this.menuAnimating.set(true);
    // Small delay to let the DOM render before triggering animation
    requestAnimationFrame(() => {
      this.menuVisible.set(true);
    });
    // Lock body scroll
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden';
    }
  }

  closeMenu(): void {
    this.menuVisible.set(false);
    // Wait for animation to complete before removing from DOM
    this.closeTimeout = setTimeout(() => {
      this.menuOpen.set(false);
      this.menuAnimating.set(false);
      // Unlock body scroll
      if (isPlatformBrowser(this.platformId)) {
        document.body.style.overflow = '';
      }
    }, 350);
  }

  private detectActiveSection(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const headerHeight = this.headerEl()?.nativeElement.offsetHeight ?? 80;
    const scrollY = window.scrollY + headerHeight + 100;

    // Check from bottom to top so the most recently scrolled-past section wins
    const sectionIds = this.navLinks.map((l) => l.anchor).reverse();
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY) {
        this.activeSection.set(id);
        return;
      }
    }
    this.activeSection.set('hero');
  }
}
