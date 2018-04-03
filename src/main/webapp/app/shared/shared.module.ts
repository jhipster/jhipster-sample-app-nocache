import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import {
  JhipsterNoCacheSampleApplicationSharedLibsModule,
  JhipsterNoCacheSampleApplicationSharedCommonModule,
  JhiLoginModalComponent,
  HasAnyAuthorityDirective
} from './';

@NgModule({
  imports: [JhipsterNoCacheSampleApplicationSharedLibsModule, JhipsterNoCacheSampleApplicationSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
  entryComponents: [JhiLoginModalComponent],
  exports: [JhipsterNoCacheSampleApplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterNoCacheSampleApplicationSharedModule {}
