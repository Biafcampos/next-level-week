import express from 'express';

import PointsController from './controllers/PointsControllers';
import ItemsController from './controllers/itemsControllers';

const routes = express.Router();

    const pointsController = new PointsController();
    const itemsController = new ItemsController();

    routes.get('/items',itemsController.index);
    routes.post('/points', pointsController.create);
    //index: listagem
    //show: mostrar 1
    //create
    //update
    //delete


   export default routes;