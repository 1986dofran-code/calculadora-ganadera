// Detectar animal y asignar producción automáticamente
function actualizarProduccion() {
    let animal = document.getElementById("animal").value;
    let produccion = document.getElementById("produccion");

    if (animal === "Vaca") {
        produccion.value = "Leche";
    } else if (animal === "Cerdo") {
        produccion.value = "Carne";
    } else if (animal === "Pollo") {
        produccion.value = "Huevos";
    } else {
        produccion.value = "";
    }
}

// Mostrar datos
function mostrarDatos() {
    let animal = document.getElementById("animal").value;
    let produccion = document.getElementById("produccion").value;
    let cantidad = document.getElementById("cantidad").value;

    if (animal === "" || cantidad === "") {
        alert("Completa los campos");
        return;
    }

    document.getElementById("respuesta").innerText =
        "Animal: " + animal +
        " | Produce: " + produccion +
        " | Cantidad diaria: " + cantidad;
}

// Calculadora
function calcular() {
    let animales = document.getElementById("animales").value;
    let consumo = document.getElementById("consumo").value;

    if (animales === "" || consumo === "") {
        alert("Completa los datos");
        return;
    }

    let total = animales * consumo;

    document.getElementById("resultado").innerText =
        "Consumo total: " + total + " kg";
}