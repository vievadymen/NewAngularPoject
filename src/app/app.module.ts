import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AdminComponent } from './admin/admin.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { UserTableComponent } from './user-table/user-table.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProfilsComponent } from './profils/profils.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ProfilDeSortieComponent } from './profil-de-sortie/profil-de-sortie.component';
import { ReferentielComponent } from './referentiel/referentiel.component';
import { GroupeDeCompetencesComponent } from './groupe-de-competences/groupe-de-competences.component';
import { CreationReferentielComponent } from './referentiel/creation-referentiel/creation-referentiel.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { CreationGroupeCompetenceComponent } from './groupe-de-competences/creation-groupe-competence/creation-groupe-competence.component';
import { CompetencesComponent } from './competences/competences.component';
import { CreationCompetenceComponent } from './creation-competence/creation-competence.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    ConnexionComponent,
    AdminComponent,
    UserTableComponent,
    SidenavComponent,
    ProfilsComponent,
    AddUserComponent,
    ProfilDeSortieComponent,
    ReferentielComponent,
    GroupeDeCompetencesComponent,
    CreationReferentielComponent,
    JumbotronComponent,
    CreationGroupeCompetenceComponent,
    CompetencesComponent,
    CreationCompetenceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
