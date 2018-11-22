const express = require('express')
const app = express()
const port = 3000
const Admin = require('./router/adminRouter')
const User  = require('./router/userRouter')
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/',(req,res)=>{
  res.render('user/login.ejs')
})
app.use('/user', User)

app.listen(port, () => {
    console.log("listen on port: " + port)
})
