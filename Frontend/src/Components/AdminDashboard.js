import React, { useEffect, useState } from 'react';
import './AdminDashboard.css';
import { FaSignOutAlt } from 'react-icons/fa';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({
    name:'',
    email: '',
    password: '',
    roles:"ROLE_USER"
  });
  const [admins, setAdmins] = useState([]);
  const [newAdmin, setNewAdmin] = useState({
    name:'',
    email: '',
    password: '',
    roles:"ROLE_ADMIN"
  });
  const [activeLink, setActiveLink] = useState('/admin-dashboard');
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
    fetchAdmins();
    fetchOrders();
  }, []);

  const fetchUsers = async () => {
    const token = localStorage.getItem('authToken'); // Retrieve the access token from localStorage

    try {
        const response = await fetch('http://localhost:8080/admin/get/users', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`, // Pass the token in the Authorization header
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) throw new Error('Network response was not ok.');
        const data = await response.json();
        setUsers(data);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
};


  const fetchAdmins = async () => {
    try {
      const response = await fetch('http://localhost:8080/admins');
      if (!response.ok) throw new Error('Network response was not ok.');
      const data = await response.json();
      setAdmins(data);
    } catch (error) {
      console.error('Error fetching admins:', error);
    }
  };

  const fetchOrders = async () => {
    const token = localStorage.getItem('authToken'); // Retrieve the access token from localStorage
    // console.log(${token});
    console.log(token)
    try {
      const response = await fetch('http://localhost:8080/admin/get/orders', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`, // Pass the token in the Authorization header
          'Content-Type': 'application/json'
        }
      });
      console.log(response)
      if (!response.ok) throw new Error('Network response was not ok.');
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };
  
  

  const showPopupMessage = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleNewUserChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };
  const handleNewAdminChange = (e) => {
    const { name, value } = e.target;
    setNewAdmin((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async (id) => {
    try {
      await fetch(`http://localhost:8080/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editingUser)
      });
      setEditingUser(null);
      fetchUsers();
      showPopupMessage('User saved successfully!');
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      // Get the token from local storage or wherever you're storing it
      const token = localStorage.getItem('authToken');
      const response = await fetch(`http://localhost:8080/admin/deleteuser/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
  
      // Check if the response status is OK
      if (response.ok) {
        fetchUsers();
        showPopupMessage('User deleted successfully!');
      } else {
        const errorData = await response.json();
        showPopupMessage(`Error deleting user: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      showPopupMessage(`Error deleting user: ${error.message}`);
    }
  };
  

  const handleAddUser = async () => {
    const token = localStorage.getItem('authToken'); // Retrieve the access token from localStorage

    try {
        await fetch('http://localhost:8080/auth/addNewUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Add token to the Authorization header
            },
            body: JSON.stringify({
                name: newUser.name,
                email: newUser.email,
                password: newUser.password,
                roles:newUser.roles
            })
        });
        setNewUser({
            name: '',
            email: '',
            password: ''
        });
        fetchUsers();
        showPopupMessage('User added successfully!');
    } catch (error) {
        console.error('Error adding user:', error);
    }
};


const handleAddAdmin = async () => {
  try {
    const token = localStorage.getItem('authToken'); // Retrieve the access token from localStorage
    
    await fetch('http://localhost:8080/auth/addNewUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Add Bearer token to Authorization header
      },
      body: JSON.stringify(newAdmin)
    });
    
    setNewAdmin({
      name: '',
      email: '',
      password: ''
    });
    fetchAdmins();
    showPopupMessage('Admin added successfully!');
  } catch (error) {
    console.error('Error adding admin:', error);
  }
};

const handleApproveOrder = async (id) => {
  const orderToApprove = orders.find(order => order.id === id);
  const approvedOrder = { ...orderToApprove, status: 'Approved' };

  try {
    const token = localStorage.getItem('authToken'); // Retrieve the access token from localStorage
    
    await fetch(`http://localhost:8080/admin/changestatus/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Add Bearer token to Authorization header
      },
      body: JSON.stringify({ id, status: 'Approved' }) // Adjusted body to only include id and status
    });
    
    setOrders(orders.map(order => (order.id === id ? approvedOrder : order)));
    showPopupMessage('Order approved successfully!');
  } catch (error) {
    console.error('Error approving order:', error);
  }
};

  
  

  const handleSignOut = () => {
    localStorage.removeItem('adminToken');
    window.location.href = '/login';
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="admin-dashboard23">
      <nav className="top-navbar23">
        <div className="navbar-content23">
          <span className="navbar-title23">Admin Dashboard</span>
          <button className="logout-button23" onClick={handleSignOut}><FaSignOutAlt className="logout-icon" />Logout</button>
        </div>
      </nav>
      <div className="dashboard-content23">
        <aside className="side-panel23">
          <ul>
            <li>
              <a
                href="#"
                className={activeLink === '/admin-dashboard' ? 'active' : ''}
                onClick={() => handleLinkClick('/admin-dashboard')}
              >
                User Management
              </a>
            </li>
            <li>
              <a
                href="#"
                className={activeLink === '/admin-add-user' ? 'active' : ''}
                onClick={() => handleLinkClick('/admin-add-user')}
              >
                Add Users
              </a>
            </li>
            <li>
              <a
                href="#"
                className={activeLink === '/admin-add-admin' ? 'active' : ''}
                onClick={() => handleLinkClick('/admin-add-admin')}
              >
                Add Admin
              </a>
            </li>
            <li>
              <a
                href="#"
                className={activeLink === '/admin-manage-orders' ? 'active' : ''}
                onClick={() => handleLinkClick('/admin-manage-orders')}
              >
                Manage Orders
              </a>
            </li>
          </ul>
        </aside>
        <div className="main-content23">
          {activeLink === '/admin-dashboard' && (
            <div className="user-list23">
              <h3>Users</h3>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={user.id}>
                      {editingUser?.id === user.id ? (
                        <>
                          <td>{user.id}</td>
                          <td>
                            <input
                              type="text"
                              name="Name"
                              value={editingUser.firstName || ''}
                              onChange={handleInputChange}
                            />
                          </td>
                          <td>
                            <input
                              type="email"
                              name="email"
                              value={editingUser.email || ''}
                              onChange={handleInputChange}
                            />
                          </td>
                          <td>
                            <button onClick={() => handleSave(user.id)}>Save</button>
                            <button onClick={() => setEditingUser(null)}>Cancel</button>
                          </td>
                        </>
                      ) : (
                        <>
                          <td>{user.id}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.password}</td>
                          <td>
                            <button onClick={() => handleDelete(user.id)}>Delete</button>
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {activeLink === '/admin-add-user' && (
            <div className="add-user23">
            <h3>Add New User</h3>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleAddUser();
                }}
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={newUser.name}
                    onChange={handleNewUserChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={newUser.email}
                    onChange={handleNewUserChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={newUser.password}
                    onChange={handleNewUserChange}
                    required
                />
                <button type="submit">Add User</button>
            </form>
        </div>
        
          )}
          {activeLink === '/admin-add-admin' && (
            <div className="add-user23">
            <h3>Add New Admin</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddAdmin();
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={newAdmin.name}
                onChange={handleNewAdminChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={newAdmin.email}
                onChange={handleNewAdminChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={newAdmin.password}
                onChange={handleNewAdminChange}
                required
              />
              <button type="submit">Add Admin</button>
            </form>
          </div>
        
          )}
          {activeLink === '/admin-manage-orders' && (
  <div className="manage-orders23">
    <h3>Orders</h3>
    {loading ? <p>Loading...</p> : (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Course Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.coursename}</td> {/* Ensure this is correctly mapped */}
              <td>{order.status}</td>
              <td>
                {order.status !== 'Approved' && (
                  <button onClick={() => handleApproveOrder(order.id)}>Approve</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
)}

        </div>
      </div>
      {showPopup && <div className="popup-message23">{popupMessage}</div>}
    </div>
  );
};

export default AdminDashboard;
