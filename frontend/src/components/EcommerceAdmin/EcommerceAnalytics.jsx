import React from "react";
import {
  LineChart,
  Line,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
} from "recharts";
import {
  DollarSign,
  ShoppingCart,
  TrendingUp,
  Target,
  AlertTriangle,
  Users,
  Zap,
  BarChart2,
  UserPlus,
  Star,
  Package,
} from "lucide-react";
import "./EcommerceAnalytics.css";

const EcomAnalytics = () => {
  // ====== DATA ======
  const revenueData = [
    { month: "Jan", revenue: 45000, profit: 32000 },
    { month: "Feb", revenue: 52000, profit: 38000 },
    { month: "Mar", revenue: 48000, profit: 35000 },
    { month: "Apr", revenue: 61000, profit: 45000 },
    { month: "May", revenue: 58000, profit: 42000 },
    { month: "Jun", revenue: 67000, profit: 51000 },
  ];

  const funnelData = [
    { stage: "Visitors", users: 5000 },
    { stage: "Product Views", users: 3500 },
    { stage: "Add to Cart", users: 1800 },
    { stage: "Checkout", users: 900 },
    { stage: "Purchase", users: 650 },
  ];

  const trafficData = [
    { name: "Google Ads", value: 35, color: "#8b5cf6" },
    { name: "Meta Ads", value: 28, color: "#7c3aed" },
    { name: "Organic", value: 22, color: "#6d28d9" },
    { name: "Email", value: 10, color: "#5b21b6" },
    { name: "Affiliate", value: 5, color: "#4c1d95" },
  ];

  const kpis = [
    { title: "Total Revenue", value: "$331,000", change: "+12.5%", trend: "up", icon: <DollarSign size={26} /> },
    { title: "Total Orders", value: "2,383", change: "+8.2%", trend: "up", icon: <ShoppingCart size={26} /> },
    { title: "Avg Order Value", value: "$138.93", change: "+3.8%", trend: "up", icon: <TrendingUp size={26} /> },
    { title: "Conversion Rate", value: "12.6%", change: "-1.2%", trend: "down", icon: <Target size={26} /> },
  ];

  const topProducts = [
    { name: "Wireless Earbuds", sales: 230 },
    { name: "Gaming Keyboard", sales: 180 },
    { name: "Smart Watch", sales: 160 },
  ];

  const alerts = [
    { product: "Wireless Earbuds", stock: 23, status: "low" },
    { product: "Gaming Keyboard", stock: 8, status: "critical" },
  ];

  const aiInsights = [
    { icon: <Zap size={20} />, title: "Growth Forecast", desc: "Revenue expected to rise by 10–12% next month." },
    { icon: <BarChart2 size={20} />, title: "High Demand", desc: "Smart Watches likely to dominate next quarter." },
    { icon: <Users size={20} />, title: "Retention Boost", desc: "Loyalty program could increase retention by 8%." },
  ];

  const customers = [
    { name: "Sarah Johnson", orders: 15, revenue: 2300, icon: <UserPlus size={26} /> },
    { name: "David Smith", orders: 12, revenue: 1980, icon: <UserPlus size={26} /> },
    { name: "Emily Clark", orders: 8, revenue: 1250, icon: <UserPlus size={26} /> },
  ];

  const subscriptions = [
    { plan: "Basic", users: 120, revenue: 1200, icon: <Star size={26} /> },
    { plan: "Pro", users: 75, revenue: 4500, icon: <Star size={26} /> },
    { plan: "Enterprise", users: 20, revenue: 8000, icon: <Star size={26} /> },
  ];

  return (
    <div className="dashboard">
      <header className="header">
        <h1>Lit’e E-Commerce Analytics Dashboard</h1>
        <p>Sales, Marketing, Products, Customer & Subscription Insights</p>
      </header>

      {/* KPI Section */}
      <div className="kpi-section">
        {kpis.map((k, i) => (
          <div key={i} className="kpi-card">
            <div className="kpi-icon">{k.icon}</div>
            <h3>{k.title}</h3>
            <h2>{k.value}</h2>
            <p className={k.trend === "up" ? "up" : "down"}>{k.change}</p>
          </div>
        ))}
      </div>

      {/* Revenue vs Profit */}
      <div className="chart-row single">
        <div className="chart-card full">
          <h3>Revenue vs Profit</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="month" stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#8b5cf6" strokeWidth={3} dot={{ r: 5 }} />
              <Line type="monotone" dataKey="profit" stroke="#7c3aed" strokeWidth={3} dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Marketing + Conversion Funnel */}
      <div className="chart-row">
        <div className="chart-card half">
          <h3>Marketing Channel Distribution</h3>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie data={trafficData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
                {trafficData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card half">
          <h3>Conversion Funnel</h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={funnelData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="stage" stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="users" stroke="#a855f7" strokeWidth={3} dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Products + Inventory Alerts */}
      <div className="chart-row">
        <div className="chart-card half">
          <h3>Top Performing Products</h3>
          {topProducts.map((p, i) => (
            <div key={i} className="product-item">
              <div className="product-name">{p.name}</div>
              <div className="product-sales">{p.sales} sales</div>
            </div>
          ))}
        </div>

        <div className="chart-card half">
  <h3><AlertTriangle size={20} /> Inventory Alerts</h3>
  {alerts.map((a, i) => (
    <div key={i} className={`alert-item ${a.status.toLowerCase()}`}>
      <div className="alert-info">
        <p>
          {a.product} - <span className={`badge ${a.status.toLowerCase()}`}>{a.status}</span>
        </p>
        <p>Only {a.stock} units left</p>
      </div>
      <button className="reorder-btn">
        <Package size={14} /> Reorder
      </button>
    </div>
  ))}
</div>
</div>


{/* Campaign ROI Analysis */}
<div className="chart-row single">
  <div className="chart-card full">
    <h3>Campaign ROI Analysis</h3>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={[
          { campaign: "Google Ads", roi: 145 },
          { campaign: "Meta Ads", roi: 132 },
          { campaign: "Email Marketing", roi: 168 },
          { campaign: "Affiliate", roi: 120 },
          { campaign: "Influencer", roi: 155 },
        ]}
        margin={{ top: 20, right: 30, left: 0, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        <XAxis dataKey="campaign" stroke="#aaa" />
        <YAxis stroke="#aaa" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="roi"
          stroke="#a855f7"
          strokeWidth={3}
          dot={{ r: 5 }}
          activeDot={{ r: 7 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
</div>



<div className="chart-row">
  {/* Email Marketing Performance */}
  <div className="chart-card half">
    <h3>Email Marketing</h3>
    <p className="subtext">Campaign performance metrics</p>
    <div className="email-metrics">
      <div className="metric-item">
        <span>Open Rate</span>
        <h2>28.5%</h2>
      </div>
      <div className="metric-item">
        <span>Click Rate</span>
        <h2>4.2%</h2>
      </div>
      <div className="metric-item">
        <span>Conversion</span>
        <h2>2.8%</h2>
      </div>
      <div className="metric-item">
        <span>Campaigns</span>
        <h2>24</h2>
      </div>
    </div>
  </div>

  {/* Affiliate Performance */}
  <div className="chart-card half">
  <h3>Affiliate Performance</h3>
  <p className="subtext">Top affiliate partners</p>

  <div className="affiliate-list">
    {[
      {
        name: "TechReview.com",
        revenue: "$9,350",
        clicks: "2,340 clicks",
        conversions: "187 conversions",
        cvr: "8.0% CVR",
      },
      {
        name: "GadgetBlog.io",
        revenue: "$7,250",
        clicks: "1,890 clicks",
        conversions: "145 conversions",
        cvr: "7.7% CVR",
      },
      {
        name: "ElectroHub.net",
        revenue: "$4,900",
        clicks: "1,560 clicks",
        conversions: "98 conversions",
        cvr: "6.3% CVR",
      },
    ].map((affiliate, i) => (
      <div key={i} className="affiliate-item">
        <div className="affiliate-top">
          <h4>{affiliate.name}</h4>
          <span className="affiliate-revenue">{affiliate.revenue}</span>
        </div>
        <div className="affiliate-stats">
          <span>{affiliate.clicks}</span>
          <span>{affiliate.conversions}</span>
          <span>{affiliate.cvr}</span>
        </div>
      </div>
    ))}
  </div>
</div>
</div>



{/* Device & Platform Analytics */}
<div className="chart-row single">
  <div className="chart-card full">
    <h3>Device & Platform Analytics</h3>
    <p className="subtext">User behavior breakdown by device type</p>

    <div className="device-metrics">
      <div className="device-item">
        <div className="device-header">
          <h4>Mobile</h4>
        </div>
        <div className="device-stats">
          <p>Visitors <span  style={{ color: "white" }}>6,500</span></p>
          <p>Conversion <span  style={{ color: "red" }}>12.6%</span></p>
          <p>Bounce Rate <span  style={{ color: "green" }}>42%</span></p>
          <p>Avg Session <span  style={{ color: "white" }}>3.2 min</span></p>
        </div>
      </div>

      <div className="device-item">
        <div className="device-header">
          <h4>Desktop</h4>
        </div>
        <div className="device-stats">
          <p>Visitors <span  style={{ color: "white" }}>3,200</span></p>
          <p>Conversion <span  style={{ color: "red" }}>21.3%</span></p>
          <p>Bounce Rate <span  style={{ color: "green" }}>28%</span></p>
          <p>Avg Session <span style={{ color: "white" }}>5.8 min</span></p>
        </div>
      </div>

      <div className="device-item">
        <div className="device-header">
          <h4>Tablet</h4>
        </div>
        <div className="device-stats">
          <p>Visitors <span style={{ color: "white" }}>1,300</span></p>
          <p>Conversion <span  style={{ color: "red" }}>11.2%</span></p>
          <p>Bounce Rate <span  style={{ color: "green" }}>35%</span></p>
          <p>Avg Session <span  style={{ color: "white" }}>4.1 min</span></p>
        </div>
      </div>
    </div>

    {/* Histogram Chart */}
    <ResponsiveContainer width="100%" height={300}>
  <BarChart
    data={[
      { name: "Mobile", Visitors: 6500, Purchases: 820 },
      { name: "Desktop", Visitors: 3200, Purchases: 680 },
      { name: "Tablet", Visitors: 1300, Purchases: 220 },
    ]}
    margin={{ top: 30, right: 30, left: 0, bottom: 10 }}
  >
    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
    <XAxis dataKey="name" stroke="#ccc" />
    <YAxis stroke="#ccc" />
    <Tooltip
      cursor={{ fill: "transparent" }} // removes the grey hover rectangle
      contentStyle={{
        backgroundColor: "#0b0b0d",
        border: "1px solid #7c3aed",
        color: "#fff",
      }}
    />
    <Legend />
    <Bar dataKey="Visitors" fill="#a855f7" radius={[6, 6, 0, 0]} barSize={40} />
    <Bar dataKey="Purchases" fill="#4ade80" radius={[6, 6, 0, 0]} barSize={40} />
  </BarChart>
</ResponsiveContainer>
  </div>
</div>


{/* ===== Subscription Analytics ===== */}
<div className="section">
  <h3>Subscription Analytics</h3>
  <p className="section-subtitle">MRR, active subscriptions, and churn metrics</p>

  <div className="subscription-metrics">
    <div className="metric-card">
      <h4>MRR</h4>
      <h2>$58,900</h2>
      <p className="positive">+8.7% vs last month</p>
    </div>

    <div className="metric-card">
      <h4>Active Subscribers</h4>
      <h2>1,562</h2>
      <p className="positive">+8.8% vs last month</p>
    </div>

    <div className="metric-card">
      <h4>Churn Rate</h4>
      <h2>4.2%</h2>
      <p className="negative">-0.8% vs last month</p>
    </div>
  </div>

  <div className="subscription-chart">
  <ResponsiveContainer width="100%" height={250}>
    <LineChart
      data={[
        { month: "Jan", value: 4200 },
        { month: "Feb", value: 4600 },
        { month: "Mar", value: 4900 },
        { month: "Apr", value: 5200 },
        { month: "May", value: 5600 },
        { month: "Jun", value: 5890 },
      ]}
    >
      <CartesianGrid stroke="#1a1a1a" />
      <XAxis dataKey="month" stroke="#ccc" />
      <YAxis stroke="#ccc" />
      <Tooltip
        contentStyle={{
          backgroundColor: "#0b0b0d",
          border: "1px solid #7c3aed",
          color: "#fff",
        }}
        cursor={{ stroke: "transparent", fill: "transparent" }} // no grey hover
      />
      <Line
        type="monotone"
        dataKey="value"
        stroke="#7c3aed"
        strokeWidth={3}
        dot={{ r: 5, fill: "#a855f7" }}
        activeDot={{ r: 7, fill: "#c084fc" }}
      />
    </LineChart>
  </ResponsiveContainer>
</div>
</div>

<div className="vendor-performance">
  <h3>Vendor / Partner Performance</h3>
  <p className="subtext">Track vendor sales, commissions, and return rates</p>
  <div className="vendor-list">
    {[
      { name: "TechSupply Co.", products: 23, sales: "$89,450", commission: "$8,945", returnRate: "2.3%", status: "excellent" },
      { name: "Electronics Hub", products: 18, sales: "$67,200", commission: "$6,720", returnRate: "3.1%", status: "good" },
      { name: "Gadget Masters", products: 15, sales: "$54,800", commission: "$5,480", returnRate: "4.5%", status: "average" },
      { name: "Premium Imports", products: 12, sales: "$42,300", commission: "$4,230", returnRate: "5.8%", status: "average" },
    ].map((vendor, i) => (
      <div key={i} className="vendor-item">
        <div className="vendor-left">
          <h4>{vendor.name}</h4>
          <p>{vendor.products} products</p>
          <p>Total Sales<br /><strong>{vendor.sales}</strong></p>
        </div>
        <div className="vendor-center">
          <p>Commission<br /><strong>{vendor.commission}</strong></p>
        </div>
        <div className="vendor-right">
          <p>Return Rate<br />
            <strong className={`return-${vendor.status}`}>{vendor.returnRate}</strong>
          </p>
          <span className={`status-badge ${vendor.status}`}>{vendor.status}</span>
        </div>
      </div>
    ))}
  </div>
</div>


{/* Customer Sentiment & Most Reviewed Products */}
<div className="chart-row">
  {/* Customer Sentiment Analysis */}
  <div className="chart-card half">
    <h3>Customer Sentiment Analysis</h3>
    <ResponsiveContainer width="100%" height={280}>
      <PieChart>
        <Pie
          data={[
            { name: "Positive", value: 65, color: "#10b981" },
            { name: "Neutral", value: 20, color: "#fbbf24" },
            { name: "Negative", value: 15, color: "#ef4444" },
          ]}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
        >
          {[
            { name: "Positive", value: 65, color: "#10b981" },
            { name: "Neutral", value: 20, color: "#fbbf24" },
            { name: "Negative", value: 15, color: "#ef4444" },
          ].map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  </div>

  {/* Most Reviewed Products */}
  <div className="chart-card half">
    <h3>Most Reviewed Products</h3>
    <div className="product-list">
      {[
        { name: "Wireless Earbuds", reviews: 128 },
        { name: "Gaming Keyboard", reviews: 95 },
        { name: "Smart Watch", reviews: 87 },
        { name: "Bluetooth Speaker", reviews: 73 },
        { name: "Laptop Stand", reviews: 65 },
      ].map((product, i) => (
        <div key={i} className="product-item">
          <div className="product-name">{product.name}</div>
          <div className="product-reviews">{product.reviews} reviews</div>
        </div>
      ))}
    </div>
  </div>
</div>


      {/* AI-Powered Insights - 3 Rows */}
<div className="ai-insights-section">
  <h3>AI-Powered Insights</h3>
  <p className="subtext">Intelligent suggestions to optimize your business</p>

  {/* Row 1 */}
  <div className="ai-insights-row">
    <div className="ai-insight-card">
      <h4>Best-selling product this week</h4>
      <p><strong>Premium Wireless Earbuds</strong> generated <strong>$124,300</strong> in revenue with a <strong>42% profit margin</strong>.</p>
      <button className="action-btn">View product details</button>
    </div>
  </div>

  {/* Row 2 */}
  <div className="ai-insights-row">
    <div className="ai-insight-card">
      <h4>Stock alert prediction</h4>
      <p><strong>Gaming Keyboard RGB</strong> is projected to run out in 3 days based on current sales velocity.</p>
      <button className="action-btn alert">Reorder now</button>
    </div>
    
  </div>

  {/* Row 3 */}
  <div className="ai-insights-row">
    <div className="ai-insight-card">
      <h4>Marketing optimization</h4>
      <p>Running a 20% ad budget boost on <strong>Google Ads</strong> could increase conversions by 15% based on historical data.</p>
      <button className="action-btn">Optimize campaigns</button>
    </div>
  </div>
</div>

      {/* Customer Metrics */}
<div className="customer-metrics-section">
  <h3>Customer Metrics</h3>
  <div className="customer-metrics-cards">
    {/* Total Customers */}
    <div className="customer-metric-card">
      <h4>Total Customers</h4>
      <p className="metric-value">8,492</p>
      <p className="sub-metric">New Customers: 1,245 (42%)</p>
    </div>

    {/* Avg Customer LTV */}
    <div className="customer-metric-card">
      <h4>Avg Customer LTV</h4>
      <p className="metric-value">$2,847</p>
      <p className="sub-metric">Retention Rate: 68.5%</p>
    </div>

    {/* Cart Abandonment / Recovery */}
    <div className="customer-metric-card">
      <h4>Cart Abandonment</h4>
      <p className="metric-value">22.8%</p>
      <p className="sub-metric">Recovery Rate: 38.2%</p>
    </div>
  </div>
</div>

    </div>
  );
};

export default EcomAnalytics;
