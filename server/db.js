const mongoose = require("mongoose")
const connectDb = ()=>{
    mongoose.connect('mongodb+srv://katikejana:jana123@backend.pk0kpzg.mongodb.net/?retryWrites=true&w=majority',{
}).then( () => console.log('DB Connected....')
    ).catch(err => console.log(err))
}

module.exports = connectDb;