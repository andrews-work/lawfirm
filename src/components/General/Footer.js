import React from 'react';
import '../../css/Footer.css'; // Import your custom CSS file (create a new one)

function Footer({ showBorderTop }) {
  const footerClass = showBorderTop ? 'footer-container with-border-top' : 'footer-container';

  return (
    <section className="eight">
      <div className={footerClass}>
        <h1 className="fs-6">admin@amirysvehla.com.au</h1>
        <h1 className="fs-6">0412 653 773</h1>
        <h1 className="fs-6">0400 452 995</h1>
        <h1 className="fs-6">ABN: 606 705 394 41</h1>
      </div>
    </section>
  );
}

export default Footer;
