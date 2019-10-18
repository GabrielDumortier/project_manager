import mongoose from 'mongoose';

const projectsSchema = new mongoose.Schema({
    name: {
        type : String,
        required :true,
        maxlength: 50 
    },
    description: {
        type : String,
        maxlength: 500
    },
    author: {
        type: String,
        required: true
    },
    creation_date : {
        type: Date,
        default: Date.now
    },
    start_date : {
        type: Date
    },
    finish_date : {
        type : Date
    }
})

const moviesSchema = new mongoose.Schema({
	fields : {
		directors : [
			{type: String}
		],
		release_date : {type: String},
		rating : {type:Number},
		genres : [
			{type: String}
		],
		image_url : {type: String},
		plot : {type: String},
		title : {type: String},
		rank : {type:Number},
		running_time_secs : {type:Number},
		actors : [
			{type: String}
		],
		year : {type:Number}
	},
	id : {type: String},
    type : {
        type: String,
        default: "add"
        }
});

export const Project = mongoose.model('project',projectsSchema)