import express from "express"
import bodyParser from 'body-parser'


const app = express()
const port = 3003
const users = [];

app.use(bodyParser.json())

app.get("/", (req,res) => {
    res.send("<h1>Hello World!</h1>")
})

//Get registered users
app.get('/users', (req,res) => {
    return res.json({users})
})

//Register new users
app.post("/users", (req,res) => {
    const newUserId = req.body.userId;
    if (!newUserId) {
        return res.status(400).send('Missing userId');
    }

    if (users.includes(newUserId)) {
        return res.status(400).send('User already exist')
    }

    users.push(newUserId);
    return res.status(201).send('UserId now registered')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})