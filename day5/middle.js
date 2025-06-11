import express from 'express';

const app = express()
const PORT = 3000

app.use('/welcome', (req, res, next) => {
  console.log('A new request received at ' + Date.now())
  next() // Call the next middleware or route handler
}
)
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/welcome', (req, res) => {
  res.send('Welcome to the server!')
})


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})