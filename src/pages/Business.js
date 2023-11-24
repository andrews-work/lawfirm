import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/General/Footer';
import Header from '../components/General/Header';
import Navmenu from '../components/General/Nav';
import Country from '../components/General/Country';
import business from '../images/sydney.png';

function Business() {
  return (
    <div>
      <Header />
      <Navmenu />
      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-4 col-md-12 text-column">
            <section className="text-content">
              <div>
                <h4>Business and Innovation visas</h4>
                <p>
                  Business visas in Australia are designed to attract and support businesspeople who wish to establish or manage a business in Australia. There are several types of business visas available, each with their own requirements and conditions.
                </p>
                <p>
                  We can assist you with several visas, including Business Innovation and Investment visas for businesspeople who are willing to invest in or start a business in Australia, and Business Talent visas for high-caliber businesspeople who are willing to invest in or start a business in Australia.
                </p>
                <h4>Skilled visas</h4>
                <p>We assist with skilled visas, including:</p>
                <ul>
                  <li>Skilled Independent visa (subclass 189)</li>
                  <li>Skilled Nominated visa (subclass 190)</li>
                  <li>Skilled Work Regional (Provisional) visa (subclass 491)</li>
                  <li>Employer Nomination Scheme (subclass 186)</li>
                  <li>Regional Sponsored Migration Scheme (subclass 187)</li>
                </ul>
                <p>
                  We can guide you and represent you through the following steps generally involved in applying for a skilled visa:
                </p>
                <p>
                  Check if your occupation is on the relevant skilled occupation list and if you meet the other eligibility criteria, such as age, English language proficiency, and skills assessment. Submit an Expression of Interest in SkillSelect and provide information about your skills, qualifications, and work experience.
                </p>
                <p>
                  If you meet the eligibility criteria and have a competitive score, you may receive an invitation to apply for a skilled visa. We will then help you to prepare and submit your visa application, including supporting documents such as evidence of work experience, qualifications, and English language proficiency.
                </p>
                <p>We can also assist you in planning a path to permanent residency in Australia.</p>
              </div>
            </section>
          </div>
          <div className="col-lg-3 col-md-12 image-column"> {/* Keep the same image layout */}
            <img src={business} alt="Sydney" />
          </div>
        </div>
      </div>
      <Country />
      <Footer showBorderTop={true} />
    </div>
  );
}

export default Business;
