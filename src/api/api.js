import axios from 'axios'

const api = axios.create({
  baseURL: "https://app1.apinonshops.store",
  headers: {
    Authorization: 'Bearer qGtfMJAAPMpu3B50e2X3tRzWDAhFUcfWoCXwe9AFVgkx6cTiqysOWTZ', // or 'Token YOUR_TOKEN'
    'Content-Type': 'application/json',
  },

})

export default api;

export const createSession = async (email, password) => {
    return api.post("/login", { email, password }).catch(function (error) {
        if (error.response) {
          // A requisição foi feita e o servidor respondeu com um código de status
          // que sai do alcance de 2xx
          console.error(error.response.data);
          console.error(error.response.status);
          console.error(error.response.headers);
        } else if (error.request) {
          // A requisição foi feita mas nenhuma resposta foi recebida
          // `error.request` é uma instância do XMLHttpRequest no navegador e uma instância de
          // http.ClientRequest no node.js
          console.error(error.request);
        } else {
          // Alguma coisa acontenceu ao configurar a requisição que acionou este erro.
          console.error('Error', error.message);
        }
    })
}
