import {Router} from 'express';
import {list, listOne, create} from './user.controller';

const userRouter = Router();

userRouter
    .route('/')
    .get(list)
    .post(create)

userRouter
    .route('/:id')
    .get(listOne)

 export default userRouter;