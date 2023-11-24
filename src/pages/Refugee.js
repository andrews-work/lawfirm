import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/General/Footer';
import Header from '../components/General/Header';
import Navmenu from '../components/General/Nav';
import Country from '../components/General/Country';
import beach from '../images/beach.jpg';
import '../css/Family.css';

function Refugee() {
  return (
    <div>
      <Header />
      <Navmenu />
      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-4 col-md-12 text-column">
            <section className="text-content">
              <div>
                <h4>Community Support Program</h4>
                <p>
                  The Community Support Program (CSP) is a program that ‘supports’ a humanitarian applicant to come to Australia. This visa program requires the support of an Approved Proposing Organisation (APO).
                </p>
                <p>
                  We can work with you to advise you about the requirements of CSP, assist you to apply to APOs, prepare a high-quality application and follow you through the whole process until visa grant.
                </p>
                <h4>Offshore Humanitarian Visas</h4>
                <p>If you are outside of Australia and have experienced persecution or substantial discrimination in your home country, or are an Australian citizen or permanent resident who knows someone who is experiencing persecution, contact us and we can advise you about humanitarian visa options. The application process for humanitarian visas involves submitting detailed information about personal circumstances, reasons for seeking protection, and any supporting evidence.</p>
                <p>We can help you provide evidence of the persecution or discrimination you have faced or fear facing, such as documentation or witness statements. We can assist your sponsor to provide details of how they can help resettle you in Australia to strengthen your application.</p>
                <p>The Department of Home Affairs will assess the application and may conduct interviews to determine the validity of the claims made.</p>
                <h4>Protection Visas</h4>
                <p>If you are in Australia because you fear returning home, contact us for advice about whether you are eligible to apply for a protection visa.</p>
                <p>To apply for a protection visa in Australia, an individual must prove that they are a refugee or at risk of significant harm in their home country. The application process involves submitting detailed information about their personal circumstances, including reasons for seeking protection and any supporting evidence. The Department of Home Affairs will assess the application and may conduct interviews to determine the validity of the claims made.</p>
                <p>Contact us for advice and high-quality representation with your application, any request for further information, advocacy at your interview and submissions to the Department of Home Affairs.</p>
              </div>
            </section>
          </div>
          <div className="col-lg-3 col-md-12 image-column">
            <img src={beach} alt="Beach" />
          </div>
        </div>
      </div>
      <Country />
      <Footer showBorderTop={true} />
    </div>
  );
}

export default Refugee;
