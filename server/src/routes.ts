import express from 'express';

import PointsController from './controllers/PointsControllers';
import ItemsController from './controllers/ItemsControllers';

const routes = express.Router();

    const pointsController = new PointsController();
    const itemsController = new ItemsController();

    routes.get('/items',itemsController.index);
    routes.post('/points', pointsController.create);
    routes.get('/points/:id', pointsController.show);

    //index: listagem
    //show: mostrar 1
    //create
    //update
    //delete


   export default routes;