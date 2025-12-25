const datosPersonales = [
    {
    nombre : "Cristofer Lizardo Vasquez Alave", 
    fechaNacimiento: '14-09-1991',
    telefono:'+56 9 90632321',
    correoElectronico: 'cristofervasquezalave@gmail.com '
    }
];

const datosEducacion = [
    {
    estudio: 'Analista programador', 
    lugar: 'Inacap'
    },
    {
    estudio: 'Ingenieria en informatica', 
    lugar: 'Inacap'
    },
    {
    estudio: 'Certificado Fullstack Javascript/Node.js', 
    lugar: 'DUOC UC'
    },
    {
    estudio: 'Certificado Fullstack Python', 
    lugar : 'Praxis'
    },
    {
    estudio: 'Certificado Desarrollo web', 
    lugar : 'AIEP'
    }
];


const experienciaLaboral = [
  {
    cargo: "Administrativo Informático",
    empresa: "Colegio Saucache",
    fechaInicio: "2014",
    fechaTermino: "2017",
    descripcion: "Soporte técnico, gestión de sistemas internos y apoyo administrativo."
  },
  {
    cargo: "Operador",
    empresa: "Inacap",
    fechaInicio: "2017",
    fechaTermino: "2020",
    descripcion: "Soporte técnico, operación y mantenimiento de sistemas académicos."
  },
  {
    cargo: "Desarrollador Backend",
    empresa: "ValpoSystems",
    fechaInicio: "2021",
    fechaTermino: "2023",
    descripcion: "Desarrollo de APIs REST con Springboot, C# y bases de datos."
  }
];

const habilidades = [   
    {
    nombre: "Java", 
    nivel: "Intermedio"
    },         
    {
    nombre: "Python", 
    nivel: "Intermedio"
    },           
    { 
    nombre: "JavaScript",
    nivel: "Avanzado"
    },        
    { 
    nombre: "Git", 
    nivel: "Intermedio"
    }
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
        <div class="card mb-2 shadow-sm">
        <div class="card-body">
          <h6 class="mb-1">${h.nombre}</h6>
          <small class="text-muted">${h.nivel}</small>
        </div>
        </div>
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


let experienciaHTML = "";

experienciaLaboral.forEach(exp => {
  experienciaHTML += `
    <div class="card mb-3 shadow-sm">
      <div class="card-body">
        
        <div class="d-flex justify-content-between flex-wrap">
          <h5 class="mb-1">${exp.cargo}</h5>
          <span class="badge bg-dark">
            ${exp.fechaInicio} - ${exp.fechaTermino}
          </span>
        </div>

        <h6 class="text-muted mb-2">${exp.empresa}</h6>

        <p class="mb-0">
          ${exp.descripcion || "Descripción no disponible."}
        </p>

      </div>
    </div>
  `;
});
$("#experiencia-content").html(experienciaHTML);

 function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  $("#email").on("input", function () {
    if (validarEmail($(this).val())) {
      $(this).removeClass("is-invalid").addClass("is-valid");
    } else {
      $(this).removeClass("is-valid").addClass("is-invalid");
    }
  });

  $("#titulo").on("input", function () {
    if ($(this).val().trim() !== "") {
      $(this).removeClass("is-invalid").addClass("is-valid");
    } else {
      $(this).removeClass("is-valid").addClass("is-invalid");
    }
  });

  $("#mensaje").on("input", function () {
    if ($(this).val().trim().length >= 10) {
      $(this).removeClass("is-invalid").addClass("is-valid");
    } else {
      $(this).removeClass("is-valid").addClass("is-invalid");
    }
  });


  $("#contactForm").on("submit", function (e) {
    e.preventDefault();

    if (
      validarEmail($("#email").val()) &&
      $("#titulo").val().trim() !== "" &&
      $("#mensaje").val().trim().length >= 10
    ) {
      alert("Mensaje enviado correctamente");
      this.reset();
      $(".form-control").removeClass("is-valid");
    } else {
      alert("Por favor corrige los errores del formulario");
    }
  });


  $(".toggle-section").on("click", function () {
    const target = $(this).data("target");
    const icon = $($(this).data("icon"));

    $(target).slideToggle(300);
    icon.text(icon.text() === "▼" ? "▲" : "▼");
  });
  
});