import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {ConnexionComponent} from './connexion/connexion.component';
import {AdminComponent} from './admin/admin.component';
import {UserTableComponent} from './user-table/user-table.component';
import {ProfilsComponent} from './profils/profils.component';
import {AddUserComponent} from './add-user/add-user.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: AccueilComponent},
  { path: 'connexion', component: ConnexionComponent},
  { path: 'admin', component: AdminComponent,
    children:[
      { path: 'users', component: UserTableComponent,
      children:[
        { path: 'add', component: AddUserComponent},
      ]},
      { path: 'profils', component: ProfilsComponent},
    ]},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
