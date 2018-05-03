import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterNoCacheSampleApplicationSharedModule } from 'app/shared';
import { JhipsterNoCacheSampleApplicationAdminModule } from 'app/admin/admin.module';
import {
    BankAccountService,
    BankAccountComponent,
    BankAccountDetailComponent,
    BankAccountUpdateComponent,
    BankAccountDeletePopupComponent,
    BankAccountDeleteDialogComponent,
    bankAccountRoute,
    bankAccountPopupRoute,
    BankAccountResolve
} from './';

const ENTITY_STATES = [...bankAccountRoute, ...bankAccountPopupRoute];

@NgModule({
    imports: [
        JhipsterNoCacheSampleApplicationSharedModule,
        JhipsterNoCacheSampleApplicationAdminModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        BankAccountComponent,
        BankAccountDetailComponent,
        BankAccountUpdateComponent,
        BankAccountDeleteDialogComponent,
        BankAccountDeletePopupComponent
    ],
    entryComponents: [BankAccountComponent, BankAccountUpdateComponent, BankAccountDeleteDialogComponent, BankAccountDeletePopupComponent],
    providers: [BankAccountService, BankAccountResolve],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterNoCacheSampleApplicationBankAccountModule {}
