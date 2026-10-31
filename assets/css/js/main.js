const contenedorCategorias = document.getElementById("lista-categorias");
const contenedorProductos = document.getElementById("lista-productos");

// MOSTRAR CATEGORÍAS
const todasLasCategorias = ["Todos los productos", ...categorias];

todasLasCategorias.forEach((categoria) => {
    const tarjeta = document.createElement("button");
    tarjeta.type = "button";
    tarjeta.classList.add("tarjeta-categoria");
    tarjeta.textContent = categoria;

    tarjeta.addEventListener("click", () => {
        if (categoria === "Todos los productos") {
            mostrarProductos(productos);
        } else {
            const filtrados = productos.filter(
                producto => producto.categoria === categoria
            );
            mostrarProductos(filtrados);
        }
    });

    contenedorCategorias.appendChild(tarjeta);
});

// MOSTRAR PRODUCTOS
function mostrarProductos(listaProductos) {
    const contenedorProductos = document.getElementById("lista-productos");

    if (!contenedorProductos) return;

    contenedorProductos.innerHTML = "";

    listaProductos.forEach((producto) => {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("tarjeta-producto");

        const descripcion = producto.descripcion || "";
        const descripcionCorta =
            descripcion.length > 75
                ? descripcion.slice(0, 75).trim() + "..."
                : descripcion;

       tarjeta.innerHTML = `
    <button type="button" class="boton-favorito" aria-label="Agregar a favoritos">
        ♡
    </button>

    <div class="imagen-producto">
        <img src="${producto.imagen}" alt="${producto.nombre}">
    </div>

    <div class="informacion-producto">
        <h3>${producto.nombre}</h3>

        <p class="descripcion-producto">
            ${descripcionCorta}
        </p>

        <p class="precio-producto">
            $${Number(producto.precio).toFixed(2)}
        </p>

        <button type="button" class="boton-agregar-carrito">
            Agregar al carrito
        </button>

        <button type="button" class="boton-ver-producto">
            Ver más detalles
        </button>
    </div>
`;
        // FAVORITOS
        const botonFavorito = tarjeta.querySelector(".boton-favorito");

        const obtenerFavoritos = () => JSON.parse(
            localStorage.getItem("favoritosKforU") || "[]"
        );

        if (obtenerFavoritos().includes(producto.nombre)) {
            botonFavorito.textContent = "♥";
            botonFavorito.classList.add("favorito-activo");
        }

        botonFavorito.addEventListener("click", () => {
            const guardados = obtenerFavoritos();
            const posicion = guardados.indexOf(producto.nombre);

            if (posicion === -1) {
                guardados.push(producto.nombre);
            } else {
                guardados.splice(posicion, 1);
            }

            localStorage.setItem(
                "favoritosKforU",
                JSON.stringify(guardados)
            );

            const esFavorito = guardados.includes(producto.nombre);

            botonFavorito.textContent = esFavorito ? "♥" : "♡";
            botonFavorito.classList.toggle("favorito-activo", esFavorito);

            if (typeof mostrarFavoritos === "function") {
                mostrarFavoritos();
            }
        });

        // CARRITO
        tarjeta.querySelector(".boton-agregar-carrito")
            .addEventListener("click", () => {
                agregarAlCarrito(producto);
            });

        // VER MÁS
        tarjeta.querySelector(".boton-ver-producto")
            .addEventListener("click", () => {
                const modal = document.getElementById("modal-producto");

                if (!modal) return;

                document.getElementById("modal-imagen").src = producto.imagen;
                document.getElementById("modal-imagen").alt = producto.nombre;
                document.getElementById("modal-nombre").textContent = producto.nombre;
                document.getElementById("modal-marca").textContent =
                    "Marca: " + (producto.marca || "K-for-U");
                document.getElementById("modal-descripcion").textContent =
                    descripcion;
                document.getElementById("modal-precio").textContent =
                    "$" + Number(producto.precio).toFixed(2);

                document.getElementById("modal-agregar").onclick = () => {
                    agregarAlCarrito(producto);
                    modal.style.display = "none";
                };

                modal.style.display = "flex";
            });

        contenedorProductos.appendChild(tarjeta);
    });
}
// CERRAR MODAL
const cerrarModal = document.getElementById("cerrar-modal");
const modalProducto = document.getElementById("modal-producto");

if (cerrarModal && modalProducto) {
    cerrarModal.addEventListener("click", () => {
        modalProducto.style.display = "none";
    });
}

// MOSTRAR TODOS LOS PRODUCTOS
mostrarProductos(productos);

// BUSCADOR
const buscador = document.getElementById("buscador-productos");
const botonLimpiar = document.getElementById("limpiar-busqueda");

if (buscador) {
    buscador.addEventListener("input", () => {
        const texto = buscador.value.toLowerCase().trim();

        const encontrados = productos.filter(producto => {
            return (
                producto.nombre.toLowerCase().includes(texto) ||
                (producto.marca || "").toLowerCase().includes(texto) ||
                producto.descripcion.toLowerCase().includes(texto) ||
                producto.categoria.toLowerCase().includes(texto)
            );
        });

        mostrarProductos(encontrados);
    });
}

if (botonLimpiar && buscador) {
    botonLimpiar.addEventListener("click", () => {
        buscador.value = "";
        mostrarProductos(productos);
    });
}

// MOSTRAR FAVORITOS
function mostrarFavoritos() {
    const contenedor = document.getElementById("lista-favoritos");
    if (!contenedor) return;

    const guardados = JSON.parse(
        localStorage.getItem("favoritosKforU") || "[]"
    );

    const favoritos = productos.filter(producto =>
        guardados.includes(producto.nombre)
    );

    contenedor.innerHTML = "";

    if (favoritos.length === 0) {
        contenedor.innerHTML = "<p>Todavía no tienes favoritos ♡</p>";
        return;
    }

    favoritos.forEach(producto => {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("tarjeta-producto");

        tarjeta.innerHTML = `
            <div class="imagen-producto">
                <img
                    src="${producto.imagen}"
                    alt="${producto.nombre}"
                >
            </div>

            <div class="informacion-producto">
                <h3>${producto.nombre}</h3>

                <p class="descripcion-producto">
                    ${producto.descripcion}
                </p>

                <p class="precio-producto">
                    $${Number(producto.precio).toFixed(2)}
                </p>

                <button class="quitar-favorito" type="button">
                    Quitar de favoritos ♡
                </button>

                <button class="boton-agregar-carrito" type="button">
                    Agregar al carrito
                </button>
            </div>
        `;

        tarjeta.querySelector(".quitar-favorito")
            .addEventListener("click", () => {
                const actualizados = guardados.filter(
                    nombre => nombre !== producto.nombre
                );

                localStorage.setItem(
                    "favoritosKforU",
                    JSON.stringify(actualizados)
                );

                mostrarFavoritos();
                mostrarProductos(productos);
            });

        tarjeta.querySelector(".boton-agregar-carrito")
            .addEventListener("click", () => {
                agregarAlCarrito(producto);
            });

        contenedor.appendChild(tarjeta);
    });
}

// CARGAR FAVORITOS
mostrarFavoritos();