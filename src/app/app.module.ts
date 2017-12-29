import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

/* components */
import { AppComponent } from './app.component';
import { VehiculeComponent } from './components/vehicule/vehicule.component';
import { ChauffeurComponent } from './components/chauffeur/chauffeur.component';
import { GroupeComponent } from './components/groupe/groupe.component';

/* service */
import { ChauffeurService } from './service/chauffeur.service';
import { GroupeService } from './service/groupe.service';
import { VehiculeService } from './service/vehicule.service';

const appRoutes:Routes =[
  {path:'v',component:VehiculeComponent},
  {path:'c',component:ChauffeurComponent},
  {path:'g',component:GroupeComponent}
  ]
@NgModule({
  declarations: [
    AppComponent,
    VehiculeComponent,
    ChauffeurComponent,
    GroupeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ChauffeurService,GroupeService,VehiculeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
