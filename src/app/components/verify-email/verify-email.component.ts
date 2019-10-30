import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { ExcelService } from "../../service/excel.service";


@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public e: ExcelService 
  ) { }

  ngOnInit() {
  }

}