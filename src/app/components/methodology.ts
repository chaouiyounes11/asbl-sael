import { isPlatformBrowser } from '@angular/common';
import {
  afterNextRender,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  PLATFORM_ID,
  signal,
  viewChild,
  viewChildren,
} from '@angular/core';

interface Step {
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-methodology',
  template: `
    <section id="methodology" #sectionEl class="py-20 md:py-28 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <!-- Section Header -->
        <div class="text-center mb-16 md:mb-20">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Un accompagnement structuré, pas à pas
          </h2>
          <p class="text-lg text-text-secondary max-w-2xl mx-auto">
            Chaque participant est unique. Notre méthode s'adapte à son rythme, ses besoins et ses
            objectifs — de la 1re primaire à la 4e secondaire.
          </p>
        </div>

        <!-- Desktop Layout: Timeline + Image -->
        <div class="hidden md:grid md:grid-cols-5 gap-12 items-start">
          <!-- Timeline Desktop -->
          <div #timelineEl class="col-span-3 relative">
            <!-- Vertical Line Background -->
            <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            <!-- Vertical Line Progress -->
            <div
              class="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-sael-yellow via-sael-orange to-sael-pink"
              [style.height.px]="progressHeight()"
            ></div>

            <!-- Steps -->
            <div class="space-y-16">
              @for (step of steps; track step.number; let i = $index) {
                <div
                  #stepElement
                  class="relative pl-24 transition-all duration-300"
                  [class.opacity-100]="scrollProgress() >= getStepThreshold(i)"
                  [class.opacity-40]="scrollProgress() < getStepThreshold(i)"
                >
                  <!-- Number Circle -->
                  <div
                    class="absolute left-0 w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-300 border-2"
                    [class.bg-sael-yellow]="scrollProgress() >= getStepThreshold(i)"
                    [class.border-sael-orange]="scrollProgress() >= getStepThreshold(i)"
                    [class.text-text-primary]="scrollProgress() >= getStepThreshold(i)"
                    [class.scale-110]="scrollProgress() >= getStepThreshold(i)"
                    [class.bg-gray-100]="scrollProgress() < getStepThreshold(i)"
                    [class.border-gray-200]="scrollProgress() < getStepThreshold(i)"
                    [class.text-gray-400]="scrollProgress() < getStepThreshold(i)"
                  >
                    {{ step.number }}
                  </div>

                  <!-- Content -->
                  <div
                    class="bg-bg-warm rounded-2xl p-8 transition-all duration-300"
                    [class.shadow-lg]="scrollProgress() >= getStepThreshold(i)"
                    [class.translate-x-2]="scrollProgress() >= getStepThreshold(i)"
                  >
                    <h3 class="text-xl font-semibold text-text-primary mb-3">
                      {{ step.title }}
                    </h3>
                    <p class="text-text-secondary leading-relaxed">
                      {{ step.description }}
                    </p>
                  </div>
                </div>
              }
            </div>
          </div>

          <!-- Sticky Image -->
          <div class="col-span-2 sticky top-24">
            <div class="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="methodology.png"
                alt="Élève accompagné en ligne"
                class="w-full h-auto object-cover"
              />
            </div>
            <p class="text-center text-sm text-text-secondary mt-4 italic">
              Un accompagnement personnalisé, en direct
            </p>
          </div>
        </div>

        <!-- Timeline Mobile -->
        <div #timelineMobileEl class="md:hidden relative">
          <!-- Vertical Line Background -->
          <div class="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2"></div>
          <!-- Vertical Line Progress -->
          <div
            class="absolute left-6 top-0 w-0.5 bg-gradient-to-b from-sael-yellow via-sael-orange to-sael-pink -translate-x-1/2"
            [style.height.px]="progressHeightMobile()"
          ></div>

          <!-- Steps -->
          <div class="space-y-8">
            @for (step of steps; track step.number; let i = $index) {
              <div
                #stepElementMobile
                class="relative pl-16 transition-all duration-300"
                [class.opacity-100]="scrollProgressMobile() >= getStepThreshold(i)"
                [class.opacity-50]="scrollProgressMobile() < getStepThreshold(i)"
              >
                <!-- Number Circle -->
                <div
                  class="absolute left-0 w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 border-2"
                  [class.bg-sael-yellow]="scrollProgressMobile() >= getStepThreshold(i)"
                  [class.border-sael-orange]="scrollProgressMobile() >= getStepThreshold(i)"
                  [class.text-text-primary]="scrollProgressMobile() >= getStepThreshold(i)"
                  [class.scale-110]="scrollProgressMobile() >= getStepThreshold(i)"
                  [class.bg-gray-100]="scrollProgressMobile() < getStepThreshold(i)"
                  [class.border-gray-200]="scrollProgressMobile() < getStepThreshold(i)"
                  [class.text-gray-400]="scrollProgressMobile() < getStepThreshold(i)"
                >
                  {{ step.number }}
                </div>

                <!-- Content -->
                <div class="pb-2">
                  <h3 class="text-lg font-semibold text-text-primary mb-2">
                    {{ step.title }}
                  </h3>
                  <p class="text-sm text-text-secondary leading-relaxed">
                    {{ step.description }}
                  </p>
                </div>
              </div>
            }
          </div>
        </div>

        <!-- Continuity Block -->
        <div
          class="mt-16 md:mt-20 bg-gradient-to-r from-sael-yellow/30 via-sael-orange/30 to-sael-pink/30 rounded-2xl p-8 md:p-10 text-center"
        >
          <div class="max-w-2xl mx-auto">
            <h3 class="text-2xl font-semibold text-text-primary mb-4">
              Un accompagnement qui grandit avec votre enfant
            </h3>
            <p class="text-text-secondary leading-relaxed">
              De la 1re primaire à la 4e secondaire, les besoins évoluent — et notre accompagnement
              aussi. Les familles qui nous font confiance restent souvent plusieurs années. Nous
              construisons une relation durable, alignée sur les programmes de la Fédération
              Wallonie-Bruxelles, pour que votre enfant progresse sereinement, année après année.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class Methodology {
  private platformId = inject(PLATFORM_ID);
  private destroyRef = inject(DestroyRef);

  sectionEl = viewChild<ElementRef>('sectionEl');
  timelineEl = viewChild<ElementRef>('timelineEl');
  timelineMobileEl = viewChild<ElementRef>('timelineMobileEl');
  stepElements = viewChildren<ElementRef>('stepElement');
  stepElementsMobile = viewChildren<ElementRef>('stepElementMobile');

  scrollProgress = signal(0);
  scrollProgressMobile = signal(0);
  progressHeight = signal(0);
  progressHeightMobile = signal(0);

  steps: Step[] = [
    {
      number: '01',
      title: 'Bilan personnalisé',
      description:
        "Nous commençons par un entretien gratuit pour comprendre les besoins de votre enfant, ses difficultés et ses points forts. Ce bilan nous permet de définir ensemble un plan d'accompagnement adapté.",
    },
    {
      number: '02',
      title: 'Objectifs clairs et réalistes',
      description:
        'Avec vous et votre enfant, nous fixons des objectifs concrets et atteignables. Pas de promesses vagues : des étapes précises pour progresser à son rythme.',
    },
    {
      number: '03',
      title: 'Accompagnement régulier',
      description:
        'Un accompagnateur dédié accompagne votre enfant chaque semaine. Les séances sont structurées, mais flexibles. Nous faisons des points réguliers avec vous pour ajuster si besoin.',
    },
    {
      number: '04',
      title: 'Suivi et adaptation continue',
      description:
        'Les besoins changent, nous nous adaptons. Bilans trimestriels, ajustement des objectifs, préparation aux examens (CEB, CE1D) — un accompagnement structuré, personnalisé et aligné sur les programmes de la Fédération Wallonie-Bruxelles, à vos côtés sur la durée.',
    },
  ];

  constructor() {
    afterNextRender(() => {
      if (isPlatformBrowser(this.platformId)) {
        this.setupScrollListener();
      }
    });
  }

  getStepThreshold(index: number): number {
    return (index + 1) / this.steps.length;
  }

  private setupScrollListener(): void {
    const onScroll = () => {
      this.updateScrollProgress();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    this.destroyRef.onDestroy(() => {
      window.removeEventListener('scroll', onScroll);
    });
  }

  private updateScrollProgress(): void {
    const timeline = this.timelineEl()?.nativeElement;
    const timelineMobile = this.timelineMobileEl()?.nativeElement;

    if (timeline) {
      const rect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const timelineTop = rect.top;
      const timelineHeight = rect.height;

      const startOffset = windowHeight * 0.7;
      const scrolled = startOffset - timelineTop;
      const totalScrollable = timelineHeight;

      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
      this.scrollProgress.set(progress);

      const heightProgress = Math.max(0, Math.min(timelineHeight, scrolled));
      this.progressHeight.set(heightProgress);
    }

    if (timelineMobile) {
      const rect = timelineMobile.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const timelineTop = rect.top;
      const timelineHeight = rect.height;

      const startOffset = windowHeight * 0.6;
      const scrolled = startOffset - timelineTop;
      const totalScrollable = timelineHeight;

      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
      this.scrollProgressMobile.set(progress);

      const heightProgress = Math.max(0, Math.min(timelineHeight, scrolled));
      this.progressHeightMobile.set(heightProgress);
    }
  }
}
