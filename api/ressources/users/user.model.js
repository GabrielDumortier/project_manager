import mongoose from 'mongoose';

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
        required: true
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
        type: Number
    },
    projects: [{
        id: {type: String},
        favorite: {type: Boolean},
        accepted: {type: Boolean},
        invitedBy: {type: String},
    }], // pas sur de la syntaxe
    tasks: [
        {type: String}
    ]
});

export const User = mongoose.model('users', userSchema);