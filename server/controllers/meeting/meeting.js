const MeetingHistory = require('../../model/schema/meeting')
const mongoose = require('mongoose');

const add = async (req, res) => {
    try{
        const data = req.body;
        let result = await MeetingHistory.create(data);
        res.status(200).json(result);
   
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'An error occurred' });

    }
}

const index = async (req, res) => {
    try{
        let result = await MeetingHistory.find({});
        res.status(200).json(result);
   
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'An error occurred' });

    }
}

const view = async (req, res) => {
    try{
        let result = await MeetingHistory.findOne({ _id: req.params.id })
        if (!result) return res.status(404).json({ message: "no Data Found." })
        
        res.status(200).json(result);
   
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'An error occurred' });

    }
}

const deleteData = async (req, res) => {
  
}

const deleteMany = async (req, res) => {
    try{
        let result = await MeetingHistory.deleteMany({ _id: { $in: req.body } });
    
        res.status(200).json(result);
   
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'An error occurred' });

    }
    
}

module.exports = { add, index, view, deleteData, deleteMany }