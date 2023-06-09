require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const authRouter =  require('./routes/auth')

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@top2hand.hdiyezm.mongodb.net/top2hand?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

connectDB()

const app = express()
app.use(express.json())
app.use('/api/auth', authRouter)

const PORT = 5000

app.listen(PORT, () => console.log('Server started on port 500'))