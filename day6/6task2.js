import express from 'express'
const app = express()
const port = 3000

app.use(express.json()) 
app.post('/data',(req,res) =>{
    const {name} =req.body;
    if ((!name || typeof name !== 'string' || name.length === 0)) {
        return res.status(400).json({
             error: "Invalid or missing name"
             })
    }
    res.status(200).json({
         message: "Ok"
         })
        });
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
