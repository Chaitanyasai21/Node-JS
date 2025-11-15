// script.js

// Helper to create a table row
function createRow(cells, extraClass = '') {
  const row = document.createElement('div');
  row.className = 'row ' + extraClass;
  cells.forEach(text => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.textContent = text;
    row.appendChild(cell);
  });
  return row;
}

const listEl = document.getElementById('employee-list');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');
const loader = document.getElementById('loader');
const detailsEl = document.getElementById('employee-details');

// ------------- Landing page: get list using Promise.then/catch -------------
function loadEmployees() {
  // Using fetch (which returns a Promise). We handle it via then & catch per requirement.
  fetch('/api/employees')
    .then(response => {
      if (!response.ok) throw new Error('Failed to load employees');
      return response.json();
    })
    .then(data => {
      renderEmployeeList(data);
    })
    .catch(err => {
      listEl.innerHTML = '<p style="padding:12px;color:red">Error loading employees: ' + err.message + '</p>';
    });
}

function renderEmployeeList(employees) {
  listEl.innerHTML = '';
  // header row
  listEl.appendChild(createRow(['Name', 'Age', 'Mobile', 'City'], 'header'));
  employees.forEach(emp => {
    const row = createRow([emp.name, String(emp.age), emp.mobile, emp.city]);
    row.addEventListener('click', () => openEmployeePopup(emp.id));
    listEl.appendChild(row);
  });
}

// ------------- Popup: load full info using async/await and show loader -------------
async function openEmployeePopup(empId) {
  overlay.classList.remove('hidden');
  detailsEl.classList.add('hidden');
  loader.classList.remove('hidden');
  detailsEl.innerHTML = '';

  try {
    // use async/await to fetch employee info, salary and department.
    // We can run these in parallel:
    const empReq = fetch(`/api/employees/${empId}`);
    const salReq = fetch(`/api/salaries/${empId}`);
    const depReq = fetch(`/api/departments/${empId}`);

    // Await all responses
    const [empRes, salRes, depRes] = await Promise.all([empReq, salReq, depReq]);

    if (!empRes.ok) throw new Error('Employee not found');
    if (!salRes.ok) throw new Error('Salary not found');
    if (!depRes.ok) throw new Error('Department not found');

    // Parse JSON (also async)
    const [emp, sal, dep] = await Promise.all([empRes.json(), salRes.json(), depRes.json()]);

    // Render in vertical format name/age/city/mobile/department/salary
    detailsEl.innerHTML = `
      <div class="details">
        <div class="detail-row"><div class="detail-label">Name</div><div class="detail-value">${emp.name}</div></div>
        <div class="detail-row"><div class="detail-label">Age</div><div class="detail-value">${emp.age}</div></div>
        <div class="detail-row"><div class="detail-label">City</div><div class="detail-value">${emp.city}</div></div>
        <div class="detail-row"><div class="detail-label">Mobile</div><div class="detail-value">${emp.mobile}</div></div>
        <div class="detail-row"><div class="detail-label">Department</div><div class="detail-value">${dep.department}</div></div>
        <div class="detail-row"><div class="detail-label">Salary</div><div class="detail-value">${sal.salary}</div></div>
      </div>
    `;
    loader.classList.add('hidden');
    detailsEl.classList.remove('hidden');
  } catch (err) {
    loader.classList.add('hidden');
    detailsEl.classList.remove('hidden');
    detailsEl.innerHTML = `<p style="color:red;padding:10px">Error loading details: ${err.message}</p>`;
  }
}

closeBtn.addEventListener('click', () => {
  overlay.classList.add('hidden');
});

// Clicking outside modal closes it
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) overlay.classList.add('hidden');
});

// initial load
loadEmployees();
