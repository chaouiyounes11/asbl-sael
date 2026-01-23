import { Component } from '@angular/core';

interface Teacher {
  name: string;
  role: string;
  description: string;
  image: string;
  initials: string;
}

@Component({
  selector: 'app-teachers',
  template: `
    <section id="teachers" class="py-20 md:py-28 ">
      <div class="max-w-5xl mx-auto px-6">
        <!-- Section Header -->
        <div class="text-center mb-12 md:mb-16">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Des accompagnants engagés, à l'écoute de chaque participant
          </h2>
          <p class="text-base md:text-lg text-text-secondary max-w-2xl mx-auto">
            Chez SAEL, chaque participant est accompagné par des accompagnants impliqués, attentifs
            et expérimentés.
          </p>
        </div>

        <!-- Teachers Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          @for (teacher of teachers; track teacher.name) {
            <div
              class="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <!-- Avatar -->
                <div class="shrink-0">
                  @if (teacher.image) {
                    <img
                      [src]="teacher.image"
                      [alt]="teacher.name"
                      class="w-24 h-24 rounded-full object-cover border-4 border-sael-yellow/30"
                    />
                  } @else {
                    <div
                      class="w-24 h-24 rounded-full bg-gradient-to-br from-sael-yellow via-sael-orange to-sael-pink flex items-center justify-center border-4 border-white shadow-md"
                    >
                      <span class="text-2xl font-bold text-white">{{ teacher.initials }}</span>
                    </div>
                  }
                </div>

                <!-- Info -->
                <div class="text-center sm:text-left">
                  <h3 class="text-xl font-semibold text-text-primary mb-1">
                    {{ teacher.name }}
                  </h3>
                  <p class="text-sm text-sael-orange font-medium mb-3">
                    {{ teacher.role }}
                  </p>
                  <p class="text-text-secondary leading-relaxed">
                    {{ teacher.description }}
                  </p>
                </div>
              </div>
            </div>
          }
        </div>

        <!-- Reassurance -->
        <div
          class="mt-16 md:mt-20 bg-gradient-to-r from-sael-yellow/30 via-sael-orange/30 to-sael-pink/30 rounded-2xl p-8 md:p-10 text-center"
        >
          <p class="text-text-secondary max-w-2xl mx-auto">
            Les accompagnants SAEL travaillent en lien avec les familles pour assurer un suivi
            régulier et cohérent.
          </p>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class Teachers {
  teachers: Teacher[] = [
    {
      name: 'Fatima',
      role: 'Accompagnatrice pédagogique',
      description:
        "Fatima accompagne chaque élève avec bienveillance et patience. À l'écoute des besoins de chacun, elle adapte son approche au rythme et aux objectifs de l'enfant pour l'aider à reprendre confiance.",
      image: 'fatima.png',
      initials: 'F',
    },
    {
      name: 'Gontran',
      role: 'Référent pédagogique',
      description:
        "Gontran apporte structure et méthode à l'accompagnement. Il aide les élèves à s'organiser, à comprendre leurs cours et à gagner en autonomie, avec un suivi régulier et personnalisé.",
      image: 'gontran.png',
      initials: 'G',
    },
  ];
}
