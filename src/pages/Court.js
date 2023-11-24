import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/General/Footer';
import Header from '../components/General/Header';
import Navmenu from '../components/General/Nav';
import Country from '../components/General/Country';
import park from '../images/park.png.jpeg';
import '../css/Family.css';

function Court() {
  return (
    <div>
      <Header />
      <Navmenu />
      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-4 col-md-12 text-column">
            <section className="text-content">
              <h4>Administrative Appeals Tribunal</h4>
              <div>
                <p>If your visa is refused in Australia and you wish to appeal to the Administrative Appeals Tribunal (AAT), we can help you understand your legal rights and prepare a strong case for appeal.</p>
              </div>

              <h4>Cancellation</h4>
              <div>
                <p>Under the Migration Act 1958 (Cth), the Department of Home Affairs has the power to cancel a visa if the visa holder does not meet the conditions of their visa, if they provide false information, or if they are found to be of bad character.</p>
                <p>Some common reasons for cancellation include:</p>
                <div>
                  <p>Section 116: This section allows the Minister to cancel a visa if the visa holder does not meet the character requirements, including if they have a criminal record or pose a threat to national security.</p>
                  <p>Section 501: This section allows the Minister to cancel a visa if the visa holder fails the character test, including if they have been sentenced to imprisonment for 12 months or more.</p>
                  <p>Section 116(1)(e): This section allows the Minister to cancel a visa if the visa holder provided false or misleading information in their visa application or during their stay in Australia.</p>
                </div>
                <p>If your visa is cancelled in Australia, a lawyer can help you understand your legal rights and options for appeal. They can assist with preparing and submitting your appeal application, evidence, and submissions. Cancellations are complex issues that require specific and considered legal advice.</p>
              </div>

              <h4>Federal Court</h4>
              <div>
                <p>Appealing to court is a stressful and overwhelming experience. We can represent and guide you throughout the process at the Federal Circuit and Family Court of Australia and the Federal Court of Australia.</p>
                <p>We can review the decision that led to the visa refusal and identify any legal errors or procedural irregularities that may have occurred. We have expert skills in judicial review and can assist with the preparation of the appeal and developing legal arguments in your case.</p>
              </div>

              <h4>Ministerial Intervention</h4>
              <div>
                <p>A ministerial intervention under the Migration Act 1958 (Cth) is a discretionary power that allows the Minister for Immigration, Citizenship, Migrant Services and Multicultural Affairs to intervene in a case where a person has been refused a visa or had their visa cancelled and grant them a visa on compassionate or humanitarian grounds.</p>
                <p>To request ministerial intervention, the applicant must meet certain criteria and provide evidence to support their case. A lawyer can provide legal expertise and guidance on the ministerial intervention process, which is one of the most difficult processes for a visa applicant.</p>
                <p>We can help the applicant to present their case in the strongest possible way, highlighting the compelling and compassionate circumstances that support the request for intervention. We can also assist with drafting a detailed submission that addresses all the relevant issues and evidence.</p>
              </div>

              <h4>Other complex issues</h4>
              <div>
                <p>In complex visitor visa applications, it is recommended to seek the assistance of an experienced immigration lawyer who can provide guidance and support throughout the visa application process. The lawyer can help gather the necessary evidence, address any concerns or issues raised by the Department of Home Affairs, and advocate for the applicant's interests.</p>
                <p>This includes:</p>
                <p>Family or relationship issues: If the applicant has family or relationship issues, such as custody disputes or domestic violence issues, their application may be considered complex and require additional evidence and assessments.</p>
                <p>Criminal history: If the applicant has a criminal history, they may need to provide additional character documents, such as a police clearance certificate, and undergo a character assessment before being granted a visa. Character requirements for visas to Australia are set by the Department of Home Affairs and are designed to protect the Australian community from individuals who may pose a risk to national security or public order.</p>
                <p>Previous visa refusals: If the applicant has previously been refused a visa to Australia or has a history of immigration issues, their application may be considered complex and require additional evidence and explanations.</p>
                <p>Medical reasons: If the applicant has a medical condition that requires treatment in Australia, they may need to provide additional medical evidence and undergo a medical assessment before being granted a visa. A lawyer can provide guidance on the health waiver process, including what information and evidence you need to provide to support your application as well as help you to present your case in the strongest possible way, highlighting your positive attributes and demonstrating why you should be granted a health waiver.</p>
              </div>
            </section>
          </div>
          <div className="col-lg-3 col-md-12 image-column">
            <img src={park} alt="Park" />
          </div>
        </div>
      </div>
      <Country />
      <Footer showBorderTop={true} />
    </div>
  );
}

export default Court;
