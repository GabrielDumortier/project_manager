import express from 'express';
import {connect} from './utils/db';
import {json, urlencoded} from 'body-parser';
import usersRouter from './ressources/users/user.router';
import projectsRouter from './ressources/projects/project.router';


const app = express();

app.use(json());
app.use(urlencoded({extended:true}));

//routes
app.use('/api/users', usersRouter);
app.use('/api/projects', projectsRouter);

const start = async () => {
    try {
        await connect();
        app.listen(8001, () => {
            console.log('Rest api is listening on port 8001');
        });
    } catch(err) {
        throw err;
    }
}

start();