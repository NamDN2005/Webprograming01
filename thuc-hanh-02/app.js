const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());  // Để xử lý dữ liệu JSON trong body của request

// GET endpoint - Lấy danh sách người dùng
app.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' }
  ]);
});

// POST endpoint - Thêm người dùng mới
app.post('/users', (req, res) => {
  const newUser = req.body;
  // Giả sử bạn thêm người dùng vào cơ sở dữ liệu ở đây
  res.status(201).json({
    message: 'User added successfully',
    user: newUser
  });
});

// PUT endpoint - Cập nhật thông tin người dùng
app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;
  // Giả sử bạn cập nhật người dùng trong cơ sở dữ liệu ở đây
  res.json({
    message: `User with ID ${userId} updated successfully`,
    user: updatedUser
  });
});

// DELETE endpoint - Xóa người dùng
app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Giả sử bạn xóa người dùng khỏi cơ sở dữ liệu ở đây
  res.json({
    message: `User with ID ${userId} deleted successfully`
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
