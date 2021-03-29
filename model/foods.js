const mongoose = require('mongoose')
console.log("cbac")
const FoodSchema = mongoose.Schema({
   
    tea: {
        type: String,
        required: false
    },
    milkTea: {
        type: String,
        required: false
    },
    espresso: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }


})

module.exports = mongoose.model("Foods", FoodSchema)