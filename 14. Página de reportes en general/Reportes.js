fetch('http://localhost:8080/atendidos/all')
  .then(response => response.json())
  .then(data => {
    for(let x of data){
        let section = document.querySelector(".container")
        let nodo = document.createElement("section");
        console.log(section)
        nodo.classList.add("centrear")
        nodo.innerHTML=`<h3>${x.codigo_mascota}</h3><br>
        <p>${x.descripción}</p><br>
        <button class="button-pastel">Ver más</button>`

        section.appendChild(nodo)
    }
  });

  <img src="imgenes/1.JPG" alt="" class="imag">
                  <p>Accesorio de Espejo para Aves 82104</p>
                  <h6 class="precio">$1.75</h6>