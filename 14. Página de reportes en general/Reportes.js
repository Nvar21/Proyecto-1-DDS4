fetch('http://localhost:8080/atendidos/all')
  .then(response => response.json())
  .then(data => {
    for(let x of data){
        let section = document.querySelector("#container")
        let nodo = document.createElement("tr");
        console.log(section)
        nodo.classList.add("mascota")
        nodo.innerHTML=`<td><img src="${x.foto}" alt="" ></td>
        <td>${x.codigo_mascota}</td>
        <td>${x.diagnostico}</td>
        <td>${x.tratamiento}</td>`

        section.appendChild(nodo)
    }
  });