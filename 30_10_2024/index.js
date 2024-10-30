const express = require('express')
const app = express()
const port = 3000
const todoRouter = require ( './src/routers/tool');
app.use( express.json());

app.get ('/', (req,res) => {
    res.send( 'Hello World!')
})
app.use('/todos', todoRouter);
app.listen(port,() => {
    console.log ( 'Example app listenning in port $ (port)')
})