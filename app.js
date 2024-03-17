import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import address from './Routers/address';
import service from './Routers/service';
import login from './Routers/login';
import addtocart from './Routers/cart';
import dynamicform from './Routers/dynamicform';

import student from './Models/inform';

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://buddanavaraprasad:MVdDKXcTAc5IMdH4@cluster0.ci86jca.mongodb.net/Cluster0?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB', err);
});


app.listen(5000, () => {
    console.log("Connected to Database & Listening to localhost 3001");
});

app.post('/addstudent', async (req, res) => {
  console.log(req.body.formdata); // Logging the received formdata
  const {username, projecttitle, projectdescription, projectrequirement, deadline, manager, employees, status } = req.body.formdata;

  const currentDate = new Date().toISOString().split('T')[0];

  const stud = new student({ 
    username, projecttitle, projectdescription, projectrequirement, deadline, manager, employees, currentDate: currentDate, status
  });
  try{
      await stud.save(); // Make sure to await the save operation
      return res.status(201).send({ msg: "inserted", result: stud });
  } catch(err){
      console.log(err);
      return res.status(500).send({ error: "Internal server error" });
  }
});


app.delete('/deletestudent/:id', async (req, res) => {
  const studentId = req.params.id;
  student.findByIdAndRemove(studentId)
    .then(() => {
      res.send({ message: 'Student deleted successfully' });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Error while deleting student data' });
    });
});

app.get('/getstudents', async(req,res,next)=>{
  let studentdata;
  try{
      studentdata=await student.find();
  }catch(err){
      console.log(err);
  }

  if(!studentdata){
      return res.status(404).json({message:"No students found"})
  }
  return res.status(200).json({studentdata})
});

app.put('/updatestudent/:id', async (req, res, next) => {
  const _id = req.params.id;
  const { projecttitle, projectdescription, projectrequirement, deadline, manager, employees, status } = req.body;

  let stud;
  try {
    stud = await student.findByIdAndUpdate(_id, { projecttitle, projectdescription, projectrequirement, deadline, manager, employees, status });
  } catch (err) {
    console.log(err);
  }

  return res.send({ msg: "Updated", result: stud });
});

app.get('/getstudentbyid/:id', async (req, res, next) => {
  const _id = req.params.id;

  try {
    const studentdata = await student.findById(_id);
    console.log(studentdata);
    if (!studentdata) {
      console.log('No students found');
      return res.status(404).json({ message: 'No students found' });
    }
    return res.status(200).json({ studentdata });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Error while retrieving student data' });
  }
});

app.use('/', address);

app.use('/', dynamicform)

app.use('/', login)

app.use('/', addtocart)
  
app.use('/', service)

app.use('/', (req, res, next) => {
    res.send('Hi, Dude');
});