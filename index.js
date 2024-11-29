import express from 'express'
import routes from './routers/routes.js'
import connectDB from './db/connectDb.js'
import bodyParser from 'body-parser'
const app=express()
import path from 'path'
const port = process.env.PORT||8000

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

const DATABASEURL= process.env.DATABASEURL||  'mongodb://127.0.0.1:27017/portfolio'

connectDB(DATABASEURL)
//setup for static files

app.use(express.static(path.join(process.cwd(), 'public')))

//ejs

app.set('view engine','ejs')
app.set('views', './views')


// create server
app.use('/', routes)





app.listen(port,(()=>{
    console.log(`Server is running on Port ${port}`)
}))