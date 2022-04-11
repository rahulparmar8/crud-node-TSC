import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import App from './routes/route';
import bodyParser from "body-parser";

const app = express()
const port = 3005
const DATABASE_URL = "mongodb://localhost:27017/user_data";

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/product', App)

app.get('/', (req: Request, res: Response) => {
    res.send("hello")
})




// Database connection
mongoose.connect(`mongodb://localhost:27017/user_data`).then(() => {
    console.log("connected Database");
})

app.listen(port, () => {
    console.log(`Server is runing... ${port}`);

})