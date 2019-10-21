import {User} from './user.model';

// ## TODO : modifier afin de ne pas renvoyer les PW

// GET /api/users/
export const list = async (req,res)=>{
    try{
        const users = await User.find().limit(50);
        if(!users) return res.status(400).end();
        res.status(200).json({users:users});
    } catch(e){
        console.error(e)
        res.status(400).end()
    }
};

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



