# CampusFix – Smart Campus Issue Management System

CampusFix is a role-based web application prototype for reporting, assigning, tracking, and resolving college maintenance issues.

## Roles
- **Student:** Reports issues with a title, category, location, and description; tracks report status.
- **Administrator:** Views all reports, assigns maintenance staff, and verifies completed repairs.
- **Maintenance staff:** Views assigned jobs, starts work, and marks repairs as completed.

## Workflow
1. Student submits a report → **Pending**.
2. Admin assigns a staff member → **Assigned**.
3. Staff starts repair → **In Progress**.
4. Staff marks work completed → **Work Completed**.
5. Admin verifies repair → **Resolved**.

## Technologies
HTML5, CSS3, JavaScript, and browser localStorage.

## Run
1. Download or clone this repository.
2. Open `index.html` in a modern browser.
3. Use the top-right **View as** selector to switch between Student, Admin, and Maintenance Staff.
4. Submit a report as Student, assign it as Admin, update it as Maintenance Staff, then verify it as Admin.

## Project files
- `index.html` – application structure
- `style.css` – responsive design
- `script.js` – role workflow and browser storage

## Demo limitations
This is an academic front-end prototype. The role selector is a demo, not secure login. Data is saved only in the current browser and is not shared across devices. A real deployment needs authentication, role-based permissions, and a shared database such as Supabase or Firebase.

## Team
Add team member names and registration numbers.

## GitHub
Add the repository URL here.
