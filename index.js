const btnAgregar = document.getElementById("btn-agregar"); //boton de agregar
const inpTitulo = document.getElementById("inp-titulo"); //input del titulo de una nueva nota
const inpDesc = document.getElementById("inp-nota"); //input de la descripcion de la nueva nota
const divNotas = document.querySelector(".notas"); //div donde se muestran todas las notas
const lore = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eius,
nisi iusto tempore consequuntur numquam soluta non cumque possimus
consequatur et. Placeat ea velit debitis qui delectus et porro id.`;

let notas = [];

btnAgregar.addEventListener("click", () => {
  let newNota = {
    titulo: inpTitulo.value,
    desc: inpDesc.value,
  };

  if (newNota.titulo !== "" && newNota.desc !== "") {
    notas.push(newNota);
    inpTitulo.value = "";
    inpDesc.value = "";
    renderNotas();
  }
});

function renderNotas() {
  divNotas.innerHTML = "";
  notas.forEach((nota, index) => {
    //se crea el div con la clase nota
    let newNota = document.createElement("div");
    newNota.className = "nota";

    //se crea el titulo de la nota
    let titulo = document.createElement("h2");
    titulo.textContent = nota.titulo;

    //se crea la descripcion de la nota
    let desc = document.createElement("p");
    desc.textContent = nota.desc;

    //se crea el boton de eliminar, con la funcion de eliminar como atributo
    let btnDelete = document.createElement("button");
    btnDelete.textContent = "Eliminar";
    btnDelete.setAttribute("onclick", `deleteNota(${index})`);

    //se agrega el titulo, la descripcion y el boton eliminar al div.nota
    newNota.appendChild(titulo);
    newNota.appendChild(desc);
    newNota.appendChild(btnDelete);

    //se agrea el div.nota al div.notas
    divNotas.appendChild(newNota);
  });
}

function deleteNota(index) {
  notas.splice(index, 1);
  renderNotas();
}

renderNotas();
