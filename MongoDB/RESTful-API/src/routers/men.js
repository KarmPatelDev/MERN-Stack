const express = require("express");
const router = new express.Router();
const MenRanking = require("../models/men");

// handle post request
router.post("/men", async (req, res) => {
    try{
        const addManRecord = new MenRanking(req.body);
        console.log(req.body);
        const result = await addManRecord.save();
        res.status(201).send(req.body);
    }catch(error){
        res.status(400).send(error);
    }
});

//handle get request
router.get("/men", async (req, res) => {
    try{
        const getMenRecord = await MenRanking.find({});
        // const getMenRecord = await MenRanking.find({}).sort({"ranking": 1});
        res.status(201).send(getMenRecord);
    }catch(error){
        res.status(400).send(error);
    }
});

//handle get request with specific data
router.get("/men/:id", async (req, res) => {
    try{
        const _id = req.params.id;
        const getManRecord = await MenRanking.findById(_id);
        res.status(201).send(getManRecord);
    }catch(error){
        res.status(400).send(error);
    }
});

//handle patch request
router.patch("/men/:id", async (req, res) => {
    try{
        const _id = req.params.id;
        const updateManRecord = await MenRanking.findByIdAndUpdate(_id, req.body, {
            new:true
        });
        res.status(201).send(updateManRecord);
    }catch(error){
        res.status(500).send(error);
    }
});

//handle delete method
router.delete("/men/:id", async (req, res) => {
    try{
        const _id = req.params.id;
        const deleteManRecord = await MenRanking.findByIdAndDelete(_id);
        res.status(201).send(deleteManRecord);
    }catch(error){
        res.status(500).send(error);
    }
});

module.exports = router;