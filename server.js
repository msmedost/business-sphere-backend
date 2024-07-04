const express = require('express');
const dotenv = require('dotenv');

const cors = require('cors');

const connectDb = require('./utils/db');
const router = require('./router/auth-router')

const testimonialRoute = require("./router/testimonial-router")


const app = express();

// Middleware
app.use(cors());
app.use(express.json());
dotenv.config()


app.use("/api/forms", router)

app.use("/api/testi", testimonialRoute)



const PORT = process.env.PORT || 5000


connectDb().then( () => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})

