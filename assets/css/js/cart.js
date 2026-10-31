const carrito = [];

// AGREGAR PRODUCTOS AL CARRITO
function agregarAlCarrito(producto) {
    const existente = carrito.find(
        item => item.nombre === producto.nombre
    );

    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push({
            ...producto,
            cantidad: 1
        });
    }

    mostrarCarrito();
}

// AUMENTAR CANTIDAD
function aumentarCantidad(nombre) {
    const producto = carrito.find(
        item => item.nombre === nombre
    );

    if (producto) {
        producto.cantidad++;
    }

    mostrarCarrito();
}

// DISMINUIR CANTIDAD
function disminuirCantidad(nombre) {
    const producto = carrito.find(
        item => item.nombre === nombre
    );

    if (!producto) return;

    producto.cantidad--;

    if (producto.cantidad <= 0) {
        eliminarDelCarrito(nombre);
        return;
    }

    mostrarCarrito();
}

// ELIMINAR PRODUCTO
function eliminarDelCarrito(nombre) {
    const indice = carrito.findIndex(
        item => item.nombre === nombre
    );

    if (indice !== -1) {
        carrito.splice(indice, 1);
    }

    mostrarCarrito();
}

// MOSTRAR CARRITO
function mostrarCarrito() {
    const contenedor = document.getElementById("contenido-carrito");
    const contador = document.getElementById("contador-carrito");
    const totalElemento = document.getElementById("total-carrito");

    if (!contenedor || !contador || !totalElemento) return;

    const cantidadTotal = carrito.reduce(
        (suma, producto) => suma + producto.cantidad,
        0
    );

    const total = carrito.reduce(
        (suma, producto) =>
            suma + producto.precio * producto.cantidad,
        0
    );

    contador.textContent = cantidadTotal;
    totalElemento.textContent = "$" + total.toFixed(2);

    if (carrito.length === 0) {
        contenedor.innerHTML = "<p>Tu carrito está vacío ♡</p>";
        return;
    }

    contenedor.innerHTML = "";

    carrito.forEach(producto => {
        const elemento = document.createElement("div");

        elemento.classList.add("producto-carrito");

        const nombre = document.createElement("h4");
        nombre.textContent = producto.nombre;

        const precio = document.createElement("p");
        precio.textContent = "$" + producto.precio.toFixed(2);

        const cantidad = document.createElement("span");
        cantidad.textContent = producto.cantidad;

        const menos = document.createElement("button");
        menos.textContent = "−";
        menos.type = "button";
        menos.addEventListener("click", () => {
            disminuirCantidad(producto.nombre);
        });

        const mas = document.createElement("button");
        mas.textContent = "+";
        mas.type = "button";
        mas.addEventListener("click", () => {
            aumentarCantidad(producto.nombre);
        });

        const eliminar = document.createElement("button");
        eliminar.textContent = "Eliminar";
        eliminar.type = "button";
        eliminar.addEventListener("click", () => {
            eliminarDelCarrito(producto.nombre);
        });

        elemento.append(
            nombre,
            precio,
            menos,
            cantidad,
            mas,
            eliminar
        );

        contenedor.appendChild(elemento);
    });
}

// CREAR LA SECCIÓN DEL CARRITO
document.body.insertAdjacentHTML("beforeend", `
    <section id="carrito">
        <h2>Mi carrito ♡</h2>

        <p>
            Productos:
            <span id="contador-carrito">0</span>
        </p>

        <div id="contenido-carrito">
            <p>Tu carrito está vacío ♡</p>
        </div>

        <h3>
            Total:
            <span id="total-carrito">$0.00</span>
        </h3>
<button
    id="boton-whatsapp"
    type="button"
    onclick="abrirConfirmacionPedido()">
    ♡ Finalizar pedido
</button>
    </section>
`);

// HACER DISPONIBLES LAS FUNCIONES
window.agregarAlCarrito = agregarAlCarrito;
window.aumentarCantidad = aumentarCantidad;
window.disminuirCantidad = disminuirCantidad;
window.eliminarDelCarrito = eliminarDelCarrito;
// ENVIAR PEDIDO POR WHATSAPP
function enviarPedidoWhatsApp() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío ♡");
        return;
    }

    const numeroWhatsApp = "50370483471";

    let mensaje = "♡ ¡Hola, K-for-U! Quiero realizar el siguiente pedido:\n\n";

    carrito.forEach(producto => {
        const subtotal = producto.precio * producto.cantidad;

        mensaje += `• ${producto.nombre}\n`;
        mensaje += `  Cantidad: ${producto.cantidad}\n`;
        mensaje += `  Precio: $${producto.precio.toFixed(2)}\n`;
        mensaje += `  Subtotal: $${subtotal.toFixed(2)}\n\n`;
    });

    const total = carrito.reduce(
        (suma, producto) =>
            suma + producto.precio * producto.cantidad,
        0
    );

    mensaje += `♡ TOTAL DEL PEDIDO: $${total.toFixed(2)}\n\n`;
    mensaje += "¡Muchas gracias! ♡";

    const enlace = "https://wa.me/" + numeroWhatsApp +
        "?text=" + encodeURIComponent(mensaje);

    window.open(enlace, "_blank");
}

window.enviarPedidoWhatsApp = enviarPedidoWhatsApp;

// INICIAR CARRITO
mostrarCarrito();
function abrirConfirmacionPedido() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío ♡");
        return;
    }

    const modal = document.getElementById("modal-confirmacion");
    const contenido = document.getElementById("resumen-pedido");
    const total = carrito.reduce(
        (suma, producto) =>
            suma + producto.precio * producto.cantidad,
        0
    );

    contenido.innerHTML = "";

    carrito.forEach(producto => {
        const fila = document.createElement("div");
        fila.classList.add("fila-resumen");

        const nombre = document.createElement("span");
        nombre.textContent =
            producto.nombre + " × " + producto.cantidad;

        const subtotal = document.createElement("strong");
        subtotal.textContent =
            "$" + (producto.precio * producto.cantidad).toFixed(2);

        fila.append(nombre, subtotal);
        contenido.appendChild(fila);
    });

    document.getElementById("total-resumen").textContent =
        "$" + total.toFixed(2);

    modal.style.display = "flex";
}

// CERRAR CONFIRMACIÓN
function cerrarConfirmacionPedido() {
    document.getElementById("modal-confirmacion").style.display = "none";
}

// CONFIRMAR Y CONTINUAR A WHATSAPP
function confirmarPedido() {
    cerrarConfirmacionPedido();
    enviarPedidoWhatsApp();
}

window.abrirConfirmacionPedido = abrirConfirmacionPedido;
window.cerrarConfirmacionPedido = cerrarConfirmacionPedido;
window.confirmarPedido = confirmarPedido;

// CREAR VENTANA DE CONFIRMACIÓN
document.body.insertAdjacentHTML("beforeend", `
    <div id="modal-confirmacion" class="modal-confirmacion">
        <div class="contenido-confirmacion">

            <button
                class="cerrar-confirmacion"
                onclick="cerrarConfirmacionPedido()">
                ×
            </button>

            <div class="decoracion-confirmacion">♡</div>

            <h2>¡Tu pedido está casi listo!</h2>

            <p class="subtitulo-confirmacion">
                Revisa que todo esté correcto.
            </p>

            <div id="resumen-pedido"></div>

            <div class="total-resumen-contenedor">
                <span>Total del pedido</span>
                <strong id="total-resumen">$0.00</strong>
            </div>

            <button
                class="confirmar-pedido"
                onclick="confirmarPedido()">
                Confirmar y continuar a WhatsApp ♡
            </button>

            <button
                class="volver-comprar"
                onclick="cerrarConfirmacionPedido()">
                Volver a mi carrito
            </button>

        </div>
    </div>
`);