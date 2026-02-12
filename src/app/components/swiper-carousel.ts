import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  input,
  output,
  signal,
  ViewChild,
  ElementRef,
  afterNextRender,
} from '@angular/core';
import type { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-swiper-carousel',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="relative" (mouseenter)="pause()" (mouseleave)="resume()">
      <!-- Swiper viewport -->
      <div class="swiper-viewport">
        <swiper-container
          #swiperRef
          init="false"
        >
          <ng-content></ng-content>
        </swiper-container>
      </div>

      <!-- Arrow Left -->
      <button
        (click)="slidePrev()"
        class="arrow-btn arrow-left"
        aria-label="Slide précédent"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <!-- Arrow Right -->
      <button
        (click)="slideNext()"
        class="arrow-btn arrow-right"
        aria-label="Slide suivant"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <!-- Dots Navigation -->
    <div class="flex justify-center items-center gap-2.5 mt-8">
      @for (dot of dots(); track dot) {
        <button
          (click)="slideTo(dot)"
          class="dot"
          [class.active]="dot === activeIndex()"
          [attr.aria-label]="'Slide ' + (dot + 1)"
        ></button>
      }
    </div>

    <!-- Optional Counter -->
    @if (showCounter()) {
      <p class="text-center text-text-secondary text-sm mt-3">
        {{ activeIndex() + 1 }} / {{ totalSlides() }}
      </p>
    }
  `,
  styles: `
    .swiper-viewport {
      overflow: hidden;
      border-radius: 1rem;
    }

    /* Arrows */
    .arrow-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 40px;
      height: 40px;
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

    .arrow-btn:hover {
      background: #f9fafb;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      transform: translateY(-50%) scale(1.08);
    }

    .arrow-btn:active {
      transform: translateY(-50%) scale(0.95);
    }

    .arrow-left {
      left: 0.5rem;
    }

    .arrow-right {
      right: 0.5rem;
    }

    @media (min-width: 768px) {
      .arrow-btn {
        width: 44px;
        height: 44px;
      }

      .arrow-left {
        left: -1.5rem;
      }

      .arrow-right {
        right: -1.5rem;
      }
    }

    @media (min-width: 1024px) {
      .arrow-left {
        left: -2rem;
      }

      .arrow-right {
        right: -2rem;
      }
    }

    /* Dots */
    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #d1d5db;
      border: none;
      cursor: pointer;
      padding: 0;
      transition: all 0.3s ease;
    }

    .dot:hover {
      background: #9ca3af;
    }

    .dot.active {
      background: var(--sael-orange, #e87a2e);
      width: 24px;
      border-radius: 4px;
    }
  `,
})
export class SwiperCarousel {
  // Inputs
  readonly slidesPerView = input(1);
  readonly spaceBetween = input(0);
  readonly autoplay = input(true);
  readonly autoplayDelay = input(8000);
  readonly loop = input(true);
  readonly autoHeight = input(true);
  readonly showCounter = input(false);
  readonly totalSlides = input(0);

  // Outputs
  readonly slideChange = output<number>();

  // Internal state
  readonly activeIndex = signal(0);
  readonly dots = signal<number[]>([]);

  @ViewChild('swiperRef', { static: false }) swiperRef!: ElementRef<SwiperContainer>;

  private swiperInstance: any = null;

  constructor() {
    afterNextRender(() => {
      this.initSwiper();
    });
  }

  private async initSwiper() {
    const { register } = await import('swiper/element/bundle');
    register();

    // Wait for the element to be available
    const el = this.swiperRef?.nativeElement;
    if (!el) return;

    // Configure swiper parameters
    const params: Record<string, any> = {
      slidesPerView: this.slidesPerView(),
      spaceBetween: this.spaceBetween(),
      loop: this.loop(),
      autoHeight: this.autoHeight(),
      pagination: false,
      navigation: false,
      on: {
        slideChange: (swiper: any) => {
          this.activeIndex.set(swiper.realIndex);
          this.slideChange.emit(swiper.realIndex);
        },
        init: (swiper: any) => {
          this.swiperInstance = swiper;
          const count = swiper.slides.length;
          // In loop mode, swiper duplicates slides — use the original count
          const realCount = this.totalSlides() || this.getRealSlideCount(swiper);
          this.dots.set(Array.from({ length: realCount }, (_, i) => i));
          this.activeIndex.set(swiper.realIndex);
        },
      },
    };

    if (this.autoplay()) {
      params['autoplay'] = {
        delay: this.autoplayDelay(),
        disableOnInteraction: false,
        pauseOnMouseEnter: false, // We handle pause/resume manually
      };
    }

    Object.assign(el, params);
    el.initialize();
  }

  private getRealSlideCount(swiper: any): number {
    if (!this.loop()) return swiper.slides.length;
    // In loop mode, count non-duplicate slides
    const allSlides = swiper.el.querySelectorAll('swiper-slide:not(.swiper-slide-duplicate)');
    return allSlides.length;
  }

  slidePrev() {
    this.swiperInstance?.slidePrev();
  }

  slideNext() {
    this.swiperInstance?.slideNext();
  }

  slideTo(index: number) {
    if (this.loop()) {
      this.swiperInstance?.slideToLoop(index);
    } else {
      this.swiperInstance?.slideTo(index);
    }
  }

  pause() {
    this.swiperInstance?.autoplay?.stop();
  }

  resume() {
    if (this.autoplay()) {
      this.swiperInstance?.autoplay?.start();
    }
  }

  /** Allows the parent to trigger an autoHeight update (e.g. after content expand/collapse) */
  updateAutoHeight() {
    this.swiperInstance?.updateAutoHeight();
  }
}
