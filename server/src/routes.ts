
import express from 'express'; 

const routes = express.Router();

const app = express();

routes.get('/', (request,response) => {
    return response.json({message: 'Hello World'})
});

export default routes;

