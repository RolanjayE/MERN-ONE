const express = require("express");
const router = express.Router(); // router instance

const Workout = require('../model/workoutModel')

//Get all data
router.get('/', (req, res) => {
    res.json({
        message: "all data"
    });
});

//get one data
router.get('/:id', (req, res) => {
    res.json({
        message: "1 data"
    });
});

// send data
router.post('/', async (req, res) => {
    const { title, load, reps } = req.body;

    try {
        const createWork = await Workout.create({ title, load, reps });
        res.status(200).json(createWork);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// delete data
router.delete('/:id', (req, res) => {
    res.json({
        message: "delete data"
    });
});

//update data
router.patch('/:id', (req, res) => {
    res.json({
        message: "update data"
    });
});

module.exports = router


