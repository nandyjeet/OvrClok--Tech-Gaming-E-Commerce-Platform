import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#333',
            borderTop: '1px solid #444',
            padding: '40px 20px',
            marginTop: 'auto',
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '20px'
            }}>
                <div>
                    <h3 style={{ color: '#f97358', marginBottom: '10px' }}>OvrClok</h3>
                    <p style={{ color: '#aaa', marginBottom: '10px' }}>© 2024 OvrClok. All rights reserved.</p>
                </div>

                <div style={{ display: 'flex', gap: '20px' }}>
                    <Link to="/about" style={{ color: '#a4a4a4', textDecoration: 'none' }}>About Us</Link>
                    <Link to="/return" style={{ color: '#a4a4a4', textDecoration: 'none' }}>Return Policy</Link>
                    <Link to="/disclaimer" style={{ color: '#a4a4a4', textDecoration: 'none' }}>Disclaimer</Link>
                </div>

                <div style={{ color: '#a4a4a4' , fontSize: '0.9rem'}}>
                    &copy; {new Date().getFullYear()} OvrClok. All rights reserved.
                </div>

            </div>
        </footer>

    );
};

export default Footer;