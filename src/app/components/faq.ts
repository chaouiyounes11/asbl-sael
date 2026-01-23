import { Component, signal } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  template: `
    <section id="faq" class="py-20 md:py-28 !bg-bg-warm">
      <div class="max-w-4xl mx-auto px-6">
        <!-- Section Header -->
        <div class="text-center mb-12 md:mb-16">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Questions fréquentes
          </h2>
          <p class="text-base md:text-lg text-text-secondary">
            Vous avez des questions ? Nous avons probablement la réponse.
          </p>
        </div>

        <!-- FAQ Accordion -->
        <div class="space-y-3">
          @for (item of faqItems; track item.question; let i = $index) {
            <div
              class="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300"
              [class.border-sael-orange]="openIndex() === i"
              [class.shadow-md]="openIndex() === i"
            >
              <!-- Question Button -->
              <button
                type="button"
                class="w-full px-6 py-5 flex items-center justify-between text-left transition-colors duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sael-orange focus:ring-inset"
                [attr.aria-expanded]="openIndex() === i"
                [attr.aria-controls]="'faq-answer-' + i"
                [id]="'faq-question-' + i"
                (click)="toggle(i)"
                (keydown.enter)="toggle(i)"
                (keydown.space)="toggle(i); $event.preventDefault()"
              >
                <span class="font-semibold text-text-primary pr-4">{{ item.question }}</span>
                <span
                  class="shrink-0 w-6 h-6 flex items-center justify-center text-sael-orange transition-transform duration-300"
                  [class.rotate-180]="openIndex() === i"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>

              <!-- Answer Panel -->
              <div
                [id]="'faq-answer-' + i"
                role="region"
                [attr.aria-labelledby]="'faq-question-' + i"
                class="grid transition-all duration-300 ease-in-out"
                [class.grid-rows-[1fr]]="openIndex() === i"
                [class.grid-rows-[0fr]]="openIndex() !== i"
              >
                <div class="overflow-hidden">
                  <div class="px-6 pb-5 text-text-secondary leading-relaxed">
                    {{ item.answer }}
                  </div>
                </div>
              </div>
            </div>
          }
        </div>

        <!-- CTA -->
        <div class="mt-12 md:mt-16 text-center">
          <p class="text-text-secondary mb-6">
            Vous avez d'autres questions ? Parlons-en directement.
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
export class Faq {
  openIndex = signal<number | null>(null);

  faqItems: FaqItem[] = [
    {
      question: 'Pourquoi SAEL est une ASBL ?',
      answer:
        "SAEL est une association sans but lucratif. Notre objectif n'est pas le profit, mais l'accompagnement des élèves. Ce statut nous permet de proposer des tarifs accessibles et de nous concentrer sur la qualité du suivi.",
    },
    {
      question: 'Est-ce une école de devoirs ?',
      answer:
        "Non. SAEL propose un accompagnement personnalisé, pas une aide aux devoirs ponctuelle. Nous travaillons sur la compréhension, la méthode et la confiance du participant, avec un suivi régulier et des objectifs clairs.",
    },
    {
      question: "L'ASBL SAEL est-elle une école en ligne ? Est-ce que vous remplacez l'école ?",
      answer:
        "Non. SAEL ne se substitue pas à l'école et ne délivre pas d'enseignement officiel. Nous proposons un accompagnement socio-scolaire structuré, en collaboration avec l'enfant, sa famille et l'école (ou l'enseignement alternatif), afin de soutenir les apprentissages, la méthode de travail et la préparation aux évaluations.",
    },
    {
      question: 'Comment se déroule le premier échange ?',
      answer:
        "L'entretien découverte est gratuit et dure 20 à 30 minutes. Nous échangeons avec vous sur les besoins de votre enfant, ses difficultés et ses objectifs. Aucun engagement — c'est un moment pour faire connaissance.",
    },
    {
      question: 'Comment se passent les cours en ligne ?',
      answer:
        "Les séances se font en visioconférence, avec un accompagnateur dédié. Le participant et l'accompagnateur échangent en direct, partagent des documents, et travaillent ensemble comme en présentiel. C'est interactif, pas passif.",
    },
    {
      question: 'Est-ce adapté à la primaire et au secondaire ?',
      answer:
        "Oui. Nous accompagnons les participants de la 1re primaire (P1) à la 4e secondaire, en suivant les programmes de la Fédération Wallonie-Bruxelles (FWB). L'approche est adaptée à chaque niveau : plus ludique et encadrée en primaire (P1-P6), plus autonome et orientée examens en secondaire (1re-4e).",
    },
    {
      question: 'Comment sont fixés les tarifs ?',
      answer:
        "Nos tarifs sont indicatifs et peuvent être ajustés selon le niveau, les objectifs et la situation de chaque famille. L'entretien découverte permet de définir la formule la plus adaptée.",
    },
    {
      question: 'Que comprend une séance ou un pack ?',
      answer:
        'Chaque séance dure 60 minutes et inclut un accompagnement individuel avec un accompagnateur dédié. Un bilan de progression est disponible à la demande pour les suivis longs. Tout est personnalisé.',
    },
    {
      question: 'Que peut faire SAEL pour mon enfant ?',
      answer:
        'Nous aidons votre enfant à comprendre ses cours, acquérir une méthode de travail, reprendre confiance et progresser à son rythme. Nous préparons aussi aux examens (CEB, CE1D).',
    },
    {
      question: 'Que ne fait pas SAEL ?',
      answer:
        "Nous ne faisons pas les devoirs à la place du participant. Nous ne promettons pas de résultats miracles. Notre rôle est d'accompagner, pas de remplacer l'effort du participant.",
    },
    {
      question: 'Comment suivez-vous la progression ?',
      answer:
        "L'accompagnateur fait des points réguliers avec vous. Nous fixons des objectifs clairs et mesurons les progrès. Un bilan de progression est disponible à la demande pour les suivis longs, et nous ajustons le parcours si besoin.",
    },
  ];

  toggle(index: number): void {
    if (this.openIndex() === index) {
      this.openIndex.set(null);
    } else {
      this.openIndex.set(index);
    }
  }
}
