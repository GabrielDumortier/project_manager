import {Router} from 'express';
import {list, listOne} from './user.controller';

const userRouter = Router();

userRouter
    .route('/')
    .get(list)

userRouter
    .route('/:id')
    .get(listOne)

 export default userRouter;