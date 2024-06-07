let carrito = [];

function agregarAlCarrito(producto, precio, boton) {
  let cantidad;
  alert("Se ha agregado al carrito");
  switch (boton) {
    case 1:
      cantidad = parseInt(document.getElementById("cantidad1").value);
      document.getElementById("cantidad1").value = 1;

      break;
    case 2:
      cantidad = parseInt(document.getElementById("cantidad2").value);
      document.getElementById("cantidad2").value = 1;
      break;
    case 3:
      cantidad = parseInt(document.getElementById("cantidad3").value);
      document.getElementById("cantidad3").value = 1;
      break;
    case 4:
      cantidad = parseInt(document.getElementById("cantidad4").value);
      document.getElementById("cantidad4").value = 1;
      break;
    case 5:
      cantidad = parseInt(document.getElementById("cantidad5").value);
      document.getElementById("cantidad5").value = 1;
      break;
    case 6:
      cantidad = parseInt(document.getElementById("cantidad6").value);
      document.getElementById("cantidad6").value = 1;
      break;

    default:
      break;
  }
  let index = validar(carrito, producto);
  if (index == -1) {
    carrito.push({ producto, precio, cantidad });
    actualizarCarrito();
  } else {
    let cantidadCarrito = parseInt(carrito[index].cantidad);
    cantidad += cantidadCarrito;
    carrito[index].cantidad = cantidad;
    actualizarCarrito();
  }
}

function actualizarCarrito() {
  const objetosCarrito = document.getElementById("objetosCarrito");
  const totalCarrito = document.getElementById("totalCarrito");
  let total = 0;

  objetosCarrito.innerHTML = "";
  carrito.forEach((producto) => {
    const li = document.createElement("li");
    const btnAgregar = document.createElement("span");
    const btnQuitar = document.createElement("span");

    btnAgregar.textContent = " + ";
    btnAgregar.classList.add("btnSpanEliminar");
    btnAgregar.classList.add("btn-sm");
    btnAgregar.classList.add("btn-danger");

    btnQuitar.textContent = " - ";
    btnQuitar.classList.add("btnSpanModificar");
    btnQuitar.classList.add("btn-sm");
    btnQuitar.classList.add("btn-danger");

    let totalT = producto.cantidad * producto.precio;

    li.textContent = `X${producto.cantidad} - ${producto.producto} - $${producto.precio} - $${totalT}`;

    btnAgregar.onclick = () => {
      producto.cantidad++;
      totalViejo = totalT;
      totalT = producto.cantidad * producto.precio;
      total += totalT - totalViejo;
      totalCarrito.textContent = total;
      li.textContent = `X${producto.cantidad} - ${producto.producto} - $${producto.precio} - $${totalT}`;
      li.appendChild(btnAgregar);
      li.appendChild(btnQuitar);
    };

    btnQuitar.onclick = () => {
      producto.cantidad--;
      totalViejo = totalT;
      totalT = producto.cantidad * producto.precio;
      total += totalT - totalViejo;
      if (producto.cantidad <= 0) {
        carrito = carrito.filter(
          (objeto) => objeto.producto !== producto.producto
        );
        alert("Se ha eliminado el producto");
        li.textContent = "";
        total -= totalT;
        totalCarrito.textContent = total;
      } else {
        totalCarrito.textContent = total;
        li.textContent = `X${producto.cantidad} - ${producto.producto} - $${producto.precio} - $${totalT}`;
        li.appendChild(btnAgregar);
        li.appendChild(btnQuitar);
      }
    };

    objetosCarrito.appendChild(li);
    li.appendChild(btnAgregar);
    li.appendChild(btnQuitar);
    total += totalT;
  });

  totalCarrito.textContent = total;
}
function limpiarCarrito() {
  const objetosCarrito = document.getElementById("objetosCarrito");
  const totalCarrito = document.getElementById("totalCarrito");
  totalCarrito.innerHTML = "0";
  objetosCarrito.innerHTML = "";
  carrito = [];
}
function comprar() {
  if (carrito.length === 0) {
    alert("El carrito esta vacio");
  } else {
    let resultado = confirm(`¿Esta seguro que desea realizar la compra?`);
    if (resultado) {
      limpiarCarrito();
      alert("Se ha realizado la compra con exito !!");
    } else {
      alert("La compra ha sido cancelada");
    }
  }
}

function validar(vector, producto) {
  for (let index = 0; index < vector.length; index++) {
    if (vector[index].producto === producto) {
      return index;
    }
  }
  return -1;
}
