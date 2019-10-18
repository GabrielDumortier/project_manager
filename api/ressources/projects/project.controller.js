import {Project} from './project.model';

// GET /api/projects/
export const list = async (req, res) => {
    try{
        const projects = await Project.find();
        if(!projects) return res.status(404).end();
        res.status(200).json({projects:projects});
    } catch(e){
        console.error(e)
        res.status(400).end()
    }
}

// GET /api/projects/:id
export const listOne = async (req,res)=>{
    try{
        const project = await Project.findOne({_id:req.params.id});
        if(!project) return res.status(404).end();
        res.status(200).json({projects:project});
    } catch(e){
        console.error(e)
        res.status(400).end()
    }
};

// POST /api/projects/
export const create = async (req, res) => {
    try{
        console.log(req.body)
        const project = await Project.create({...req.body});
        res.status(201).json({projects:project});
    }catch(e) {
        console.log(e);
        res.status(400).end();
    }
}

// PUT  /api/projects/
export const updateOne = async (req,res) =>{
    try {
        const updatedProject = await Project.findOneAndUpdate({
                _id:req.params.id
            },
                req.body,
                {new:true}
        )
        if(!updatedProject) return res.status(404).end();
        res.status(200).json({projects:updatedProject});
    } catch(e){
        console.error(e);
        res.status(400).end()
    }
};

export const deleteOne = async (req,res) =>{
    try {
        const deletedProject = await Project.findByIdAndDelete({
                _id:req.params.id
            })
        if(!deletedProject) return res.status(404).end();
        res.status(200).json({projects:deletedProject});
    } catch(e){
        console.error(e);
        res.status(400).end()
    }
};