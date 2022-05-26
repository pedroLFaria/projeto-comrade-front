import { ErrorHandler, NgModule } from '@angular/core';
import {
  PathLocationStrategy,
  LocationStrategy,
  APP_BASE_HREF,
  PlatformLocation,
} from '@angular/common';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthenticationWebRepository } from '../data/repository/authentication-web-reporitory/authentication-web.repository';
import { TokenWebRepository } from '../data/repository/token-web-reporitory/token-web.repository';
import { SystemUserLookupRepository } from '../core/lookups/ba-usu-lookup/system-user-lookup.repository';
import { SystemUserLookupWebRepository } from '../data/lookup-repository/usuario-sistema-lookup-web.repository';
import { AirplaneWebRepository } from '../data/repository/airplane-web-repository/airplane-web.repository';
import { UnauthenticatedContentModule } from './unauthenticated-content';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService, ScreenService, AppInfoService } from '../services';
import {
  FooterModule,
  ResetPasswordFormModule,
  CreateAccountFormModule,
  ChangePasswordFormModule,
  LoginFormModule,
} from '../view/components';
import {
  SideNavOuterToolbarModule,
  SideNavInnerToolbarModule,
  SingleCardModule,
} from '../view/layouts';
import { GlobalErrorHandlerService } from '../services/handlers/global-error-handler.service';
import { AuthInterceptor } from '../services/interceptors/auth.interceptor';
import { SystemUserWebRepository } from '../data/repository/system-user-web-repository/system-user-web.repository';
import { UsuarioRepository } from '../core/repositories/usuario.repository';
import { UsuarioWebRepository } from '../data/repository/usuario-web-repository/usuario-web.repository';
import { FotoRepository } from '../core/repositories/foto.repository';
import { FotoWebRepository } from '../data/repository/foto-web-repository/foto-web.repository';

import { CurtidaRepository } from '../core/repositories/curtida.repository';
import { CurtidaWebRepository } from '../data/repository/curtida-web-repository/curtida-web.repository';

export function getBaseHref(platformLocation: PlatformLocation): string {
  return platformLocation.getBaseHrefFromDOM();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    ResetPasswordFormModule,
    CreateAccountFormModule,
    ChangePasswordFormModule,
    LoginFormModule,
    UnauthenticatedContentModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    ScreenService,
    AppInfoService,
    {
      provide: APP_BASE_HREF,
      useFactory: getBaseHref,
      deps: [PlatformLocation],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    { provide: SystemUserLookupRepository, useClass: SystemUserLookupWebRepository },
    { provide: UsuarioRepository, useClass: UsuarioWebRepository },
    { provide: FotoRepository, useClass: FotoWebRepository },
    { provide: CurtidaRepository, useClass: CurtidaWebRepository },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
