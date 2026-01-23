import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  PLATFORM_ID,
  signal,
  viewChild,
} from '@angular/core';

interface Stat {
  value: number;
  suffix: string;
  prefix: string;
  label: string;
  description: string;
}

@Component({
  selector: 'app-stats',
  template: `
    <section id="stats" #sectionEl class="py-16 md:py-20 bg-bg-warm">
      <div class="max-w-6xl mx-auto px-6">
        <!-- Section Header -->
        <div class="text-center mb-12">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-3">
            Des résultats concrets, un accompagnement réel
          </h2>
          <p class="text-text-secondary max-w-xl mx-auto">
            Depuis notre création, nous accompagnons les participants vers la réussite.
          </p>
        </div>

        <!-- Stats Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          @for (stat of stats; track stat.label; let i = $index) {
            <div class="text-center p-4 md:p-6">
              <!-- Number -->
              <div class="mb-2">
                <span class="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
                  {{ stat.prefix }}{{ formatNumber(displayValues()[i]) }}{{ stat.suffix }}
                </span>
              </div>

              <!-- Label -->
              <p class="text-sm md:text-base font-semibold text-text-primary mb-1">
                {{ stat.label }}
              </p>

              <!-- Description -->
              @if (stat.description) {
                <p class="text-xs text-text-secondary">
                  {{ stat.description }}
                </p>
              }

              <!-- Accent Line -->
              <div class="w-12 h-1 bg-sael-orange mx-auto mt-3 rounded-full"></div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class Stats implements AfterViewInit {
  private platformId = inject(PLATFORM_ID);
  private destroyRef = inject(DestroyRef);

  sectionEl = viewChild<ElementRef>('sectionEl');

  displayValues = signal<number[]>([0, 0, 0, 0]);
  private hasAnimated = false;
  private prefersReducedMotion = false;

  stats: Stat[] = [
    {
      value: 2019,
      suffix: '',
      prefix: '',
      label: 'Année de création',
      description: '',
    },
    {
      value: 600,
      suffix: '+',
      prefix: '',
      label: 'Participants accompagnés',
      description: 'depuis notre création',
    },
    {
      value: 4800,
      suffix: '+',
      prefix: '',
      label: 'Heures de cours',
      description: 'dispensées en ligne',
    },
    {
      value: 92,
      suffix: '%',
      prefix: '',
      label: 'Taux de réussite',
      description: 'aux examens',
    },
  ];

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (this.prefersReducedMotion) {
        this.displayValues.set(this.stats.map((s) => s.value));
      } else {
        setTimeout(() => this.setupIntersectionObserver(), 100);
      }
    }
  }

  private setupIntersectionObserver(): void {
    const section = this.sectionEl()?.nativeElement;
    if (!section) {
      this.displayValues.set(this.stats.map((s) => s.value));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.hasAnimated = true;
            this.animateCounters();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    );

    observer.observe(section);

    this.destroyRef.onDestroy(() => {
      observer.disconnect();
    });
  }

  private animateCounters(): void {
    const duration = 1500;
    const startTime = performance.now();
    const startValues = [0, 0, 0, 0];
    const endValues = this.stats.map((s) => s.value);

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOut = 1 - Math.pow(1 - progress, 3);

      const newValues = startValues.map((start, i) => {
        return Math.round(start + (endValues[i] - start) * easeOut);
      });

      this.displayValues.set(newValues);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }

  formatNumber(value: number): string {
    return value.toLocaleString('fr-BE');
  }
}
