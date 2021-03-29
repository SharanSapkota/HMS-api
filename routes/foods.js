const express = require('express')
const FoodsModel = require('../model/foods')
const router = express.Router()


router.get('/', async(req, res) => {
    res.status(200).json("This is the foods route")
    console.log("this is the main route")
})

router.post('/',  async(req, res) => {
    
       const { 
       tea,
       milkTea,
        espresso
    } = req.body
console.log(req.body)
    const foodDestructure = {}
    if(milkTea) foodDestructure.milkTea = milkTea
    if(espresso) foodDestructure.espresso = espresso
    if(tea) foodDestructure.tea = tea
console.log(foodDestructure)
    const foodSaved = await new FoodsModel(foodDestructure)
    foodSaved.save()
    res.status(200).json({success: true, foodSaved})
    console.log(foodSaved)

})


module.exports = router