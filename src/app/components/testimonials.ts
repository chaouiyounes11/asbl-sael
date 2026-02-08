import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef } from '@angular/core';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

@Component({
  selector: 'app-testimonials',
  template: `
    <section id="testimonials" class="py-20 md:py-28 !bg-bg-warm overflow-hidden">
      <div class="max-w-4xl mx-auto px-6">
        <!-- Section Header -->
        <div class="text-center mb-12 md:mb-16">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Ils nous font confiance
          </h2>
          <p class="text-base md:text-lg text-text-secondary">
            Parce que ce sont souvent les parents qui en parlent le mieux.
          </p>
        </div>

        <!-- Carousel -->
        <div
          class="relative"
          (mouseenter)="pauseAutoPlay()"
          (mouseleave)="resumeAutoPlay()"
        >
          <!-- Viewport -->
          <div
            class="carousel-viewport"
            (touchstart)="onTouchStart($event)"
            (touchmove)="onTouchMove($event)"
            (touchend)="onTouchEnd()"
          >
            <div
              class="carousel-track"
              [style.transform]="'translateX(' + translateX + 'px)'"
              [class.is-dragging]="isDragging"
            >
              @for (testimonial of testimonials; track $index) {
                <div class="carousel-slide">
                  <div class="carousel-card">
                    <!-- Quote mark -->
                    <div class="quote-mark">"</div>

                    <!-- Quote -->
                    <p class="text-text-secondary text-base md:text-lg leading-relaxed mb-8">
                      {{ testimonial.quote }}
                    </p>

                    <!-- Attribution -->
                    <div class="flex items-center gap-3">
                      <div
                        class="w-10 h-10 rounded-full bg-sael-yellow/40 flex items-center justify-center flex-shrink-0"
                      >
                        <span class="text-text-primary font-semibold text-sm">
                          {{ testimonial.name.charAt(0) }}
                        </span>
                      </div>
                      <div>
                        <p class="font-semibold text-text-primary text-sm md:text-base">
                          {{ testimonial.name }}
                        </p>
                        <p class="text-text-secondary text-xs md:text-sm">
                          {{ testimonial.role }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>

          <!-- Arrow Left -->
          <button
            (click)="prev()"
            class="arrow-btn arrow-left"
            aria-label="Témoignage précédent"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <!-- Arrow Right -->
          <button
            (click)="next()"
            class="arrow-btn arrow-right"
            aria-label="Témoignage suivant"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <!-- Dots Navigation -->
        <div class="flex justify-center items-center gap-2.5 mt-8">
          @for (t of testimonials; track $index) {
            <button
              (click)="goTo($index)"
              class="dot"
              [class.active]="$index === currentIndex"
              [attr.aria-label]="'Témoignage ' + ($index + 1)"
            ></button>
          }
        </div>
        <p class="text-center text-text-secondary text-sm mt-3">
          {{ currentIndex + 1 }} / {{ testimonials.length }}
        </p>
      </div>

      <div class="max-w-6xl mx-auto px-6">
        <!-- Video Placeholder -->
        <div class="mt-12 md:mt-16">
          <div
            class="bg-bg-warm rounded-2xl p-8 md:p-12 text-center border-2 border-dashed border-sael-orange/30"
          >
            <div
              class="w-16 h-16 rounded-full bg-sael-orange/20 flex items-center justify-center mx-auto mb-6"
            >
              <svg
                class="w-8 h-8 text-sael-orange"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-text-primary mb-3">Témoignages vidéo</h3>
            <p class="text-text-secondary max-w-md mx-auto">
              Nous préparons actuellement des témoignages vidéo de parents et d'apprenants. Ils seront
              bientôt disponibles ici.
            </p>
          </div>
        </div>

        <!-- CTA -->
        <div class="mt-12 md:mt-16 text-center">
          <a
            href="#contact"
            class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-cta-primary hover:bg-cta-primary-hover rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Prendre rendez-vous
          </a>
          <p class="text-text-secondary text-sm mt-4">Échange gratuit et sans engagement.</p>
        </div>
      </div>
    </section>
  `,
  styles: `
    .carousel-viewport {
      overflow: hidden;
      border-radius: 1rem;
      transition: height 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
    }

    .carousel-track {
      display: flex;
      transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
      will-change: transform;
    }

    .carousel-track.is-dragging {
      transition: none;
    }

    .carousel-slide {
      flex-shrink: 0;
      width: 100%;
    }

    .carousel-card {
      background: white;
      border-radius: 1rem;
      padding: 2rem;
      border: 1px solid #f3f4f6;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    }

    @media (min-width: 768px) {
      .carousel-card {
        padding: 3rem;
      }
    }

    .quote-mark {
      font-family: Georgia, 'Times New Roman', serif;
      font-size: 3rem;
      line-height: 1;
      margin-bottom: 0.75rem;
      color: var(--sael-orange, #e87a2e);
    }

    @media (min-width: 768px) {
      .quote-mark {
        font-size: 4rem;
        margin-bottom: 1rem;
      }
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
export class Testimonials implements OnInit, OnDestroy, AfterViewInit {
  constructor(private el: ElementRef) {}
  testimonials: Testimonial[] = [
    {
      quote:
        "Ma fille est en 2ème secondaire et a des difficultés en mathématiques. Avec les cours particuliers de SAEL, elle a trouvé la patience et la douceur dont elle a besoin dans l'apprentissage de cette matière qu'elle redoute.",
      name: "Parent d'élève",
      role: 'Parent · 2ème secondaire',
    },
    {
      quote:
        "Mon fils est accompagné par Monsieur Gontran et nous sommes très satisfaits de son suivi. Nous avons particulièrement apprécié son écoute, sa bienveillance et sa manière de s'adapter aux besoins spécifiques de notre enfant. Les séances ont eu un impact très positif, tant sur la confiance de notre fils que sur sa façon d'aborder ses difficultés. L'approche de SAEL est à la fois professionnelle, humaine et rassurante pour les parents. Un grand merci pour cet accompagnement de qualité.",
      name: "Parent d'élève",
      role: 'Parent · Secondaire',
    },
    {
      quote:
        "Après une première expérience infructueuse de son examen d'histoire-géo, votre intervention lui a vraiment permis de comprendre la critique historique et ce qu'on attendait d'elle pour cet examen, qui n'était pas que de la mémoire. J'ai surtout ressenti beaucoup de bienveillance et une énergie de transmission animée par un feu sacré, communicatif et terriblement bienveillant. Encore merci de votre implication.",
      name: 'Diane V.D.S',
      role: 'Maman de Mahlia · CE2D',
    },
    {
      quote:
        "Cela fait la deuxième année que nous avons inscrit nos filles à SAEL. M. Gontran est très pédagogue et a une manière innée pour expliquer les différentes matières. De même, je tenais aussi à mettre Mme Fatima à l'honneur pour sa gentillesse, son aide et sa réactivité. Merci à toute l'équipe SAEL pour votre aide, soutien, pour nous parents, vous êtes une aide précieuse.",
      name: "Parent d'élève",
      role: 'Parent · Secondaire',
    },
    {
      quote:
        "Je suis une élève de Mr Gontran et une ancienne élève de Mme Fatima. Ils sont une équipe formidable qui nous aident dans nos moments de faiblesses, incertitudes à surmonter nos difficultés. Mr Gontran a toujours le mot pour rire et nous mettre à l'aise. Les matières sont plus compréhensibles avec ses explications. Merci.",
      name: 'Élève de SAEL',
      role: 'Élève · Secondaire',
    },
    {
      quote:
        "Nous tenions à vous adresser nos sincères remerciements pour le travail remarquable que vous accomplissez. Grâce à votre professionnalisme, nos enfants sont ravis de participer à vos sessions en ligne même en vacances et ils apprennent énormément ! Nous apprécions particulièrement l'ambiance chaleureuse, bienveillante et rassurante que vous créez. La relation que vous entretenez avec les enfants est basée sur le respect, la patience et l'encouragement, ce qui leur donne envie d'apprendre et de s'épanouir. Votre dévouement et votre proximité avec eux font une réelle différence dans leur parcours.",
      name: 'David & Fairouz',
      role: "Parents de participants",
    },
  ];

  currentIndex = 0;
  translateX = 0;
  isDragging = false;

  private autoPlayInterval: ReturnType<typeof setInterval> | null = null;
  private touchStartX = 0;
  private touchCurrentX = 0;
  private slideWidth = 0;

  ngOnInit() {
    this.startAutoPlay();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.onResize);
    }
  }

  ngAfterViewInit() {
    setTimeout(() => this.updateHeight(), 0);
  }

  ngOnDestroy() {
    this.stopAutoPlay();
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize);
    }
  }

  next() {
    if (this.currentIndex < this.testimonials.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.updatePosition();
    this.resetAutoPlay();
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.testimonials.length - 1;
    }
    this.updatePosition();
    this.resetAutoPlay();
  }

  goTo(index: number) {
    if (index !== this.currentIndex) {
      this.currentIndex = index;
      this.updatePosition();
      this.resetAutoPlay();
    }
  }

  onTouchStart(event: TouchEvent) {
    this.isDragging = true;
    this.touchStartX = event.touches[0].clientX;
    this.touchCurrentX = this.touchStartX;
    this.slideWidth = this.getSlideWidth();
  }

  onTouchMove(event: TouchEvent) {
    if (!this.isDragging) return;
    this.touchCurrentX = event.touches[0].clientX;
    const diff = this.touchCurrentX - this.touchStartX;
    this.translateX = -this.currentIndex * this.slideWidth + diff;
  }

  onTouchEnd() {
    if (!this.isDragging) return;
    this.isDragging = false;
    const diff = this.touchCurrentX - this.touchStartX;
    const threshold = this.slideWidth * 0.2;

    if (diff < -threshold && this.currentIndex < this.testimonials.length - 1) {
      this.currentIndex++;
    } else if (diff > threshold && this.currentIndex > 0) {
      this.currentIndex--;
    }

    this.updatePosition();
    this.resetAutoPlay();
  }

  pauseAutoPlay() {
    this.stopAutoPlay();
  }

  resumeAutoPlay() {
    this.startAutoPlay();
  }

  private updatePosition() {
    this.slideWidth = this.getSlideWidth();
    this.translateX = -this.currentIndex * this.slideWidth;
    this.updateHeight();
  }

  private updateHeight() {
    const host = this.el.nativeElement;
    const slides = host.querySelectorAll('.carousel-slide');
    const viewport = host.querySelector('.carousel-viewport') as HTMLElement;
    if (slides[this.currentIndex] && viewport) {
      const card = slides[this.currentIndex].querySelector('.carousel-card') as HTMLElement;
      if (card) {
        viewport.style.height = card.offsetHeight + 'px';
      }
    }
  }

  private getSlideWidth(): number {
    const host = this.el.nativeElement;
    const viewport = host.querySelector('.carousel-viewport');
    return viewport ? viewport.clientWidth : 0;
  }

  private onResize = () => {
    this.updatePosition();
  };

  private startAutoPlay() {
    this.stopAutoPlay();
    this.autoPlayInterval = setInterval(() => this.next(), 8000);
  }

  private stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }

  private resetAutoPlay() {
    this.stopAutoPlay();
    this.startAutoPlay();
  }
}
