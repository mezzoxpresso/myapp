
//import packages
const express = require('express')
const morgan = require('morgan')

//configure out port
//check if it is set in the environment variable, if not then we default to 3000
const port = process.env.PORT || 3000

//create an instance of express application
const app = express()

//log all request
app.use(morgan('common'))

//GET /
app.get ('/', (req,resp)=>{
//what is the media type.. return HTML content
resp.type('text/html')
//set the status code
resp.status(200)
//send the response
resp.send(`<h1> The NEW CURRENT time is ${new Date()}<h1>`)

})

//start our web application.. after the server has started successfully, run this application
app.listen(port,() => {
    console.info(`starting application on port ${port} at ${new Date()}`)
})

console.info(`port=${port}`)


