import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/General/Footer';
import Header from '../components/General/Header';
import Navmenu from '../components/General/Nav';
import Country from '../components/General/Country';
import flinders from '../images/flinders.png';
import '../css/Family.css';

function Family() {
  return (
    <div>
      <Header />
      <Navmenu />
      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-4 col-md-12 text-column">
            <section className="text-content">
              <div>
                <div>
                  <h4>Student visas</h4>
                  <div>
                    <p>We can provide you advice and options for commencing or continuing your study in Australia. We can advise you on visa requirements including genuine temporary entrant requirement, financial capacity and health and character requirements.</p>
                    <p>We can assist to prepare your supporting documents and advise you on the requirements you need to meet as well as completing, submitting and monitoring your application.</p>
                    <p>We can explain the conditions of the student visa, including work rights, study requirements, and visa expiry dates as well as also advising on the consequences of breaching any visa conditions.</p>
                  </div>
                </div>
                <div>
                  <h4>Visitor Visas</h4>
                  <div>
                    <p>To apply for a visitor visa in Australia, you must meet the following requirements:</p>
                    <div>
                      <p>- You intend to enter Australia for a temporary period and have no intention of staying in Australia permanently.</p>
                      <p>- You have sufficient funds to support yourself during your stay in Australia, including for accommodation, food, and travel expenses.</p>
                      <p>- You meet the health and character requirements set by the Department of Home Affairs.</p>
                      <p>- You have a genuine purpose of visit, such as tourism, visiting family or friends, or attending business meetings.</p>
                      <p>- You have no intention of working in Australia, except for limited volunteer work.</p>
                    </div>
                    <p>A lawyer can assist with the preparation and submission of the visa application, including gathering evidence and presenting it in a way that meets the Department of Home Affairs' requirements including complex applications.</p>
                  </div>
                </div>
                <div>
                  <h4>Citizenship applications</h4>
                  <div>
                    <p>We assist with all citizenship applications including citizenship by descent, citizenship by conferral, and evidence of Australian citizenship.</p>
                    <p>If you were born to an Australian citizen parent, were born in Australia and ordinarily resident until you were 10 years old or are a permanent resident who meets the requirements for citizenship contact us to apply for citizenship now.</p>
                  </div>
                </div>
                <div>
                  <h4>Partner visas</h4>
                  <div>
                    <p>We can assist you with prospective marriage visas, onshore partner visas, and offshore partner visas.</p>
                    <p>You may be eligible for these visas if you are engaged, married, or in a de-facto relationship with an Australian citizen or permanent resident. Contact us, and we can advise you what evidence is required to apply and assist with your application.</p>
                  </div>
                </div>
                <div>
                  <h4>Other family visas</h4>
                  <div>
                    <p>There are a range of other family visas including Carer visas, Parent visas, child visas, and Remaining Relative visas. Contact us for advice about whether you meet the requirements for these visas.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-lg-3 col-md-12 image-column">
            <img src={flinders} alt="Flinders" />
          </div>
        </div>
      </div>
      <Country />
      <Footer showBorderTop={true} />
      
    </div>
  );
}

export default Family;
