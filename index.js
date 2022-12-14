const express = require('express')
const router = require('./router/index')
const app = express()
const port = process.env.POST || 9000
require('dotenv').config()

const db = require('./models/db')
db.connect()

//connect DB (mongoose)

// nhan noi dung tu post
app.use(express.json());
app.use(express.urlencoded());

//res home
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//router
router(app)

app.listen(port, () => {
    console.log(`Example app listening on ${port}`)
})