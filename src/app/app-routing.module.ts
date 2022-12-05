import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoreInfoComponent } from './more-info/more-info.component';
import { PlayInfoComponent } from './play-info/play-info.component';
import { ContactComponent } from './contact/contact.component';
import { SupportComponent } from './support/support.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'info', component: MoreInfoComponent },
  { path: 'play', component: PlayInfoComponent },
  { path: 'support', component: SupportComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
