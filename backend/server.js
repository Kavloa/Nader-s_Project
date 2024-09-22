// const express = require('express');
// const cors = require('cors');
// const app = express();
// const PORT = 5000;

// app.use(cors()); // Enable CORS for cross-origin requests

// // Sample product data (you can replace this with a database in a real-world scenario)
// const products = [
//   { id: 1, name: 'Product 1', description: 'This is product 1', price: 99.99 },
//   { id: 2, name: 'Product 2', description: 'This is product 2', price: 149.99 },
//   { id: 3, name: 'Product 3', description: 'This is product 3', price: 199.99 },
// ];

// // API endpoint to get a single product by ID
// app.get('/api/product/:id', (req, res) => {
//   const productId = parseInt(req.params.id);
//   const product = products.find(p => p.id === productId);

//   if (product) {
//     res.json(product);
//   } else {
//     res.status(404).json({ error: 'Product not found' });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });



const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Create MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Replace with your MySQL password
    database: 'nader',
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database');
});

// Get all blogs with their comments
app.get('/blogs', (req, res) => {
    const sql = `
        SELECT b.*, 
        JSON_ARRAYAGG(JSON_OBJECT('author', c.author, 'text', c.text, 'date', c.date, 'time', c.time, 'authorImg', c.authorImg)) AS comments 
        FROM blogs b 
        LEFT JOIN comments c ON b.id = c.blog_id 
        GROUP BY b.id`;

    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(results);
        }
    });
});

// Add a new blog
app.post('/blogs', (req, res) => {
    const { title, text, date, category, imageUrl, author, authorImg, subtitle, comments } = req.body;
    const sql = `INSERT INTO blogs (title, text, date, category, imageUrl, author, authorImg, subtitle) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(sql, [title, text, date, category, imageUrl, author, authorImg, subtitle], (err, result) => {
        if (err) throw err;
        const blogId = result.insertId;

        if (comments && comments.length > 0) {
            const commentSql = `INSERT INTO comments (blog_id, author, text, date, time, authorImg) VALUES ?`;
            const commentValues = comments.map(comment => [
                blogId, comment.author, comment.text, comment.date, comment.time, comment.authorImg
            ]);

            db.query(commentSql, [commentValues], (err, result) => {
                if (err) throw err;
                res.send('Blog and comments added');
            });
        } else {
            res.send('Blog added');
        }
    });
});

app.post('/comments', (req, res) => {
  const { blog_id, author, text, date, time, authorImg } = req.body;

  // Check if required fields are present
  if (!blog_id || !author || !text || !date || !time) {
      return res.status(400).json({ error: 'Please provide all required fields: blog_id, author, text, date, and time.' });
  }

  const sql = `INSERT INTO comments (blog_id, author, text, date, time, authorImg) VALUES (?, ?, ?, ?, ?, ?)`;

  db.query(sql, [blog_id, author, text, date, time, authorImg], (err, result) => {
      if (err) {
          console.error('Error inserting comment:', err);
          return res.status(500).json({ error: 'Failed to insert comment.' });
      }
      res.status(200).json({ message: 'Comment added successfully', commentId: result.insertId });
  });
});



// Start the server
app.listen(5000, () => {
    console.log('Server running on port 5000');
});
