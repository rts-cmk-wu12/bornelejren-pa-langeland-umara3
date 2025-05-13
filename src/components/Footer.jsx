
import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
               
                
                <div className="footer-section">
                    <h3>Sekretariatet og administration</h3>
                    <p>Knud Bro Alle 1, st. mf., 3660 Stenløse</p>
                    <p>📞 Telefon: <a href="tel:38711260">38711260</a></p>
                    <p>📧 Email: <a href="mailto:info@lejren.dk">info@lejren.dk</a></p>
                    <p>🔗 <a href="http://www.lejren.dk" target="_blank" rel="noopener noreferrer">www.lejren.dk</a></p>
                    <p>SEnr: 26917425</p>
                </div>

                <div className="footer-section">
                    <h3>Bankoplysninger</h3>
                    <p>💳 Danske Bank: reg.nr. 1551 konto 10008182</p>
                    <p>💳 Merkur Bank: reg.nr. 8401 konto 1077819</p>
                    <p>💳 Merkur Bank: reg.nr. 8401 konto 4215119</p>
                    <p>📲 MobilePay: 27231</p>
                </div>

                <div className="footer-section">
                    <h3>Lejren</h3>
                    <p>Søgård Hovedgård</p>
                    <p>Søgårdsvej 8A, 5935 Bagenkop</p>
                </div>

               
            </div>
            <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Børnelejren på Langeland | Alle rettigheder forbeholdt</p>
                </div>
        </footer>
    );
};

export default Footer;
