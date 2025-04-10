const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' }
  ];

const productRoutes = require('./routes/product');
app.use('/products', productRoutes);

app.get('/', (req, res) => {
    res.send('Products API is working!');
  });

app.get('/users' , (req,res)=>{
res.json(users);
})

app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
  
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  });

app.post('/users', (req, res)=>{ // make sure the req res in this format only otherwise it will give 500 error 
    const {name, email} = req.body;

    if(!name || !email){
        return res.status(400).json({error: 'name and email are required'});
    }
    const newUser = {
        id: users.length+1,
        name,
        email,
    }
    users.push(newUser);
    res.status(201).json(newUser);
})
app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id); // url parameter are in string by defalut 
    const { name, email } = req.body;
  
    const userIndex = users.findIndex(u => u.id === userId);
  
    if (userIndex === -1) {
      return res.status(404).json({ error: 'User not found' });
    }
  
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }
  
    // Replace the entire user object (keep the same ID)
    users[userIndex] = {
      id: userId,
      name,
      email
    };
  
    res.status(200).json(users[userIndex]);
  });

  app.patch('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
  
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
  
    const { name, email } = req.body;
  
    // Update only provided fields
    if (name !== undefined) user.name = name;
    if (email !== undefined) user.email = email;
  
    res.status(200).json(user);
  });
  
  app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);
  
    if (userIndex === -1) {
      return res.status(404).json({ error: 'User not found' });
    }
  
    users.splice(userIndex, 1); // remove the user
    res.status(200).json({ message: `User with id ${userId} has been deleted successfully.` });
  }); // no body in postman 
  

app.listen(PORT, () =>{
    console.log(`server is running on http://localhost:${PORT}`)
});

