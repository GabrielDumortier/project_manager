import {Router} from 'express';
import {list,listOne, create, updateOne, deleteOne} from './project.controller';

const projectRouter = Router();

projectRouter
    .route('/')
    .get(list)
    .post(create)

projectRouter
    .route('/:id')
    .get(listOne)
    .put(updateOne)
    .delete(deleteOne)

 export default projectRouter;