const systeminformation = require('systeminformation')
const cors = require('cors')
const express = require('express')

const app = express()
const PORT = 3001


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