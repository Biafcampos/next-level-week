import express  from 'express'; 
import routes from './routes';

const app = express();
  
app.use(express.json());
app.use(routes);
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

//SELECT * FROM users WHERE name = 'Diego'
//knex('users').where('name','Diego').select('*')


app.listen(3333);
