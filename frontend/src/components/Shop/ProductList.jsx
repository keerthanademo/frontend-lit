import React, { useEffect, useRef, useState } from 'react';
import ProductCard from './ProductCard';
import { useNavigate } from 'react-router-dom';
import '/src/styles/ProductList.css';

const ProductList = ({ products, isSearch }) => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  // ✅ State for pagination and show more
  const [currentPage, setCurrentPage] = useState(1);
  const [showAll, setShowAll] = useState(false);
  const productsPerPage = 3;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // ✅ If Show All → display everything, else paginate
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const displayedProducts = showAll
    ? products
    : products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  // ✅ Function to generate limited page numbers
  // const getPageNumbers = () => {
  //   const pages = [];
  //   if (totalPages <= 3) {
  //     for (let i = 1; i <= totalPages; i++) pages.push(i);
  //   } else {
  //     if (currentPage === 1) pages.push(1, 2, 3);
  //     else if (currentPage === totalPages) pages.push(totalPages - 2, totalPages - 1, totalPages);
  //     else pages.push(currentPage - 1, currentPage, currentPage + 1);
  //   }
  //   return pages;
  // };

  return (
    <section className="products-section" ref={sectionRef}>
      <div>
        {!isSearch && <h2 className="section-title">Fresh Arrivals</h2>}
        <div className="product-list-container">
          <div className="product-grid">
            {Array.isArray(displayedProducts) &&
              displayedProducts.map((product) => (
                <ProductCard
                  key={product._id || product?.document?._id}
                  product={product.document || product}
                />
              ))}
          </div>
        </div>

        {/* ✅ Pagination + Show More in one row */}
        {/* {products.length > productsPerPage && (
  <div className="pagination-wrapper">
    <div className="show-more-wrapper">
      <button
        className="see-more-btn"
        onClick={() => setShowAll((prev) => !prev)}
      >
        {showAll ? 'Show Less' : 'Show More'}
      </button>
    </div>

    {!showAll && totalPages > 1 && (
      <div className="pagination-container">
        <button
          className="pagination-btn"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          «
        </button>

        {getPageNumbers().map((num) => (
          <button
            key={num}
            className={`pagination-number ${currentPage === num ? 'active' : ''}`}
            onClick={() => setCurrentPage(num)}
          >
            {num}
          </button>
        ))}

        <button
          className="pagination-btn"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          »
        </button>
      </div>
    )}
  </div>
)} */}

      </div>
    </section>
  );
};

export default ProductList;
