const datosPersonales = [{nombre : "Cristofer Lizardo Vasquez Alave", 
                        fechaNacimiento: '14-09-1991',
                        telefono:'+56 9 90632321',
                        correoElectronico: 'cristofervasquezalave@gmail.com '}
                    ];

const datosEducacion = [{estudio: 'Analista programador', lugar: 'Inacap'},
                        {estudio: 'Ingenieria en informatica', lugar: 'Inacap'},
                        {estudio: 'Certificado Fullstack Javascript/Node.js', lugar: 'DUOC UC'},
                        {estudio: 'Certificado Fullstack Python', lugar : 'Praxis'},
                        {estudio: 'Certificado Desarrollo web', lugar : 'AIEP'}
                    ];


const experienciaLaboral = [{cargo: 'Administrativo informatico', fechaInicio: 11-11-2022, fechaTermino: 11-11-2022, descripcion: ''},
                            {cargo: 'Operador', fechaInicio: 11-11-2022, fechaTermino: 11-11-2022, descripcion: ''},
                            {cargo: 'Desarrollador Backend', fechaInicio: 11-11-2022, fechaTermino: 11-11-2022, descripcion: ''}                        
                    ];



$(document).ready(function () {
  const persona = datosPersonales[0];

  $("#nombre").text(persona.nombre);
  $("#fechaNacimiento").text(persona.fechaNacimiento);
  $("#telefono").text(persona.telefono);
  $("#correo").text(persona.correoElectronico);


  
});