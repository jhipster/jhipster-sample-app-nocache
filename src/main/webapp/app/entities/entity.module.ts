import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterNoCacheSampleApplicationBankAccountModule } from './bank-account/bank-account.module';
import { JhipsterNoCacheSampleApplicationLabelModule } from './label/label.module';
import { JhipsterNoCacheSampleApplicationOperationModule } from './operation/operation.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        JhipsterNoCacheSampleApplicationBankAccountModule,
        JhipsterNoCacheSampleApplicationLabelModule,
        JhipsterNoCacheSampleApplicationOperationModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterNoCacheSampleApplicationEntityModule {}
