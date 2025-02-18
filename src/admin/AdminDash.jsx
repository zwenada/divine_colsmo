import React from "react";
import "./admin.css";

const AdminDash = () => {
  return (
    <div className="container-fluid">
      <div className="row g-0">
        {/* Sidebar */}
        <nav className="col-2 bg-light pe-3">
          <h1 className="h4 py-3 text-center text-primary">
            <i className="fas fa-ghost me-2"></i>
            <span className="d-none d-lg-inline"> ADMIN </span>
          </h1>
          <div className="list-group text-center text-lg-start">
            <span className="list-group-item disabled d-none d-lg-block">
              <small>CONTROLS</small>
            </span>
            {[
              { icon: "fa-home", label: "Dashboard", active: true },
              { icon: "fa-users", label: "Users", badge: 20 },
              { icon: "fa-chart-line", label: "Statistics" },
              { icon: "fa-flag", label: "Reports" },
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                className={`list-group-item list-group-item-action ${
                  item.active ? "active" : ""
                }`}
              >
                <i className={`fas ${item.icon} me-2`}></i>
                <span className="d-none d-lg-inline">{item.label}</span>
                {item.badge && (
                  <span className="d-none d-lg-inline badge bg-danger rounded-pill float-end">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </div>
        </nav>

        {/* Main Content */}
        <main className="col-10 bg-secondary">
          {/* Navbar */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="flex-fill"></div>
            <div className="navbar nav">
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  <i className="fas fa-user-circle"></i>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#" className="dropdown-item">
                      User Profile
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="fas fa-cog"></i>
                </a>
              </li>
            </div>
          </nav>

          {/* Alerts */}
          <div className="container-fluid mt-3 p-4">
            <div className="row mb-3">
              <div className="col">
                <div className="alert alert-info">
                  <i className="fas fa-download me-2"></i>A new version of the
                  admin dashboard is released. <a href="#">Download Now!</a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="row mx-2">
            <h2 className="h6 text-white-50">QUICK STATS</h2>
            {[
              { value: "1,250", label: "Daily visitors" },
              { value: "8,210", label: "Weekly visitors" },
              { value: "12,560", label: "Monthly visitors" },
              { value: "102,250", label: "Yearly visitors" },
            ].map((stat, index) => (
              <div key={index} className="col">
                <div className="card mb-3">
                  <div className="card-body p-2">
                    <h3 className="card-title h2">{stat.value}</h3>
                    <span className="text-success">
                      <i className="fas fa-chart-line"></i> {stat.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
      <footer className="text-center py-4 text-muted">
        &copy; Copyright 2023
      </footer>
    </div>
  );
};

export default AdminDash;
