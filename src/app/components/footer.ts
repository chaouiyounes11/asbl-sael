import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <footer class="bg-gray-900 text-gray-300">
      <!-- Main Footer -->
      <div class="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <!-- Column 1: Identity -->
          <div class="sm:col-span-2 lg:col-span-1">
            <!-- <div class="mb-4 mx-auto flex justify-center">
              <img ngSrc="logo-blanc.png" width="50" height="50" alt="logo" />
            </div> -->
            <p class="text-sm leading-relaxed mb-4">
              <span class="text-white font-medium">ASBL SAEL</span> – Soutien et Accompagnement En
              Ligne
            </p>
            <p class="text-sm leading-relaxed text-gray-400">
              Accompagnement socio-scolaire personnalisé en ligne pour les participants de la 1re primaire
              à la 4e secondaire en Belgique.
            </p>
          </div>

          <!-- Column 2: Navigation -->
          <div>
            <h3 class="text-white font-semibold mb-4">Navigation</h3>
            <ul class="space-y-3">
              <li>
                <a
                  href="#hero"
                  class="text-sm hover:text-sael-yellow transition-colors duration-200 focus:outline-none focus:text-sael-yellow"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#methodology"
                  class="text-sm hover:text-sael-yellow transition-colors duration-200 focus:outline-none focus:text-sael-yellow"
                >
                  Notre méthode
                </a>
              </li>
              <li>
                <a
                  href="#audience"
                  class="text-sm hover:text-sael-yellow transition-colors duration-200 focus:outline-none focus:text-sael-yellow"
                >
                  Niveaux scolaires
                </a>
              </li>
              <li>
                <a
                  href="#exam-prep"
                  class="text-sm hover:text-sael-yellow transition-colors duration-200 focus:outline-none focus:text-sael-yellow"
                >
                  CEB & CE1D
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  class="text-sm hover:text-sael-yellow transition-colors duration-200 focus:outline-none focus:text-sael-yellow"
                >
                  Tarifs
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  class="text-sm hover:text-sael-yellow transition-colors duration-200 focus:outline-none focus:text-sael-yellow"
                >
                  Témoignages
                </a>
              </li>
              <li>
                <a
                  href="#teachers"
                  class="text-sm hover:text-sael-yellow transition-colors duration-200 focus:outline-none focus:text-sael-yellow"
                >
                  Notre équipe
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  class="text-sm hover:text-sael-yellow transition-colors duration-200 focus:outline-none focus:text-sael-yellow"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  class="text-sm hover:text-sael-yellow transition-colors duration-200 focus:outline-none focus:text-sael-yellow"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <!-- Column 3: Legal -->
          <div>
            <h3 class="text-white font-semibold mb-4">Informations légales</h3>
            <ul class="space-y-3">
              <li>
                <a
                  routerLink="/mentions-legales"
                  class="text-sm hover:text-sael-yellow transition-colors duration-200 focus:outline-none focus:text-sael-yellow"
                >
                  Mentions légales
                </a>
              </li>
              <li>
                <a
                  routerLink="/cgv"
                  class="text-sm hover:text-sael-yellow transition-colors duration-200 focus:outline-none focus:text-sael-yellow"
                >
                  Conditions générales
                </a>
              </li>
              <li>
                <a
                  routerLink="/confidentialite"
                  class="text-sm hover:text-sael-yellow transition-colors duration-200 focus:outline-none focus:text-sael-yellow"
                >
                  Politique de confidentialité
                </a>
              </li>
            </ul>
          </div>

          <!-- Column 4: Contact -->
          <div>
            <h3 class="text-white font-semibold mb-4">Contact</h3>
            <ul class="space-y-3">
              <li class="flex items-center gap-3">
                <svg
                  class="w-4 h-4 text-sael-orange shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:contact@sael.com"
                  class="text-sm hover:text-sael-yellow transition-colors duration-200 focus:outline-none focus:text-sael-yellow"
                >
                  contact&#64;sael.com
                </a>
              </li>
              <li class="flex items-center gap-3">
                <svg
                  class="w-4 h-4 text-sael-orange shrink-0"
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
                <a
                  href="tel:+32489563774"
                  class="text-sm hover:text-sael-yellow transition-colors duration-200 focus:outline-none focus:text-sael-yellow"
                >
                  +32 489 56 37 74
                </a>
              </li>
              <li class="flex items-center gap-3">
                <svg
                  class="w-4 h-4 text-sael-orange shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                  />
                </svg>
                <a
                  href="https://wa.me/32489563774"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-sm hover:text-sael-yellow transition-colors duration-200 focus:outline-none focus:text-sael-yellow"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800">
        <div class="max-w-6xl mx-auto px-6 py-6">
          <div
            class="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500"
          >
            <p>© {{ currentYear }} ASBL SAEL. Tous droits réservés.</p>
            <p>
              Réalisé par
              <a
                href="https://swiria.studio"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-sael-yellow transition-colors duration-200 focus:outline-none focus:text-sael-yellow"
              >
                Swiria Studio
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: ``,
})
export class Footer {
  currentYear = new Date().getFullYear();
}
