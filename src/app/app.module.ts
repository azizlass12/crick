import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeriesComponent } from './series/series.component';
import { TeamsComponent } from './teams/teams.component';
import { LivescoreComponent } from './livescore/livescore.component';
import { ResultComponent } from './result/result.component';
import { UpcommingComponent } from './upcomming/upcomming.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AlllivescoreComponent } from './alllivescore/alllivescore.component';
import { CommingComponent } from './comming/comming.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent,
    TeamsComponent,
    LivescoreComponent,
    ResultComponent,
    UpcommingComponent,
    NavbarComponent,
    AlllivescoreComponent,
    CommingComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// npm i live-cricket-scores