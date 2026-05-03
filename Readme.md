# Team Task Manager - Full Stack Application

A complete full-stack task management application with role-based access control (Admin/Member). Users can create projects, assign tasks, track progress, and manage team members with a beautiful 3D animated interface.

## Live Demo

**Live URL:** "https://team-task-manager-2ely.vercel.app/login"

**GitHub Repository:** "https://github.com/sumit9576/Team-task-manager"

## Features

### Authentication
- User Signup/Login with JWT authentication
- Password hashing using bcryptjs
- Protected routes and API endpoints
- Session management with localStorage

### Project Management
- Create projects with name, description, and due date
- View all accessible projects
- Delete projects (Admin or Project Owner)
- Project status tracking (Active, Completed, On Hold)
- Auto-select projects for task creation

### Task Management
- Create tasks with title, description, priority, and due date
- Assign tasks to team members (Admin only)
- Update task status (Pending, In Progress, Completed)
- Delete tasks (Admin, Task Creator, or Assigned User)
- Auto-mark tasks as "Overdue" when past due date
- Priority levels: Low, Medium, High, Urgent

### Dashboard
- Statistics: Total Projects, Total Tasks, Completed Tasks, Overdue Tasks
- Recent tasks list with status badges
- Real-time data updates
- Responsive design for all screen sizes

### UI/UX Features
- 3D animated login/signup pages with floating elements
- Gradient backgrounds with smooth animations
- Interactive hover effects on cards and buttons
- Toast notifications for success/error messages
- Mobile-responsive design

## Tech Stack

- Developed server-side applications using Node.js and Express.js
- Designed and managed databases with MongoDB and Mongoose (ODM)
- Implemented secure authentication using JWT (JSON Web Tokens)
- Ensured password security with bcryptjs encryption
- Performed robust input validation using express-validator

### Frontend

- uilt responsive user interfaces using React.js
- Implemented client-side routing with React Router DOM
- Integrated APIs and handled HTTP requests using Axios
- Enhanced user experience with real-time notifications via React Hot Toast
- Managed and formatted dates efficiently using date-fns
- Applied modern styling techniques using CSS-in-JS

