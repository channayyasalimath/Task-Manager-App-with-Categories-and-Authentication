const express = require('express')
const dotenv=require('dotenv')
const tasks = require('./data/tasks')

const connectDB = require('./config/db')

const app = express()
dotenv.config()

connectDB();


app.get('/',  (req, res)=> {
  res.send('1st API')
})

app.get('/api/tasks', (req, res)=> {
    res.json(tasks)
  })

const PORT=process.env.PORT || 5000 ;

app.listen(PORT, console.log(`Server running on port ${PORT}`));