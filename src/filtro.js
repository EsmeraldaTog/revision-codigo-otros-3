// arreglo de objetos de tipo producto

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./assets/taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./assets/taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./assets/bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./assets/bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./assets/zapato-rojo.jpg"}
]

// nombres de variables descriptivas
const list = document.getElementById("lista-de-productos") 
const input = document.querySelector('input')/// para obtener el elemento unicamente debemos escribir el nombre del elemento html sin el .
const texto= input.value
console.log(texto);



for (let i = 0; i < productos.length; i++) {
  let div = document.createElement("div")
  div.classList.add("producto")
/// Ya no se debe utilizar la creacion de variables con la palabra reservada var
  let title = document.createElement("p")
  title.classList.add("titulo")
  title.textContent = productos[i].nombre
  
 let imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  div.appendChild(title)
  div.appendChild(imagen)

  list.appendChild(div)
}



const botonDeFiltro = document.querySelector("button");
botonDeFiltro.onclick = () => {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  const texto = input.value; // Captura el valor del campo de entrada después de que el usuario haya ingresado 
  console.log(texto)
  const productosFiltrados = filtrado(productos, texto);
  displayProductos(productosFiltrados);

}






  
  const filtrado = (productos, texto) => {
     return productos.filter(item => item.tipo.includes(texto.toLowerCase() ) // utilizamos el metodo toLowerCase para transformar el texto en minusculas y no tengamos problemas a la hora de mostrar los resultados si el usuario escribio en mayusculas
      || item.color.includes(texto.toLowerCase()))
     
  }  




  function displayProductos (productos) {
    for (let i = 0; i < productos.length; i++) { /// se recorre el arreglo productos como tal no existe un arreglo productos filtrados , ya que cuando llamamos a la funcion productosfiltrados ya retorna  productos que cumplan la condicion
      let div = document.createElement("div")
      div.classList.add("producto")
    
      let  title = document.createElement("p")
      title.classList.add("titulo")
      title.textContent = productos[i].nombre
      
       let imagen = document.createElement("img");
      imagen.setAttribute('src', productos[i].img);
    
      div.appendChild(title)
      div.appendChild(imagen)
    
      list.appendChild(div)
    }
  }
  



