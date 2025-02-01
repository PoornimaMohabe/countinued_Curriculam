const express = require('express');
const { userRouter } = require('./routes/userroutes');
const { connetion } = require('./config/db');
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(express.text());
app.use(cors())


app.use('/', userRouter)


const PORT = process.env.PORT || 1234;



app.listen(PORT, async () => {
    try {
        await connetion;
        console.log(`server is running at port ${PORT}`);
        console.log(`Connected to Database`);

    } catch (error) {
        console.log(error);
    }
})
