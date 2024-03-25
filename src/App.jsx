// page implementation
import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Bookings from "./Pages/Bookings";
import Rooms from "./Pages/Rooms";
import Login from "./Pages/Login";
import Users from "./Pages/Users";
import Settings from "./Pages/Settings";
import PageNotFound from "./Pages/PageNotFound";
import Account from "./Pages/Account";
// import Sidebar from "./Components/Sidebar";
import MainLayout from "./Components/MainLayout";

// page setting function
function App() {
  return (
    <>
      <MainLayout />
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="login" element={<Login />} />
          <Route path="settings" element={<Settings />} />
          <Route path="user" element={<Users />} />
          <Route path="account" element={<Account />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
