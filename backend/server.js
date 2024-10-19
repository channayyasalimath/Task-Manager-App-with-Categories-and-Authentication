const express = require('express')
const dotenv=require('dotenv')
const tasks = require('./data/tasks')

const connectDB = require('./config/db')

const userRoutes=require('./routes/userRoutes')
const { notFound, errorHandler } = require('./middlewares/errorMiddleware')

const app = express()
dotenv.config()

connectDB();
app.use(express.json())


app.get('/',  (req, res)=> {
  res.send('1st API')
})

app.get('/api/tasks', (req, res)=> {
    res.json(tasks)
  })

  app.use('/api/users',userRoutes);
  app.use(notFound);
  app.use(errorHandler);

const PORT=process.env.PORT || 5000 ;

app.listen(PORT, console.log(`Server running on port ${PORT}`));