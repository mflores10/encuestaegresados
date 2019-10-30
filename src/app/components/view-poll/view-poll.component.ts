import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../shared/services/crud.service';
import { Student } from '../../shared/services/student'; 
import { ExcelService } from '../../service/excel.service';

@Component({
  selector: 'app-view-poll',
  templateUrl: './view-poll.component.html',
  styleUrls: ['./view-poll.component.css']
})
export class ViewPollComponent implements OnInit {


  p: number = 1;                      // Fix for AOT compilation error for NGX pagination
  Student: Student[];                 // Save students data in Student's array.
  hideWhenNoStudent: boolean = false; // Hide students data table when no student.
  noData: boolean = false;            // Showing No Student Message, when no student in database.
  preLoader: boolean = true;          // Showing Preloader to show user data is coming for you from thre server(A tiny UX Shit)
  
  constructor(
    public crudApi: CrudService
    , private excelService: ExcelService
  ) { }

  ngOnInit() {
    this.dataState(); // Initialize student's list, when component is ready
    let s = this.crudApi.GetStudentsList(); 
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.Student = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.Student.push(a as Student);
      })
      console.log(this.Student);
    })
  }

  exportAsXLSX() {
    console.log(this.Student, 'estudene en expot');
    this.excelService.exportAsExcelFile(this.Student, 'sample');
  }
 
    // Using valueChanges() method to fetch simple list of students data. It updates the state of hideWhenNoStudent, noData & preLoader variables when any changes occurs in student data list in real-time.
    dataState() {     
      this.crudApi.GetStudentsList().valueChanges().subscribe(data => {
        this.preLoader = false;
        if(data.length <= 0){
          this.hideWhenNoStudent = false;
          this.noData = true;
        } else {
          this.hideWhenNoStudent = true;
          this.noData = false;
        }
      })
    }
  
    // Method to delete student object
    deleteStudent(student) {
      if (window.confirm('Are sure you want to delete this student ?')) { // Asking from user before Deleting student data.
        this.crudApi.DeleteStudent(student.$key) // Using Delete student API to delete student.
        //this.toastr.success(student.firstName + ' successfully deleted!'); // Alert message will show up when student successfully deleted.
      }
    }

}
