import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { CrudUserService } from "../../shared/services/crudUser.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public crudUserSerive: CrudUserService
  ) { }

  ngOnInit() { }

}