const express = require('express')
const session = require('express-session')
const app = express()
const port = 3000
const Admin = require('./router/adminRouter')
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

app.use('/admin', Admin)


app.listen(port, () => {
    console.log("listen on port: " + port)
})