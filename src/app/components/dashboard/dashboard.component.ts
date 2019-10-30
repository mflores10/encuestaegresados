import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { CrudService } from "../../shared/services/crud.service";

import { Student } from '../../shared/services/student'; 

import { Router } from "@angular/router";

import { ActivatedRoute } from "@angular/router"; // ActivatedRoue is used to get the current associated components information.
import { Location } from '@angular/common'; 


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Student: Student[]; 
  hideWhenNoStudent: boolean;
  public idKey: string;
  constructor(
    public authService: AuthService,
    public crudService: CrudService,
    public router: Router,
    public ngZone: NgZone,
    private location: Location, 
    private actRoute: ActivatedRoute

  ) { }

  ngOnInit() { 

    const id = this.actRoute.snapshot.paramMap.get('id'); 
    console.log('id desde dashboard ', id);
    let s = this.crudService.ValidateUser(id);
    //console.log('valor de s', s);
    s.snapshotChanges().subscribe(data => { 
      this.Student = [];
      //console.log('valor de data ',data);
      data.forEach(item => {
        //console.log('id del Poll', item.key);
        console.log(this.hideWhenNoStudent);
        this.idKey=item.key;
        this.hideWhenNoStudent= true;
      })
    })

  }

}
