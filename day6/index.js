import express from 'express'
const app = express()
const port = 3000

app.use(express.json())

let users = []
let idCounter = 1

app.post('/user', (req, res) => {
    const { name, email } = req.body
    if (!name || !email) 
        return res.status(400).json({ 
        error:'Name and email required'})

    const user = { id: idCounter++, name, email }
    users.push(user)
    res.status(201).json(user)
})

app.get('/users', (req, res) => res.json(users))

app.put('/users/:id', (req, res) => { // Update user by ID using PUT (example : )
    const user = users.find(
        u => u.id === parseInt(req.params.id)
    )
    if (!user)
         return res.status(404).json({
         error: 'User not found' 
        })
    res.json(user)
})

app.delete('/users/:id', (req, res) => {
    const index = users.findIndex(
        u => u.id === parseInt(req.params.id))
    if (index === -1) 
        return res.status(404).json({ 
    error: 'User not found' 
})

    users.splice(index, 1)
    res.json({ 
        message: 'User deleted'
     })
})

app.listen(port, () => 
    console.log(`Server running on http://localhost:${port}`)
)