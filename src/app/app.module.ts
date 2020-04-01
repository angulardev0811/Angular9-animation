import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MainService } from './main.service';
import { AudienceComponent } from './sections/audience/audience.component';
import { CoverageComponent } from './sections/coverage/coverage.component';
import { FeatureAComponent } from './sections/feature/feature-a/feature-a.component';
import { FeatureBComponent } from './sections/feature/feature-b/feature-b.component';
import { FeatureCComponent } from './sections/feature/feature-c/feature-c.component';
import { FeatureDComponent } from './sections/feature/feature-d/feature-d.component';
import { FeatureComponent } from './sections/feature/feature.component';
import { HeroComponent } from './sections/hero/hero.component';
import { MainComponent } from './sections/hero/main/main.component';
import { WhatwedoComponent } from './sections/hero/whatwedo/whatwedo.component';
import { DownboxComponent } from './shared/downbox/downbox.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { TermsmodalComponent } from './shared/termsmodal/termsmodal.component';
import { PrivacymodalComponent } from './shared/privacymodal/privacymodal.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    FeatureComponent,
    AudienceComponent,
    CoverageComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    WhatwedoComponent,
    FeatureAComponent,
    FeatureBComponent,
    FeatureCComponent,
    FeatureDComponent,
    DownboxComponent,
    TermsmodalComponent,
    PrivacymodalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useFactory: httpTranslateLoader, deps: [HttpClient] }
    })
  ],
  providers: [MainService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

