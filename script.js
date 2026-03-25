
const animalEl = document.getElementById("animal");
const produccionEl = document.getElementById("produccion");
const cantidadEl = document.getElementById("cantidad");
const precioEl = document.getElementById("precio");
const respuestaEl = document.getElementById("respuesta");
const btnCantidad = document.getElementById("btnCantidad");
const btnProducto = document.getElementById("btnProducto");
const btnPrecio = document.getElementById("btnPrecio");
const btnCalcular = document.getElementById("btnCalcular");
const btnCopiarPrecio = document.getElementById("btnCopiarPrecio");
const btnLogin = document.getElementById("btnLogin");

function tipoProduccion(animal) {
    if (animal === "Vaca") return "Leche 🥛";
    if (animal === "Cerdo") return "Carne 🍖";
    if (animal === "Pollo") return "Huevos 🥚";
    return "";
}

animalEl.addEventListener("change", () => {
    produccionEl.value = tipoProduccion(animalEl.value);
    cantidadEl.value = "";
    precioEl.value = "";
    cantidadEl.disabled = true;
    precioEl.disabled = true;
    precioEl.readOnly = true;
    respuestaEl.textContent = "";
});

btnCantidad.addEventListener("click", () => {
    if (!animalEl.value) return alert("Selecciona un animal primero.");
    cantidadEl.disabled = false;
    cantidadEl.readOnly = false;
    cantidadEl.focus();
});

btnProducto.addEventListener("click", () => {
    if (!animalEl.value) return alert("Selecciona un animal primero.");
    produccionEl.value = tipoProduccion(animalEl.value);
    respuestaEl.textContent = "Producto: " + produccionEl.value;
});

btnPrecio.addEventListener("click", () => {
    if (!animalEl.value) return alert("Selecciona un animal primero.");
    const cantidad = Number(cantidadEl.value);
    if (!(cantidad > 0)) return alert("Ingresa primero la cantidad producida.");
    precioEl.disabled = false;
    precioEl.readOnly = false;
    precioEl.focus();
});

btnCopiarPrecio.addEventListener("click", async () => {
    if (!precioEl.value) return alert("Ingresa el precio para copiar.");
    try {
        await navigator.clipboard.writeText(precioEl.value);
        respuestaEl.textContent = `Precio copiado: ${precioEl.value}`;
    } catch {
        alert("No se pudo copiar al portapapeles.");
    }
});

const loginModal = document.getElementById("loginModal");
const loginUsuario = document.getElementById("loginUsuario");
const loginContrasena = document.getElementById("loginContrasena");
const loginMensaje = document.getElementById("loginMensaje");
const btnEnviarLogin = document.getElementById("btnEnviarLogin");
const btnCerrarLogin = document.getElementById("btnCerrarLogin");

const abrirModalLogin = () => {
    loginModal.style.display = "flex";
    loginModal.setAttribute("aria-hidden", "false");
    loginMensaje.textContent = "";
    loginUsuario.value = "";
    loginContrasena.value = "";
    loginUsuario.focus();
};

const cerrarModalLogin = () => {
    loginModal.style.display = "none";
    loginModal.setAttribute("aria-hidden", "true");
    loginMensaje.textContent = "";
};

btnLogin.addEventListener("click", abrirModalLogin);
btnCerrarLogin.addEventListener("click", cerrarModalLogin);

loginModal.addEventListener("click", (e) => {
    if (e.target === loginModal) cerrarModalLogin();
});

btnEnviarLogin.addEventListener("click", () => {
    const usuario = loginUsuario.value.trim();
    const contrasena = loginContrasena.value.trim();

    if (!usuario) {
        loginMensaje.textContent = "Ingresa un usuario.";
        loginUsuario.focus();
        return;
    }
    if (!contrasena) {
        loginMensaje.textContent = "Ingresa una contraseña.";
        loginContrasena.focus();
        return;
    }

    if (usuario === "admin" && contrasena === "1234") {
        loginMensaje.style.color = "#1b5e20";
        loginMensaje.textContent = `Bienvenido ${usuario}, has iniciado sesión correctamente.`;
        setTimeout(cerrarModalLogin, 800);
    } else {
        loginMensaje.style.color = "#d32f2f";
        loginMensaje.textContent = "Usuario o contraseña incorrectos.";
    }
});

btnCalcular.addEventListener("click", () => {
    const cantidad = Number(cantidadEl.value);
    const precio = Number(precioEl.value);

    if (!animalEl.value) return alert("Selecciona animal.");
    if (!produccionEl.value) return alert("Presiona botón 3 primero.");
    if (!(cantidad > 0)) return alert("Ingresa una cantidad válida.");
    if (!(precio > 0)) return alert("Ingresa un precio válido.");

    const total = cantidad * precio;
    respuestaEl.textContent =
        `Animal: ${animalEl.value} | Producto: ${produccionEl.value} | Cantidad: ${cantidad} | Precio/u: ${precio.toFixed(2)} | Total: ${total.toFixed(2)}`;
});