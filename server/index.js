require('dotenv').config()
const  express = require('express'),
       bodyParser = require('body-parser'),
       massive = require('massive'),
       ctrl = require ('./controller')

const { CONNECTION_STRING, SERVER_PORT} = process.env

const app = express()

app.use(bodyParser.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)

    console.log('Got a hit on the DB, SIR!')
    app.listen(SERVER_PORT, () => {
        console.log(`Checkin you out on port ${SERVER_PORT}`)
    })
})

app.post('/auth/register', ctrl.register)