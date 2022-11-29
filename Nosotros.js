fetch('http://localhost:8080/nosotros/all')
  .then(response => response.json())
  .then(data => {
    for(let x of data){
        let section = document.querySelector("#nosotros")
        let nodo = document.createElement("div");
        console.log(section)
        nodo.classList.add("division")
        nodo.innerHTML=`<img src="${x.foto}" alt="" style="border-radius: 50%">
        <h3>${x.nombre}</h3><br>
        <p>${x.descripcion}</p><br>`

        section.appendChild(nodo)
    }
  });