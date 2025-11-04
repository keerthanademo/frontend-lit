import React, { useState } from "react";
import "./Customer.css";
import { Eye } from "lucide-react";


const customerData = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    phone: "+1 234-567-8901",
    location: "Los Angeles",
    country: "United States",
    preferredStore: "LA Flagship",
    zone: "West",
    orders: 24,
    totalSpend: 3245.5,
    avgOrder: 135.23,
    status: "VIP",
    lastPurchase: "2024-03-10",
    joined: "2023-01-15",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "m.chen@email.com",
    phone: "+1 345-678-9012",
    location: "Toronto",
    country: "Canada",
    preferredStore: "Toronto Mall",
    zone: "North",
    orders: 12,
    totalSpend: 1890.25,
    avgOrder: 157.52,
    status: "ACTIVE",
    lastPurchase: "2024-03-08",
    joined: "2023-02-10",
  },
  {
    id: 3,
    name: "Emma Williams",
    email: "emma.w@email.com",
    phone: "+44 20-7123-4567",
    location: "London",
    country: "United Kingdom",
    preferredStore: "London Outlet",
    zone: "Europe",
    orders: 8,
    totalSpend: 1234.0,
    avgOrder: 154.25,
    status: "ACTIVE",
    lastPurchase: "2024-03-05",
    joined: "2023-02-20",
  },
  {
    id: 4,
    name: "James Rodriguez",
    email: "j.rodriguez@email.com",
    phone: "+34 91-123-4567",
    location: "Madrid",
    country: "Spain",
    preferredStore: "Madrid Center",
    zone: "Europe",
    orders: 5,
    totalSpend: 678.9,
    avgOrder: 135.78,
    status: "ACTIVE",
    lastPurchase: "2024-02-28",
    joined: "2023-03-01",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    email: "lisa.a@email.com",
    phone: "+1 456-789-0123",
    location: "New York",
    country: "United States",
    preferredStore: "NY Outlet",
    zone: "East",
    orders: 2,
    totalSpend: 234.5,
    avgOrder: 117.25,
    status: "INACTIVE",
    lastPurchase: "2023-12-15",
    joined: "2022-09-10",
  },
];

// Sample Orders Data
const ordersData = {
  1: [
    { id: "ORD2031", date: "02 Oct 2025", items: 3, total: 2499, payment: "Online", status: "Delivered" },
    { id: "ORD2032", date: "05 Oct 2025", items: 2, total: 1499, payment: "COD", status: "Shipped" },
  ],
  2: [
    { id: "ORD2040", date: "01 Oct 2025", items: 1, total: 499, payment: "Online", status: "Pending" },
  ],
  3: [
    { id: "ORD2050", date: "03 Oct 2025", items: 4, total: 3499, payment: "Online", status: "Delivered" },
  ],
  4: [
    { id: "ORD2060", date: "04 Oct 2025", items: 2, total: 1299, payment: "COD", status: "Cancelled" },
  ],
  5: [
    { id: "ORD2070", date: "02 Oct 2025", items: 1, total: 799, payment: "Online", status: "Shipped" },
  ],
};

export default function Customer() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [viewOrders, setViewOrders] = useState(false);

  // totals
  const totalRevenue = customerData.reduce((acc, c) => acc + c.totalSpend, 0);
  const activeCustomers = customerData.filter((c) => c.status === "ACTIVE").length;
  const vipCustomers = customerData.filter((c) => c.status === "VIP").length;

  // filter
  const filteredCustomers = customerData.filter((customer) =>
    (
      customer.name +
      " " +
      customer.email +
      " " +
      customer.location +
      " " +
      customer.country
    )
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="customer-page">
      <h1>Customers</h1>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="summary-card">
          <h3>Total Customers</h3>
          <p>{customerData.length}</p>
        </div>
        <div className="summary-card">
          <h3>Active Customers</h3>
          <p>{activeCustomers}</p>
        </div>
        <div className="summary-card">
          <h3>VIP Customers</h3>
          <p>{vipCustomers}</p>
        </div>
        <div className="summary-card">
          <h3>Total Revenue</h3>
          <p>${totalRevenue.toFixed(2)}</p>
        </div>
      </div>

      {/* Search */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search customers by name, email, location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="customer-table">
        <table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Contact</th>
              <th>Location</th>
              <th>Orders</th>
              <th>Total Spend</th>
              <th>Status</th>
              <th>Last Purchase</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((c) => (
              <tr key={c.id}>
                <td>
                  <div className="customer-name">
                    <div className="avatar">{c.name.charAt(0)}</div>
                    <div>
                      <strong>{c.name}</strong>
                      <div className="customer-id">CUS00{c.id}</div>
                    </div>
                  </div>
                </td>

                <td>
                  <div className="contact-info">
                    <div>{c.email}</div>
                    <small>{c.phone}</small>
                  </div>
                </td>

                <td>{c.location}</td>
                <td>{c.orders}</td>
                <td>${c.totalSpend.toFixed(2)}</td>
                <td>
                  <span className={`status-badge ${c.status.toLowerCase()}`}>
                    {c.status}
                  </span>
                </td>
                <td>{c.lastPurchase}</td>
                <td>
                  <button
                    className="view-btn"
                    onClick={() => {
                      setSelectedCustomer(c);
                      setViewOrders(false);
                    }}
                  >
                    <Eye size={18} strokeWidth={2} />
                 </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedCustomer && (
        <div className="modal-overlay" onClick={() => setSelectedCustomer(null)}>
          <div
            className={`modal-details ${selectedCustomer.status.toLowerCase()}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="modal-header">
              <div className="header-left">
                <div className="avatar-lg">{selectedCustomer.name.charAt(0)}</div>
                <div>
                  <h2>{selectedCustomer.name}</h2>
                  <div className="modal-id">Customer ID: CUS00{selectedCustomer.id}</div>
                </div>
              </div>

              <div className="header-right">
                <div className={`badge ${selectedCustomer.status.toLowerCase()}`}>
                  {selectedCustomer.status}
                </div>
                <button className="close-btn" onClick={() => setSelectedCustomer(null)}>
                  ✖
                </button>
              </div>
            </div>

            {/* Modal Body */}
            {!viewOrders ? (
              <>
                {/* Contact Section */}
                <div className="section">
                  <h3>Contact Information</h3>
                  <div className="card-grid">
                    <div className="info-card">
                      <h4>Email</h4>
                      <p>{selectedCustomer.email}</p>
                    </div>
                    <div className="info-card">
                      <h4>Phone</h4>
                      <p>{selectedCustomer.phone}</p>
                    </div>
                    <div className="info-card">
                      <h4>Location</h4>
                      <p>{selectedCustomer.location}</p>
                    </div>
                    <div className="info-card">
                      <h4>Joined</h4>
                      <p>{selectedCustomer.joined}</p>
                    </div>
                  </div>
                </div>

                {/* Purchase Section */}
                <div className="section">
                  <h3>Purchase History</h3>
                  <div className="card-grid">
                    <div className="info-card">
                      <h4>Total Orders</h4>
                      <p>{selectedCustomer.orders}</p>
                    </div>
                    <div className="info-card">
                      <h4>Total Spend</h4>
                      <p>${selectedCustomer.totalSpend.toFixed(2)}</p>
                    </div>
                    <div className="info-card">
                      <h4>Avg Order</h4>
                      <p>${selectedCustomer.avgOrder.toFixed(2)}</p>
                    </div>
                    <div className="info-card">
                      <h4>Last Purchase</h4>
                      <p>{selectedCustomer.lastPurchase}</p>
                    </div>
                  </div>
                </div>

                {/* Location Section */}
                <div className="section">
                  <h3>Location History</h3>
                  <div className="card-grid">
                    <div className="info-card">
                      <h4>City</h4>
                      <p>{selectedCustomer.location}</p>
                    </div>
                    <div className="info-card">
                      <h4>Country</h4>
                      <p>{selectedCustomer.country}</p>
                    </div>
                    <div className="info-card">
                      <h4>Preferred Store</h4>
                      <p>{selectedCustomer.preferredStore}</p>
                    </div>
                    <div className="info-card">
                      <h4>Zone</h4>
                      <p>{selectedCustomer.zone}</p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="section">
                <h3>Order History</h3>
                <div className="customer-orders-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Date</th>
                        <th>Items</th>
                        <th>Total</th>
                        <th>Payment</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(ordersData[selectedCustomer.id] || []).map((order, index) => (
                        <tr key={index}>
                          <td>{order.id}</td>
                          <td>{order.date}</td>
                          <td>{order.items}</td>
                          <td>₹{order.total}</td>
                          <td>{order.payment}</td>
                          <td>
                            <span className={`status-badge ${order.status.toLowerCase()}`}>
                              {order.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="modal-footer">
              <button className="email-btn">Send Email</button>
              {!viewOrders ? (
                <button className="order-btn" onClick={() => setViewOrders(true)}>
                  View Orders
                </button>
              ) : (
                <button className="order-btn" onClick={() => setViewOrders(false)}>
                  Back to Details
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
