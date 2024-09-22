const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db'); // Import the database connection

const app = express();
const port = 3000;
const secretKey = 'your_jwt_secret_key'; // Replace with your own secret key

app.use(cors());
app.use(bodyParser.json());

// Sign up (create a new user)
app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  
  // Check if the user already exists
  const checkUser = 'SELECT * FROM users WHERE email = ?';
  db.query(checkUser, [email], async (err, results) => {
    if (results.length > 0) {
      return res.status(400).send('User already exists');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user
    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.query(query, [name, email, hashedPassword], (err, result) => {
      if (err) throw err;
      res.send('User registered successfully!');
    });
  });
});

// Sign in (authenticate user)
app.post('/signin', (req, res) => {
  const { email, password } = req.body;

  // Check if the user exists
  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], async (err, results) => {
    if (results.length === 0) {
      return res.status(400).send('User does not exist');
    }

    const user = results[0];

    // Compare password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).send('Invalid password');
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id, email: user.email }, secretKey, {
      expiresIn: '1h',
    });

    res.json({ message: 'Sign in successful', token });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
