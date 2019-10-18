import {User} from './user.model';

// const Michel = {
//     "firstname":"coucou",
//     "lastname":"Aznavour",
//     "username":"Charly",
//     "email":"charly.berger@gmail.com",
//     "password":"Salut bb",
//     "avatar_url":"",
//     "company":"Musique",
//     "job":"Chanteur talentueux",
//     "links":["https://google.be", "https://picsum.photos"],
//     "phone": "32463096654",
//     "projects":[{
//             "accepted": false,
//             "invitedBy": "Alain Souchon"
//     }],
//     "tasks":["superid637893347"]

// }

export const createUser = async (req, res) => {
    try{
        console.log(req.body)
        const user = await User.create({...req.body}); //req.body =  ce qu'on entre dans insomnia
        res.status(201).json({user});
    }catch(err) {
        console.log(err);
        res.status(400).end();
    }
}