# Calculadora Ganadera

Aplicación web pensada para apoyar el cálculo rápido de producción ganadera y el valor total según cantidad y precio por unidad.

## Novedades recientes

- Inicio de sesión modal con validación básica desde la interfaz.
- Flujo de cálculo guiado por pasos para evitar errores al ingresar datos.
- Botón para copiar el precio al portapapeles.
- Enlace directo para contactar por WhatsApp.
- Diseño visual mejorado con fondo, tarjetas, sombras y efecto responsive.
- Selección de animal con autocompletado del tipo de producción.

## Funcionalidades

- Selección de animal: vaca, cerdo o pollo.
- Asignación automática del tipo de producción:
  - Vaca: leche
  - Cerdo: carne
  - Pollo: huevos
- Habilitación progresiva de cantidad, precio y cálculo.
- Cálculo del total final con la fórmula:
  - `total = cantidad * precio`
- Copiado del precio al portapapeles.
- Modal de inicio de sesión con credenciales de prueba.
- Sección de contacto con enlace a WhatsApp.
- Diseño adaptable a pantallas pequeñas.

## Credenciales de prueba

El inicio de sesión funciona como demostración en el front-end.

- Usuario: `admin`
- Contraseña: `1234`

## Cómo Usarlo

1. Abre `index.html` con Live Server o en tu navegador.
2. Selecciona un animal.
3. Presiona `2. Habilitar cantidad`.
4. Ingresa la cantidad producida por día.
5. Presiona `4. Habilitar precio`.
6. Escribe el precio por unidad.
7. Usa `5. Calcular total` para ver el resultado.
8. Si lo necesitas, usa `Copiar precio` para copiar el valor actual.
9. Puedes abrir `Iniciar sesión` para probar el modal.

## Archivos Del Proyecto

- `index.html`: estructura principal de la interfaz.
- `estilos.css`: estilos visuales y diseño responsive.
- `script.js`: lógica de la calculadora, el modal y las acciones de la interfaz.
- `README.md`: documentación del proyecto.

## Requisitos

- Navegador moderno.
- Conexión a internet para cargar las fuentes externas y abrir el enlace de WhatsApp.
- Live Server recomendado para probar los cambios en tiempo real.

## Notas

- El proyecto es una interfaz front-end y no incluye backend.
- La sesión es solo demostrativa y no reemplaza un sistema real de autenticación.
- El diseño y los botones están pensados para un flujo paso a paso, más fácil de usar.
