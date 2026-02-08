import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-confidentialite',
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
        <h1 class="font-[Poppins] text-3xl md:text-4xl font-bold text-text-primary mb-4">
          Politique de confidentialité
        </h1>
        <p class="text-text-secondary mb-10">
          Protection des données (RGPD) – ASBL SAEL
        </p>

        <!-- 8. Principes généraux -->
        <div class="mb-10">
          <h2 class="font-[Poppins] text-xl font-semibold text-text-primary mb-4">
            1. Principes généraux
          </h2>
          <div class="bg-white rounded-xl p-6 shadow-sm text-sm text-text-secondary leading-relaxed space-y-3">
            <p>
              L'ASBL SAEL respecte le Règlement Général sur la Protection des Données
              (RGPD – UE 2016/679) et la législation belge en matière de protection de la vie privée.
            </p>
            <p>
              Les données personnelles sont traitées de manière licite, loyale, transparente et
              strictement nécessaire à l'accompagnement socio-scolaire.
            </p>
          </div>
        </div>

        <!-- 9. Données collectées -->
        <div class="mb-10">
          <h2 class="font-[Poppins] text-xl font-semibold text-text-primary mb-4">
            2. Données collectées
          </h2>
          <div class="bg-white rounded-xl p-6 shadow-sm text-sm text-text-secondary leading-relaxed space-y-3">
            <p>Les données susceptibles d'être collectées sont notamment :</p>
            <ul class="list-disc list-inside space-y-1 pl-2">
              <li>nom et prénom du parent ou représentant légal ;</li>
              <li>nom et prénom de l'élève ;</li>
              <li>coordonnées de contact (e-mail, téléphone) ;</li>
              <li>informations scolaires utiles au suivi pédagogique ;</li>
              <li>données administratives nécessaires à la facturation.</li>
            </ul>
            <p class="font-medium text-text-primary">
              Aucune donnée inutile ou excessive n'est collectée.
            </p>
          </div>
        </div>

        <!-- 10. Finalités du traitement -->
        <div class="mb-10">
          <h2 class="font-[Poppins] text-xl font-semibold text-text-primary mb-4">
            3. Finalités du traitement
          </h2>
          <div class="bg-white rounded-xl p-6 shadow-sm text-sm text-text-secondary leading-relaxed space-y-3">
            <p>Les données personnelles sont utilisées exclusivement pour :</p>
            <ul class="list-disc list-inside space-y-1 pl-2">
              <li>la gestion des inscriptions ;</li>
              <li>le suivi pédagogique des élèves ;</li>
              <li>la communication avec les familles ;</li>
              <li>la gestion administrative et comptable de l'ASBL.</li>
            </ul>
            <p class="font-medium text-text-primary">
              Les données ne sont ni vendues, ni cédées, ni transmises à des tiers.
            </p>
          </div>
        </div>

        <!-- 11. Durée de conservation -->
        <div class="mb-10">
          <h2 class="font-[Poppins] text-xl font-semibold text-text-primary mb-4">
            4. Durée de conservation
          </h2>
          <div class="bg-white rounded-xl p-6 shadow-sm text-sm text-text-secondary leading-relaxed">
            <p>
              Les données sont conservées uniquement pendant la durée nécessaire aux finalités
              pour lesquelles elles ont été collectées, et conformément aux obligations légales
              applicables aux ASBL en Belgique.
            </p>
          </div>
        </div>

        <!-- 12. Droits des personnes concernées -->
        <div class="mb-10">
          <h2 class="font-[Poppins] text-xl font-semibold text-text-primary mb-4">
            5. Droits des personnes concernées
          </h2>
          <div class="bg-white rounded-xl p-6 shadow-sm text-sm text-text-secondary leading-relaxed space-y-3">
            <p>Conformément au RGPD, toute personne dispose :</p>
            <ul class="list-disc list-inside space-y-1 pl-2">
              <li>d'un droit d'accès à ses données ;</li>
              <li>d'un droit de rectification ;</li>
              <li>d'un droit d'opposition ;</li>
              <li>d'un droit à l'effacement ;</li>
              <li>d'un droit à la limitation du traitement.</li>
            </ul>
            <p>
              Toute demande peut être adressée par e-mail à :
              <a
                href="mailto:contact@asblsael.com"
                class="text-cta-primary hover:text-cta-primary-hover transition-colors"
              >
                contact&#64;asblsael.com
              </a>
            </p>
            <p>
              En cas de désaccord, une réclamation peut être introduite auprès de l'Autorité de
              protection des données (APD – Belgique).
            </p>
          </div>
        </div>

        <!-- 13. Cookies -->
        <div class="mb-10">
          <h2 class="font-[Poppins] text-xl font-semibold text-text-primary mb-4">
            6. Cookies
          </h2>
          <div class="bg-white rounded-xl p-6 shadow-sm text-sm text-text-secondary leading-relaxed space-y-3">
            <p>
              Le site de l'ASBL SAEL peut utiliser des cookies strictement nécessaires à son
              bon fonctionnement.
            </p>
            <p>
              Les cookies non essentiels sont soumis au consentement préalable de l'utilisateur.
            </p>
            <p class="font-medium text-text-primary">
              Aucun cookie à finalité commerciale n'est utilisé sans accord explicite.
            </p>
          </div>
        </div>

        <!-- 14. Droit applicable et juridiction compétente -->
        <div class="mb-10">
          <h2 class="font-[Poppins] text-xl font-semibold text-text-primary mb-4">
            7. Droit applicable et juridiction compétente
          </h2>
          <div class="bg-white rounded-xl p-6 shadow-sm text-sm text-text-secondary leading-relaxed">
            <p>
              Les présentes conditions générales et la politique de confidentialité sont régies
              par le droit belge. En cas de litige, les tribunaux de l'arrondissement judiciaire
              de Bruxelles sont compétents.
            </p>
          </div>
        </div>

        <!-- Link to terms -->
        <div class="bg-sael-yellow/20 rounded-xl p-6 text-sm text-text-secondary">
          <p>
            Consultez également nos
            <a
              routerLink="/cgv"
              class="text-cta-primary hover:text-cta-primary-hover transition-colors font-medium"
            >
              Conditions générales
            </a>
            pour plus d'informations sur nos modalités de service.
          </p>
        </div>
      </div>
    </section>
  `,
})
export class ConfidentialitePage {}
