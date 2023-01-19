import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlllivescoreComponent } from './alllivescore/alllivescore.component';
import { CommingComponent } from './comming/comming.component';
import { ContactComponent } from './contact/contact.component';
import { LivescoreComponent } from './livescore/livescore.component';
import { ResultComponent } from './result/result.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  {path:'live',component:LivescoreComponent},
  {path:'team',component:TeamsComponent},
  {path:'allives',component:AlllivescoreComponent},
  {path:'coming',component:CommingComponent},
  {path:'contact',component:ContactComponent},
  {path:'result',component:ResultComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
