import { Component } from '@angular/core';
import { SafeHtmlPipe } from './safe-html.pipe';

interface AudienceCard {
  title: string;
  svgIcon: string;
  bgColor: string;
  borderColor: string;
  objectPosition: string;
  points: string[];
  image: string;
}

@Component({
  selector: 'app-audience',
  imports: [SafeHtmlPipe],
  template: `
    <section id="audience" class="py-20 md:py-28 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <!-- Section Header -->
        <div class="text-center mb-12 md:mb-16">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Un accompagnement adapté à chaque étape
          </h2>
          <p class="text-base md:text-lg text-text-secondary max-w-2xl mx-auto">
            Chaque participant est différent. Notre accompagnement évolue avec son niveau, son
            rythme et ses objectifs — en suivant les programmes de la Fédération Wallonie-Bruxelles.
          </p>
        </div>

        <!-- Bandeau informatif -->
        <div class="bg-gray-100 rounded-lg px-4 py-3 mb-10 flex items-center gap-3 max-w-2xl mx-auto">
          <svg class="w-5 h-5 text-text-secondary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <p class="text-sm text-text-secondary">
            <span class="font-medium">À noter :</span> SAEL n'est pas une école en ligne et ne délivre pas d'enseignement officiel. Nous proposons un accompagnement socio-scolaire complémentaire.
          </p>
        </div>

        <!-- Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          @for (card of cards; track card.title) {
            <div
              class="group rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2"
              [class]="card.bgColor + ' ' + card.borderColor + ' ' + card.objectPosition"
            >
              <!-- Image -->
              <div class="h-60 overflow-hidden">
                <img
                  [src]="card.image"
                  [alt]="card.title"
                  class="w-full h-full object-cover ob group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <!-- Content -->
              <div class="p-6 md:p-8">
                <!-- Icon + Title -->
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 rounded-lg flex items-center justify-center bg-white/60">
                    <span class="text-xl" [innerHTML]="card.svgIcon | safeHtml"></span>
                  </div>
                  <h3 class="text-xl font-semibold text-text-primary">
                    {{ card.title }}
                  </h3>
                </div>

                <!-- Points -->
                <ul class="space-y-3">
                  @for (point of card.points; track point) {
                    <li class="flex items-start gap-3 text-text-secondary">
                      <svg
                        class="w-5 h-5 text-cta-primary shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span class="text-sm md:text-base">{{ point }}</span>
                    </li>
                  }
                </ul>
              </div>
            </div>
          }
        </div>

        <!-- Reassurance -->
        <div
          class="mt-16 md:mt-20 rounded-2xl p-8 md:p-10 text-center relative overflow-hidden bg-gradient-to-r from-sael-yellow/30 via-sael-orange/30 to-sael-pink/30"
        >
          <div
            class="absolute inset-0 bg-gradient-to-r from-sael-yellow/80 via-sael-orange/70 to-sael-pink/80"
          ></div>
          <p class="relative text-text-secondary max-w-2xl mx-auto">
            <span class="font-medium text-text-primary">Nous nous adaptons</span>
            selon l'année, le niveau et l'évolution de votre enfant. Un accompagnement flexible, qui
            grandit avec lui.
          </p>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class Audience {
  cards: AudienceCard[] = [
    {
      title: 'Primaire (P1 à P6)',
      svgIcon:
        '<svg class="w-6 h-6 text-sael-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>',
      bgColor: 'bg-sael-yellow/30',
      borderColor: 'border-sael-yellow/50',
      objectPosition: 'object-bottom',
      image: 'audience-primaire.jpg',
      points: [
        'Consolider les bases en lecture, écriture et calcul',
        "Développer la confiance et le goût d'apprendre",
        'Acquérir une méthode de travail adaptée à son âge',
      ],
    },
    {
      title: 'Secondaire (1re à 4e)',
      svgIcon:
        '<svg class="w-6 h-6 text-sael-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>',
      bgColor: 'bg-sael-pink/30',
      borderColor: 'border-sael-pink/50',
      objectPosition: 'object-center',
      image: 'audience-secondaire.jpg',
      points: [
        "Renforcer l'organisation et l'autonomie",
        'Approfondir la compréhension des matières clés',
        "Développer l'esprit critique et préparer les examens",
      ],
    },
  ];
}
