import mongoose from 'mongoose'
const db:string = 'mongodb+srv://serg:KKK098kkk890@cluster0.vz5rj.mongodb.net/<dbname>?retryWrites=true&w=majority'

mongoose.connect(db, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
})
    .then(db => console.log('DB connected'))
    .catch(err => console.log(err))