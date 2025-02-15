import express from 'express';

const app = express();
app.use(express.json());

const PORT = 3000;
let users = [{ id: 1, name: 'John Doe' }];

// 📌 API: Lấy danh sách người dùng
app.get('/users', (req, res) => {
  res.json(users);
});

// 📌 API: Thêm người dùng mới
app.post('/users', (req, res) => {
  const newUser = { id: users.length + 1, name: req.body.name };
  users.push(newUser);
  res.status(201).json(newUser);
});

// 📌 API: Xóa người dùng
app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter(user => user.id !== id);
  res.status(204).send();
});

// Chạy server
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
}

export default app; // Xuất app để test
