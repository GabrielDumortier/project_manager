import {User} from './user.model';

export const createUser = async (req, res) => {
    try{
        console.log(req.body)
        const user = await User.create({...req.body}); //req.body =  ce qu'on entre dans insomnia
        res.status(201).json({users:user});
    }catch(err) {
        console.log(err);
        res.status(400).end();
    }
}