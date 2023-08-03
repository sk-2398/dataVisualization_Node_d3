const express = require('express');
const Info=require('../models/Info')

const router = express.Router()

router.get('/data',async (req, res) => {
    console.log(req.query.filterBy,':', req.query.query)
    const filter=req.query.filterBy
    const que=req.query.query
    d={[filter]:que}
    console.log(d)
    data= await Info.find(d)
    // console.log(data)
    res.json(data)
})

router.get('/alldata',async (req, res) => {
    data= await Info.find({})
    // console.log(data)
    res.json(data)
})

module.exports = router