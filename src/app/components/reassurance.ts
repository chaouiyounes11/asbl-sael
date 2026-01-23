import { Component } from '@angular/core';
import { SafeHtmlPipe } from './safe-html.pipe';

interface ReassuranceBlock {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-reassurance',
  imports: [SafeHtmlPipe],
  template: `
    <section id="reassurance" class="py-20 md:py-28 bg-bg-warm">
      <div class="max-w-6xl mx-auto px-6">
        <!-- Desktop: Image + Content -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12 md:mb-16">
          <!-- Image -->
          <div class="hidden lg:block">
            <div class="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="reassurance.png"
                alt="Parent rassuré accompagnant son enfant"
                class="w-full h-auto object-cover"
              />
            </div>
          </div>

          <!-- Question centrale -->
          <div class="text-center lg:text-left">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Les cours en ligne, est-ce que ça marche vraiment ?
            </h2>
            <p class="text-base md:text-lg text-text-secondary max-w-2xl mx-auto lg:mx-0">
              Oui, à condition d'avoir un vrai suivi, de l'interaction et une méthode adaptée à
              chaque participant.
            </p>
          </div>
        </div>

        <!-- Blocs objections levées -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          @for (block of blocks; track block.title) {
            <div
              class="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <!-- Icon -->
              <div
                class="w-14 h-14 rounded-xl bg-sael-yellow/30 flex items-center justify-center mb-5"
              >
                <span class="text-3xl" [innerHTML]="block.icon | safeHtml"></span>
              </div>

              <!-- Title -->
              <h3 class="text-lg font-semibold text-text-primary mb-3">
                {{ block.title }}
              </h3>

              <!-- Description -->
              <p class="text-text-secondary leading-relaxed">
                {{ block.description }}
              </p>
            </div>
          }
        </div>

        <!-- Phrase de rassurance finale -->
        <div class="mt-12 md:mt-16 text-center">
          <p class="text-text-secondary text-base md:text-lg max-w-2xl mx-auto italic">
            "L'accompagnement en ligne fonctionne quand il est humain, structuré et suivi dans le
            temps."
          </p>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class Reassurance {
  blocks: ReassuranceBlock[] = [
    {
      icon: '<svg class="w-7 h-7 text-sael-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>',
      title: 'Un suivi réel et personnalisé',
      description:
        "Votre enfant n'est pas un numéro. Son accompagnateur le connaît, suit ses progrès et fait des points réguliers avec vous. Des objectifs clairs, des ajustements si besoin.",
    },
    {
      icon: '<svg class="w-7 h-7 text-sael-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>',
      title: "De l'interaction, pas un écran passif",
      description:
        "Les séances sont en direct, avec de vrais échanges. L'accompagnateur pose des questions, écoute, motive. Votre enfant est acteur de son apprentissage, pas spectateur.",
    },
    {
      icon: '<svg class="w-7 h-7 text-sael-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>',
      title: 'Une méthode qui donne des résultats',
      description:
        'Nous suivons une méthodologie structurée, adaptée au niveau du participant. La progression est mesurable, et nous ajustons le parcours selon ses besoins.',
    },
  ];
}
