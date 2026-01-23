# ASBL SAEL — Instructions de développement

## 🎯 Contexte du projet

**ASBL SAEL** est une association belge à but non lucratif proposant du **soutien scolaire et un accompagnement personnalisé en ligne** pour les élèves de la primaire au secondaire.

**SAEL** = **S**outien et **A**ccompagnement **E**n **L**igne

### Objectif UX principal

> Transformer des parents visiteurs en prises de contact qualifiées

Le site doit :

- Rassurer un parent en **moins de 10 secondes**
- Faire comprendre ce que fait SAEL, pour qui, et comment
- Lever les freins liés aux cours en ligne
- Déclencher une action : **prise de rendez-vous / formulaire / WhatsApp**

### Approche Mobile-First

> **Le site est conçu en mobile-first.**

- Toujours commencer par le design mobile, puis adapter pour tablette et desktop
- Utiliser les breakpoints Tailwind dans l'ordre : `base` → `sm:` → `md:` → `lg:` → `xl:`
- Tester systématiquement sur mobile avant desktop
- Prioriser la lisibilité et l'accessibilité tactile (boutons min 44px)

---

## 📁 Conventions de nommage

### Composants Angular

**Convention simplifiée** — pas de suffixe `.component` :

```
✅ hero.ts
✅ navbar.ts
✅ testimonials.ts
✅ contact-form.ts

❌ hero.component.ts
❌ navbar.component.ts
```

### Structure des fichiers

```
src/app/
├── components/
│   ├── hero.ts
│   ├── navbar.ts
│   ├── features.ts
│   ├── testimonials.ts
│   ├── pricing.ts
│   ├── faq.ts
│   ├── contact.ts
│   └── footer.ts
├── pages/
│   └── home.ts
├── shared/
│   └── button.ts
├── app.ts
├── app.config.ts
└── app.routes.ts
```

---

## 🎨 Design System — Couleurs

### Couleurs principales (texte & fond)

| Usage            | Couleur         | Hex       |
| ---------------- | --------------- | --------- |
| Texte principal  | Gris très foncé | `#111827` |
| Texte secondaire | Gris foncé      | `#374151` |
| Fond principal   | Blanc           | `#FFFFFF` |
| Fond alternatif  | Blanc chaud     | `#FFF9EF` |

### Couleurs d'accent SAEL (fonds & ambiance)

| Usage       | Couleur     | Hex       |
| ----------- | ----------- | --------- |
| Jaune SAEL  | Fond accent | `#FFDE59` |
| Orange SAEL | Fond accent | `#FFD492` |
| Rose SAEL   | Fond accent | `#FCC0C5` |

### Couleurs CTA (actions & liens)

| Usage                  | Couleur      | Hex       |
| ---------------------- | ------------ | --------- |
| CTA principal          | Orange foncé | `#D97706` |
| CTA secondaire / liens | Rose foncé   | `#9D174D` |

### Règle UX

> **Pastel = fond / ambiance**  
> **Foncé = texte / actions**

### Configuration Tailwind (styles.css)

```css
@import 'tailwindcss';

@theme {
  /* Couleurs SAEL */
  --color-sael-yellow: #ffde59;
  --color-sael-orange: #ffd492;
  --color-sael-pink: #fcc0c5;

  /* CTA */
  --color-cta-primary: #d97706;
  --color-cta-secondary: #9d174d;

  /* Fonds */
  --color-bg-warm: #fff9ef;

  /* Texte */
  --color-text-primary: #111827;
  --color-text-secondary: #374151;
}
```

---

## ✍️ Typographies

### Polices

| Usage               | Police      | Poids               |
| ------------------- | ----------- | ------------------- |
| Titres (H1, H2, H3) | **Poppins** | Bold / Semi-Bold    |
| Texte, UI, CTA      | **Inter**   | Regular / Semi-Bold |

### Import Google Fonts (index.html)

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700&display=swap"
  rel="stylesheet"
/>
```

### Configuration Tailwind

```css
@theme {
  --font-heading: 'Poppins', sans-serif;
  --font-body: 'Inter', sans-serif;
}
```

### Hiérarchie typographique

| Élément    | Police  | Taille Tailwind                                | Poids           |
| ---------- | ------- | ---------------------------------------------- | --------------- |
| H1         | Poppins | `text-2xl sm:text-3xl md:text-4xl lg:text-5xl` | `font-bold`     |
| H2         | Poppins | `text-3xl md:text-4xl`                         | `font-semibold` |
| H3         | Poppins | `text-xl md:text-2xl`                          | `font-semibold` |
| Paragraphe | Inter   | `text-base md:text-lg`                         | `font-normal`   |
| CTA        | Inter   | `text-base`                                    | `font-semibold` |

---

## 🎬 Animations

### Principes

- **Simples et sobres**
- Durée : `300ms` à `500ms`
- Easing : `ease-out` ou `ease-in-out`
- Pas d'animations distrayantes

### Classes Tailwind recommandées

```html
<!-- Hover sur boutons -->
class="transition-all duration-300 ease-out hover:scale-105"

<!-- Fade in au scroll (avec IntersectionObserver) -->
class="opacity-0 translate-y-4 transition-all duration-500 ease-out" class="opacity-100
translate-y-0"
<!-- État visible -->

<!-- Hover sur cartes -->
class="transition-shadow duration-300 hover:shadow-lg"
```

### Animation d'entrée (directive réutilisable)

```typescript
// Utiliser IntersectionObserver pour déclencher les animations au scroll
// Animation recommandée : fade-in + léger slide-up
```

---

## 🧩 Structure des composants

### Template de composant

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <section class="...">
      <!-- Contenu -->
    </section>
  `,
  styles: ``,
})
export class Hero {}
```

### Bonnes pratiques

- **Standalone components** uniquement (Angular 21)
- **Inline template** et **inline styles** (configuré dans angular.json)
- Utiliser `@if`, `@for`, `@switch` (nouvelle syntaxe Angular)
- Pas de `NgModule`

---

## 📝 Ton & écriture

### Cible

S'adresser **aux parents** (pas aux élèves)

### Ton

- Humain
- Clair
- Rassurant
- Phrases courtes
- Pas de jargon scolaire ou technique

### Exemples

```
✅ "Votre enfant progresse à son rythme"
✅ "Un tuteur dédié qui connaît votre enfant"
✅ "Réservez un appel gratuit"

❌ "Méthodologie pédagogique différenciée"
❌ "Optimisation des compétences transversales"
```

---

## 🚀 Commandes

```bash
# Développement
npm start

# Build production
npm run build

# Tests
npm test
```

---

## ✅ Checklist avant commit

- [ ] Nommage des fichiers sans `.component`
- [ ] Couleurs du design system respectées
- [ ] Typographies Poppins/Inter utilisées
- [ ] Animations sobres (max 500ms)
- [ ] Textes orientés parents
- [ ] Composants standalone
