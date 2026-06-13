let cantidadItems = 0;

const botonesAgregar = document.querySelectorAll(".btn-agregar");
const listaCarrito = document.querySelector("lista-carrito");

botonesAgregar.forEach((boton) => {
  boton.addEventListener("click", () => {
    const nombre = boton.dataset.nombre;
    const precio = boton.dataset.precio;

    agregarAlCarrito(nombre, precio);
  });
});

function agregarAlCarrito(nombre, precio) {
  const itemCarrito = document.createElement("li");

  itemCarrito.innerHTML = `
        ${nombre} - $${precio} 
        <button class="btn-eliminar">Eliminar</button>
    `;

  const btnEliminar = itemCarrito.querySelector(".btn-eliminar");
  btnEliminar.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });

  listaCarrito.appendChild(itemCarrito);
}


function updateBadge() {
  const badge = document.getElementById("carrito-badge"); 
  if (badge) {
    badge.textContent = cantidadItems;
  }
}

function agregarAlCarrito() {
  cantidadItems++;
  updateBadge();
}


function eliminarDelCarrito() {
  if (cantidadItems > 0) {
    cantidadItems--;
    updateBadge();
  }
}


const btnEliminar = li.querySelector('.btn-eliminar');


btnEliminar.addEventListener('click', () => {
    eliminarItem(li, precio);
});


function eliminarItem(li, precio) {
  
    li.remove();
    
 
    totalAcumuladorTotal -= Number(precio);
    

    cantidadItems--;
    
   
    updateTotal();
    updateBadge();
}

let totalAcumulado = 0;


function updateTotal() {
  const totalSpan = document.querySelector("span#total");

  totalSpan.textContent = `$${totalAcumulado.toLocaleString("es-CO")}`;
}

function agregarAlCarrito(precioProducto) {
  totalAcumulado += precioProducto; 
  updateTotal(); 
}

function eliminarItem(precioProducto) {
  totalAcumulado -= precioProducto; 
  updateTotal(); 
}

const btnVaciar = document.querySelector("#btn-vaciar");

btnVaciar.addEventListener("click", () => {
  
  document
    .querySelectorAll(".carrito-items li")
    .forEach((item) => item.remove());

  totalAcumulado = 0;
  cantidadItems = 0;


  updateTotal();
  updateBadge();

 
  const mensajeVacio = document.querySelector(".mensaje-carrito-vacio");
  if (mensajeVacio) {
    mensajeVacio.style.display = "block";
  }
});
