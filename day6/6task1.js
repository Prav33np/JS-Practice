import express from 'express'
const app = express()
const port = 3000

app.use(express.json())

const dataStore = []

app.post('/submit',(req,res) =>{
    const {name,age}=req.body
    if (name&&age) {
        dataStore.push({
             name,age 
            })
        res.status(201).json({ 
            message:'Data stored successfully.' 
        });
    }else{
        res.status(400).json({
             error:'Name and age are required.'
             });
    }
})
app.get('/list',(req,res)=>{
    res.json(dataStore)
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});