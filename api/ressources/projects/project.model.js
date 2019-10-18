import mongoose from 'mongoose';

const colorValidator = (v) => (/^#([0-9a-f]{3}){1,2}$/i).test(v)

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
    author_id: {
        type: String,
        required: true
    },
    creation_date : {
        type: Date,
        default: Date.now,
        immutable: true
    },
    start_date : {
        type: Date
    },
    finish_date : {
        type : Date
    },
    deadline : {
        type : Date
    },
    status : {
        type : String,
        default : "created",
        enum : ["created","started","finished","abandoned"]
    },
    users : [
        {
            user_id : {
                type : String,
                maxlength : 50
            },
            job : {
                type : String,
                maxlength : 50
            },
            role : {
                type : String,
                default : "administrator",
                enum : ["administrator", "moderator","editor","spectator"]
            }
        }
    ],
    is_private : {
        type : Boolean,
        default : true
    },
    attachments : [
        {
            path : {
                type : String
            },
            name : {
                type : String,
                maxlength : 50
            },
            description : {
                type : String,
                maxlength : 250
            }
        }
    ],
    comments : [
        {
            author_id : {
                type : String
            },
            comment : {
                type : String,
                maxlength : 400
            },
            date : {
                type : Date,
                default: Date.now,
                immutable: true
            }
        }
    ],
    git : {
        type : String
    },
    ressources : [
        {
            name : {
                type : String,
                maxlength : 50
            },
            description : {
                type : String,
                maxlength : 250
            },
            url : {
                type : String
            },
            author : {
                type : String
            },
            date : {
                type : Date,
                default: Date.now,
                immutable: true
            }
        }
    ],
    tasks : [
        {
            name : {
                type : String,
                maxlength : 50
            },
            description : {
                type : String,
                maxlength : 250
            },
            author_id : {
                type : String
            },
            labels : [
                {
                    name : {
                        type : String,
                        maxlength : 20
                    },
                    color : {
                        type : String,
                        validator: [colorValidator, "VALIDATOR - ERROR - project.model : projects.tasks.label.color is invalid (#hexadecimal required)"]
                    }
                }
            ],
            assigned : [
                {
                    user_id : {
                        type : String
                    },
                    spend : {
                        type : Number,
                        default : 0
                    }
                }
            ],
            checklist : [
                {
                    name : {
                        type : String,
                        maxlength : 20
                    },
                    done : {
                        type : Boolean,
                        default : false
                    }
                }
            ],
            deadline : {
                type : Date
            },
            progression : {
                type : Number,
                default : 0
            },
            estimated : {
                type : Number,
                default : 1
            },
            priority : {
                type : String,
                enum : ["high","middle","low","none"],
                default : "none"
            },
            attachments : [
                {
                    name : {
                        type : String,
                        maxlength : 20
                    },
                    description : {
                        type : String,
                        maxlength : 200
                    },
                    path : {
                        type : String
                    },
                    author_id : {
                        type : String
                    },
                    date : {
                        type : Date,
                        default: Date.now,
                        immutable: true
                    }
                }
            ],
            comments : [
                {
                    author_id : {
                        type : String
                    },
                    comment : {
                        type : String,
                        maxlength : 250
                    },
                    date : {
                        type : Date,
                        default: Date.now,
                        immutable: true
                    }
                }
            ],
            status : {
                type : String,
                maxlength : 12,
                default: "todo"
            },

        }
    ]
})


export const Project = mongoose.model('project',projectsSchema)