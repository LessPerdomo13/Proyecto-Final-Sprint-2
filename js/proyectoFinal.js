function añadirTablero(){
  var tituloTablero = prompt("Titulo de Tablero")
  tituloTablero.innerHTML= tituloTablero;
  var numeroDeTareas = prompt("Numero de tareas")
  var nuevaLista = document.createElement("ol")
  var tareas = document.getElementById("tareas")

  for(var i =0;i<numeroDeTareas;i++){
    var valorTarea = prompt("Agregar una Tarea");
    var nuevaTarea = document.createElement("li");
    nuevaTarea.innerText = valorTarea;
    nuevaLista.appendChild(nuevaTarea);
    }

  tareas.appendChild(nuevaLista);


}

tareas.innerHTML = ""
