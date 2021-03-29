const criaNovaLinha = (nome, email) => {
  const linha = document.createElement('tr');
  const conteudo =
    `
        <td class="td" data-td>${nome}</td>
        <td>${email}</td>
        <td>
            <ul class="tabela__botoes-controle">
                <li><a href="../telas/edita_cliente.html?id=" class="botao-simples botao-simples--editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul>
        </td>
    `;

  linha.innerHTML = conteudo;
  return linha;
}

const listaClientes = () => {
  const promise = new Promise((resolve, reject) => {
    const http = new XMLHttpRequest();

    // Informa o metodo e URL que iremos fazer a requisição
    // É como se estivessemos acessando o navegador e digitando uma URL
    http.open('GET', 'http://localhost:3000/profile');

    // Envia a requsição
    // Quando apertamos enter no navegador
    http.send();

    // Quando a requisição tiver uma resposta carregada
    // Após apertar enter precisamos aguardar que o navegador carregue completamente
    http.onload = () => {
      if (http.status >= 400) {
        reject(JSON.parse(http.response))
      } else {
        resolve(JSON.parse(http.response))
      }
    };
  });

  return promise;
}

const tabela = document.querySelector('[data-tabela]')

listaClientes()
  .then((clientes) => {
    clientes.forEach(cliente => {
      tabela.appendChild(criaNovaLinha(cliente.nome, cliente.email));
    });
  });