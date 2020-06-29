import express, { request, response } from 'express'; 

const app = express();
  
    app.use(express.json());
// Rota: Endereço completo da requisição 
// Recurso: Qual entidadee estamos acessando do sistema

//GET: Buscar uma ou mais informações do back-end
//POST: criar uma nova informação no back-end
//PUT: Atuaçizar uma informação existente no back-end
//DELETE: Remover uma informação do back-end

// Post http://localhost:3333/users = Criar um usuario
// Get http://localhost:3333/users = listar usuarios
// Get http://localhost:3333/users/5 = Buscar dados do usuarios com ID 5
// request para,: parametros que vem na propria rota que identifica um recurso
//query param: parametro que vem na propria rota geralmente opcionais para filtros paginação
//request Body: parametros para criação/atualiazação 
const users = [
    'Diego',
    'Cleiton',
    'Robson',
    'Daniel'
];

app.get('/users', (request,response) => {
    const search = String (request.query.search);
   const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
//JSON
  return response.json(filteredUsers);
});
app.get('/users/:id', (request,response) => {

    const id = Number(request.params.id);
    const user = users[id];
    return response.json(user)
});

app.post('/users',(request,response) => {
    const data = request.body;
    console.log(data);
    const user = {
        name: data.name,
        email: data.email,
    };
    return response.json(user);
});
app.listen(3333);
