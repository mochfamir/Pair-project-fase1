const express = require('express')
const app = express()
const port = 3000
const Admin = require('./router/adminRouter')
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.use('/', Admin)


app.listen(port, () => {
    console.log("listen on port: " + port)
})