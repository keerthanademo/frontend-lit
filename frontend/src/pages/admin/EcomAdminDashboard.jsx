// C:\lit-integrated\frontend\src\pages\admin\EcomAdminDashboard.jsx

import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import EcomSidebar from '../../components/EcommerceAdmin/EcomSidebar';
import {
  FaTachometerAlt, FaChartLine, FaBoxOpen, FaTags, FaWarehouse,
  FaShoppingCart, FaDollarSign, FaUsers, FaEnvelope, FaCog
} from "react-icons/fa";

import '../../App.css';
import './EcomAdminDashboard.css';

// Mapping paths to titles/icons
const pageDetails = {
  ecomDashboard: { title: 'Dashboard', icon: <FaTachometerAlt /> },
  analytics: { title: 'Analytics', icon: <FaChartLine /> },
  products: { title: 'Products', icon: <FaBoxOpen /> },
  offers: { title: 'Offers', icon: <FaTags /> },
  inventory: { title: 'Inventory', icon: <FaWarehouse /> },
  orders: { title: 'Orders', icon: <FaShoppingCart /> },
  sales: { title: 'Sales', icon: <FaDollarSign /> },
  customers: { title: 'Customers', icon: <FaUsers /> },
  newsletter: { title: 'Newsletter', icon: <FaEnvelope /> },
  settings: { title: 'Settings', icon: <FaCog /> },
};

const EcomAdminDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState({ title: 'Dashboard', icon: <FaTachometerAlt /> });

  useEffect(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const currentPageKey = pathSegments[pathSegments.length - 1];
    const currentDetails = pageDetails[currentPageKey] || pageDetails.ecomDashboard;
    setCurrentPage(currentDetails);
    setIsSidebarOpen(false);
  }, [location]);

  const isDetailPage = location.pathname.includes('/products/') && location.pathname.split('/').length > 4;

  // 🔸 Detect if we are on offers page
  const isOffersPage = location.pathname.includes('/offers');

  return (
    <div className={`ecom-admin-layout ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      
      {/* 🔸 Hide Sidebar completely on offers page */}
      {!isOffersPage && (
        <EcomSidebar currentPage={currentPage} />
      )}

      {isSidebarOpen && !isOffersPage && (
        <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)}></div>
      )}

      <div className={`ecom-admin-content ${isOffersPage ? 'full-width' : ''}`}>
        {/* 🔸 Hide header on offers page */}
        {!isOffersPage && (
          <div className="admin-header">
            {isDetailPage ? (
              <button className="page-back-button" onClick={() => navigate(-1)}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                <span>Back to Products</span>
              </button>
            ) : (
              <h1 className="dashboard-title">{currentPage.title}</h1>
            )}

            <button className="mobile-menu-toggle" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              {isSidebarOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        )}

        {/* This renders OffersDashboard or any other nested page */}
        <Outlet />
      </div>
    </div>
  );
};

export default EcomAdminDashboard;
