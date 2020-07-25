import { Request, Response } from 'express';
import knex from '../database/connection'


class ItemsControllers {

async index(request: Request, response: Response) {
        const items = await knex('items').select('*');
        

        const serializadItems = items.map(item => {
            return {
                id:item.id,
                title: item.title,
                image_url: `http://localhost:3333/uploads/${item.image}`,
            };
        });

        // SELECT * FROM ITEMS

    return response.json(serializadItems);
   
   };
};

   export default ItemsControllers;