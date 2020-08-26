const express = require("express");
//const authMiddleware = require("../middlewares/auth");

const Vehicle = require("../models/vehicle");

const router = express.Router();

//router.use(authMiddleware);

//List..
router.get("/", async (req, res) => {
    try{
        const vehicles = await Vehicle.find();

        return res.send({vehicles});
    } catch (err) {
        return res.status(400).send({error:" Error loading vehicles."})
    }
});

router.get("/:vehicleId", async (req, res)=>{
    try{
        const vehicle = await Vehicle.findById(req.params.vehicleId);

        return res.send({vehicle});
    } catch (err) {
        return res.status(400).send({error:" Error loading vehicle."})
    }
});

router.post("/", async (req, res) => {
    try{
        const {
            modelVehicle,
            licensePlate,
            manufacturer,
            purchasePrice,
            saleValue,
            purchaseDate,
            saleDate,   
            situation
        } = req.body;
        const vehicle = await Vehicle.create({ 
            modelVehicle, 
            licensePlate,
            manufacturer,
            purchasePrice,
            saleValue,
            purchaseDate,
            saleDate,   
            situation,
        });

        return res.send({vehicle});
    } catch (err) {
        console.log(err)
        return res.status(400).send({error: "error register new vehicle"})
    }   
});

router.put("/:vehicleId", async (req, res)=>{
    try{
        const {
            modelVehicle,
            purchaseDate,
            saleDate,   
            situation
        } = req.body;
        const vehicle = await Vehicle.findByIdAndUpdate(req.params.vehicleId, { 
            modelVehicle, 
            purchaseDate,
            saleDate,   
            situation,
        }, {new: true});

        return res.send({vehicle});
    } catch (err) {
        console.log(err)
        return res.status(400).send({error: "error update new vehicle"})
    }   
});

router.delete("/:vehicleId", async (req, res)=>{
    try{
        await Vehicle.findByIdAndRemove(req.params.vehicleId);

        return res.send();
    } catch (err) {
        return res.status(400).send({error: "Error deleting vehicle"});
    }
});

module.exports = app => app.use("/vehicles", router);