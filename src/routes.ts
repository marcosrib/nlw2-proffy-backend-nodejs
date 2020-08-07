import express, { Router } from 'express';
import ClassesControllers from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
const routes = express.Router()

const classesControllers = new ClassesControllers();
const connectiosControllers = new ConnectionsController();


routes.post('/classes', classesControllers.create );

routes.get('/classes', classesControllers.index );


routes.post('/connections', connectiosControllers.create );

routes.get('/connections', connectiosControllers.index );




export default routes;