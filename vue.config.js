const express = require('express')
const app  = express()
var index = require('./static/index.json')
var city = require('./static/city.json')
var apiRoutes = express.Router()
app.use('/api',apiRoutes)
module.exports = {
    devServer: {
        open: true,
        before (app){
            app.get('/api/index',(req,res) =>{
                res.json({
                    errno:0,
                    data:index
                })
            })
            app.get('/api/cities',(req,res) =>{
                res.json({
                    errno:0,
                    data:city
                })
            })
        }
    }
}