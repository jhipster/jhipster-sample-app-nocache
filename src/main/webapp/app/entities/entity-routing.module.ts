import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'bank-account',
        data: { pageTitle: 'jhipsterNoCacheSampleApplicationApp.bankAccount.home.title' },
        loadChildren: () => import('./bank-account/bank-account.module').then(m => m.BankAccountModule),
      },
      {
        path: 'label',
        data: { pageTitle: 'jhipsterNoCacheSampleApplicationApp.label.home.title' },
        loadChildren: () => import('./label/label.module').then(m => m.LabelModule),
      },
      {
        path: 'operation',
        data: { pageTitle: 'jhipsterNoCacheSampleApplicationApp.operation.home.title' },
        loadChildren: () => import('./operation/operation.module').then(m => m.OperationModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
