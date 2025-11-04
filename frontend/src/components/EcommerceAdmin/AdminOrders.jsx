import React, { useState } from "react";
import {
  FaBox,
  FaShoppingCart,
  FaCheckCircle,
  FaTimesCircle,
  FaSync,
} from "react-icons/fa";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";

import "./AdminOrders.css";

const AdminOrdersPage = () => {
  const initialOrders = [
    {
      id: "#01766703570",
      product: "Airpods Pro Max 2024",
      category: "Electric Product",
      customer: "Muhammad Fateh",
      customerType: "Pro Customer",
      date: "2024-01-01",
      amount: "$10,120.00",
      payment: "Paid by Mastercard",
      status: "Pending",
    },
    {
      id: "#01766701234",
      product: "Apple Watch Series 4 New",
      category: "Electric Product",
      customer: "Anderson Mark",
      customerType: "Star Customer",
      date: "2024-03-05",
      amount: "$13,145.00",
      payment: "Paid by Visacard",
      status: "Pending",
    },
    {
      id: "#01766705678",
      product: "Samsung Galaxy S24",
      category: "Mobile",
      customer: "John Doe",
      customerType: "New Customer",
      date: "2024-04-10",
      amount: "$899.00",
      payment: "Paid by Paypal",
      status: "Shipped",
    },
    {
      id: "#01766707890",
      product: "Sony Headphones",
      category: "Accessories",
      customer: "Jane Smith",
      customerType: "Pro Customer",
      date: "2024-05-15",
      amount: "$199.00",
      payment: "Paid by Mastercard",
      status: "Cancelled",
    },
    {
      id: "#01766709123",
      product: "MacBook Pro 2024",
      category: "Laptop",
      customer: "David Lee",
      customerType: "Star Customer",
      date: "2024-06-20",
      amount: "$2,499.00",
      payment: "Paid by Visacard",
      status: "Processing",
    },
    {
      id: "#01766704567",
      product: "iPad Pro 2024",
      category: "Tablet",
      customer: "Emma Wilson",
      customerType: "Pro Customer",
      date: "2024-07-25",
      amount: "$1,099.00",
      payment: "Paid by Paypal",
      status: "Pending",
    },
  ];

  // 🔹 State
  const [orders, setOrders] = useState(initialOrders);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalDropdownOpen, setModalDropdownOpen] = useState(false);

  const ordersPerPage = 5;

  // 🔹 Filter logic
  const filteredOrders = orders.filter((o) => {
    const matchesSearch =
      o.id.toLowerCase().includes(search.toLowerCase()) ||
      o.product.toLowerCase().includes(search.toLowerCase()) ||
      o.customer.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      status === "All Status" ? true : o.status.toLowerCase() === status.toLowerCase();

    const matchesDate = selectedDate
      ? o.date === dayjs(selectedDate).format("YYYY-MM-DD")
      : true;

    return matchesSearch && matchesStatus && matchesDate;
  });

  // 🔹 Pagination logic
  const indexOfLast = currentPage * ordersPerPage;
  const indexOfFirst = indexOfLast - ordersPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

  return (
    <div className="orders-page">
      {/* Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="icon-circle ">
            <FaBox />
          </div>
          <div>
            <p className="stat-label">Total Orders</p>
            <h3 className="stat-value">{orders.length}</h3>
          </div>
        </div>
        <div className="stat-card">
          <div className="icon-circle ">
            <FaShoppingCart />
          </div>
          <div>
            <p className="stat-label">New Orders</p>
            <h3 className="stat-value">120</h3>
          </div>
        </div>
        <div className="stat-card">
          <div className="icon-circle ">
            <FaCheckCircle />
          </div>
          <div>
            <p className="stat-label">Completed</p>
            <h3 className="stat-value">50</h3>
          </div>
        </div>
        <div className="stat-card">
          <div className="icon-circle">
            <FaTimesCircle />
          </div>
          <div>
            <p className="stat-label">Cancelled</p>
            <h3 className="stat-value">40</h3>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search by name, Order ID..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="search-input"
        />

        <div className="filters-right">
          {/* Status Dropdown */}
          <div className={`custom-dropdown ${dropdownOpen ? "active" : ""}`}>
            <button
              className="dropdown-btn"
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              {status}
            </button>
            <div className="dropdown-content">
              {["All Status", "Pending", "Processing", "Shipped", "Delivered", "Cancelled"].map(
                (s) => (
                  <div
                    key={s}
                    className="dropdown-item"
                    onClick={() => {
                      setStatus(s);
                      setCurrentPage(1);
                      setDropdownOpen(false);
                    }}
                  >
                    {s}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Date Picker */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={selectedDate}
            onChange={(newValue) => setSelectedDate(newValue)}
            slotProps={{
              textField: {
                variant: "outlined",
                size: "small",
                className: "custom-datepicker", // <-- add this
              },
            }}
          />
        </LocalizationProvider>


          {/* Reset */}
          <button
            className="filter-btn"
            onClick={() => {
              setSearch("");
              setStatus("All Status");
              setSelectedDate(null);
              setCurrentPage(1);
            }}
          >
            <FaSync size={10} style={{ marginRight: "6px" }} />
            Reset
          </button>
        </div>
      </div>

      {/* Orders Table */}
      <div className="orders-table-wrapper">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Customer</th>
              <th>Order ID</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.length > 0 ? (
              currentOrders.map((o) => (
                <tr key={o.id}>
                  <td>
                    <div className="main-text">{o.product}</div>
                    <div className="sub-text">{o.category}</div>
                  </td>
                  <td>
                    <div className="main-text">{o.customer}</div>
                    <div className="sub-text">{o.customerType}</div>
                  </td>
                  <td>
                    <div className="main-text">{o.id}</div>
                    <div className="sub-text">{o.date}</div>
                  </td>
                  <td>
                    <div className="main-text">{o.amount}</div>
                    <div className="sub-text">{o.payment}</div>
                  </td>
                  <td>
                    <span
                      className={`status ${o.status.toLowerCase()}`}
                      style={{ cursor: "default" }}
                    >
                      {o.status}
                    </span>
                  </td>
                  <td>
                    <button className="details-btn" onClick={() => setSelectedOrder(o)}>
                      Details
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>
                  No matching orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination-right">
        <button
          className="page-btn"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          &lt;&lt;
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="page-btn"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          &gt;&gt;
        </button>
      </div>

      {/* Details Modal */}
      {selectedOrder && (
        <div className="order-details-modal">
          <div className="modal-content">
            <h2>Order Details</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setOrders((prev) =>
                  prev.map((ord) =>
                    ord.id === selectedOrder.id ? selectedOrder : ord
                  )
                );
                setSelectedOrder(null);
              }}
            >
              <div className="form-group">
                <label>Order ID:</label>
                <input type="text" value={selectedOrder.id} readOnly />
              </div>
              <div className="form-group">
                <label>Product:</label>
                <input type="text" value={selectedOrder.product} readOnly />
              </div>
              <div className="form-group">
                <label>Customer:</label>
                <input type="text" value={selectedOrder.customer} readOnly />
              </div>
              <div className="form-group">
                <label>Date:</label>
                <input type="text" value={selectedOrder.date} readOnly />
              </div>
              <div className="form-group">
                <label>Amount:</label>
                <input type="text" value={selectedOrder.amount} readOnly />
              </div>
              <div className="form-group">
                <label>Status:</label>
                <div
                  className={`custom-dropdown modal-dropdown ${
                    modalDropdownOpen ? "active" : ""
                  }`}
                >
                  <button
                    type="button"
                    className="dropdown-btn"
                    onClick={() => setModalDropdownOpen((prev) => !prev)}
                  >
                    {selectedOrder.status}
                  </button>
                  <div className="dropdown-content">
                    {["Pending", "Processing", "Shipped", "Delivered", "Cancelled"].map(
                      (s) => (
                        <div
                          key={s}
                          className="dropdown-item"
                          onClick={() => {
                            setSelectedOrder((prev) => ({ ...prev, status: s }));
                            setModalDropdownOpen(false);
                          }}
                        >
                          {s}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="modal-actions">
                <button type="submit" className="save-btn">
                  Save
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setSelectedOrder(null)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminOrdersPage;
