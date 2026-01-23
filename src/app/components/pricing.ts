import { Component, signal } from '@angular/core';

interface Subject {
  name: string;
  volume: string;
  price: string;
}

interface Pack {
  name: string;
  price: string;
  highlight?: boolean;
}

interface Tab {
  id: string;
  label: string;
  description: string;
  subjects?: Subject[];
  packs?: Pack[];
  singlePrice?: string;
  singlePriceLabel?: string;
  features?: string[];
}

@Component({
  selector: 'app-pricing',
  template: `
    <section id="pricing" class="py-20 md:py-28 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <!-- Section Header -->
        <div class="text-center mb-8 md:mb-12">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Des formules claires, adaptées à chaque situation
          </h2>
          <p class="text-base md:text-lg text-text-secondary max-w-2xl mx-auto">
            Chaque élève a des besoins différents. Ces tarifs sont indicatifs — l'entretien
            découverte nous permet de vous conseiller la formule la plus adaptée.
          </p>
        </div>

        <!-- Entretien découverte banner -->
        <div class="bg-bg-warm border border-sael-orange/30 rounded-xl p-6 mb-10 text-center">
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div>
              <h3 class="text-lg font-semibold text-text-primary">Entretien découverte</h3>
              <p class="text-text-secondary text-sm">20–30 minutes pour faire connaissance, comprendre vos besoins et vous conseiller.</p>
            </div>
            <span class="bg-sael-orange text-text-primary font-bold px-4 py-2 rounded-lg text-lg">Gratuit</span>
          </div>
        </div>

        <!-- Tabs Navigation -->
        <div class="flex flex-wrap justify-center gap-2 mb-8">
          @for (tab of tabs; track tab.id) {
            <button
              (click)="activeTab.set(tab.id)"
              class="px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base"
              [class.bg-cta-primary]="activeTab() === tab.id"
              [class.text-white]="activeTab() === tab.id"
              [class.bg-gray-100]="activeTab() !== tab.id"
              [class.text-text-primary]="activeTab() !== tab.id"
              [class.hover:bg-gray-200]="activeTab() !== tab.id"
            >
              {{ tab.label }}
            </button>
          }
        </div>

        <!-- Tab Content -->
        @for (tab of tabs; track tab.id) {
          @if (activeTab() === tab.id) {
            <div class="bg-bg-warm rounded-2xl p-6 md:p-8">
              <!-- Tab Description -->
              <p class="text-text-secondary text-center mb-6">{{ tab.description }}</p>

              <!-- Single Price (for Individuel) -->
              @if (tab.singlePrice) {
                <div class="text-center mb-6">
                  <span class="text-4xl md:text-5xl font-bold text-text-primary">{{ tab.singlePrice }}</span>
                  <span class="text-text-secondary ml-2">{{ tab.singlePriceLabel }}</span>
                </div>
                @if (tab.features) {
                  <ul class="max-w-md mx-auto space-y-2">
                    @for (feature of tab.features; track feature) {
                      <li class="flex items-center gap-2 text-text-secondary">
                        <svg class="w-5 h-5 text-cta-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {{ feature }}
                      </li>
                    }
                  </ul>
                }
              }

              <!-- Subjects Table -->
              @if (tab.subjects && tab.subjects.length > 0) {
                <div class="overflow-x-auto mb-6">
                  <table class="w-full max-w-2xl mx-auto">
                    <thead>
                      <tr class="border-b border-gray-200">
                        <th class="text-left py-3 px-4 text-text-primary font-semibold">Matière</th>
                        <th class="text-center py-3 px-4 text-text-primary font-semibold">Volume</th>
                        <th class="text-right py-3 px-4 text-text-primary font-semibold">Prix</th>
                      </tr>
                    </thead>
                    <tbody>
                      @for (subject of tab.subjects; track subject.name) {
                        <tr class="border-b border-gray-100">
                          <td class="py-3 px-4 text-text-secondary">{{ subject.name }}</td>
                          <td class="py-3 px-4 text-text-secondary text-center">{{ subject.volume }}</td>
                          <td class="py-3 px-4 text-text-primary font-semibold text-right">{{ subject.price }}</td>
                        </tr>
                      }
                    </tbody>
                  </table>
                </div>
              }

              <!-- Packs -->
              @if (tab.packs && tab.packs.length > 0) {
                <div class="mt-6">
                  <h4 class="text-center text-text-primary font-semibold mb-4">Packs avantageux</h4>
                  <div class="flex flex-wrap justify-center gap-4">
                    @for (pack of tab.packs; track pack.name) {
                      <div
                        class="bg-white rounded-xl p-4 text-center min-w-[180px] border-2 transition-all"
                        [class.border-sael-orange]="pack.highlight"
                        [class.border-gray-200]="!pack.highlight"
                        [class.shadow-md]="pack.highlight"
                      >
                        @if (pack.highlight) {
                          <span class="text-xs text-sael-orange font-semibold">Recommandé</span>
                        }
                        <p class="text-sm text-text-secondary mb-1">{{ pack.name }}</p>
                        <p class="text-2xl font-bold text-text-primary">{{ pack.price }}</p>
                      </div>
                    }
                  </div>
                </div>
              }
            </div>
          }
        }

        <!-- Notes -->
        <div class="mt-8 space-y-2 text-center">
          <p class="text-sm text-text-secondary">
            Les accompagnements en groupe s'inscrivent dans un suivi structuré sur la durée.
          </p>
          <p class="text-sm text-text-secondary">
            Des aménagements tarifaires peuvent être envisagés selon les situations.
          </p>
        </div>

        <!-- Global CTA -->
        <div class="mt-12 text-center">
          <a
            href="#contact"
            class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-cta-primary hover:bg-cta-primary-hover rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Prendre rendez-vous
          </a>
          <p class="text-text-secondary text-sm mt-4">
            Nous vous conseillons la formule la plus adaptée à votre enfant.
          </p>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class Pricing {
  activeTab = signal('individuel');

  tabs: Tab[] = [
    {
      id: 'individuel',
      label: 'Individuel',
      description: 'Accompagnement personnalisé 1-à-1, tous niveaux (primaire et secondaire)',
      singlePrice: '11 €',
      singlePriceLabel: '/ séance',
      features: [
        'Accompagnement personnalisé',
        'Adapté au rythme du participant',
        'Tous niveaux (primaire et secondaire)',
      ],
    },
    {
      id: 'ceb',
      label: 'Prépa CEB',
      description: 'Préparation au CEB (fin de 6e primaire)',
      subjects: [
        { name: 'Mathématiques', volume: '2h/semaine', price: '70 €/mois' },
        { name: 'Français', volume: '1h/semaine', price: '40 €/mois' },
        { name: 'Éveil (histoire-géo-sciences)', volume: '1h/semaine', price: '40 €/mois' },
      ],
      packs: [
        { name: 'Maths + 1 matière', price: '100 €/mois' },
        { name: 'Pack complet', price: '120 €/mois', highlight: true },
      ],
    },
    {
      id: 'ce1d',
      label: 'Prépa CE1D',
      description: 'Préparation au CE1D (fin de 2e secondaire)',
      subjects: [
        { name: 'Mathématiques', volume: '2h/semaine', price: '70 €/mois' },
        { name: 'Français', volume: '1h/semaine', price: '40 €/mois' },
        { name: 'Histoire-géographie', volume: '1h/semaine', price: '40 €/mois' },
        { name: 'Sciences', volume: '1h/semaine', price: '40 €/mois' },
      ],
      packs: [
        { name: 'Maths + 1 matière', price: '100 €/mois' },
        { name: 'Maths + 2 matières', price: '140 €/mois' },
        { name: 'Pack complet', price: '180 €/mois', highlight: true },
      ],
    },
    {
      id: 'secondaire',
      label: 'Secondaire',
      description: 'Renforcement pour la 3e et 4e secondaire',
      subjects: [
        { name: 'Renforcement maths (3e)', volume: '2h/semaine', price: '70 €/mois' },
        { name: 'Renforcement français (3e-4e)', volume: '1h/semaine', price: '40 €/mois' },
      ],
      packs: [{ name: 'Maths + Français', price: '100 €/mois', highlight: true }],
    },
  ];
}
