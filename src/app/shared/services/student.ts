export interface User{
    uid?: string;
    email?: string;
    displayName?: string;
    photoURL?: string;
    emailVerified?: boolean;
    role?: string;
}

export interface Student {
    //$key?: string;
    user?: string,
    noControl?: string,
    nombre?: string,
    apellidoP?: string,
    apellidoM?: string,
    fechaNacimiento?: Date,
    curp?: string,
    sexo?: string,
    estadoCivil?: string,
    otroEstadoCivil?: string,
    calle?: string,
    numero?: string,
    colonia?: string,
    cp?: string,
    ciudad?: string,
    municipio?: string,
    estado?: string,
    pais?: string,
    celular?: string,
    telefonoCasa?: string,
    email?: string,
    carrera?: string,
    especialidad?: string,
    titulado?: string,
    mes_año_Egreso?: string,
    ingles?: number,
    otroIdioma?: string,
    paqComputacional?: string,
    // edad?: Number;
    // parte 2
    calidadDocentes?: string,
    planEstudios?: string,
    oportunidadesInvestigacion?: string,
    enfasisInvestigacion?: string,
    infraestructura?: string,
    residenciaProfesional?: string

    //parte 3
    actividadActual?: string,
    estudia?: string,
    especialidad3?: string,
    institucion?: string,
    tiempoPrimerEmpleo?: string,
    medioObtenerEmpleo?: string,
    requisitosContratacion?: string,
    idiomaExtranjero?: string,
    hablar?: string,
    escribir?: string,
    leer?:string,
    escuchar?:string,
    antigüedadEmpleo?: string,
    añoIngreso?: string,
    ingresoSalarioMinimo?: string,
    nivelJerarquico?: string,
    condicionTrabajo?: string,
    relacionTrabajo?: string,
    giroEmpresa?: string,
    actividadEmpresa?: string,
    razonSocial?: string,

    calleRazonSocial?: string,
    numeroRazonSocial?: string,
    coloniaRazonSocial?: string,
    cpRazonSocial?: string,
    ciudadRazonSocial?: string,
    municipioRazonSocial?: string,
    estadoRazonSocial?: string,

    telRazonSocial?: string,
    faxRazonSocial?: string,
    emailRazonSocial?: string,
    paginaRazonSocial?: string,
    nombreJefeRazonSocial?: string,

    sectorPrimario?: string,
    sectorSecundario?: string,
    sectorTerciario?: string,
    tamañoEmpresa?: string,

    Eficiencia?: string,
    formacionAcademica?: string,
    utilidadResidencias?: string,

    areaEstudio?: string,
    titulacion?: string,
    experienciaLaborar?: string,
    competenciaLaboral?: string,
    posicionamientoInstitucion?: string,
    conocimientoIdioma?: string,
    recomedacionesReferencias?: string,
    personalidad?: string,
    liderazgo?: string,
    otros?: string,

    actualizacion?: string,
    cualActualizacion?: string,
    estudiarPosgrado?: string,
    cualPosgrado?: string,

    organizacionesSociales?: string,
    cualesOrganizacionesSociales?: string,
    organismosProfesionales?: string,
    cualesOrganismosProfesionales?: string,
    asociacionEgresados?: string,

    opinion?: string,

    creado?: Date
}


