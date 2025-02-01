const express = require('express');
const { userRouter } = require('./routes/userroutes');
const { connetion } = require('./config/db');
const cors = require('cors');
const { authentication } = require('./middaleware/authMiddaleware');

const app = express();
app.use(express.json());
app.use(express.text());
app.use(cors())

app.get('/', (req, res)=> {
    res.send("This is the home page")
})

app.get("/protected", authentication, (req, res) => {
    res.json({ msg: "You have access!", user: req.user });
});
app.use('/', userRouter)


const PORT = process.env.PORT || 4500;



app.listen(PORT, async () => {
    try {
        await connetion;
        console.log(`server is running at port ${PORT}`);
        console.log(`Connected to Database`);

    } catch (error) {
        console.log(error);
    }
})
