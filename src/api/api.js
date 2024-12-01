import axios from 'axios'

const api = axios.create({
    baseURL: "https://api-pensamdoemmim.onrender.com"
    //baseURL: "https://apinonshops.store"
    //baseURL: "http://localhost:3003" //"https://api-store-stylestop.onrender.com" // //"https://api-store-v4bm.onrender.com"
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
