const mongoose = require('mongoose')
const Schema = mongoose.Schema

    const NewInteraction = new Schema({
        ibmToken: 
            {type:String, required:true},
        userName: 
            {type:String, required:true},
        initialComment: 
            {type:String, required:true},
        productID: 
            {type:String, required:true}
    })

    mongoose.model('user-interaction', NewInteraction)

    module.exports = NewInteraction;