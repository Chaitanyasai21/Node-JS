**Employee Management App**

A simple Node.js + Express application that displays a list of employees on the landing page and shows full employee details (personal info, salary, and department) in a popup using Promises and async/await.

🚀 Features
Backend (Express API)

The backend exposes 3 REST API endpoints:

Endpoint	Description
GET /api/employees	Returns a list of all employees (name, age, mobile, city)
GET /api/employees/:id	Returns personal info of a specific employee
GET /api/salaries/:id	Returns salary of an employee
GET /api/departments/:id	Returns department of an employee
Frontend

Landing page shows employee list in table format

Clicking on an employee opens a popup modal

Popup loads “name, age, mobile, city, salary, department”

Shows loading spinner while data is being fetched

Uses:

Promise + then/catch (for employee list)

Promise + async/await (for popup full details)

📁 Project Structure
employee-app/
│
├── server.js
├── package.json
│
└── public/
    ├── index.html
    ├── styles.css
    ├── script.js

🛠️ Installation & Setup
1. Install dependencies

Make sure you are inside the project folder.

npm install

2. Start the server
node server.js

3. Open the app

Visit:

http://localhost:3000

🔌 API Usage Examples
Get all employees
GET /api/employees

Get personal info of employee (Example: ID = 3)
GET /api/employees/3

Get salary of employee
GET /api/salaries/3

Get department of employee
GET /api/departments/3

📝 Technologies Used

Node.js

Express.js

HTML, CSS, JavaScript

Fetch API

Promises & Async/Await

⚙️ How It Works (Flow)

Landing Page

Loads employees using:

fetch('/api/employees').then().catch()


Popup Window

Fetches:

/api/employees/:id

/api/salaries/:id

/api/departments/:id

Uses async/await + Promise.all()

Shows loader until all requests finish.
