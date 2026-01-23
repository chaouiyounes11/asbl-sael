import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  template: `
    <section id="contact" class="py-20 md:py-28 bg-white relative overflow-hidden">
      <!-- Background Image (desktop only) -->
      <div class="hidden lg:block absolute right-0 top-0 bottom-0 w-1/3 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&w=800&q=80"
          alt=""
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>

      <div class="max-w-3xl mx-auto px-6 relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-12">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Parlons de votre enfant
          </h2>
          <p class="text-base md:text-lg text-text-secondary max-w-xl mx-auto">
            Remplissez ce formulaire et nous vous recontactons sous 24h pour un premier échange
            gratuit et sans engagement.
          </p>
        </div>

        <!-- Error Message -->
        @if (formError()) {
          <div class="bg-red-50 border border-red-200 rounded-xl p-8 text-center mb-8">
            <div
              class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-red-800 mb-2">Une erreur est survenue</h3>
            <p class="text-red-700">L'envoi du message a échoué. Veuillez réessayer ou nous contacter directement par téléphone.</p>
          </div>
        }

        <!-- Success Message -->
        @if (submitted() && !formError()) {
          <div class="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
            <div
              class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-8 h-8 text-green-600"
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
            </div>
            <h3 class="text-xl font-semibold text-green-800 mb-2">Merci pour votre message !</h3>
            <p class="text-green-700">Nous vous recontactons sous 24h pour un premier échange.</p>
          </div>
        } @else {
          <!-- Form -->
          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" novalidate>
            <div class="space-y-6">
              <!-- Row 1: Parent Name + Child Name -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Parent Name -->
                <div>
                  <label for="parentName" class="block text-sm font-medium text-text-primary mb-2">
                    Votre nom et prénom
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    formControlName="parentName"
                    placeholder="Ex: Marie Dupont"
                    class="w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sael-orange"
                    [class.border-gray-300]="!isFieldInvalid('parentName')"
                    [class.border-red-500]="isFieldInvalid('parentName')"
                  />
                  @if (isFieldInvalid('parentName')) {
                    <p class="mt-2 text-sm text-red-600">Merci d'indiquer votre nom et prénom.</p>
                  }
                </div>

                <!-- Child Name -->
                <div>
                  <label for="childName" class="block text-sm font-medium text-text-primary mb-2">
                    Prénom de l'enfant
                  </label>
                  <input
                    type="text"
                    id="childName"
                    formControlName="childName"
                    placeholder="Ex: Lucas"
                    class="w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sael-orange"
                    [class.border-gray-300]="!isFieldInvalid('childName')"
                    [class.border-red-500]="isFieldInvalid('childName')"
                  />
                  @if (isFieldInvalid('childName')) {
                    <p class="mt-2 text-sm text-red-600">
                      Merci d'indiquer le prénom de votre enfant.
                    </p>
                  }
                </div>
              </div>

              <!-- Row 2: Phone + Email -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Phone -->
                <div>
                  <label for="phone" class="block text-sm font-medium text-text-primary mb-2">
                    Numéro de téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    formControlName="phone"
                    placeholder="Ex: 0470 12 34 56"
                    class="w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sael-orange"
                    [class.border-gray-300]="!isFieldInvalid('phone')"
                    [class.border-red-500]="isFieldInvalid('phone')"
                  />
                  @if (isFieldInvalid('phone')) {
                    <p class="mt-2 text-sm text-red-600">
                      Merci d'indiquer un numéro de téléphone valide.
                    </p>
                  }
                </div>

                <!-- Email -->
                <div>
                  <label for="email" class="block text-sm font-medium text-text-primary mb-2">
                    Adresse e-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    formControlName="email"
                    placeholder="Ex: marie.dupont@email.be"
                    class="w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sael-orange"
                    [class.border-gray-300]="!isFieldInvalid('email')"
                    [class.border-red-500]="isFieldInvalid('email')"
                  />
                  @if (isFieldInvalid('email')) {
                    <p class="mt-2 text-sm text-red-600">
                      Merci d'indiquer une adresse e-mail valide.
                    </p>
                  }
                </div>
              </div>

              <!-- Row 3: School Level -->
              <div>
                <label for="schoolLevel" class="block text-sm font-medium text-text-primary mb-2">
                  Niveau scolaire / classe actuelle
                </label>
                <select
                  id="schoolLevel"
                  formControlName="schoolLevel"
                  class="w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sael-orange bg-white"
                  [class.border-gray-300]="!isFieldInvalid('schoolLevel')"
                  [class.border-red-500]="isFieldInvalid('schoolLevel')"
                >
                  <option value="" disabled>Sélectionnez le niveau</option>
                  <optgroup label="Primaire">
                    <option value="1ere-primaire">1ère primaire</option>
                    <option value="2eme-primaire">2ème primaire</option>
                    <option value="3eme-primaire">3ème primaire</option>
                    <option value="4eme-primaire">4ème primaire</option>
                    <option value="5eme-primaire">5ème primaire</option>
                    <option value="6eme-primaire">6ème primaire (CEB)</option>
                  </optgroup>
                  <optgroup label="Secondaire">
                    <option value="1ere-secondaire">1ère secondaire</option>
                    <option value="2eme-secondaire">2ème secondaire (CE1D)</option>
                    <option value="3eme-secondaire">3ème secondaire</option>
                    <option value="4eme-secondaire">4ème secondaire</option>
                  </optgroup>
                </select>
                @if (isFieldInvalid('schoolLevel')) {
                  <p class="mt-2 text-sm text-red-600">Merci de sélectionner le niveau scolaire.</p>
                }
              </div>

              <!-- Row 4: Message -->
              <div>
                <label for="message" class="block text-sm font-medium text-text-primary mb-2">
                  Expliquez en quelques mots la difficulté ou l'objectif
                </label>
                <textarea
                  id="message"
                  formControlName="message"
                  rows="4"
                  placeholder="Ex: Mon fils a des difficultés en mathématiques depuis le début de l'année..."
                  class="w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sael-orange resize-none"
                  [class.border-gray-300]="!isFieldInvalid('message')"
                  [class.border-red-500]="isFieldInvalid('message')"
                ></textarea>
                @if (isFieldInvalid('message')) {
                  <p class="mt-2 text-sm text-red-600">Merci de décrire brièvement la situation.</p>
                }
              </div>

              <!-- Submit Button -->
              <div class="text-center">
                <button
                  type="submit"
                  [disabled]="(contactForm.invalid && attemptedSubmit()) || sending()"
                  class="w-full md:w-auto px-10 py-4 text-lg font-semibold text-white bg-cta-primary rounded-lg transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  [class.hover:bg-cta-primary-hover]="!((contactForm.invalid && attemptedSubmit()) || sending())"
                  [class.hover:scale-105]="!((contactForm.invalid && attemptedSubmit()) || sending())"
                >
                  {{ sending() ? 'Envoi...' : 'Envoyer ma demande' }}
                </button>
              </div>
            </div>
          </form>

          <!-- Reassurance -->
          <div
            class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-text-secondary text-sm"
          >
            <div class="flex items-center gap-2">
              <svg
                class="w-5 h-5 text-sael-orange"
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
              <span>Sans engagement</span>
            </div>
            <div class="flex items-center gap-2">
              <svg
                class="w-5 h-5 text-sael-orange"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>Appel découverte gratuit</span>
            </div>
            <div class="flex items-center gap-2">
              <svg
                class="w-5 h-5 text-sael-orange"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Réponse sous 24h</span>
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styles: ``,
})
export class Contact {
  private fb = new FormBuilder();

  submitted = signal(false);
  attemptedSubmit = signal(false);
  formError = signal(false);
  sending = signal(false);

  constructor() {
    emailjs.init('VpdPFqzxPGrEsd_8F');
  }

  contactForm: FormGroup = this.fb.group({
    parentName: ['', [Validators.required, Validators.minLength(2)]],
    childName: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9+\s]{8,}$/)]],
    email: ['', [Validators.required, Validators.email]],
    schoolLevel: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched || this.attemptedSubmit()));
  }

  onSubmit(): void {
    this.attemptedSubmit.set(true);

    if (this.contactForm.valid) {
      const templateParams = {
        parentName: this.contactForm.value.parentName,
        childName: this.contactForm.value.childName,
        phone: this.contactForm.value.phone,
        email: this.contactForm.value.email,
        schoolLevel: this.contactForm.value.schoolLevel,
        message: this.contactForm.value.message,
      };

      this.sending.set(true);
      this.formError.set(false);

      emailjs.send('service_6tkzqid', 'template_mqs7u2j', templateParams).then(
        () => {
          this.sending.set(false);
          this.submitted.set(true);
          this.formError.set(false);
        },
        () => {
          this.sending.set(false);
          this.formError.set(true);
        },
      );
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
