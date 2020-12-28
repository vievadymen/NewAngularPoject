import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';


export interface User {
  id: number;
  nom: string;
  prenom: string;
  position: number;
  email: string;
}



@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent  {


  constructor(private auth: AuthService) {
    this.auth.getUsers().subscribe(data=>{
      console.log(data);
    },
      error => {
        console.log(error.error.message);
      }
      );
  }



}
