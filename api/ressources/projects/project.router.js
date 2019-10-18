import {Router} from 'express';
import {createProject} from './project.controller';

const projectRouter = Router();

projectRouter.
    route('/')
    .post(createProject)

 export default projectRouter;