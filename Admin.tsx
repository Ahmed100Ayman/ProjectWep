import React, { useState } from "react";

const AdminDashboard = ({
  products = [],
  users = [],
  onApprove,
  onReject,
  onDelete
}) => {

  const [activeTab, setActiveTab] = useState("pending");

  const pendingProducts = products.filter(
    (product) => product.status === "Pending"
  );

  const approvedProducts = products.filter(
    (product) => product.status === "Approved"
  );

  const styles = `
    .admin-wrapper{
      font-family:Poppins,sans-serif;
      background:#f4f7f6;
      min-height:100vh;
      padding:40px;
    }

    .admin-card{
      max-width:1000px;
      margin:auto;
      background:#fff;
      border-radius:12px;
      box-shadow:0 10px 30px rgba(0,0,0,0.1);
      overflow:hidden;
    }

    .admin-nav{
      display:flex;
      background:#081b29;
      padding:10px;
      gap:10px;
    }

    .nav-btn{
      flex:1;
      padding:12px;
      border:none;
      color:#fff;
      background:transparent;
      cursor:pointer;
      border-radius:8px;
      font-weight:600;
    }

    .nav-btn.active{
      background:#00abf0;
    }

    .content{
      padding:30px;
    }

    table{
      width:100%;
      border-collapse:collapse;
      margin-top:20px;
    }

    th,td{
      padding:15px;
      border-bottom:1px solid #eee;
      text-align:left;
    }

    th{
      background:#f8f9fa;
    }

    .badge{
      padding:5px 10px;
      border-radius:20px;
      font-size:12px;
      font-weight:bold;
    }

    .pending{
      background:#fff3cd;
      color:#856404;
    }

    .approved{
      background:#d4edda;
      color:#155724;
    }

    .btn{
      padding:7px 14px;
      border:none;
      border-radius:6px;
      color:white;
      cursor:pointer;
      margin-right:5px;
    }

    .approve{background:#28a745;}
    .reject{background:#dc3545;}
    .delete{background:#6c757d;}

    .empty{
      margin-top:20px;
      color:#777;
      font-style:italic;
    }
  `;

  return (
    <div className="admin-wrapper">
      <style>{styles}</style>

      <div className="admin-card">

        {/* Navigation */}
        <div className="admin-nav">

          <button
            className={`nav-btn ${activeTab === "pending" ? "active" : ""}`}
            onClick={() => setActiveTab("pending")}
          >
            Pending Requests
          </button>

          <button
            className={`nav-btn ${activeTab === "approved" ? "active" : ""}`}
            onClick={() => setActiveTab("approved")}
          >
            Approved Products
          </button>

          <button
            className={`nav-btn ${activeTab === "users" ? "active" : ""}`}
            onClick={() => setActiveTab("users")}
          >
            All Users
          </button>

        </div>

        <div className="content">

          {/* Pending Products */}
          {activeTab === "pending" && (
            <>
              <h2>Products Awaiting Approval</h2>

              {pendingProducts.length === 0 ? (
                <p className="empty">No pending products</p>
              ) : (
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {pendingProducts.map((product) => (
                      <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>${product.price}</td>

                        <td>
                          <span className="badge pending">
                            Pending
                          </span>
                        </td>

                        <td>
                          <button
                            className="btn approve"
                            onClick={() => onApprove(product.id)}
                          >
                            Approve
                          </button>

                          <button
                            className="btn reject"
                            onClick={() => onReject(product.id)}
                          >
                            Reject
                          </button>
                        </td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </>
          )}

          {/* Approved Products */}
          {activeTab === "approved" && (
            <>
              <h2>Live Products</h2>

              {approvedProducts.length === 0 ? (
                <p className="empty">No approved products</p>
              ) : (
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {approvedProducts.map((product) => (
                      <tr key={product.id}>

                        <td>{product.name}</td>
                        <td>${product.price}</td>

                        <td>
                          <span className="badge approved">
                            Live
                          </span>
                        </td>

                        <td>
                          <button
                            className="btn delete"
                            onClick={() => onDelete(product.id)}
                          >
                            Remove
                          </button>
                        </td>

                      </tr>
                    ))}
                  </tbody>

                </table>
              )}
            </>
          )}

          {/* Users */}
          {activeTab === "users" && (
            <>
              <h2>System Users</h2>

              {users.length === 0 ? (
                <p className="empty">No users found</p>
              ) : (
                <table>

                  <thead>
                    <tr>
                      <th>Username</th>
                      <th>Email</th>
                      <th>Role</th>
                    </tr>
                  </thead>

                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                      </tr>
                    ))}
                  </tbody>

                </table>
              )}
            </>
          )}

        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;