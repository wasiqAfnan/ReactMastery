# React Router Demo Project

This project demonstrates the **core concepts of React Router** in a simple and structured way. It covers basic routing, nested routes, navigation methods (`Link`, `NavLink`, `useNavigate`), and error handling.  

The goal is to provide a **clear reference** for learners who want to understand React Router step by step.

---

## 📂 Folder Structure

Here’s the folder structure used in this project (reference image is included in the repo):

```
src
│
├── components
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Layout.jsx
│   └── ServiceLayout.jsx
│
└── pages
    ├── About.jsx
    ├── AppDev.jsx
    ├── Home.jsx
    ├── NotFound.jsx
    ├── Services.jsx
    └── WebDev.jsx
```

### Explanation
- **components/** → Shared UI components like `Header`, `Footer`, and layout wrappers.  
- **pages/** → Individual route pages such as Home, About, Services, and nested pages (`WebDev`, `AppDev`).  
- **Layout.jsx** → Wraps every page with a common header and footer.  
- **ServiceLayout.jsx** → Special layout for nested routes under Services.  

---

## 📦 Packages Used

To implement routing, we use:  
- **react-router-dom** → Provides components and hooks for routing in React apps.  

Install it with:  
```bash
npm install react-router-dom
```

---

## 🚦 React Router Concepts Covered

### 1. **BrowserRouter**
- Wraps the entire app to enable routing functionality.  
- Example:  
```jsx
import { BrowserRouter } from "react-router-dom";

<BrowserRouter>
  <App />
</BrowserRouter>
```

---

### 2. **Routes and Route**
- `Routes` is a container for all route definitions.  
- `Route` defines the path and the component to render.  

Example of **basic routing**:
```jsx
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
  </Route>
</Routes>
```

---

### 3. **Link**
- Used instead of `<a>` tag.  
- Navigates between pages **without reloading the app**.  

```jsx
<Link to="/about">About</Link>
```

---

### 4. **NavLink**
- Same as `Link`, but with **active styling** for the current route.  

```jsx
<NavLink to="/about" className={({ isActive }) => isActive ? "text-indigo-400" : ""}>
  About
</NavLink>
```

---

### 5. **useNavigate Hook**
- A hook to navigate **programmatically**.  
- Example: navigating after a button click:  

```jsx
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/services/web")}>
      Go to Web Development
    </button>
  );
};
```

---

### 6. **Nested Routes**
- Allows rendering child routes inside a parent route.  
- Useful for sections like Services → Web / App.  

Example:
```jsx
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="services" element={<ServiceLayout />}>
      <Route path="web" element={<WebDev />} />
      <Route path="app" element={<AppDev />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Route>
</Routes>
```

Here, `/services/web` and `/services/app` render inside the `ServiceLayout`.

---

### 7. **Handling Error Routes**
- Using `path="*"` we handle any **undefined routes**.  
- This prevents the app from showing a blank page.  

```jsx
<Route path="*" element={<NotFound />} />
```

---

## 🧭 Why Use Link, NavLink, and useNavigate?

- **Link** → Best for normal navigation (no reload).  
- **NavLink** → Same as Link, but also highlights the **active link** → great for menus.  
- **useNavigate** → Used when navigation is triggered by **events** (e.g., button click, form submission, or after an API call).  

---

## 📑 Summary of Steps

1. Setup project and install `react-router-dom`.  
2. Create folder structure (components + pages).  
3. Wrap app with `<BrowserRouter>`.  
4. Define routes with `<Routes>` and `<Route>`.  
5. Use `<Link>` and `<NavLink>` for navigation.  
6. Use `useNavigate` for programmatic navigation.  
7. Add nested routes (Services → Web, App).  
8. Handle unknown routes with a 404 `NotFound` page.  

---

## 🎯 Learning Outcome

By studying this repo, you’ll learn:
- Basic routing in React.  
- Differences between Link, NavLink, and useNavigate.  
- How to organize layouts and pages.  
- Implementing nested routes.  
- Handling 404 error pages.  

This makes the repo a **one-stop reference** for React Router basics, ideal for revision or teaching.  
