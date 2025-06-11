import express from 'express';

const app = express()
const PORT = 3000

app.use((req, res, next) => {
  console.log('start')

  res.on('finish', () => {
    console.log('end')
  })
  next() // Call the next middleware or route handler
})

app.get('/', (req, res) => {
    console.log('middle')
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})