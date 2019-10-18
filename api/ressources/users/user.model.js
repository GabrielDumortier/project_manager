import mongoose from 'mongoose';

const emailValidator = (v) => (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(v);

const userSchema = new mongoose.Schema({
    
    firstname: {
        type: String, 
        maxLength: 50, 
        required: true
    },
    lastname: {
        type: String, 
        maxLength: 50, 
        required: true
    },
    username: {
        type: String, 
        maxLength: 50, 
        required: true
    },
    email: {
        type: String, 
        maxLength: 50, 
        required: true,
        validator: [emailValidator, "An error has occured with your email, please check"]
    },
    password: {
        type: String, 
        maxLength: 50, 
        required: true
    },
    avatar_url: {
        type: String,
        default: 'https://picsum.photos/id/237/60/60/'
    },
    company: {
        type: String, 
        maxLength: 50
    },
    job: {
        type: String, 
        maxLength: 50
    },
    links: [
        {type: String}
    ],
    phone: {
        type: Number,
        maxLength: 20
    },
    projects: [{
        project_id: {type: String},
        favorite: {type: Boolean},
        accepted: {type: Boolean},
        invitedBy: {type: String},
    }], // pas sur de la syntaxe
    tasks: [
        {type: String}
    ]
});

export const User = mongoose.model('users', userSchema);