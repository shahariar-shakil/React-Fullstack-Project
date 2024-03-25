// import React from 'react'
import Header from "./Header";
import Sidebar from "./Sidebar";
import "../Styles/Global.css";

export default function MainLayout() {
  return (
    <div className="mainlayout">
      <div className="sidebar">
        <Header />
      </div>
      <div className="navbar">
        <Sidebar />
      </div>
      <main className="main p-8 bg-red-100">
        <h2>Test</h2>
      </main>
    </div>
  );
}
