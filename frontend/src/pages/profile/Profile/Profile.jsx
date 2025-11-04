import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import Leaderboard from '../../../components/Profile/Leaderboard/Leaderboard';
import Navbar from '../../../components/Newsletter-components/Navbar/Navbar';
import lockBeginner from '../../../assets/lock-beginner-new.png';
import lockAmateur from '../../../assets/lock-amateur-new.png';
import lockConnoisseur from '../../../assets/lock-connoisseur(1).png';
import beginnerFlip from '../../../assets/beginner-flip.png';
import amateurFlip from '../../../assets/amateur-flip.png';
import connoisseurFlip from '../../../assets/connoisseur-flip.png';
import { FaPencilAlt, FaCheck } from 'react-icons/fa';

const Profile = () => {
  const navigate = useNavigate();
  const [showBadgesPopup, setShowBadgesPopup] = React.useState(false);
  const [isEditingAccount, setIsEditingAccount] = React.useState(false);
  const [isEditingAddress, setIsEditingAddress] = React.useState(false);

  const [userInfo, setUserInfo] = React.useState({
    fullName: "John Doe",
    email: "John.Doe@Example.Com",
    phone: "+91 9874563210",
    memberSince: "January 2024",
    addresses: [
      { text: "123 Main Street\nApt 4B\nNew York, NY 10001\nUnited States", primary: true }
    ]
  });

  const handleCardClick = (e) => {
    if (e.target.closest('button')) return;
    navigate('/friend-list');
  };

  const handleBadgesCardClick = () => {
    setShowBadgesPopup(true);
  };

  const handleClosePopup = (e) => {
    if (e.target.classList.contains('badges-popup-overlay')) {
      setShowBadgesPopup(false);
    }
  };

  return (
    <div className="profile-page">
      <Navbar />
      <main className="profile-content">
        {/* Mobile-only profile header */}
        <div className="mobile-profile-header">
          <div className="mobile-header-bar">
            <img src="/src/assets/menu.svg" alt="Menu" className="mobile-header-menu" />
            <img src="/src/assets/lit-logo.png" alt="Logo" className="mobile-header-logo" />
            <img src="/src/assets/notification-icon.svg" alt="Notifications" className="mobile-header-bell" />
          </div>
          <div className="mobile-profile-avatar-wrapper">
            <img src="/src/assets/avatar.png" alt="avatar" className="mobile-profile-avatar" />
            <span className="mobile-profile-status-dot"></span>
          </div>
          <div className="mobile-profile-username">LuxuryinTaste</div>
          <div className="mobile-profile-location-pill">
            <span>Delhi</span>
            <img src="/src/assets/flag.png" alt="flag" className="mobile-profile-flag" />
          </div>
        </div>

        <section className="profile-main-info">
          <div className="profile-avatar">
            <img src="/src/assets/avatar.png" alt="avatar" />
          </div>
          <div className="profile-user-info">
            <div className="profile-username-row">
              <h1 className="profile-username">LuxuryinTaste</h1>
            </div>
            <div className="profile-handle">@Luxuryintaste267</div>
            <div className="profile-location">
              Delhi <img src="/src/assets/flag.png" alt="flag" style={{ width: '20px', height: '20px' }} />
            </div>
          </div>
        </section>

        <section className="profile-stats-row original-stats-row">
          <div className="profile-stats-card">
            <div className="profile-stats-label">Player Stats</div>
            <hr className="profile-section-hr" />
            <div className="profile-stats-values">
              <div className="profile-stat">
                <span className="stat-value">16</span>
                <span className="stat-label">Games Played</span>
              </div>
              <div className="profile-stat">
                <span className="stat-value">21</span>
                <span className="stat-label">Games Won</span>
              </div>
            </div>
          </div>

          <div className="profile-badges-card" onClick={handleBadgesCardClick} tabIndex={0} role="button" aria-label="View Badges">
            <div className="profile-stats-label">Badges</div>
            <hr className="profile-section-hr" />
            <div className="profile-badges-flex">
              <img src="/src/assets/badge.png" alt="Badge" className="profile-badge-img" />
              <div className="profile-points">
                <div className="points-label">Your Points</div>
                <div className="points-value">2803<span className="points-arrow">↑</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="profile-info-row">
          <div className="profile-info-cards-wrapper">

            {/* ✅ Editable Account Information (Inline Edit) */}
            <div className="account-information-card">
              <div className="profile-section-title">
                Account Information
                {!isEditingAccount ? (
                  <FaPencilAlt
                    className="edit-icon"
                    onClick={() => setIsEditingAccount(true)}
                    style={{ cursor: 'pointer' }}
                    title="Edit Account Info"
                  />
                ) : (
                  <FaCheck
                    className="save-icon"
                    onClick={() => setIsEditingAccount(false)}
                    style={{ cursor: 'pointer' }}
                    title="Save Account Info"
                  />
                )}
              </div>

              <div className="profile-info-list">
                <div className="profile-info-item">
                  <span className="info-label">Full Name</span>
                  <span
                    className="editable-text"
                    contentEditable={isEditingAccount}
                    suppressContentEditableWarning={true}
                    onInput={(e) => setUserInfo({ ...userInfo, fullName: e.target.innerText })}
                  >
                    {userInfo.fullName}
                  </span>
                </div>

                <div className="profile-info-item">
                  <span className="info-label">Email</span>
                  <span
                    className="editable-text"
                    contentEditable={isEditingAccount}
                    suppressContentEditableWarning={true}
                    onInput={(e) => setUserInfo({ ...userInfo, email: e.target.innerText })}
                  >
                    {userInfo.email}
                  </span>
                </div>

                <div className="profile-info-item">
                  <span className="info-label">Phone</span>
                  <span
                    className="editable-text"
                    contentEditable={isEditingAccount}
                    suppressContentEditableWarning={true}
                    onInput={(e) => setUserInfo({ ...userInfo, phone: e.target.innerText })}
                  >
                    {userInfo.phone}
                  </span>
                </div>

                <div className="profile-info-item">
                  <span className="info-label">Member Since</span>
                  <span
                    className="editable-text"
                    contentEditable={isEditingAccount}
                    suppressContentEditableWarning={true}
                    onInput={(e) => setUserInfo({ ...userInfo, memberSince: e.target.innerText })}
                  >
                    {userInfo.memberSince}
                  </span>
                </div>
              </div>
            </div>

            {/* ✅ Editable Shipping Addresses (Inline Edit) */}
            <div className="shipping-address-card">
              <div className="profile-section-title">
                Shipping Addresses
                {!isEditingAddress ? (
                  <FaPencilAlt
                    className="edit-icon"
                    onClick={() => setIsEditingAddress(true)}
                    style={{ cursor: 'pointer' }}
                    title="Edit Addresses"
                  />
                ) : (
                  <FaCheck
                    className="save-icon"
                    onClick={() => setIsEditingAddress(false)}
                    style={{ cursor: 'pointer' }}
                    title="Save Addresses"
                  />
                )}
              </div>

              <div className="profile-addresses-display">
                {userInfo.addresses.map((addr, idx) => (
  <div
    key={idx}
    className={`address-card ${addr.primary ? 'primary' : 'secondary'}`}
  >
    {/* Circle indicator */}
    <div className="address-circle"></div>

    {/* Text + label wrapper */}
    <div className="address-text-wrapper">
      <span
        className="editable-text"
        contentEditable={isEditingAddress}
        suppressContentEditableWarning={true}
        onInput={(e) => {
          const newAddresses = [...userInfo.addresses];
          newAddresses[idx].text = e.target.innerText;
          setUserInfo({ ...userInfo, addresses: newAddresses });
        }}
      >
        {addr.text}
      </span>
      <div className="address-label">
        {addr.primary ? 'Primary Address' : 'Secondary Address'}
      </div>
    </div>
  </div>
))}


                {isEditingAddress && (
                  <button
                    className="add-address-btn"
                    onClick={() => {
                      const newAddr = { text: 'New Address', primary: false };
                      setUserInfo({
                        ...userInfo,
                        addresses: [...userInfo.addresses, newAddr],
                      });
                    }}
                    style={{ marginTop: '0.5rem', background: 'black' }}
                  >
                    + Add Address
                  </button>
                )}
              </div>
            </div>

          </div>
        </section>

        <div className="order-details-container">
          <h2 style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '1.2rem' }}>Order Details</h2>
          <p>Currently No Orders</p>
        </div>

        <section className="profile-leaderboard-row">
          <Leaderboard />
        </section>
      </main>

      {/* === Badges Popup Modal === */}
      {showBadgesPopup && (
        <div className="badges-popup-overlay" onClick={handleClosePopup} style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 1000,
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <div className="badges-popup-modal" style={{
            background: 'var(--glass-bg)', borderRadius: '18px', padding: '0px', position: 'relative',
            minWidth: '65vw', minHeight: '55vh', display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(100px)',
            border: '1px solid var(--glass-border)', boxSizing: 'border-box',
            maxWidth: '98vw', maxHeight: '98vh', overflowY: 'visible'
          }}>
            <button onClick={() => setShowBadgesPopup(false)} style={{
              position: 'absolute', top: '-10px', right: '-15px', background: 'none', border: 'none',
              color: 'rgb(255, 255, 255)', fontSize: '32px', cursor: 'pointer', zIndex: 2, userSelect: 'none', outline: 'none'
            }} aria-label="Close">×</button>

            <div className="badges-title" style={{
              width: '100%', textAlign: 'center', margin: '2vw 0 1vw 0', color: '#fff', fontWeight: 700,
              fontSize: '2.5vw', letterSpacing: 3, fontFamily: 'Krona, sans-serif'
            }}>BADGES</div>

            <div className="badges-img-row" style={{
              display: 'flex', justifyContent: 'center', alignItems: 'end', gap: '6vw', marginBottom: '2.5vw'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="badges-img-flip-container">
                  <div className="badges-img-flip-card">
                    <div className="badges-img-flip-front">
                      <img className="badges-img" src={lockBeginner} alt="Beginner" style={{ width: '150px', height: '150px', marginBottom: '1vw' }} />
                    </div>
                    <div className="badges-img-flip-back">
                      <img className="badges-img" src={beginnerFlip} alt="Beginner New" style={{ width: '150px', height: '150px', marginBottom: '1vw' }} />
                    </div>
                  </div>
                </div>
                <span className="badges-label" style={{
                  color: '#fff', fontWeight: 600, fontSize: '2vw', letterSpacing: 2, marginTop: '1vw', fontFamily: 'Krona, sans-serif'
                }}>BEGINNER</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="badges-img-flip-container">
                  <div className="badges-img-flip-card">
                    <div className="badges-img-flip-front">
                      <img className="badges-img" src={lockAmateur} alt="Amateur" style={{ width: '150px', height: '150px', marginBottom: '1vw' }} />
                    </div>
                    <div className="badges-img-flip-back">
                      <img className="badges-img" src={amateurFlip} alt="Amateur New" style={{ width: '150px', height: '150px', marginBottom: '1vw' }} />
                    </div>
                  </div>
                </div>
                <span className="badges-label" style={{
                  color: '#fff', fontWeight: 600, fontSize: '2vw', letterSpacing: 2, marginTop: '1vw', fontFamily: 'Krona, sans-serif'
                }}>AMATEUR</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="badges-img-flip-container">
                  <div className="badges-img-flip-card">
                    <div className="badges-img-flip-front">
                      <img className="badges-img" src={lockConnoisseur} alt="Connoisseur" style={{ width: '150px', height: '150px', marginBottom: '1vw' }} />
                    </div>
                    <div className="badges-img-flip-back">
                      <img className="badges-img" src={connoisseurFlip} alt="Connoisseur New" style={{ width: '150px', height: '150px', marginBottom: '1vw' }} />
                    </div>
                  </div>
                </div>
                <span className="badges-label" style={{
                  color: '#fff', fontWeight: 600, fontSize: '2vw', letterSpacing: 2, marginTop: '1vw', fontFamily: 'Krona, sans-serif'
                }}>CONNOISSEUR</span>
              </div>
            </div>

            <div className="badges-desc" style={{
              color: '#fff', fontWeight: 500, fontSize: '2vw', marginTop: '1vw', textAlign: 'center',
              letterSpacing: 1, fontFamily: 'Krona, sans-serif'
            }}>win 11 games to achieve the badges</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
