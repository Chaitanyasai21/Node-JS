Folder Structure
Chaitanya-NodeJS-Assignment2/
│
├── exercise1.js
├── exercise2.js
├── exercise3.js
├── exercise4.js
├── package.json
├── README.md
│
├── lib/
│ ├── index.html
│ ├── users.txt
│ ├── home.html
│ ├── contact.html
│ └── about.html
│
└── public/
├── style.css
└── script.js


---

## ⚙️ Prerequisites

Before running the exercises, make sure you have:

- **Node.js** installed on your system  
  👉 [Download Node.js](https://nodejs.org/en/download)
- A **terminal / command prompt**
- Any web browser (Chrome, Edge, Firefox, etc.)

You can check Node.js installation using:
```bash
node -v

🚀 How to Run the Assignment (Step-by-Step)
🧩 Exercise 1 – Simple Web Server (index.html)

Goal: Serve index.html when the user visits http://localhost:8080

Steps:

Open the terminal inside the project folder.

Run the following command:

node exercise1.js


You should see a message:

Server running at http://localhost:8080


Open your browser and visit:
👉 http://localhost:8080

Expected Output:

The index.html page is displayed with the message “Welcome to NodeJS Assignment 2”.

🧩 Exercise 2 – Display users.txt as HTML Table

Goal: Read users.txt and display it as a formatted HTML table.

Steps:

Run the following command (admin rights may be required for port 80):

sudo node exercise2.js     # (Linux/Mac)


or (on Windows)

node exercise2.js


The terminal should show:

Server running at http://localhost


Open your browser and visit:
👉 http://localhost

Expected Output:

A table showing all users with columns Name, Age, Gender, City.

🧩 Exercise 3 – Routing (Multiple Pages)

Goal: Create routes for home, about, and contact pages.

Steps:

Run the server:

node exercise3.js


You should see:

Server running at http://localhost:8081


Test each route by visiting in your browser:

http://localhost:8081/home

http://localhost:8081/about

http://localhost:8081/contact

Expected Output:

Each route loads the respective HTML page from the lib/ folder.

🧩 Exercise 4 – Placeholder

Goal: This file is just a placeholder for future exercises.
You can open and modify it if needed.

Run it with:

node exercise4.js


Expected output in terminal:

Exercise 4 placeholder file

🧱 lib Folder Details
File Name	Purpose
index.html	Main page served by exercise1
users.txt	Source data for exercise2
home.html	Route for /home
about.html	Route for /about
contact.html	Route for /contact
🌐 public Folder
File	Purpose
style.css	Optional styling for pages
script.js	Optional client-side script