import {Project} from './project.model';

export const createProject = async (req, res) => {
    try{
        console.log(req.body)
        const project = await Project.create({...req.body});
        res.status(201).json({project});
    }catch(err) {
        console.log(err);
        res.status(400).end();
    }
}