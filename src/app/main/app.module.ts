import { ComponentsModule } from '../components/components.module';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  CommonModule,
  PathLocationStrategy,
  LocationStrategy,
  APP_BASE_HREF,
  PlatformLocation,
} from '@angular/common';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from '@angular/flex-layout';
import { DataModule } from '../data/data.module';
import { AuthInterceptor } from '../services/auth-interceptor/auth.interceptor';
import { GlobalErrorHandlerService } from '../services/error-handler/global-error-handler.service';
import { AutenticacaoWebRepository } from '../data/repository/autenticacao-web-reporitory/autenticacao-web.repository';
import { AutenticacaoRepository } from '../core/repositories/autenticacao.repository';
import { TokenWebRepository } from '../data/repository/token-web-reporitory/token-web.repository';
import { TokenRepository } from '../core/repositories/token.repository';
import { UsuarioSistemaLookupRepository } from '../core/lookup-repository/usuario-sistema-lookup.repository';
import { UsuarioSistemaLookupWebRepository } from '../data/lookup-repository/usuario-sistema-lookup-web.repository';
import { comradeTokenRepository } from '../core/repositories/comrade-token.repository';
import { comradeTokenWebRepository } from '../data/repository/comrade-token-web-repository/comrade-token-web.repository';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AirplaneRepository } from '../core/repositories/airplane.repository';
import { AirplaneWebRepository } from '../data/repository/airplane-web-repository copy/airplane-web.repository';
import { ToastComponent } from '../components/toast/toast.component';

export function getBaseHref(platformLocation: PlatformLocation): string {
  return platformLocation.getBaseHrefFromDOM();
}

@NgModule({
  declarations: [AppComponent, ToastComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    ComponentsModule,
    CoreModule,
    DataModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [
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
    { provide: comradeTokenRepository, useClass: comradeTokenWebRepository },
    { provide: AutenticacaoRepository, useClass: AutenticacaoWebRepository },
    { provide: TokenRepository, useClass: TokenWebRepository },
    { provide: UsuarioSistemaLookupRepository, useClass: UsuarioSistemaLookupWebRepository },
    { provide: AirplaneRepository, useClass: AirplaneWebRepository },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
