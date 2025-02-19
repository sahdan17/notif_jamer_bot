require('dotenv').config()
const express = require('express')
const sequelize = require('./config/database')
const notifRoute = require('./routes/NotifRoute')
const cors = require('cors')
const { getHistory } = require('./controllers/NotifController')

const app = express()

app.use(cors())

app.use(express.json())

app.use('/api', notifRoute)

// setInterval(getHistory, 2000)

sequelize.sync({ force: false })
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Database error:', err))

app.listen(7718, () => console.log('Server running on port 7718 anjay mabar'))