export default function initMenuTransition() {
// seleciona a div
const bottomDiv = document.querySelector('#bottom-div');

// adiciona um evento de rolagem na janela
window.addEventListener('scroll', () => {
  // verifica se o usuário rolou a página até o fim
  if (window.innerHeight < document.body.offsetHeight) {
    // mostra a div animando da esquerda para a direita
    bottomDiv.style.left = '0';
  }
});
}