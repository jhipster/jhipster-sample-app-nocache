import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'bank-account',
        loadChildren: () => import('./bank-account/bank-account.module').then(m => m.JhipsterNoCacheSampleApplicationBankAccountModule)
      },
      {
        path: 'label',
        loadChildren: () => import('./label/label.module').then(m => m.JhipsterNoCacheSampleApplicationLabelModule)
      },
      {
        path: 'operation',
        loadChildren: () => import('./operation/operation.module').then(m => m.JhipsterNoCacheSampleApplicationOperationModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: []
})
export class JhipsterNoCacheSampleApplicationEntityModule {}
