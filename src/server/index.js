const express = require('express');
const os = require('os');
const app = express();

app.use(express.json());
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin1235') {
    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});


let items = []; 


app.get('/api/items', (req, res) => {
  res.json(items);
});


app.post('/api/items', (req, res) => {
  const { value } = req.body;
  if (!value) return res.status(400).json({ message: 'Value is required' });
  const newItem = { id: Date.now(), value };
  items.push(newItem);
  res.json(newItem);
});


app.put('/api/items/:id', (req, res) => {
  const { id } = req.params;
  const { value } = req.body;
  const item = items.find(i => i.id == id);
  if (!item) return res.status(404).json({ message: 'Item not found' });
  item.value = value;
  res.json(item);
});

app.delete('/api/items/:id', (req, res) => {
  const { id } = req.params;
  const found = items.some(i => i.id == id);
  items = items.filter(i => i.id != id);
  if (!found) return res.status(404).json({ message: 'Item not found' });
  res.json({ message: 'Item deleted' });
});
if (require.main === module) {
  app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
}

module.exports = app;