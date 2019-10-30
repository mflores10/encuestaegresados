import { Injectable } from '@angular/core';

import { User } from './user';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object

@Injectable({
  providedIn: 'root'
})
export class CrudUserService {

  usersRef: AngularFireList<any>;    // Reference to User data list, its an Observable
  userRef: AngularFireObject<any>;   // Reference to User object, its an Observable too

  constructor(
    private db: AngularFireDatabase
    ) { }

    AddUser(user: User) {
      this.usersRef.push({
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        x: user.role,
        y: user.photoURL
      })
     }

     // Fetch Single User Object
    GetUser(id: string) {
      this.userRef = this.db.object('users-list/' + id);
      return this.userRef;
    }

    // Fetch Users List
    GetUsersList() {
      this.usersRef = this.db.list('users-list');
      return this.usersRef;
    }  

      // Update User Object
      /*
  UpdateUser(user: User) {
    this.userRef.update({
      noControl: user.noControl,
      nombre: user.nombre,
      apellidoP: user.apellidoP,
      apellidoM: user.apellidoM,
      edad: user.edad
    })
  }  */

  // Delete User Object
  /*
  DeleteUser(id: string) { 
    this.userRef = this.db.object('students-list/'+id);
    this.userRef.remove();
  }*/

}
