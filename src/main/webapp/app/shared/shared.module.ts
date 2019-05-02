import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  JhipsterNoCacheSampleApplicationSharedLibsModule,
  JhipsterNoCacheSampleApplicationSharedCommonModule,
  JhiLoginModalComponent,
  HasAnyAuthorityDirective
} from './';

@NgModule({
  imports: [JhipsterNoCacheSampleApplicationSharedLibsModule, JhipsterNoCacheSampleApplicationSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JhipsterNoCacheSampleApplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterNoCacheSampleApplicationSharedModule {
  static forRoot() {
    return {
      ngModule: JhipsterNoCacheSampleApplicationSharedModule
    };
  }
}
