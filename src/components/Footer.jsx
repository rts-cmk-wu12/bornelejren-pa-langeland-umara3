
import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2023 Lejren.dk. All rights reserved.</p>
                <p>Follow us on social media:</p>
                <ul className="social-media-links">
                    <li><a href="https://www.facebook.com/lejren.dk" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://www.instagram.com/lejren.dk" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    <li><a href="https://www.twitter.com/lejren.dk" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                </ul>
            </div>
        </footer>
    );
};
export default Footer;