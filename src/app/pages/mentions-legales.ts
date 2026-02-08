import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mentions-legales',
  imports: [RouterLink],
  template: `
    <section class="bg-bg-warm min-h-screen pt-28 pb-16">
      <div class="max-w-3xl mx-auto px-6">
        <!-- Back link -->
        <a
          routerLink="/"
          class="inline-flex items-center gap-2 text-sm text-cta-primary hover:text-cta-primary-hover transition-colors mb-8"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Retour à l'accueil
        </a>

        <!-- Title -->
        <h1 class="font-[Poppins] text-3xl md:text-4xl font-bold text-text-primary mb-10">
          Mentions légales
        </h1>

        <!-- Éditeur du site -->
        <div class="mb-10">
          <h2 class="font-[Poppins] text-xl font-semibold text-text-primary mb-4">
            Éditeur du site
          </h2>
          <div class="bg-white rounded-xl p-6 shadow-sm space-y-2 text-sm text-text-secondary leading-relaxed">
            <p class="font-medium text-text-primary">
              ASBL SAEL – Soutien et Accompagnement En Ligne
            </p>
            <p>Association Sans But Lucratif (ASBL – droit belge)</p>
            <p>
              <span class="font-medium text-text-primary">Siège social :</span>
              Rue d'Alost 7, 1000 Bruxelles, Belgique
            </p>
            <p>
              <span class="font-medium text-text-primary">Numéro d'entreprise (BCE) :</span>
              BE 0777.540.419
            </p>
            <p>
              <span class="font-medium text-text-primary">Numéro de TVA :</span>
              BE0777540419
            </p>
            <p>
              <span class="font-medium text-text-primary">Adresse e-mail :</span>
              <a
                href="mailto:contact@asblsael.com"
                class="text-cta-primary hover:text-cta-primary-hover transition-colors"
              >
                contact&#64;asblsael.com
              </a>
            </p>
            <p>
              <span class="font-medium text-text-primary">Téléphone :</span>
              <a
                href="tel:+32489563774"
                class="text-cta-primary hover:text-cta-primary-hover transition-colors"
              >
                +32 489 56 37 74
              </a>
            </p>
            <p>L'ASBL SAEL est représentée par sa présidente et son co-responsable.</p>
          </div>
        </div>

        <!-- Hébergement -->
        <div class="mb-10">
          <h2 class="font-[Poppins] text-xl font-semibold text-text-primary mb-4">
            Hébergement
          </h2>
          <div class="bg-white rounded-xl p-6 shadow-sm space-y-2 text-sm text-text-secondary leading-relaxed">
            <p class="font-medium text-text-primary">Hostinger International Ltd.</p>
            <p>61 Lordou Vironos Street, 6023 Larnaca, Chypre</p>
            <p>
              <a
                href="https://www.hostinger.fr"
                target="_blank"
                rel="noopener noreferrer"
                class="text-cta-primary hover:text-cta-primary-hover transition-colors"
              >
                www.hostinger.fr
              </a>
            </p>
          </div>
        </div>

        <!-- Propriété intellectuelle -->
        <div class="mb-10">
          <h2 class="font-[Poppins] text-xl font-semibold text-text-primary mb-4">
            Propriété intellectuelle
          </h2>
          <div class="bg-white rounded-xl p-6 shadow-sm text-sm text-text-secondary leading-relaxed">
            <p>
              L'ensemble des contenus présents sur ce site (textes, images, graphismes, logo,
              icônes, etc.) est la propriété exclusive de l'ASBL SAEL, sauf mention contraire.
              Toute reproduction, représentation, modification, publication ou adaptation de tout
              ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est
              interdite sans l'autorisation écrite préalable de l'ASBL SAEL.
            </p>
          </div>
        </div>

        <!-- Responsabilité -->
        <div class="mb-10">
          <h2 class="font-[Poppins] text-xl font-semibold text-text-primary mb-4">
            Responsabilité
          </h2>
          <div class="bg-white rounded-xl p-6 shadow-sm text-sm text-text-secondary leading-relaxed space-y-3">
            <p>
              Les contenus proposés sur ce site visent à accompagner le parcours scolaire de
              l'apprenant sans se substituer à l'enseignement dispensé par l'école. L'ASBL SAEL ne
              peut être tenue responsable d'un usage inadapté des services ou contenus proposés.
            </p>
            <p>
              L'ASBL SAEL s'efforce d'assurer l'exactitude et la mise à jour des informations
              diffusées sur ce site. Toutefois, elle ne peut garantir l'exhaustivité ou l'absence
              d'erreurs. L'ASBL SAEL se réserve le droit de modifier le contenu du site à tout
              moment et sans préavis.
            </p>
          </div>
        </div>

        <!-- Liens hypertextes -->
        <div class="mb-10">
          <h2 class="font-[Poppins] text-xl font-semibold text-text-primary mb-4">
            Liens hypertextes
          </h2>
          <div class="bg-white rounded-xl p-6 shadow-sm text-sm text-text-secondary leading-relaxed">
            <p>
              Le site peut contenir des liens hypertextes vers d'autres sites internet. L'ASBL
              SAEL n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à
              leur contenu ou à leur politique de confidentialité.
            </p>
          </div>
        </div>

        <!-- Droit applicable -->
        <div class="mb-10">
          <h2 class="font-[Poppins] text-xl font-semibold text-text-primary mb-4">
            Droit applicable et juridiction compétente
          </h2>
          <div class="bg-white rounded-xl p-6 shadow-sm text-sm text-text-secondary leading-relaxed">
            <p>
              Les présentes mentions légales sont régies par le droit belge. En cas de litige,
              et après tentative de résolution amiable, les tribunaux de Bruxelles seront seuls
              compétents.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class MentionsLegalesPage {}
