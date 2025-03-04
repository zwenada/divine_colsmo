import React from "react";
import "./AdminDash.css";

const AdminDash = () => {
  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <h1 className="admin-title">ADMIN</h1>
        <nav className="nav-menu">
          <a href="#" className="active">Dashboard</a>
          <a href="#">Users <span className="badge">20</span></a>
          <a href="#">Statistics</a>
          <a href="#">Reports</a>
        </nav>
      </div>
      
      <main className="main-content">
        <nav className="top-nav">
          <span className="nav-title">Admin Panel</span>
          <div className="nav-icons">
            <i className="fas fa-cog"></i>
            <i className="fas fa-user-circle"></i>
          </div>
        </nav>
        
        <div className="stats-section">
          <h2>Quick Stats</h2>
          <div className="stats-container">
            {[
              { label: "Daily Visitors", count: "1,250" },
              { label: "Weekly Visitors", count: "8,210" },
              { label: "Monthly Visitors", count: "12,560" },
              { label: "Yearly Visitors", count: "102,250" }
            ].map((stat, index) => (
              <div className="stat-card" key={index}>
                <h3>{stat.count}</h3>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="data-section">
          <h2>Data</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Age Group</th>
                <th>Data</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 1, age: "20-30", data: "19%", icon: "fa-chart-pie" },
                { id: 2, age: "30-40", data: "40%", icon: "fa-chart-bar" },
                { id: 3, age: "40-50", data: "20%", icon: "fa-chart-line" },
                { id: 4, age: "50+", data: "11%", icon: "fa-chart-pie" }
              ].map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.age}</td>
                  <td>{row.data}</td>
                  <td><i className={`fas ${row.icon}`}></i></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <footer className="footer">&copy; 2023 Admin Panel</footer>
      </main>
    </div>
  );
};

export default AdminDash;
