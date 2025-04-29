// Seleciona todos os elementos
const elementos = document.querySelectorAll('.vemermo');
const botoesFechar = document.querySelectorAll('.fechar');

// Adiciona evento de clique para expandir/recolher
elementos.forEach(elemento => {
  elemento.addEventListener('click', function() {
    // Fecha outros elementos abertos
    elementos.forEach(el => {
      if (el !== this) el.classList.remove('bota-tudo');
    });
    // Abre/fecha o elemento clicado
    this.classList.toggle('bota-tudo');
  });
});

// Adiciona evento para fechar ao clicar no "X"
botoesFechar.forEach(botao => {
  botao.addEventListener('click', function(e) {
    e.stopPropagation(); // Impede que o clique no "X" propague para o elemento pai
    this.parentElement.classList.remove('bota-tudo');
  });
});

// Fecha ao clicar fora do elemento
document.addEventListener('click', function(e) {
  if (!e.target.closest('.vemermo')) {
    elementos.forEach(el => el.classList.remove('bota-tudo'));
  }
});