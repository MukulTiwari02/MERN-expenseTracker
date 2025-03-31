const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
const Transaction = require('./models/Transaction');
require('dotenv').config();

const app = express()

app.use(express.json())

app.use(cors())

app.get('/api/test', async (req,res) => {
    res.json('test ok')
})


app.post('/api/transaction', async (req, res) => {
    await mongoose.connect(process.env.MONGODB_URL);
    const {name, price, description, dateTime} = req.body;
    const transaction = await Transaction.create({name, price, description, dateTime})
    res.json(transaction);
})


app.get('/api/transactions', async (req, res) => {
    await mongoose.connect(process.env.MONGODB_URL);
    const response = await  Transaction.find({});
    res.json(response);
})


app.put('/api/deleteTransaction', async (req, res) => {
    const {id} = req.body;
    await mongoose.connect(process.env.MONGODB_URL);
    const transaction = await Transaction.deleteOne({_id:id});
    res.json(transaction);
})

const port = process.env.PORT || '4000';

app.listen(port, () => {
    console.log('Listening on PORT :', port);
})