import { Component } from '@angular/core';

@Component({
  selector: 'app-exam-prep',
  template: `
    <section id="exam-prep" class="py-20 md:py-28 bg-bg-warm">
      <div class="max-w-6xl mx-auto px-6">
        <!-- Section Header -->
        <div class="text-center mb-12 md:mb-16">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Préparation CEB & CE1D : un accompagnement progressif
          </h2>
          <p class="text-base md:text-lg text-text-secondary max-w-3xl mx-auto">
            Le CEB et le CE1D sont des étapes clés du parcours scolaire en Fédération
            Wallonie-Bruxelles. Chez SAEL, nous préparons votre enfant sur le long terme — pas de
            bachotage de dernière minute, mais une progression structurée qui construit la réussite.
          </p>
        </div>

        <!-- Bandeau informatif -->
        <div class="bg-gray-100 rounded-lg px-4 py-3 mb-10 flex items-center gap-3 max-w-3xl mx-auto">
          <svg class="w-5 h-5 text-text-secondary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <p class="text-sm text-text-secondary">
            <span class="font-medium">À noter :</span> SAEL accompagne la préparation aux examens mais ne se substitue pas à l'école. Nous ne délivrons pas d'enseignement officiel.
          </p>
        </div>

        <!-- Common Methodology - 3 Steps -->
        <div class="bg-white rounded-2xl p-8 md:p-10 shadow-sm mb-10 md:mb-12">
          <h3 class="text-lg md:text-xl font-bold text-text-primary text-center mb-8">
            Notre approche en 3 phases
          </h3>

          <!-- Desktop: Horizontal with connecting line -->
          <div class="hidden md:block relative">
            <!-- Connecting line -->
            <div class="absolute top-6 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-0.5 bg-gradient-to-r from-sael-yellow via-sael-orange to-sael-pink"></div>

            <div class="grid grid-cols-3 gap-6">
              <!-- Step 1 -->
              <div class="flex flex-col items-center text-center">
                <div class="relative z-10 w-12 h-12 rounded-full bg-sael-yellow flex items-center justify-center text-lg font-bold text-white shadow-md mb-4">
                  1
                </div>
                <h4 class="font-semibold text-text-primary mb-2">Méthode</h4>
                <p class="text-sm text-text-secondary">
                  Acquérir les bonnes habitudes de travail et consolider les fondamentaux.
                </p>
              </div>

              <!-- Step 2 -->
              <div class="flex flex-col items-center text-center">
                <div class="relative z-10 w-12 h-12 rounded-full bg-sael-orange flex items-center justify-center text-lg font-bold text-white shadow-md mb-4">
                  2
                </div>
                <h4 class="font-semibold text-text-primary mb-2">Consolidation</h4>
                <p class="text-sm text-text-secondary">
                  Identifier et combler les lacunes, renforcer la compréhension.
                </p>
              </div>

              <!-- Step 3 -->
              <div class="flex flex-col items-center text-center">
                <div class="relative z-10 w-12 h-12 rounded-full bg-sael-pink flex items-center justify-center text-lg font-bold text-white shadow-md mb-4">
                  3
                </div>
                <h4 class="font-semibold text-text-primary mb-2">Entraînement</h4>
                <p class="text-sm text-text-secondary">
                  S'exercer sur des épreuves types, gérer le temps et gagner en confiance.
                </p>
              </div>
            </div>
          </div>

          <!-- Mobile: Vertical layout -->
          <div class="md:hidden space-y-6">
            <!-- Step 1 -->
            <div class="flex items-start gap-4">
              <div class="shrink-0 w-10 h-10 rounded-full bg-sael-yellow flex items-center justify-center text-base font-bold text-white shadow-md">
                1
              </div>
              <div>
                <h4 class="font-semibold text-text-primary mb-1">Méthode</h4>
                <p class="text-sm text-text-secondary">
                  Acquérir les bonnes habitudes de travail et consolider les fondamentaux.
                </p>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="flex items-start gap-4">
              <div class="shrink-0 w-10 h-10 rounded-full bg-sael-orange flex items-center justify-center text-base font-bold text-white shadow-md">
                2
              </div>
              <div>
                <h4 class="font-semibold text-text-primary mb-1">Consolidation</h4>
                <p class="text-sm text-text-secondary">
                  Identifier et combler les lacunes, renforcer la compréhension.
                </p>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="flex items-start gap-4">
              <div class="shrink-0 w-10 h-10 rounded-full bg-sael-pink flex items-center justify-center text-base font-bold text-white shadow-md">
                3
              </div>
              <div>
                <h4 class="font-semibold text-text-primary mb-1">Entraînement</h4>
                <p class="text-sm text-text-secondary">
                  S'exercer sur des épreuves types, gérer le temps et gagner en confiance.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Two columns: CEB | CE1D (simplified) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <!-- CEB Card -->
          <div class="bg-white rounded-2xl border-2 border-sael-yellow/50 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div class="p-6 md:p-8">
              <!-- Header -->
              <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 rounded-xl bg-sael-yellow/20 flex items-center justify-center">
                  <svg class="w-6 h-6 text-sael-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-text-primary">CEB</h3>
                  <p class="text-sm text-text-secondary">Certificat d'Études de Base</p>
                </div>
              </div>

              <!-- Level -->
              <p class="text-text-secondary mb-4">
                Fin de 6<sup>e</sup> primaire
              </p>

              <!-- Subjects -->
              <h4 class="text-sm font-semibold text-text-primary uppercase tracking-wider mb-3">Matières évaluées</h4>
              <ul class="space-y-2">
                <li class="flex items-center gap-2 text-text-secondary">
                  <span class="w-1.5 h-1.5 rounded-full bg-sael-yellow"></span>
                  Français
                </li>
                <li class="flex items-center gap-2 text-text-secondary">
                  <span class="w-1.5 h-1.5 rounded-full bg-sael-yellow"></span>
                  Mathématiques
                </li>
                <li class="flex items-center gap-2 text-text-secondary">
                  <span class="w-1.5 h-1.5 rounded-full bg-sael-yellow"></span>
                  Éveil scientifique
                </li>
                <li class="flex items-center gap-2 text-text-secondary">
                  <span class="w-1.5 h-1.5 rounded-full bg-sael-yellow"></span>
                  Formation historique et géographique
                </li>
              </ul>
            </div>
          </div>

          <!-- CE1D Card -->
          <div class="bg-white rounded-2xl border-2 border-sael-pink/50 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div class="p-6 md:p-8">
              <!-- Header -->
              <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 rounded-xl bg-sael-pink/20 flex items-center justify-center">
                  <svg class="w-6 h-6 text-sael-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-text-primary">CE1D</h3>
                  <p class="text-sm text-text-secondary">Certificat d'Enseignement du 1er Degré</p>
                </div>
              </div>

              <!-- Level -->
              <p class="text-text-secondary mb-4">
                Fin de 2<sup>e</sup> secondaire
              </p>

              <!-- Subjects -->
              <h4 class="text-sm font-semibold text-text-primary uppercase tracking-wider mb-3">Matières évaluées</h4>
              <ul class="space-y-2">
                <li class="flex items-center gap-2 text-text-secondary">
                  <span class="w-1.5 h-1.5 rounded-full bg-sael-pink"></span>
                  Français
                </li>
                <li class="flex items-center gap-2 text-text-secondary">
                  <span class="w-1.5 h-1.5 rounded-full bg-sael-pink"></span>
                  Mathématiques
                </li>
                <li class="flex items-center gap-2 text-text-secondary">
                  <span class="w-1.5 h-1.5 rounded-full bg-sael-pink"></span>
                  Sciences
                </li>
                <li class="flex items-center gap-2 text-text-secondary">
                  <span class="w-1.5 h-1.5 rounded-full bg-sael-pink"></span>
                  Langues modernes
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="mt-12 md:mt-16 text-center">
          <p class="text-text-secondary mb-6 max-w-2xl mx-auto">
            La préparation aux examens commence bien avant la session. Parlons ensemble du parcours
            de votre enfant.
          </p>
          <a
            href="#contact"
            class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-cta-primary hover:bg-cta-primary-hover rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Prendre rendez-vous
          </a>
          <p class="text-text-secondary text-sm mt-4">Entretien gratuit · Sans engagement</p>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class ExamPrep {}
