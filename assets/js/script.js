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

const habilidades = [   { nombre: "Java", nivel: "Intermedio" },
                        { nombre: "Python", nivel: "Intermedio" },
                        { nombre: "JavaScript", nivel: "Avanzado" },
                        { nombre: "Git", nivel: "Intermedio" }
                    ];

const descripcion = 'Desarrollador Backend con experiencia en mantenimiento de equipos, soporte TI y desarrollo de aplicaciones. Me destaco por mi capacidad analítica, enfoque metódico y actitud resiliente. Cuento con conocimientos sólidos en Java, Python y JavaScript, además del manejo de bases de datos relacionales como MySQL y Oracle. Comprometido con el aprendizaje continuo y la mejora de procesos, busco aportar soluciones efectivas y escalables en entornos colaborativos';


$(document).ready(function () {
    const persona = datosPersonales[0];

    $("#nombre").text(persona.nombre);
    $("#fechaNacimiento").text(persona.fechaNacimiento);
    $("#telefono").text(persona.telefono);
    $("#correo").text(persona.correoElectronico);
    $("#descripcionProfesional").text(descripcion);

  let habilidadesHTML = `<ul class="list-group mt-3">`;
  habilidades.forEach(h => {
    habilidadesHTML += `
      <li class="list-group-item d-flex justify-content-between">
        ${h.nombre}
        <span class="badge bg-dark">${h.nivel}</span>
      </li>
    `;
  });
  habilidadesHTML += `</ul>`;
  $("#habilidades-content").html(habilidadesHTML);

 
  let estudiosHTML = ``;
  datosEducacion.forEach(e => {
    estudiosHTML += `
      <div class="card mb-2 shadow-sm">
        <div class="card-body">
          <h6 class="mb-1">${e.estudio}</h6>
          <small class="text-muted">${e.lugar}</small>
        </div>
      </div>
    `;
  });
  $("#estudios-content").html(estudiosHTML);


  $(".toggle-section").on("click", function () {
    const target = $(this).data("target");
    const icon = $($(this).data("icon"));

    $(target).slideToggle(300);
    icon.text(icon.text() === "▼" ? "▲" : "▼");
  });
  
});