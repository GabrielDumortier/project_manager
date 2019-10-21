import {User} from './user.model';

// ## TODO : modifier afin de ne pas renvoyer les PW

// GET /api/users/
export const create = async (req, res) => {
    try{
        console.log(req.body)
        const user = await User.create({...req.body}); //req.body =  ce qu'on entre dans insomnia
        res.status(201).json({users:user});
    }catch(err) {
        console.log(err);
        res.status(400).end();
    }
}

// GET /api/users/:id
export const listOne = async (req,res)=>{
    try{
        const user = await User.findOne({_id:req.params.id});
        if(!user) return res.status(404).end();
        res.status(200).json({users:user});
    } catch(e){
        console.error(e)
        res.status(400).end()
    }
};

// POST /api/users/
export const create = async (req, res) => {
    try{
        console.log(req.body)
        const user = await User.create({...req.body});
        res.status(201).json({users:user});
    }catch(e) {
        console.log(e);
        res.status(400).end();
    }
}

