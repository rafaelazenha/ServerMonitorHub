require('dotenv').config()
const systeminformation = require('systeminformation')
const cors = require('cors')
const express = require('express')
const { default: mongoose } = require('mongoose')

const app = express()
const PORT = process.env.PORT

const connectDB = async () => {
    try{
        mongoose.connect('mongodb://localhost:27017/servermonitorhubdb')
        console.log('MongoDB connected')
    }catch{
        console.log('Connection error ', err.message)
        process.exit
    }
}

connectDB()

app.get ('/',async (req, res) => {
    try {
        const sys = await systeminformation.system()
        const cpu = await systeminformation.cpu()
        const mem = await systeminformation.mem()
        const disk = await systeminformation.diskLayout()
        const data = {
            sys,
            cpu,
            mem,
            disk
        }

        res.json(data)
    } catch {
        res.status(500).json({ error: error.message });
    }
})

app.listen(PORT, () => {
    console.log('Sevidor listen on ', PORT)
})