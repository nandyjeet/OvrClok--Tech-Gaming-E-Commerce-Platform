import Reaact from 'react';

const About = () => {

    const containerStyle = {
        maxWidth: '900px',
        margin: '0 auto',
        padding: '40px',
        background: '#18181b',
        borderRadius: '16px',
        border: '1px solid #27272a',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
        textAlign: 'center'
    };

    const socialBtnStyle = {
        display: 'inline-block',
        margin: '10px',
        padding: '10px 20px',
        background: '#27272a',
        color: '#fff',
        borderRadius: '8px',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        border: '1px solid #27272a'
    };

    return (
        <div style={containerStyle}>
            <img src="/OvrClok logo Light.png" alt="@jeetto_sama_" style={{ width: '180px', height: '180px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #f97316', marginBottom: '20px' , boxShadow: '0 4px 20px rgba(249, 115, 22, 0.4)'}} />
        
            <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '10px', color: '#fff' }}>About Us</h1>
            
            <p style={{ fontSize: '16px', color: '#a1a1a1', marginBottom: '30px', lineHeight: '1.6' }}>
                Welcome to our e-commerce platform! We're dedicated to providing you with the best shopping experience, 
                offering high-quality products and exceptional customer service. Our mission is to make online shopping 
                convenient, affordable, and enjoyable for everyone.
            </p>

            <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '20px', color: '#fff' }}>Connect With Us</h2>
            
            <div style={{ marginBottom: '20px' }}>
                <a href="https://twitter.com/jeetto_sama_" target="_blank" rel="noopener noreferrer" style={socialBtnStyle} onMouseOver={(e) => e.target.style.background = '#f97316'} onMouseOut={(e) => e.target.style.background = '#27272a'}>Twitter</a>
                <a href="https://instagram.com/jeetto_sama_" target="_blank" rel="noopener noreferrer" style={socialBtnStyle} onMouseOver={(e) => e.target.style.background = '#f97316'} onMouseOut={(e) => e.target.style.background = '#27272a'}>Instagram</a>
                <a href="https://github.com/jeetto_sama_" target="_blank" rel="noopener noreferrer" style={socialBtnStyle} onMouseOver={(e) => e.target.style.background = '#f97316'} onMouseOut={(e) => e.target.style.background = '#27272a'}>GitHub</a>
                <a href="mailto:contact@example.com" style={socialBtnStyle} onMouseOver={(e) => e.target.style.background = '#f97316'} onMouseOut={(e) => e.target.style.background = '#27272a'}>Email</a>
            </div>

            <p style={{ fontSize: '14px', color: '#71717a', marginTop: '30px' }}>© 2024 Overclock. All rights reserved.</p>
        </div>
    );
};

export default About;