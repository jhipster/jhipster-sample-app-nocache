import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authority',
    data: { pageTitle: 'jhipsterNoCacheSampleApplicationApp.adminAuthority.home.title' },
    loadChildren: () => import('./admin/authority/authority.routes'),
  },
  {
    path: 'bank-account',
    data: { pageTitle: 'jhipsterNoCacheSampleApplicationApp.bankAccount.home.title' },
    loadChildren: () => import('./bank-account/bank-account.routes'),
  },
  {
    path: 'label',
    data: { pageTitle: 'jhipsterNoCacheSampleApplicationApp.label.home.title' },
    loadChildren: () => import('./label/label.routes'),
  },
  {
    path: 'operation',
    data: { pageTitle: 'jhipsterNoCacheSampleApplicationApp.operation.home.title' },
    loadChildren: () => import('./operation/operation.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
