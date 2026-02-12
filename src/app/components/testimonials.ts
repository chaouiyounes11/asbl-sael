import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ViewChild } from '@angular/core';
import { SwiperCarousel } from './swiper-carousel';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const TRUNCATE_THRESHOLD = 250;

@Component({
  selector: 'app-testimonials',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [SwiperCarousel],
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
        <app-swiper-carousel
          #carousel
          [autoplayDelay]="8000"
          [loop]="true"
          [autoHeight]="true"
          [showCounter]="true"
          [totalSlides]="testimonials.length"
        >
          @for (testimonial of testimonials; track $index) {
            <swiper-slide>
              <div class="carousel-card">
                <!-- Quote mark -->
                <div class="quote-mark">"</div>

                <!-- Quote -->
                <p class="text-text-secondary text-base md:text-lg leading-relaxed mb-4">
                  @if (needsTruncation(testimonial.quote) && !isExpanded($index)) {
                    {{ testimonial.quote.slice(0, ${TRUNCATE_THRESHOLD}) }}...
                  } @else {
                    {{ testimonial.quote }}
                  }
                </p>

                @if (needsTruncation(testimonial.quote)) {
                  <button
                    (click)="toggleExpand($index)"
                    class="text-cta-primary hover:text-cta-primary-hover font-medium text-sm mb-6 transition-colors"
                  >
                    @if (isExpanded($index)) {
                      Voir moins
                    } @else {
                      Voir plus
                    }
                  </button>
                }

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
            </swiper-slide>
          }
        </app-swiper-carousel>
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
  `,
})
export class Testimonials {
  @ViewChild('carousel') carousel!: SwiperCarousel;

  testimonials: Testimonial[] = [
    {
      quote:
        "Ma fille est en 2ème secondaire et a des difficultés en mathématiques. Avec les cours particuliers de SAEL, elle a trouvé la patience et la douceur dont elle a besoin dans l'apprentissage de cette matière qu'elle redoute.",
      name: 'Parent de participant',
      role: 'Parent · 2ème secondaire',
    },
    {
      quote:
        "Mon fils est accompagné par Monsieur Gontran et nous sommes très satisfaits de son suivi. Nous avons particulièrement apprécié son écoute, sa bienveillance et sa manière de s'adapter aux besoins spécifiques de notre enfant. Les séances ont eu un impact très positif, tant sur la confiance de notre fils que sur sa façon d'aborder ses difficultés. L'approche de SAEL est à la fois professionnelle, humaine et rassurante pour les parents. Un grand merci pour cet accompagnement de qualité.",
      name: 'Parent de participant',
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
      name: 'Parent de participant',
      role: 'Parent · Secondaire',
    },
    {
      quote:
        "Je suis une apprenante de Mr Gontran et une ancienne apprenante de Mme Fatima. Ils sont une équipe formidable qui nous aident dans nos moments de faiblesses, incertitudes à surmonter nos difficultés. Mr Gontran a toujours le mot pour rire et nous mettre à l'aise. Les matières sont plus compréhensibles avec ses explications. Merci.",
      name: 'Apprenante de SAEL',
      role: 'Apprenante · Secondaire',
    },
    {
      quote:
        "Nous tenions à vous adresser nos sincères remerciements pour le travail remarquable que vous accomplissez. Grâce à votre professionnalisme, nos enfants sont ravis de participer à vos sessions en ligne même en vacances et ils apprennent énormément ! Nous apprécions particulièrement l'ambiance chaleureuse, bienveillante et rassurante que vous créez. La relation que vous entretenez avec les enfants est basée sur le respect, la patience et l'encouragement, ce qui leur donne envie d'apprendre et de s'épanouir. Votre dévouement et votre proximité avec eux font une réelle différence dans leur parcours.",
      name: 'David & Fairouz',
      role: 'Parents de participants',
    },
    {
      quote:
        "Mon fils a eu la chance de suivre des cours avec un professeur de chez SAEL, et l'expérience a été extrêmement positive. Il a énormément apprécié aussi bien la qualité des cours que l'ambiance avec son professeur, le contact s'est fait immédiatement et il ne s'est jamais lassé des séances. Contrairement à d'autres cours en ligne où il traînait souvent des pieds pour se connecter et avait du mal à se concentrer, je l'ai trouvé beaucoup plus motivé et réceptif avec SAEL. Personnellement, je recommande cette ASBL les yeux fermés. Je compte d'ailleurs y réinscrire mon fils car il me demande encore régulièrement après son professeur.",
      name: 'Parent de participant',
      role: 'Parent · Secondaire',
    },
    {
      quote:
        "Je tiens à vous remercier sincèrement pour tout le travail que vous avez fait avec ma fille pendant les cours en ligne. Elle était très contente et a beaucoup apprécié votre façon claire et motivante d'expliquer. Grâce à vous elle a appris avec plaisir. Nous serons ravis de retravailler avec vous l'année prochaine.",
      name: 'Parent de participant',
      role: 'Parent · Secondaire',
    },
    {
      quote:
        "Je voulais vous faire un petit retour concernant l'accompagnement de Zoé en mathématiques. Depuis qu'elle a commencé les cours avec l'ASBL, elle a pris une confiance en elle assez incroyable. Au-delà des progrès dans la matière, on voit vraiment qu'elle a gagné en assurance. Elle ose davantage prendre sa place en classe, poser des questions et participer. Son professeur nous a d'ailleurs fait un retour très positif sur son comportement et son implication. Et pour Zoé, la plus belle reconnaissance, ce sont ses points. Elle est revenue récemment avec des résultats dont elle était vraiment fière, et c'est la première fois qu'on la voit aussi heureuse par rapport aux maths. Je voulais aussi souligner la disponibilité de l'ASBL. Le mode de communication via WhatsApp est vraiment simple et efficace, ce qui facilite énormément les échanges. Nous avons également beaucoup apprécié la compréhension et le non-jugement dont vous faites preuve envers les enfants. C'est un accompagnement vraiment précieux, et aussi très soutenant pour les parents. Les premiers contacts avec Gontran ont d'ailleurs été incroyablement clairs et rassurants, ce qui nous a tout de suite mis en confiance. Un grand merci.",
      name: 'Parent de Zoé',
      role: 'Parent · Secondaire',
    },
  ];

  private expandedSet = signal<Set<number>>(new Set());

  needsTruncation(quote: string): boolean {
    return quote.length > TRUNCATE_THRESHOLD;
  }

  isExpanded(index: number): boolean {
    return this.expandedSet().has(index);
  }

  toggleExpand(index: number) {
    const current = new Set(this.expandedSet());
    if (current.has(index)) {
      current.delete(index);
    } else {
      current.add(index);
    }
    this.expandedSet.set(current);

    // Let Swiper recalculate the slide height
    setTimeout(() => this.carousel?.updateAutoHeight(), 50);
  }
}
