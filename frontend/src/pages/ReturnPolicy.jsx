import React from 'react';

const ReturnPolicy = () => {

    const containerStyle = {
        maxWidth: '900px',
        margin: '0 auto',
        padding: '40px',
        background: '#18181b',
        borderRadius: '16px',
        border: '1px solid #27272a',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
        textAlign: 'left'
    };

    const headingStyle = {
        fontSize: '32px',
        fontWeight: 'bold',
        marginBottom: '30px',
        color: '#fff',
        textAlign: 'center'
    };

    const subHeadingStyle = {
        fontSize: '18px',
        fontWeight: '600',
        marginTop: '25px',
        marginBottom: '15px',
        color: '#f97316'
    };

    const textStyle = {
        fontSize: '14px',
        color: '#a1a1a1',
        lineHeight: '1.8',
        marginBottom: '15px'
    };

    const listStyle = {
        fontSize: '14px',
        color: '#a1a1a1',
        lineHeight: '1.8',
        marginLeft: '20px',
        marginBottom: '15px'
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Return Policy</h1>

            <h2 style={subHeadingStyle}>30-Day Return Window</h2>
            <p style={textStyle}>
                We want you to be completely satisfied with your purchase. If you're not happy with your order, you can return most items 
                within 30 days of delivery for a full refund or exchange. Please note that the 30-day period starts from the date you receive 
                your order.
            </p>

            <h2 style={subHeadingStyle}>Eligibility Requirements</h2>
            <p style={textStyle}>To be eligible for a return, items must meet the following conditions:</p>
            <ul style={listStyle}>
                <li>Item must be in original, unused condition</li>
                <li>All original packaging and tags must be intact</li>
                <li>Item must be returned within 30 days of delivery</li>
                <li>Proof of purchase (order receipt) must be provided</li>
                <li>Item must not show signs of wear or damage from use</li>
            </ul>

            <h2 style={subHeadingStyle}>Non-Returnable Items</h2>
            <p style={textStyle}>The following items cannot be returned:</p>
            <ul style={listStyle}>
                <li>Clearance or final sale items</li>
                <li>Items without original tags or packaging</li>
                <li>Personalized or custom-made products</li>
                <li>Perishable items</li>
                <li>Intimate apparel (for hygiene reasons)</li>
                <li>Items damaged due to misuse or neglect</li>
            </ul>

            <h2 style={subHeadingStyle}>How to Initiate a Return</h2>
            <p style={textStyle}>
                To return an item, please follow these steps:
            </p>
            <ul style={listStyle}>
                <li>Contact our customer service team at support@example.com with your order number</li>
                <li>Provide a reason for the return</li>
                <li>Receive a return authorization number (RMA)</li>
                <li>Pack the item securely in its original packaging</li>
                <li>Ship the item with the RMA number clearly marked on the package</li>
            </ul>

            <h2 style={subHeadingStyle}>Shipping Costs</h2>
            <p style={textStyle}>
                For defective or damaged items, we will provide a prepaid return shipping label. For items returned due to change of mind 
                or incorrect order placement by the customer, shipping costs may apply. International returns are the responsibility of the 
                customer and may incur additional costs.
            </p>

            <h2 style={subHeadingStyle}>Refund Processing</h2>
            <p style={textStyle}>
                Once your returned item is received and inspected, we will process your refund within 5-7 business days. The refund will 
                be issued to your original payment method. Please note that depending on your financial institution, it may take an additional 
                3-5 business days for the funds to appear in your account.
            </p>

            <h2 style={subHeadingStyle}>Exchanges</h2>
            <p style={textStyle}>
                If you wish to exchange an item for a different size, color, or product, we can arrange this at no additional shipping cost 
                (for eligible returns). Simply note your exchange preference when contacting our customer service team.
            </p>

            <h2 style={subHeadingStyle}>Damaged or Defective Items</h2>
            <p style={textStyle}>
                If you receive a damaged or defective item, please contact us immediately with photos of the damage. We will arrange a full 
                refund or replacement at no cost to you, including prepaid return shipping.
            </p>

            <h2 style={subHeadingStyle}>Contact Us</h2>
            <p style={textStyle}>
                For any questions about our return policy or to initiate a return, please contact our customer service team at 
                support@example.com or call us at 1-800-EXAMPLE.
            </p>

            <p style={{ fontSize: '12px', color: '#71717a', marginTop: '40px', textAlign: 'center' }}>
                Last updated: September 2024
            </p>
        </div>
    );
};

export default ReturnPolicy;
