import express from 'express';

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    console.log('middle')
  res.send('Hello World!')
})

app.get('/error', () => {
  // Simulating an error
  throw new Error('This is a simulated error!')
})
app.use((err, req, res, next) => {
  console.error(err.stack) // Log the error stack trace
  res.status(500).send('Something went wrong!') // Send a generic error response
})
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})