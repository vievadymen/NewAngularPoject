import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {ConnexionComponent} from './connexion/connexion.component';
import {AdminComponent} from './admin/admin.component';
import {UserTableComponent} from './user-table/user-table.component';
import {ProfilsComponent} from './profils/profils.component';
import {AddUserComponent} from './add-user/add-user.component';
import {ReferentielComponent} from './referentiel/referentiel.component';
import {GroupeDeCompetencesComponent} from './groupe-de-competences/groupe-de-competences.component';
import {CreationReferentielComponent} from './referentiel/creation-referentiel/creation-referentiel.component';
import {CreationGroupeCompetenceComponent} from './groupe-de-competences/creation-groupe-competence/creation-groupe-competence.component';
import {CompetencesComponent} from './competences/competences.component';
import {CreationCompetenceComponent} from './creation-competence/creation-competence.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: AccueilComponent,
  children:[
    { path: 'connexion', component: ConnexionComponent},
  ]},
  { path: 'admin', component: AdminComponent,
    children:[
      { path: 'users', component: UserTableComponent,
      children:[
        { path: 'add', component: AddUserComponent},
      ]},
      { path: 'referentiels', component: ReferentielComponent,
      children: [
        { path: 'creation_ref', component: CreationReferentielComponent},
      ]
      },
      { path: 'groupe_competences', component: GroupeDeCompetencesComponent,
      children: [
        { path: 'creation_groupe_compet', component: CreationGroupeCompetenceComponent}
      ]},
      { path: 'profils', component: ProfilsComponent},
      { path: 'competences', component: CompetencesComponent,
      children: [
        { path: 'creation_compet', component: CreationCompetenceComponent}
      ]}
    ]},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
