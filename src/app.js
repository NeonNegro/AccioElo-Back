import express from 'express';
import cors from 'cors';
import router from "./routes/index.js"
import dotenv from 'dotenv';


dotenv.config();

const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());
app.use(router);


app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`);
});