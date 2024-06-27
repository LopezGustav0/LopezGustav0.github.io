//menu barra
const barra =document.querySelector(".barra")
const lista =document.querySelector(".lista")

barra.addEventListener("click", ()=>{
    lista.classList.toggle("lista_visible");
})
//carrusel
// Selecciona el contenedor de los elementos del carrusel
const items = document.querySelector('.items');
// Selecciona todos los puntos indicadores del carrusel
const puntos = document.querySelectorAll('.punto');
// Inicializa la variable 'index' que mantiene el seguimiento de la diapositiva actual
let index = 0;
// Itera sobre cada punto y su índice correspondiente
puntos.forEach((punto, i) => {
    // Añade un evento 'click' a cada punto
    punto.addEventListener('click', () => {
        // Actualiza el índice al valor del punto clicado
        index = i;
        // Llama a la función para mover el carrusel y actualizar los puntos
        moverCarrusel();
    });
});
// Función para mover el carrusel a la diapositiva seleccionada
function moverCarrusel() {
    // Aplica una transformación CSS al contenedor de los elementos del carrusel
    // Mueve el contenedor un porcentaje negativo del índice multiplicado por 100
    items.style.transform = `translateX(${-index * 100}%)`;
    // Remueve la clase 'activo' de todos los puntos
    puntos.forEach(punto => punto.classList.remove('activo'));
    // Añade la clase 'activo' al punto correspondiente al índice actual
    puntos[index].classList.add('activo');
}

