import express from 'express';

const app = express()
const PORT = 3000
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/things/:name/:id', (req, res) => {
  const { name, id } = req.params;
  res.json({
    message: `Thing with name ${name} and ID ${id} retrieved successfully`
  })
})

// app.get('*', (req, res) => {
//   res.send('Sorry this is an invalid URL')
// })          
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})