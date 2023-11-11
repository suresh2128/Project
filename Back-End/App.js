import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors"
import cloth from "./Models/cloth";
import log from "./Models/log";
const app = express();
app.use(bodyParser.json())
app.use(cors())
mongoose.connect("mongodb+srv://Suresh:AVVoGofmz8VBfCM4@cluster0.ht30jnd.mongodb.net/Driveready?retryWrites=true&w=majority")
    .then(() => app.listen(5000))
    .then(() =>
    console.log("Connected to Database & Listining to localhost 5000"))
    .catch((err) => console.log(err));

    const cartItemSchema = new mongoose.Schema({
        brand: String,
        name:String,
        price: Number,
      });
    
      const CartItem = mongoose.model('CartItem', cartItemSchema);
      
      //Add to Cart Code
      app.post('/addcart', (req, res) => {
        console.log(req.body);
        const { brand, price, name } = req.body;
        const stud = new CartItem({
          brand, price, name
        });
        try {
          stud.save()
        } catch (err) {
          console.log(err);
        }
        return res.send({ msg: "inserted", result: stud });
      });
      //get the items from the cart page
      app.get('/getcart',async(req,res,next)=>{
        let coursedata;
        try{
            coursedata=await CartItem.find();
        }catch(err){
            console.log(err);
        }
      
        if(!coursedata){
            return res.status(404).json({message:"No courses found"})
        }
        return res.status(200).json({coursedata})
      })
      //to get the get from the database by using get method 'kids wear data'
      app.get('/getspares',async(req,res,next)=>{
        let coursedata;
        try{
            coursedata=await cloth.find();
        }catch(err){
            console.log(err);
        }

        if(!coursedata){
            return res.status(404).json({message:"No courses found"})
        }
        return res.status(200).json({coursedata})
      })

      app.post('/addspares', (req, res) => {
        console.log(req.body.formdata); // Change this line
        const { title, price, category, image } = req.body.formdata;
        const stud = new cloth({
          title, price, category, image
        });
        try {
          stud.save()
        } catch (err) {
          console.log(err);
        }
        return res.send({ msg: "inserted", result: stud });
      });




      //female form
      app.post('/getdata', (req, res) => {
        console.log(req.body.formdata); // Change this line
        const { title, price, category, image } = req.body.formdata;
        const stud = new cloth({
          title, price, category, image
        });
        try {
          stud.save()
        } catch (err) {
          console.log(err);
        }
        return res.send({ msg: "inserted", result: stud });
      });



      //delete option method
      app.delete('/deleteitem/:id', (req, res) => {
        const cartId = req.params.id;
      
        CartItem.findByIdAndRemove(cartId)
          .then(() => {
            res.send({ message: 'Cart Item Deleted Successfully' });
          })
          .catch((err) => {
            console.error(err);
            res.status(500).json({ error: 'Error while deleting cart item' });
          });
      });
    
      //Fir clearing the Cart Page
      app.delete('/clearcart', async (req, res) => {
        try {
          await CartItem.deleteMany({});
          res.status(200).json({ message: 'Cart cleared successfully' });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      });
     // Backend
app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the username already exists
    const existingUser = await log.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Create a new user
    const newUser = new log({ username, password });
    await newUser.save();

    return res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    return res.status(500).json({ message: 'Registration failed', error: error.message });
  }
});
// Backend
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the user exists
    const user = await log.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    // Check if the password is correct
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid password' });
    }
    // You can generate a token and send it to the client for future authenticated requests
    // For simplicity, let's send a success message in this example.
    return res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    return res.status(500).json({ message: 'Login failed', error: error.message });
  }
});