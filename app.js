const express = require('express')
const session = require('express-session')
const app = express()
const port = 3000
const admin = require('./router/adminRouter')
const user = require('./router/userRouter')
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))
app.get('/',(req,res)=>{
  res.render('user/login')
})
app.use('/admin', admin)
app.use('/user', user)


app.listen(port, () => {
    console.log("listen on port: " + port)
})
