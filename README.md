# CampusFix – Smart Campus Issue Reporting System

CampusFix is a web-based campus issue reporting prototype. It gives students a simple way to report problems around their college and track whether those problems are pending, being handled, or resolved.

## Problem Statement
Students may notice problems such as broken fans, damaged desks, water leakage, cleanliness issues, or Wi-Fi problems. It can be difficult to find the correct person to inform, and students may not know whether an issue has been addressed.

## Proposed Solution
CampusFix provides one place to submit campus issues with a title, category, location, description, and optional image selection. Submitted reports appear in a dashboard where their status can be updated and tracked.

## Main Features
- Submit a campus issue report.
- Choose a category such as Electrical, Cleanliness, Classroom, Network, Water / Plumbing, Safety, or Other.
- Add the exact location and a description.
- Select an optional image for the report.
- View report statistics on the dashboard.
- Search and filter submitted reports.
- Update report status: Pending, In Progress, or Resolved.
- Save report data in browser localStorage.

## Technologies Used
- HTML5 – application structure
- CSS3 – responsive user interface
- JavaScript – form handling, dashboard, filtering, and status updates
- Browser localStorage – local demo data storage

## How to Run
1. Download or clone this repository.
2. Open the project folder.
3. Open `index.html` in a modern browser.
4. Select **Report an issue** to submit a sample campus problem.
5. Open **My reports** to search, filter, and update its status.

No installation or server is required for this prototype.

## Project Structure
```text
CampusFix/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Demo Limitations
- This is an academic front-end prototype.
- Reports are saved only in the browser where they were submitted; they are not shared with other users or devices.
- The image is previewed when selected but is not stored with the report.
- Status updates are available in the demo interface. A real college deployment should use staff authentication, a shared database, image storage, and role-based permissions.

## Future Enhancements
- Add student and administrator login.
- Connect Supabase or Firebase for shared reports.
- Store issue images securely.
- Notify students when report status changes.
- Add department assignment and issue priority.
- Add charts for frequently reported campus issues.

## Team Members
Add the team members' names and registration numbers here.

## GitHub Repository
Add the GitHub repository URL here after uploading the project.
