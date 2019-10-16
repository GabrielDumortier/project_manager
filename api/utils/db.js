import mongoose from 'mongoose';

//modifier l'url de la db le moment venu
const dbUrl = 'mongodb://@localhost:27017/technocite';

export const connect = (url=dbUrl,opts = {})=>{
    return mongoose.connect(
        url,
        {...opts,useNewUrlParser:true}
    )
}