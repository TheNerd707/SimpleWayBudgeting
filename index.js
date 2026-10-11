import dotenv from "dotenv"
dotenv.config()

import express from "express"

import path from 'path';
import { fileURLToPath } from 'url';

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//This is bs, I hate modules ik why they are better but this is shit
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicPath = path.join(__dirname, 'public')
app.use(express.static(publicPath))
app.use('/public', express.static(publicPath))

app.get('/', (req, res) => {
    res.render('home')
})



const port = Number(process.env.PORT)
app.listen(port, "0.0.0.0", () => {
    console.log(`Server is listening on port ${port}`)
})
