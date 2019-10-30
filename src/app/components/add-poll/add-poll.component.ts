import { Component, OnInit } from '@angular/core';


import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services
import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr

import { CrudService } from '../../shared/services/crud.service';


import { AuthService } from "../../shared/services/auth.service";
import { ConditionalExpr } from '@angular/compiler';
import { AngularFireList } from '@angular/fire/database';
//import { CrudService } from "../../shared/services/crud.service";


import { ActivatedRoute, Router } from "@angular/router"; // ActivatedRoue is used to get the current associated components information.
import { Location } from '@angular/common';  // Location service is used to go back to previous component

@Component({
  selector: 'app-add-poll',
  templateUrl: './add-poll.component.html',
  styleUrls: ['./add-poll.component.css']
})
export class AddPollComponent implements OnInit {

  public studentForm: FormGroup;  // Define FormGroup to student's form
  public items: AngularFireList<any>;

  constructor(
    public crudApi: CrudService,  // CRUD API services
    public fb: FormBuilder,       // Form Builder service for Reactive forms
    public toastr: ToastrService,  // Toastr service for alert message

    
    private location: Location,         // Location service to go back to previous component
    private actRoute: ActivatedRoute,   // Activated route to get the current component's inforamation
    private router: Router,   

    public authService: AuthService,
    public crudService: CrudService
    ) {
      //const id = this.actRoute.snapshot.paramMap.get('id'); 
    //const id = this.authService.userData.uid;
    //this.items = this.crudApi.GetStudentM(id)
   }

  ngOnInit() {
    //console.log('id en add '+id);

    //this.crudApi.GetStudentsList();  // Call GetStudentsList() before main form is being called
    this.studenForm();              // Call student form when component is ready
    //this.crudApi.GetStudent(this.authService.userData.uid);
    //const id = this.authService.userData.uid;
    //console.log(id);
    //this.items = this.crudApi.GetStudentM(id)
    //const id = this.actRoute.snapshot.paramMap.get('id'); 
    //this.crudService.ValidateUser(id);

    //console.log();

  }

  // Reactive student form
  studenForm() {
    const id = this.actRoute.snapshot.paramMap.get('id'); 

    this.studentForm = this.fb.group({
      user: id,
      noControl: [''],
      nombre: [''],
      apellidoP: [''],
      apellidoM: [''],
      fechaNacimiento: this.crudService.formatDate(new Date())  ,//new Date(Date.now()),
      curp: [''],
      sexo: [''],
      estadoCivil:[''],
      otroEstadoCivil:[''],
      calle: [''],
      numero: [''],
      colonia: [''],
      cp: [''],
      ciudad: [''],
      municipio: [''],
      estado: [''],
      pais: 'México',
      carrera: [''],
      
      celular:[''],
      telefonoCasa: [''],
      email: [''],

      especialidad: [''],
      titulado: [''],
      //edad: 18,
      mes_año_Egreso: [''],
      
      
      calidadDocentes: [''],
      planEstudios: [''],
      oportunidadesInvestigacion: [''],
      enfasisInvestigacion: [''],
      infraestructura: [''],
      residenciaProfesional: [''],

      actividadActual: [''],
      estudia: [''],
      especialidad3: [''],
      institucion: [''],
      tiempoPrimerEmpleo: [''],
      medioObtenerEmpleo: [''],
      requisitosContratacion: [''],
      idiomaExtranjero: [''],
      hablar: [''],
      escribir: [''],
      leer:[''],
      escuchar:[''],
      antigüedadEmpleo: [''],
      añoIngreso: [''],
      ingresoSalarioMinimo: [''],
      nivelJerarquico: [''],
      condicionTrabajo: [''],
      relacionTrabajo: [''],
      giroEmpresa: [''],
      actividadEmpresa: [''],
      razonSocial:[''],

      calleRazonSocial: [''],
      numeroRazonSocial: [''],
      coloniaRazonSocial: [''],
      cpRazonSocial: [''],
      ciudadRazonSocial: [''],
      municipioRazonSocial: [''],
      estadoRazonSocial: [''],

      telRazonSocial: [''],
      faxRazonSocial: [''],
      emailRazonSocial: [''],
      paginaRazonSocial: [''],
      nombreJefeRazonSocial: [''],

      sectorPrimario: [''],
      sectorSecundario: [''],
      sectorTerciario: [''],
      tamañoEmpresa: [''],

      Eficiencia: [''],
      formacionAcademica: [''],
      utilidadResidencias: [''],

      areaEstudio: [''],
      titulacion: [''],
      experienciaLaborar: [''],
      competenciaLaboral: [''],
      posicionamientoInstitucion: [''],
      conocimientoIdioma: [''],
      recomedacionesReferencias: [''],
      personalidad: [''],
      liderazgo: [''],
      otros: [''],

      actualizacion: [''],
      cualActualizacion: [''],
      estudiarPosgrado: [''],
      cualPosgrado: [''],

      organizacionesSociales: [''],
      cualesOrganizacionesSociales: [''],
      organismosProfesionales: [''],
      cualesOrganismosProfesionales: [''],
      asociacionEgresados: [''],
      
      opinion: [''],
      creado: this.crudService.formatDate(new Date()) //new Date(new Date().getMonth() )


    /* firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: [''],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]*/
    }) 
  }

/*
  get opinion(){
    return this.studentForm.get('opinion');
  }

  get nombre(){
    return this.studentForm.get('nombre');
  }
  get apellidoP(){
    return this.studentForm.get('apellidoP');
  }
  
  get apellidoM(){
    return this.studentForm.get('apellidoM');
  }

  get fechaNaciemiento(){
    return this.studentForm.get('fechaNaciemiento');
  }

  get curp(){
    return this.studentForm.get('curp');
  }

  get sexo(){
    return this.studentForm.get('sexo');
  }

  get calle(){
    return this.studentForm.get('calle');
  }

  get numero(){
    return this.studentForm.get('numero');
  }

  get edad(){
    return this.studentForm.get('edad');
  }

  get estadoCivil(){
    return this.studentForm.get('estadoCivil');
  }

  get user(){
    return this.actRoute.snapshot.paramMap.get('id');//this.authService.userData;
  }


  get calidadDocentes(){
    return this.studentForm.get('calidadDocentes');
  }

  get planEstudios(){
    return this.studentForm.get('planEstudios');
  }

  get oportunidadesInvestigacion(){
    return this.studentForm.get('oportunidadesInvestigacion');
  }
  get enfasisInvestigacion(){
    return this.studentForm.get('enfasisInvestigacion');
  }
  get infraestructura(){
    return this.studentForm.get('infraestructura');
  }
  get residenciaProfesional(){
    return this.studentForm.get('residenciaProfesional');
  }
  get actividadActual(){
    return this.studentForm.get('actividadActual');
  }
  get estudia(){
    return this.studentForm.get('estudia');
  }
  get especilidad3(){
    return this.studentForm.get('especilidad3');
  }
  get institucion(){
    return this.studentForm.get('institucion');
  }
*/
  // Reset student form's values
  ResetForm() {
    this.studentForm.reset();
  }  
  
  submitStudentData() {
    // console.log(this.studentForm.value);
    this.crudApi.AddStudent(this.studentForm.value); // Submit student data using CRUD API
    alert ("La encuesta se agregado correctame \n");
    if (confirm('Desea terminar la encuesta?')){
      this.router.navigate(['sign-in']);
      this.authService.SignOut();
    }
    //this.toastr.success(this.studentForm.controls['nombre'].value + ' successfully added!'); // Show success message when data is successfully submited
    //this.toastr.success(' successfully added!');
    //this.ResetForm();  // Reset form when clicked on reset button
    };

}
