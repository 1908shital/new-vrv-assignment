# Role-Based Access Control (RBAC) in Vite

This project implements role-based access control (RBAC) with three different roles: **Admin**, **User**, and **Guest**. Based on the role, users are redirected to different pages upon login:

- **Admin**: Has access to the `/home` page.
- **User**: Redirected to the `/user` page.
- **Guest**: Redirected to the `/guest` page.

The app is built using **Vite** for fast development and **React** for the front-end. The login mechanism allows users to select their roles, which determines their access and redirection.

## Features
- **Role-Based Access Control**: Users are assigned one of three roles (Admin, User, Guest) and are redirected to their specific dashboard.
- **Vite Setup**: Optimized build and fast development using Vite.
- **Routing**: Conditional routing based on the role selected during login.
- **React**: Utilizes React for UI components and handling logic.


## Installation

To get started with the project, follow these steps:

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v12 or later)
- **npm** or **yarn**

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/rbac-vite-project.git
   cd rbac-vite-project
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Development Server**
   ```bash
   npm run dev
   ```

4. Open your browser and go to `http://localhost:3000` to see the application running.

## Features Explained

### 1. **Login Page**

When a user visits the site, they are prompted with a login page where they can select one of the following roles:

- **Admin**: Redirected to `/home` after login.
- **User**: Redirected to `/user` after login.
- **Guest**: Redirected to `/guest` after login.

After login, users will be redirected to their specific dashboard based on their assigned role.

### 2. **Role-Based Routing**

The application uses React Router to handle route protection and redirection.

#### Routes:

- `/home`: Accessible only by **Admin**.
- `/user`: Accessible only by **User**.
- `/guest`: Accessible only by **Guest**.


## Example Flow

1. **Login**: User selects a role (Admin, User, or Guest).
2. **Redirect**: Based on the selected role, the user is redirected to:
   - `/home` for **Admin**
   - `/user` for **User**
   - `/guest` for **Guest**
3. **Access Control**: The routing system ensures that only the correct role can access their respective page. If an unauthorized user attempts to visit a restricted page, they are redirected to the login page.

