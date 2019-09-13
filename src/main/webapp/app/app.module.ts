import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { AuthExpiredInterceptor } from './blocks/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './blocks/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './blocks/interceptor/notification.interceptor';
import { JhipsterNoCacheSampleApplicationSharedModule } from 'app/shared/shared.module';
import { JhipsterNoCacheSampleApplicationCoreModule } from 'app/core/core.module';
import { JhipsterNoCacheSampleApplicationAppRoutingModule } from './app-routing.module';
import { JhipsterNoCacheSampleApplicationHomeModule } from './home/home.module';
import { JhipsterNoCacheSampleApplicationEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterNoCacheSampleApplicationSharedModule,
    JhipsterNoCacheSampleApplicationCoreModule,
    JhipsterNoCacheSampleApplicationHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterNoCacheSampleApplicationEntityModule,
    JhipsterNoCacheSampleApplicationAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthExpiredInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true
    }
  ],
  bootstrap: [JhiMainComponent]
})
export class JhipsterNoCacheSampleApplicationAppModule {}
