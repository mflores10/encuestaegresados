
import { Injectable } from '@angular/core';

import { Student } from '../services/student';


import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object
//import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
//import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { strictEqual } from 'assert';
import { Alert } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  studentsRef: AngularFireList<any>;    // Reference to Student data list, its an Observable
  studentRef: AngularFireObject<any>;   // Reference to Student object, its an Observable too

  constructor(
    private db: AngularFireDatabase,
    private actRoute: ActivatedRoute,
    private router: Router
    ) { 

    }

    ngOnInit(){
      const id = this.actRoute.snapshot.paramMap.get('id');
      console.log('Valor de id ', id);
    }

    AddStudent(student: Student) {
      this.studentsRef = this.db.list('student-list');
      this.studentsRef.push({
        noControl: student.noControl,
        nombre: student.nombre,
        apellidoP: student.apellidoP,
        apellidoM: student.apellidoM,
        
        user: student.user,
        fechaNacimiento: student.fechaNacimiento,
        curp: student.curp,
        sexo: student.sexo,
        estadoCivil: student.estadoCivil,
        otroEstadoCivil: student.otroEstadoCivil,
        calle: student.calle,
        numero: student.numero,
        colonia: student.colonia,
        cp: student.cp,
        ciudad: student.ciudad,
        municipio: student.municipio,
        estado: student.estado,
        pais: student.pais,
        celular: student.celular,
        telefonoCasa: student.telefonoCasa,
        email: student.email,

        carrera: student.carrera,
        especialidad: student.especialidad,
        titulado: student.titulado,
        mes_año_Egreso: student.mes_año_Egreso,

        calidadDocentes: student.calidadDocentes,
        planEstudios: student.planEstudios,
        oportunidadesInvestigacion: student.oportunidadesInvestigacion,
        enfasisInvestigacion: student.enfasisInvestigacion ,
        infraestructura: student.infraestructura,
        residenciaProfesional: student.residenciaProfesional,

        actividadActual: student.actividadActual,
        estudia: student.estudia,
        especialidad3: student.especialidad3,
        institucion: student.institucion,
        tiempoPrimerEmpleo: student.tiempoPrimerEmpleo,
        medioObtenerEmpleo: student.medioObtenerEmpleo,
        requisitosContratacion: student.requisitosContratacion,
        idiomaExtranjero: student.idiomaExtranjero,
        hablar: student.hablar,
        escribir: student.escribir,
        leer: student.leer,
        escuchar: student.escuchar,
        antigüedadEmpleo: student.antigüedadEmpleo,
        añoIngreso: student.añoIngreso,
        ingresoSalarioMinimo: student.ingresoSalarioMinimo,
        nivelJerarquico: student.nivelJerarquico,
        condicionTrabajo: student.condicionTrabajo,
        relacionTrabajo: student.relacionTrabajo,
        giroEmpresa: student.giroEmpresa,
        actividadEmpresa: student.actividadEmpresa,
        razonSocial: student.razonSocial,
        
        calleRazonSocial: student.calleRazonSocial,
        numeroRazonSocial: student.numeroRazonSocial,
        coloniaRazonSocial: student.coloniaRazonSocial,
        cpRazonSocial: student.cpRazonSocial,
        ciudadRazonSocial: student.ciudadRazonSocial,
        municipioRazonSocial: student.municipioRazonSocial,
        estadoRazonSocial: student.estadoRazonSocial,

        telRazonSocial: student.telRazonSocial,
        faxRazonSocial: student.faxRazonSocial,
        emailRazonSocial: student.email,
        paginaRazonSocial: student.paginaRazonSocial,
        nombreJefeRazonSocial: student.nombreJefeRazonSocial,

        sectorPrimario: student.sectorPrimario,
        sectorSecundario: student.sectorSecundario,
        sectorTerciario: student.sectorTerciario,
        tamañoEmpresa: student.tamañoEmpresa,

        Eficiencia: student.Eficiencia,
        formacionAcademica: student.formacionAcademica,
        utilidadResidencias: student.utilidadResidencias,

        areaEstudio: student.areaEstudio,
        titulacion: student.titulacion,
        experienciaLaborar: student.experienciaLaborar,
        competenciaLaboral: student.competenciaLaboral,
        posicionamientoInstitucion: student.posicionamientoInstitucion,
        conocimientoIdioma: student.conocimientoIdioma,
        recomedacionesReferencias: student.recomedacionesReferencias,
        personalidad: student.personalidad,
        liderazgo: student.liderazgo,
        otros: student.otros,

        actualizacion: student.actualizacion,
        cualActualizacion: student.cualActualizacion,
        estudiarPosgrado: student.estudiarPosgrado,
        cualPosgrado: student.cualPosgrado,

        organizacionesSociales: student.organizacionesSociales,
        cualesOrganizacionesSociales: student.cualesOrganizacionesSociales,
        organismosProfesionales: student.organismosProfesionales,
        cualesOrganismosProfesionales: student.cualesOrganismosProfesionales,
        asociacionEgresados: student.asociacionEgresados,

        opinion: student.opinion,
        //creado: new Date()
        creado: student.creado 
        //creado: formatDate(new Date())
      })
     }

     // Fetch Single Student Object
    GetStudent(id: string) {
      // alert('valor de id ' + 'student-list/'+id);
      this.studentRef = this.db.object('student-list/' + id);
      //console.log(this.studentRef.valueChanges());
      return this.studentRef;
    }


    // Fetch Single Student Object
    GetStudentM(id: string) {
      //this.studentsRef = this.db.list('student-list');
      this.studentsRef = this.db.list('student-list', ref => ref.orderByChild('uid').equalTo(id));
      return this.studentsRef;
    }
    // Fetch Students List
    GetStudentsList() {
      this.studentsRef = this.db.list('student-list');
      return this.studentsRef;
    }  



      // Update Student Object
  UpdateStudent(student: Student) {
    this.studentRef.update({
      noControl: student.noControl,
      nombre: student.nombre,
      apellidoP: student.apellidoP,
      apellidoM: student.apellidoM,
     
      user: student.user,
      fechaNacimiento: student.fechaNacimiento,
      curp: student.curp,
      sexo: student.sexo,
      estadoCivil: student.estadoCivil,
      otroEstadoCivil: student.otroEstadoCivil,
      calle: student.calle,
      numero: student.numero,
      colonia: student.colonia,
      cp: student.cp,
      ciudad: student.ciudad,
      municipio: student.municipio,
      estado: student.estado,
      pais: student.pais,
      celular: student.celular,
      telefonoCasa: student.telefonoCasa,
      email: student.email,

      carrera: student.carrera,
      especialidad: student.especialidad,
      titulado: student.titulado,
      mes_año_Egreso: student.mes_año_Egreso,
    

      calidadDocentes: student.calidadDocentes,
      planEstudios: student.planEstudios,
      oportunidadesInvestigacion: student.oportunidadesInvestigacion,
      enfasisInvestigacion: student.enfasisInvestigacion ,
      infraestructura: student.infraestructura,
      residenciaProfesional: student.residenciaProfesional,

      actividadActual: student.actividadActual,
      estudia: student.estudia,
      especialidad3: student.especialidad3,
      institucion: student.institucion,
      tiempoPrimerEmpleo: student.tiempoPrimerEmpleo,
      medioObtenerEmpleo: student.medioObtenerEmpleo,
      requisitosContratacion: student.requisitosContratacion,
      idiomaExtranjero: student.idiomaExtranjero,
      hablar: student.hablar,
      escribir: student.escribir,
      leer: student.leer,
      escuchar: student.escuchar,
      antigüedadEmpleo: student.antigüedadEmpleo,
      añoIngreso: student.añoIngreso,
      ingresoSalarioMinimo: student.ingresoSalarioMinimo,
      nivelJerarquico: student.nivelJerarquico,
      condicionTrabajo: student.condicionTrabajo,
      relacionTrabajo: student.relacionTrabajo,
      giroEmpresa: student.giroEmpresa,
      actividadEmpresa: student.actividadEmpresa,
      razonSocial: student.razonSocial,

      calleRazonSocial: student.calleRazonSocial,
      numeroRazonSocial: student.numeroRazonSocial,
      coloniaRazonSocial: student.coloniaRazonSocial,
      cpRazonSocial: student.cpRazonSocial,
      ciudadRazonSocial: student.ciudadRazonSocial,
      municipioRazonSocial: student.municipioRazonSocial,
      estadoRazonSocial: student.estadoRazonSocial,

      telRazonSocial: student.telRazonSocial,
      faxRazonSocial: student.faxRazonSocial,
      emailRazonSocial: student.email,
      paginaRazonSocial: student.paginaRazonSocial,
      nombreJefeRazonSocial: student.nombreJefeRazonSocial,

      sectorPrimario: student.sectorPrimario,
      sectorSecundario: student.sectorSecundario,
      sectorTerciario: student.sectorTerciario,
      tamañoEmpresa: student.tamañoEmpresa,

      Eficiencia: student.Eficiencia,
      formacionAcademica: student.formacionAcademica,
      utilidadResidencias: student.utilidadResidencias,

      areaEstudio: student.areaEstudio,
      titulacion: student.titulacion,
      experienciaLaborar: student.experienciaLaborar,
      competenciaLaboral: student.competenciaLaboral,
      posicionamientoInstitucion: student.posicionamientoInstitucion,
      conocimientoIdioma: student.conocimientoIdioma,
      recomedacionesReferencias: student.recomedacionesReferencias,
      personalidad: student.personalidad,
      liderazgo: student.liderazgo,
      otros: student.otros,

      actualizacion: student.actualizacion,
      cualActualizacion: student.cualActualizacion,
      estudiarPosgrado: student.estudiarPosgrado,
      cualPosgrado: student.cualPosgrado,

      organizacionesSociales: student.organizacionesSociales,
      cualesOrganizacionesSociales: student.cualesOrganizacionesSociales,
      organismosProfesionales: student.organismosProfesionales,
      cualesOrganismosProfesionales: student.cualesOrganismosProfesionales,
      asociacionEgresados: student.asociacionEgresados,

      opinion: student.opinion,
      creado: new Date(Date.now())
      //creado: student.creado //new Date(Date.now())

    })
  }  

  // Delete Student Object
  DeleteStudent(id: string) { 
    this.studentRef = this.db.object('student-list/'+id);
    this.studentRef.remove();
  }

  //Validar
  ValidateUser(id: string){
    this.studentsRef = this.db.list('student-list/', ref => ref.orderByChild('user').equalTo(id));
    //this.studentRef=this.db.list('student-list', ref => ref.)
    //console.log('usuario encontrado ', id, ' ');
    //console.log('entro xD');
    return this.studentsRef;
  }
/*
  getPoll(id: string){
    this.studentsRef = this.db.list('student-list', ref => ref.orderByChild('user').equalTo(id));
    //this.studentRef=this.db.list('student-list', ref => ref.)
    console.log('usuario encontrado ', id, ' ');
    //console.log('entro xD');
    return this.studentsRef;
  }
*/
  formatDate(date: Date): string{
    const day = date.getDate();
    const month = date.getMonth() +1;
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }
}
