const listaClientes = () => {
  return fetch('http://localhost:3000/profile')
    .then((res => res.json()))
}

const cadastraCliente = (nome, email) => {
  return fetch('http://localhost:3000/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome,
        email,
      })
    })
    .then((res) => res.body);
}

// cadastraCliente('Luiz223423', 'email2234');


export const clienteService = {
  listaClientes,
  cadastraCliente,
};