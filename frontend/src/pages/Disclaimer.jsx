import React from 'react';

const Disclaimer = () => {

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

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Disclaimer</h1>

            <h2 style={subHeadingStyle}>Use at Your Own Risk</h2>
            <p style={textStyle}>
                This website and its contents are provided on an "as is" basis without warranties of any kind, either express or implied. 
                We do not warrant that the information on this website is accurate, complete, or current.
            </p>

            <h2 style={subHeadingStyle}>Product Information</h2>
            <p style={textStyle}>
                While we strive to provide accurate product descriptions and pricing, we do not guarantee that all product information is 
                error-free. Product images are for illustrative purposes only and may not represent the exact product. Actual colors, sizes, 
                and specifications may vary. We reserve the right to correct any errors in product descriptions or pricing.
            </p>

            <h2 style={subHeadingStyle}>Availability</h2>
            <p style={textStyle}>
                Product availability is subject to change without notice. We reserve the right to discontinue any product at any time. 
                In the event of unavailability, we will notify you and either offer an alternative product or process a full refund.
            </p>

            <h2 style={subHeadingStyle}>Limitation of Liability</h2>
            <p style={textStyle}>
                In no event shall our company be liable for any indirect, incidental, special, or consequential damages arising from 
                the use of or inability to use this website or the products purchased herein, even if we have been advised of the 
                possibility of such damages.
            </p>

            <h2 style={subHeadingStyle}>Intellectual Property Rights</h2>
            <p style={textStyle}>
                All content on this website, including text, graphics, logos, and images, is the property of our company or our content 
                suppliers and is protected by international copyright laws. Unauthorized reproduction or distribution is prohibited.
            </p>

            <h2 style={subHeadingStyle}>Third-Party Links</h2>
            <p style={textStyle}>
                This website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices 
                of these external sites. Your use of third-party websites is at your own risk and subject to their terms and conditions.
            </p>

            <h2 style={subHeadingStyle}>Changes to Disclaimer</h2>
            <p style={textStyle}>
                We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon posting to the website. 
                Your continued use of this website following any changes constitutes your acceptance of the updated disclaimer.
            </p>

            <h2 style={subHeadingStyle}>Contact Us</h2>
            <p style={textStyle}>
                If you have any questions about this disclaimer, please contact us at contact@example.com
            </p>

            <p style={{ fontSize: '12px', color: '#71717a', marginTop: '40px', textAlign: 'center' }}>
                Last updated: September 2024
            </p>
        </div>
    );
};

export default Disclaimer;
