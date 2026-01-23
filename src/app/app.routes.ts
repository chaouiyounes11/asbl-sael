import { Routes } from '@angular/router';
import { HomePage } from './pages/home';
import { MentionsLegalesPage } from './pages/mentions-legales';
import { CgvPage } from './pages/cgv';
import { ConfidentialitePage } from './pages/confidentialite';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'mentions-legales', component: MentionsLegalesPage },
  { path: 'cgv', component: CgvPage },
  { path: 'confidentialite', component: ConfidentialitePage },
];
