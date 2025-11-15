// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ---------------------- Sample Data ----------------------
const employees = [
  { id: 1, name: 'Vishnu', age: 29, mobile: '912345678', city: 'Chennai' },
  { id: 2, name: 'Rajesh', age: 30, mobile: '9412345678', city: 'Bangalore' },
  { id: 3, name: 'Saravanan', age: 31, mobile: '6812345678', city: 'Hyderabad' },
  { id: 4, name: 'Ramesh', age: 32, mobile: '9781234561', city: 'Mumbai' },
  { id: 5, name: 'John', age: 33, mobile: '9456781234', city: 'Delhi' }
];

const salaries = [
  { id: 1, salary: 45000 },
  { id: 2, salary: 52000 },
  { id: 3, salary: 48000 },
  { id: 4, salary: 60000 },
  { id: 5, salary: 55000 }
];

const departments = [
  { id: 1, department: 'Engineering' },
  { id: 2, department: 'Customer Success' },
  { id: 3, department: 'Product' },
  { id: 4, department: 'Sales' },
  { id: 5, department: 'HR' }
];

// ---------------------- API ROUTES ----------------------

// Landing page employee list
app.get('/api/employees', (req, res) => {
  const list = employees.map(e => ({
    id: e.id,
    name: e.name,
    age: e.age,
    mobile: e.mobile,
    city: e.city
  }));
  res.json(list);
});

// Personal info
app.get('/api/employees/:id', (req, res) => {
  const id = Number(req.params.id);
  const emp = employees.find(e => e.id === id);

  if (!emp) return res.status(404).json({ error: 'Employee not found' });
  res.json(emp);
});

// Salary
app.get('/api/salaries/:id', (req, res) => {
  const id = Number(req.params.id);
  const sal = salaries.find(s => s.id === id);

  if (!sal) return res.status(404).json({ error: 'Salary not found' });
  res.json(sal);
});

// Department
app.get('/api/departments/:id', (req, res) => {
  const id = Number(req.params.id);
  const dep = departments.find(d => d.id === id);

  if (!dep) return res.status(404).json({ error: 'Department not found' });
  res.json(dep);
});

// ---------------------- FIXED FALLBACK ROUTE ----------------------
// This avoids the path-to-regexp "*" error
app.use((req, res) => {
  // Serve index.html for all non-API routes
  if (!req.path.startsWith('/api')) {
    return res.sendFile(path.join(__dirname, 'public', 'index.html'));
  }
  // Otherwise API route not found → normal 404
  res.status(404).json({ error: 'API route not found' });
});

// ---------------------- START SERVER ----------------------
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
