const express = require('express')
const app = express()
const port = 3000


app.use(express.urlencoded({ extended: false }))

app.listen(port, () => {
    console.log("listen on port: " + port)
})