import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TermsmodalComponent } from './shared/termsmodal/termsmodal.component';
import { PrivacymodalComponent } from './shared/privacymodal/privacymodal.component';
import { SectionComponent } from './sections/section/section.component';


const routes: Routes = [
  {path: '', component: SectionComponent },
  { path: 'terms', component: TermsmodalComponent },
  { path: 'privacy', component: PrivacymodalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
