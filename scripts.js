const sobre = document.getElementById('sobre');
const btnAbrir = document.getElementById('abrir-sobre');
const contenido = document.getElementById('contenido');
const globosContainer = document.getElementById('globos-container');

btnAbrir.addEventListener('click', () => {
  // Animar apertura del sobre
  sobre.classList.add('sobre-abierto');

  // Después de abrir sobre
  setTimeout(() => {
    // Mostrar contenido
    contenido.classList.add('visible');

    // Cambiar fondo
    document.body.style.background = 'radial-gradient(circle at center, #ffd6e0, #fff0f5, #d6ecff)';

    // Iniciar animación globos
    iniciarGlobos();

    // Ocultar sobre para que no moleste
    setTimeout(() => {
      sobre.style.display = 'none';
      // Habilitar scroll
      document.body.style.overflow = 'auto';
    }, 1500);
  }, 1000);
});

function iniciarGlobos() {
  // Aumentamos a 50 elementos para que se vea más tupido
  for (let i = 0; i < 120; i++) {
    const elemento = document.createElement('div');
    
    // 50% de probabilidad de ser globo o corazón
    if (Math.random() > 0.5) {
      elemento.classList.add('globo');
    } else {
      elemento.classList.add('corazon');
      elemento.innerHTML = '💖'; // Usamos un emoji para los corazones
    }

    // Posición horizontal aleatoria
    elemento.style.left = `${Math.random() * 100}%`;
    
    // Duración aleatoria entre 8 y 13 segundos
    elemento.style.animationDuration = `${8 + Math.random() * 5}s`;
    
    // Retraso aleatorio (muy importante para que no salgan todos al mismo tiempo)
    elemento.style.animationDelay = `${Math.random() * 5}s`;

    globosContainer.appendChild(elemento);

    // Eliminar el elemento del DOM cuando termine para liberar memoria
    elemento.addEventListener('animationend', () => {
      elemento.remove();
    });
  }
}