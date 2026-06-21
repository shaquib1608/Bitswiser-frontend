import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import MessagesPage from "./admin/pages/MessagePage";

import Dashboard from "./admin/pages/Dashboard";
// import Projects from "./admin/pages/Projects";
import Services from "./admin/pages/Services";
import Inquiries from "./admin/pages/Inquiries";
import AdminLoginProtectedRoute from "./routes/AdminProtectedRoutes";
import ProjectsPage from "./admin/pages/ProjectsPage";

import ProjectDetails from "./pages/ProjectDetails";

import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>

      <Routes>


        <Route path="/" element={<Home />} />

        <Route path="/admin/login" element={<AdminLogin />} />

        <Route path="/admin/dashboard" element={
          <AdminLoginProtectedRoute>

            <Dashboard />
          </AdminLoginProtectedRoute>
        } />

        <Route path="/admin/projects" element={
          <AdminLoginProtectedRoute>
            <ProjectsPage />
          </AdminLoginProtectedRoute>
        } />

        <Route path="/admin/services" element={
          <AdminLoginProtectedRoute>
            <Services />
          </AdminLoginProtectedRoute>
        } />

        <Route path="/admin/inquiries" element={
          <AdminLoginProtectedRoute>
            <Inquiries />
          </AdminLoginProtectedRoute>
        } />

        <Route path="/admin/messages" element={
          <AdminLoginProtectedRoute>
            <MessagesPage />
          </AdminLoginProtectedRoute>
        } />

        <Route path="/project/:id" element={<ProjectDetails />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;










