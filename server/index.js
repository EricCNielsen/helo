require('dotenv').config()
const  express = require('express'),
       bodyParser = require('body-parser'),
       massive = require('massive'),
       ctrl = require ('./controller'),
       sessions = require ('express-session')

const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env

const app = express()

app.use(bodyParser.json())
app.use(sessions({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 100000
    }
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)

    console.log('Got a hit on the DB, SIR!')
    app.listen(SERVER_PORT, () => {
        console.log(`Checkin you out on port ${SERVER_PORT}`)
    })
})

app.post('/auth/register', ctrl.register)
app.post('/auth/login', ctrl.login)
app.post('/auth/logout', ctrl.logout)

app.get('/api/current', ctrl.getUser)