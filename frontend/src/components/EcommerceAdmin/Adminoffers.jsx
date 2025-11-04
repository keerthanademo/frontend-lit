import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Tag,
  Clock,
  Archive,
  BarChart3,
  FileText,
  PlusCircle,
  DollarSign,
  Search,
  Pencil,
  Trash2,
  Pause,
  Play,
  Upload,
  X,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import "./Adminoffers.css";

const AdminOffers = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("basic");
  const [editingOffer, setEditingOffer] = useState(null);
  const [autoActivate, setAutoActivate] = useState(false);
  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState(false);
  const [isLogsOpen, setIsLogsOpen] = useState(false);
  const [analyticsOffer, setAnalyticsOffer] = useState(null);
  const [selectedLogOffer, setSelectedLogOffer] = useState(null);


  const [form, setForm] = useState({
    title: "",
    code: "",
    type: "",
    description: "",
    image: "",
    startDate: "",
    endDate: "",
    applyTo: "",
    exclusions: "",
    customerSegmentation: "",
    settings: "",
    stackable: "",
    minOrderValue: "",
    maxDiscount: "",
    usageLimits: "",
  });

  // ===== Dummy Offers with Analytics Data =====
  const offers = [
    {
      id: 1,
      title: "Diwali Discount",
      code: "DIWALI25",
      type: "Percentage",
      applyTo: "Platform",
      status: "active",
      period: "10 Oct - 25 Oct",
      metrics: {
        views: 12430,
        clicks: 3240,
        redemptions: 1140,
        conversionRate: "9.2%",
        revenue: 82450,
        avgOrderValue: 721,
      },
      trendData: [
        { day: "Mon", views: 1200, clicks: 300, redemptions: 90 },
        { day: "Tue", views: 1400, clicks: 350, redemptions: 100 },
        { day: "Wed", views: 1600, clicks: 400, redemptions: 120 },
        { day: "Thu", views: 1550, clicks: 370, redemptions: 110 },
        { day: "Fri", views: 1700, clicks: 420, redemptions: 130 },
      ],
      pieData: [
        { name: "Brand A", value: 400 },
        { name: "Brand B", value: 300 },
        { name: "Brand C", value: 200 },
        { name: "Brand D", value: 100 },
      ],
      heatmapRegions: [
        { region: "North", redemptions: 300 },
        { region: "South", redemptions: 450 },
        { region: "East", redemptions: 200 },
        { region: "West", redemptions: 350 },
      ],
    },
    {
      id: 2,
      title: "Winter Bonanza",
      code: "WINTER15",
      type: "Flat",
      applyTo: "Category",
      status: "scheduled",
      period: "01 Nov - 15 Nov",
      metrics: {
        views: 8420,
        clicks: 2100,
        redemptions: 650,
        conversionRate: "7.8%",
        revenue: 45230,
        avgOrderValue: 694,
      },
      trendData: [
        { day: "Mon", views: 800, clicks: 200, redemptions: 60 },
        { day: "Tue", views: 900, clicks: 220, redemptions: 70 },
        { day: "Wed", views: 1000, clicks: 240, redemptions: 80 },
        { day: "Thu", views: 950, clicks: 230, redemptions: 75 },
        { day: "Fri", views: 1070, clicks: 250, redemptions: 90 },
      ],
      pieData: [
        { name: "Brand A", value: 200 },
        { name: "Brand B", value: 300 },
        { name: "Brand C", value: 150 },
        { name: "Brand D", value: 100 },
      ],
      heatmapRegions: [
        { region: "North", redemptions: 200 },
        { region: "South", redemptions: 300 },
        { region: "East", redemptions: 150 },
        { region: "West", redemptions: 250 },
      ],
    },
    {
      id: 3,
      title: "Summer Sale",
      code: "SUMMER20",
      type: "BOGO",
      applyTo: "Brand",
      status: "expired",
      period: "01 Jun - 15 Jun",
      metrics: {
        views: 10230,
        clicks: 2800,
        redemptions: 920,
        conversionRate: "8.5%",
        revenue: 62300,
        avgOrderValue: 675,
      },
      trendData: [
        { day: "Mon", views: 1100, clicks: 280, redemptions: 90 },
        { day: "Tue", views: 1200, clicks: 300, redemptions: 100 },
        { day: "Wed", views: 1300, clicks: 320, redemptions: 110 },
        { day: "Thu", views: 1250, clicks: 310, redemptions: 105 },
        { day: "Fri", views: 1400, clicks: 340, redemptions: 115 },
      ],
      pieData: [
        { name: "Brand A", value: 300 },
        { name: "Brand B", value: 200 },
        { name: "Brand C", value: 250 },
        { name: "Brand D", value: 170 },
      ],
      heatmapRegions: [
        { region: "North", redemptions: 250 },
        { region: "South", redemptions: 350 },
        { region: "East", redemptions: 200 },
        { region: "West", redemptions: 300 },
      ],
    },
  ];


  const auditLogs = [
  {
    timestamp: "12 Oct, 11:23",
    action: "Edited",
    offer: "Diwali Discount",
    admin: "Aiman",
    changes: "Increased discount 20% → 25%",
  },
  {
    timestamp: "10 Oct, 09:15",
    action: "Created",
    offer: "Diwali Discount",
    admin: "Aiman",
    changes: "New offer created",
  },
  {
    timestamp: "01 Oct, 14:00",
    action: "Edited",
    offer: "Winter Bonanza",
    admin: "Neha",
    changes: "Changed start date 2 Nov → 1 Nov",
  },
];


  const COLORS = ["#FFD700", "#FFA500", "#FF6B6B", "#66FF66"];

  // ===== Modal Functions =====
  const openModal = (offer = null) => {
    if (offer) {
      setForm({
        title: offer.title,
        code: offer.code,
        type: offer.type || "",
        description: offer.description || "",
        image: offer.image || "",
        startDate: offer.startDate || "",
        endDate: offer.endDate || "",
        applyTo: offer.applyTo || "",
        settings: offer.settings || "",
      });
      setEditingOffer(offer);
      setAutoActivate(offer.autoActivate || false);
    } else {
      setForm({
        title: "",
        code: "",
        type: "",
        description: "",
        image: "",
        startDate: "",
        endDate: "",
        applyTo: "",
        settings: "",
      });
      setEditingOffer(null);
      setAutoActivate(false);
    }
    setIsModalOpen(true);
  };

  const toggleModal = () => setIsModalOpen(false);
  const toggleAnalytics = (offer = null) => {
    setAnalyticsOffer(offer);
    setIsAnalyticsOpen(!isAnalyticsOpen);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingOffer) {
      alert(
        `Offer "${form.title}" updated successfully! Auto-activate: ${autoActivate}`
      );
    } else {
      alert(
        `Offer "${form.title}" created successfully! Auto-activate: ${autoActivate}`
      );
    }
    toggleModal();
  };

  return (
    <div className="offers-container">
      {/* ===== Sidebar ===== */}
      <aside className="sidebar">
        <div className="logo">Offer Admin</div>
        <ul className="nav">
          <li className="active">
            <Tag size={16} /> All Offers
          </li>
          <li>
            <Tag size={16} /> Active Offers
          </li>
          <li>
            <Clock size={16} /> Scheduled Offers
          </li>
          <li>
            <Archive size={16} /> Expired Offers
          </li>
          <li onClick={() => setIsAnalyticsOpen(true)}>
            <BarChart3 size={16} /> Offer Analytics
          </li>
          <li onClick={() => setIsLogsOpen(true)}>
  <FileText size={16} /> Logs
</li>

        </ul>
        <button className="create-offer-btn" onClick={() => openModal()}>
          <PlusCircle size={16} style={{ marginRight: "5px" }} /> Create Offer
        </button>
        <div className="offers-topbar">
          <button className="back-btn" onClick={() => navigate("/admin/ecomDashboard")}>
            ← Back
          </button>
        </div>
      </aside>

      {/* ===== Main Content ===== */}
      <main className="main-content">
        <h2>Offers</h2>

        {/* Stats Section */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-header">
              <span>Active</span>
              <Tag size={14} />
            </div>
            <h2>14</h2>
            <p>Running offers</p>
          </div>
          <div className="stat-card">
            <div className="stat-header">
              <span>Scheduled</span>
              <Clock size={14} />
            </div>
            <h2>5</h2>
            <p>Upcoming campaigns</p>
          </div>
          <div className="stat-card">
            <div className="stat-header">
              <span>Expired</span>
              <Archive size={14} />
            </div>
            <h2>12</h2>
            <p>Past promotions</p>
          </div>
          <div className="stat-card">
            <div className="stat-header">
              <span>Revenue Impact</span>
              <DollarSign size={14} />
            </div>
            <h2>₹2.3L</h2>
            <p>From offers</p>
          </div>
        </div>

        {/* Table Section */}
        <div className="table-card">
          <div className="table-header">
            <div className="controls">
              <div className="search-small">
                <Search size={14} />
                <input type="text" placeholder="Search offers..." />
              </div>

              <div className="filters">
                <select name="statusFilter">
                  <option value="">All Status</option>
                  <option value="active">Active</option>
                  <option value="scheduled">Scheduled</option>
                  <option value="expired">Expired</option>
                </select>
                <select name="brandFilter">
                  <option value="">All Brands</option>
                  <option value="Brand A">Brand A</option>
                  <option value="Brand B">Brand B</option>
                </select>
                <select name="categoryFilter">
                  <option value="">All Categories</option>
                  <option value="Category A">Category A</option>
                  <option value="Category B">Category B</option>
                </select>
              </div>

              <div className="table-buttons">
                <button className="yellow-btn" onClick={() => openModal()}>
                  + Create Offer
                </button>
                <button className="import-btn">Bulk Import</button>
                <button className="export-btn">Export</button>
              </div>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>Offer ID</th>
                <th>Name</th>
                <th>Type</th>
                <th>Applied To</th>
                <th>Duration</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {offers.map((offer) => (
                <tr key={offer.id}>
                  <td>{offer.id}</td>
                  <td>{offer.title}</td>
                  <td>{offer.type}</td>
                  <td>{offer.applyTo}</td>
                  <td>{offer.period}</td>
                  <td>
                    <span className={`status ${offer.status}`}>
                      {offer.status.charAt(0).toUpperCase() + offer.status.slice(1)}
                    </span>
                  </td>
                  <td className="actions">
                    <Pencil size={16} className="edit" onClick={() => openModal(offer)} />
                    <Trash2 size={16} className="delete" />
                    {offer.status === "active" ? (
                      <Pause size={16} className="pause" />
                    ) : (
                      <Play size={16} className="play" />
                    )}
                    {/* <BarChart3 size={16} className="analytics" onClick={() => toggleAnalytics(offer)} /> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* ===== Offer Modal ===== */}
      {isModalOpen && (
        <div className="offer-modal-overlay" onClick={toggleModal}>
          <div className="offer-modal" onClick={(e) => e.stopPropagation()}>
            <div className="offer-modal-header">
              <h3>{editingOffer ? "Edit Offer" : "Create New Offer"}</h3>
              <X className="close-icon" onClick={toggleModal} />
            </div>

            {/* Tabs */}
            <div className="offer-tabs">
              {["basic", "schedule", "targeting", "settings"].map((tab) => (
                <button
                  key={tab}
                  className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              {/* ===== Basic Tab ===== */}
              {activeTab === "basic" && (
                <>
                  <label>Offer Title</label>
                  <p className="field-desc">Give your offer a catchy title (e.g., Diwali Mega Sale)</p>
                  <input type="text" name="title" value={form.title} onChange={handleChange} required />

                  <label>Offer Code</label>
                  <p className="field-desc">Enter a unique code (e.g., DIWALI2024)</p>
                  <input type="text" name="code" value={form.code} onChange={handleChange} required />

                  <label>Offer Type</label>
                  <select name="type" value={form.type} onChange={handleChange} required>
                    <option value="">Select type</option>
                    <option value="Percentage">Percentage</option>
                    <option value="Flat">Flat</option>
                    <option value="BOGO">Buy One Get One</option>
                    <option value="Free Shipping">Free Shipping</option>
                  </select>

                  <label>Description</label>
                  <textarea name="description" value={form.description} onChange={handleChange}></textarea>

                  <label>Banner Image</label>
                  <div className="upload-box">
                    <Upload size={18} />
                    <input type="file" name="image" accept="image/*" onChange={handleChange} />
                    <p>Click to upload or drag & drop</p>
                  </div>
                </>
              )}

              {/* ===== Schedule Tab ===== */}
              {activeTab === "schedule" && (
                <>
                  <label>Start Date</label>
                  <input type="date" name="startDate" value={form.startDate} onChange={handleChange} />

                  <label>End Date</label>
                  <input type="date" name="endDate" value={form.endDate} onChange={handleChange} />

                  <div className="toggle-container">
                    <span>Automatically activate offer at start date</span>
                    <label className="switch">
                      <input type="checkbox" checked={autoActivate} onChange={() => setAutoActivate(!autoActivate)} />
                      <span className="slider round"></span>
                    </label>
                  </div>
                </>
              )}

              {/* ===== Targeting Tab ===== */}
              {activeTab === "targeting" && (
                <>
                  <label>Apply To</label>
                  <select name="applyTo" value={form.applyTo || ""} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="Platform">Platform</option>
                    <option value="Category">Category</option>
                    <option value="Brand">Brand</option>
                    <option value="Individual Product">Individual Product</option>
                  </select>

                  <label>Exclusions</label>
                  <input
                    type="text"
                    name="exclusions"
                    value={form.exclusions || ""}
                    onChange={handleChange}
                    placeholder="Exclude certain categories, brands or products"
                  />

                  <label>Customer Segmentation</label>
                  <input
                    type="text"
                    name="customerSegmentation"
                    value={form.customerSegmentation || ""}
                    onChange={handleChange}
                    placeholder="E.g., Gold members, Frequent buyers"
                  />
                </>
              )}

              {/* ===== Settings Tab ===== */}
              {activeTab === "settings" && (
                <>
                  <label>Stackable?</label>
                  <select name="stackable" value={form.stackable || ""} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>

                  <label>Min Order Value</label>
                  <input type="number" name="minOrderValue" value={form.minOrderValue || ""} onChange={handleChange} />

                  <label>Max Discount</label>
                  <input type="number" name="maxDiscount" value={form.maxDiscount || ""} onChange={handleChange} />

                  <label>Usage Limits</label>
                  <input type="number" name="usageLimits" value={form.usageLimits || ""} onChange={handleChange} />
                </>
              )}

              {/* <button type="submit" className="submit-btn">
                {editingOffer ? "Update Offer" : "Create Offer"}
              </button> */}

 
 <div className="form-actions">
  <button
    type="button"
    className="btn draft-btn"
    onClick={() => handleSaveDraft(form)}
  >
    Save Draft
  </button>

  <button
    type="submit"
    className="btn publish-btn"
  >
    Publish
  </button>

  <button
    type="button"
    className="btn cancel-btn"
    onClick={() => handleCancel()}
  >
    Cancel
  </button>
</div>







            </form>
          </div>
        </div>
      )}

      {/* ===== Analytics Modal ===== */}
      {isAnalyticsOpen && (
        <div className="offer-modal-overlay" onClick={() => setIsAnalyticsOpen(false)}>
          <div className="offer-modal analytics-modal" onClick={(e) => e.stopPropagation()}>
            <div className="offer-modal-header">
              <h3>
                Offer Analytics {analyticsOffer ? `— ${analyticsOffer.title}` : ""}
              </h3>
              <X className="close-icon" onClick={() => setIsAnalyticsOpen(false)} />
            </div>

            {/* Offer Filter */}
            <div className="offer-filter">
              <label>Select Offer:</label>
              <select
                value={analyticsOffer ? analyticsOffer.id : ""}
                onChange={(e) => {
                  const selected = offers.find((o) => o.id === parseInt(e.target.value));
                  setAnalyticsOffer(selected);
                }}
              >
                <option value="">-- Select Offer --</option>
                {offers.map((offer) => (
                  <option key={offer.id} value={offer.id}>
                    {offer.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Metrics Grid */}
            <div className="metrics-grid">
              <div className="metric-card">
                <h4>Views</h4>
                <p>{analyticsOffer?.metrics?.views || 0}</p>
              </div>
              <div className="metric-card">
                <h4>Clicks</h4>
                <p>{analyticsOffer?.metrics?.clicks || 0}</p>
              </div>
              <div className="metric-card">
                <h4>Redemptions</h4>
                <p>{analyticsOffer?.metrics?.redemptions || 0}</p>
              </div>
              <div className="metric-card">
                <h4>Conversion Rate</h4>
                <p>{analyticsOffer?.metrics?.conversionRate || "0%"}</p>
              </div>
              <div className="metric-card">
                <h4>Revenue</h4>
                <p>₹{analyticsOffer?.metrics?.revenue || 0}</p>
              </div>
              <div className="metric-card">
                <h4>Avg Order Value</h4>
                <p>₹{analyticsOffer?.metrics?.avgOrderValue || 0}</p>
              </div>
            </div>

            {/* Charts */}
            <div className="charts-grid">
              <div className="chart-card">
                <h3>Engagement Trends</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={analyticsOffer?.trendData || []}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="views" stroke="#FFD700" />
                    <Line type="monotone" dataKey="clicks" stroke="#66FF66" />
                    <Line type="monotone" dataKey="redemptions" stroke="#FF6B6B" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="chart-card">
                <h3>Brand/Product Redemption</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={analyticsOffer?.pieData || []}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {(analyticsOffer?.pieData || []).map((entry, index) => (
                        <Cell key={index} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Heatmap */}
            <div className="chart-card full">
              <h3>Regional Redemptions Heatmap</h3>
              <div className="heatmap">
                {(analyticsOffer?.heatmapRegions || []).map((r) => (
                  <div key={r.region} className="region-item">
                    <span>{r.region}</span>
                    <div className="bar">
                      <div
                        className="fill"
                        style={{
                          width: `${(r.redemptions / 500) * 100}%`,
                        }}
                      ></div>
                    </div>
                    <span className="value">{r.redemptions}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}



{isLogsOpen && (
  <div className="offer-modal-overlay" onClick={() => setIsLogsOpen(false)}>
    <div className="logs-modal" onClick={(e) => e.stopPropagation()}>
      <div className="offer-modal-header">
        <h3>Offer Audit Logs</h3>
        <X className="close-icon" onClick={() => setIsLogsOpen(false)} />
      </div>

      {/* Optional Offer Filter */}
      <div className="offer-filter">
        <label>Filter by Offer:</label>
        <select
          value={selectedLogOffer?.id || ""}
          onChange={(e) => {
            const offer = offers.find((o) => o.id === parseInt(e.target.value));
            setSelectedLogOffer(offer);
          }}
        >
          <option value="">-- All Offers --</option>
          {offers.map((offer) => (
            <option key={offer.id} value={offer.id}>
              {offer.title}
            </option>
          ))}
        </select>
      </div>

      <table className="logs-table">
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Action</th>
            <th>Offer</th>
            <th>Admin</th>
            <th>Changes</th>
          </tr>
        </thead>
        <tbody>
          {auditLogs
            .filter((log) => !selectedLogOffer || log.offer === selectedLogOffer.title)
            .map((log, index) => (
              <tr key={index}>
                <td>{log.timestamp}</td>
                <td className="action">{log.action}</td>
                <td>{log.offer}</td>
                <td className="admin">{log.admin}</td>
                <td className="changes">{log.changes}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  </div>
)}










    </div>
  );
};

export default AdminOffers;
