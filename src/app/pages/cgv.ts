import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cgv',
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
          Conditions générales
        </h1>
        <p class="text-text-secondary mb-10">
          ASBL SAEL – Accompagnement socio-scolaire
        </p>

        <!-- 1. Identification de l'ASBL -->
        <div class="mb-10">
          <h2 class="font-[Poppins] text-xl font-semibold text-text-primary mb-4">
            1. Identification de l'ASBL
          </h2>
          <div class="bg-white rounded-xl p-6 shadow-sm space-y-2 text-sm text-text-secondary leading-relaxed">
            <p>
              <span class="font-medium text-text-primary">Dénomination :</span>
              ASBL SAEL
            </p>
            <p>
              <span class="font-medium text-text-primary">Adresse du siège social :</span>
              Rue d'Alost 7, 1000 Bruxelles – Belgique
            </p>
            <p>
              <span class="font-medium text-text-primary">Numéro d'entreprise (BCE) :</span>
              0777.540.419
            </p>
            <p>
              <span class="font-medium text-text-primary">Numéro TVA :</span>
              BE0777.540.419
            </p>
            <p>
              <span class="font-medium text-text-primary">Adresse e-mail de contact :</span>
              <a
                href="mailto:contact@asblsael.com"
                class="text-cta-primary hover:text-cta-primary-hover transition-colors"
              >
                contact&#64;asblsael.com
              </a>
            </p>
            <p class="pt-2">
              L'ASBL SAEL est une association sans but lucratif active dans l'accompagnement
              socio-scolaire et le suivi pédagogique des élèves du primaire et du secondaire,
              conformément aux programmes officiels belges (FWB).
            </p>
          </div>
        </div>

        <!-- 2. Champ d'application -->
        <div class="mb-10">
          <h2 class="font-[Poppins] text-xl font-semibold text-text-primary mb-4">
            2. Champ d'application
          </h2>
          <div class="bg-white rounded-xl p-6 shadow-sm text-sm text-text-secondary leading-relaxed space-y-3">
            <p>
              Les présentes conditions générales s'appliquent à l'ensemble des services proposés
              par l'ASBL SAEL, notamment :
            </p>
            <ul class="list-disc list-inside space-y-1 pl-2">
              <li>accompagnement socio-scolaire individuel ;</li>
              <li>accompagnement en petits groupes ;</li>
              <li>préparation aux examens (CEB, CE1D, secondaire) ;</li>
              <li>ateliers et activités pédagogiques, en présentiel et/ou à distance.</li>
            </ul>
            <p>
              Toute inscription à une activité implique l'acceptation pleine et entière des
              présentes conditions générales par le parent ou le représentant légal.
            </p>
          </div>
        </div>

        <!-- 3. Modalités d'inscription -->
        <div class="mb-10">
          <h2 class="font-[Poppins] text-xl font-semibold text-text-primary mb-4">
            3. Modalités d'inscription
          </h2>
          <div class="bg-white rounded-xl p-6 shadow-sm text-sm text-text-secondary leading-relaxed space-y-3">
            <p>L'inscription est considérée comme effective après :</p>
            <ul class="list-disc list-inside space-y-1 pl-2">
              <li>validation de la demande par l'ASBL SAEL ;</li>
              <li>acceptation des présentes conditions générales ;</li>
              <li>confirmation écrite transmise par l'ASBL SAEL (par e-mail).</li>
            </ul>
            <p>
              L'ASBL SAEL se réserve le droit de refuser ou d'interrompre un accompagnement si
              les conditions nécessaires à un suivi pédagogique sérieux et respectueux ne sont
              pas réunies.
            </p>
          </div>
        </div>

        <!-- 4. Modalités financières et de paiement -->
        <div class="mb-10">
          <h2 class="font-[Poppins] text-xl font-semibold text-text-primary mb-4">
            4. Modalités financières et de paiement
          </h2>
          <div class="bg-white rounded-xl p-6 shadow-sm text-sm text-text-secondary leading-relaxed space-y-3">
            <ul class="list-disc list-inside space-y-1 pl-2">
              <li>Les prestations sont facturées en fin de mois, sur base des séances réellement effectuées.</li>
              <li>Le paiement s'effectue exclusivement par virement bancaire.</li>
              <li>
                <span class="font-medium text-text-primary">IBAN :</span> BE61 1262 0991 2417
              </li>
              <li>Aucun paiement en espèces n'est accepté.</li>
            </ul>
            <p>
              Dans le respect de sa mission sociale, l'ASBL SAEL peut envisager, sur demande
              écrite, un étalement ou une adaptation des modalités de paiement en cas de
              difficultés financières.
            </p>
          </div>
        </div>

        <!-- 5. Annulations et absences -->
        <div class="mb-10">
          <h2 class="font-[Poppins] text-xl font-semibold text-text-primary mb-4">
            5. Annulations et absences
          </h2>
          <div class="bg-white rounded-xl p-6 shadow-sm text-sm text-text-secondary leading-relaxed">
            <ul class="list-disc list-inside space-y-2 pl-2">
              <li>
                Toute séance annulée moins de 24 heures à l'avance peut être facturée, sauf
                motif valable communiqué dans les délais.
              </li>
              <li>Les absences non justifiées ne donnent lieu à aucun remboursement.</li>
              <li>
                En cas d'annulation par l'ASBL SAEL (force majeure ou indisponibilité
                exceptionnelle), la séance est reportée ou non facturée.
              </li>
            </ul>
          </div>
        </div>

        <!-- 6. Engagements pédagogiques -->
        <div class="mb-10">
          <h2 class="font-[Poppins] text-xl font-semibold text-text-primary mb-4">
            6. Engagements pédagogiques
          </h2>
          <div class="bg-white rounded-xl p-6 shadow-sm text-sm text-text-secondary leading-relaxed space-y-3">
            <p>L'ASBL SAEL s'engage à :</p>
            <ul class="list-disc list-inside space-y-1 pl-2">
              <li>proposer un accompagnement structuré, sérieux et adapté aux besoins de chaque élève ;</li>
              <li>respecter les référentiels et programmes officiels belges (FWB) ;</li>
              <li>assurer une communication claire et respectueuse avec les familles.</li>
            </ul>
            <p class="font-medium text-text-primary">
              L'ASBL SAEL est tenue à une obligation de moyens, et non à une obligation de
              résultats scolaires.
            </p>
          </div>
        </div>

        <!-- 7. Responsabilité (accompagnement en ligne) -->
        <div class="mb-10">
          <h2 class="font-[Poppins] text-xl font-semibold text-text-primary mb-4">
            7. Responsabilité (accompagnement en ligne)
          </h2>
          <div class="bg-white rounded-xl p-6 shadow-sm text-sm text-text-secondary leading-relaxed space-y-3">
            <p>
              L'ASBL SAEL propose exclusivement un accompagnement socio-scolaire en ligne, à distance.
            </p>
            <p>
              L'ASBL SAEL s'engage à fournir un accompagnement sérieux, structuré et adapté aux
              besoins de l'élève. Toutefois, l'ASBL SAEL ne peut être tenue responsable :
            </p>
            <ul class="list-disc list-inside space-y-1 pl-2">
              <li>
                des résultats scolaires obtenus par l'élève, ceux-ci dépendant notamment de son
                implication personnelle et des décisions de l'établissement scolaire ;
              </li>
              <li>
                des décisions, évaluations ou orientations prises par les écoles ou autres
                institutions éducatives ;
              </li>
              <li>
                de l'utilisation inappropriée ou incomplète des conseils, supports ou contenus
                pédagogiques transmis dans le cadre de l'accompagnement.
              </li>
            </ul>
            <p>
              La responsabilité de l'ASBL SAEL est limitée aux dommages résultant d'une faute
              lourde ou intentionnelle, conformément au droit belge.
            </p>
          </div>
        </div>

        <!-- Link to privacy policy -->
        <div class="bg-sael-yellow/20 rounded-xl p-6 text-sm text-text-secondary">
          <p>
            Consultez également notre
            <a
              routerLink="/confidentialite"
              class="text-cta-primary hover:text-cta-primary-hover transition-colors font-medium"
            >
              Politique de confidentialité
            </a>
            pour plus d'informations sur la protection de vos données personnelles.
          </p>
        </div>
      </div>
    </section>
  `,
})
export class CgvPage {}
