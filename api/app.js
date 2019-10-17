import express from 'express';
import {connect} from './utils/db';
import {json, urlencoded} from 'body-parser';


// const app = express();

// app.use(json());
// app.use(urlencoded({extended:true}));

// app.use('/api/projects', projectRouter); //  a importer et renommer
// app.use('/api/users', usersRouter); //  a importer
// const start = async () => {
//     try {
//         await connect();
//         app.listen(8001, () => {
//             console.log('Rest api is listening on port 8001');
//         });
//     } catch(err) {
//         throw err;
//     }
// }

// start();