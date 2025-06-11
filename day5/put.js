import express from 'express';

const app = express()
const PORT = 3000
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json()); // Middleware to parse JSON bodies
app.post('/user', (req, res) => {
 const { name, email } = req.body;
 res.json({
   message: `User ${name} with email ${email} created successfully` 
    })
})    

app.put('/user/:id', (req, res) => {
 const { id } = req.params;
 const { name, email } = req.body;
 res.json({
   message: `User with ID ${id} updated to name ${name} and email ${email}`
 })
})
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})