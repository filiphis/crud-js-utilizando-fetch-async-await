import {
  clienteService
} from '../service/cliente-service.js';

const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const nome = evento.target.querySelector('#nome').value;
  const email = evento.target.querySelector('#email').value;

  clienteService.cadastraCliente(nome, email)
    .then(() => window.location.href = './cadastro_concluido.html');
});