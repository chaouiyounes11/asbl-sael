import { Component } from '@angular/core';
import { Audience } from '../components/audience';
import { Contact } from '../components/contact';
import { ExamPrep } from '../components/exam-prep';
import { Faq } from '../components/faq';
import { Hero } from '../components/hero';
import { Methodology } from '../components/methodology';
import { Pricing } from '../components/pricing';
import { Reassurance } from '../components/reassurance';
import { Stats } from '../components/stats';
import { Teachers } from '../components/teachers';
import { Testimonials } from '../components/testimonials';

@Component({
  selector: 'app-home',
  imports: [
    Hero,
    Stats,
    Methodology,
    Audience,
    ExamPrep,
    Pricing,
    Testimonials,
    Teachers,
    Faq,
    Contact,
    Reassurance,
  ],
  template: `
    <app-hero />
    <app-methodology />
    <app-stats />
    <app-audience />
    <app-exam-prep />
    <app-reassurance />
    <app-pricing />
    <app-testimonials />
    <app-teachers />
    <app-faq />
    <app-contact />
  `,
})
export class HomePage {}
