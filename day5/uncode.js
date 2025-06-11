import express from 'express';
import multer from 'multer';
const storage = multer.diskStorage({
  destination: 'uplaods',
  filename: (req, file, cb) =>{
    cb(null, file.fieldname + '_' + Date.now() + file.originalname);
  }
});
   
  
const app = express();
const upload = multer({storage})
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
app.use(upload.single('image')); // Middleware to parse multipart/form-data

app.post('/form', (req, res) => {
    console.log(req.body);
    console.log(req.file);
    
    // If you are uploading a file
    res.send('Form data received');
}
);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}      
);