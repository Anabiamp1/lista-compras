const form = document.getElementById("form-lista");
const input = document.getElementById("inputadicionar");
const lista = document.getElementById("listacompras");
const btn = document.getElementById("botaoitem");

// Função que mostra a mensagem de item removido
function mostrarMensagemRemocao() {
  const msg = document.getElementById('mensagem-remocao');
  msg.style.display = 'block';

  setTimeout(() => {
    msg.style.display = 'none';
  }, 2000); 
}

btn.addEventListener('click', (event) => {
  event.preventDefault();

  const texto = input.value.trim();
  if (texto === '') return;

  const li = document.createElement('li');
  li.className = 'itemlista';

  li.innerHTML = `
    <label class="checkbox-custom">
      <input type="checkbox">
      <span class="checkmark"></span>
      ${texto}
    </label>
    <img src="delete-02-stroke-rounded.svg" class="icone-lixeira" alt="Remover item">
  `;

  const iconeLixeira = li.querySelector('.icone-lixeira');
  iconeLixeira.addEventListener('click', () => {
    li.remove();
    mostrarMensagemRemocao(); // mostra mensagem ao remover
  });

  lista.appendChild(li);
  input.value = '';
  input.focus();
});

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    btn.click();
  }
});

// Ativa a lixeira dos itens fixos no HTML
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.icone-lixeira').forEach(icon => {
    icon.addEventListener('click', () => {
      icon.closest('li').remove();
      mostrarMensagemRemocao(); 
    });
  });
});