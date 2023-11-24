import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faHandHoldingDollar, faUserGraduate, faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import '../../css/Value.css';

function Value() {
  const iconStyle = {
    color: '#2a2fbe', // Use the same blue color
    marginBottom: '5px',
  };

  return (
    <div className="value-container">
      <div className="value-wrapper">
        <div className="value-item">
          <FontAwesomeIcon icon={faComments} size="3x" style={iconStyle} className="icon" />
          <h5 className="value-title mb-2">Communication</h5>
          <p className="value-text text-md">
            We basically fill out forms, going through them line by line. Different forms require different types of evidence.
          </p>
        </div>
        <div className="value-item">
          <FontAwesomeIcon icon={faHandHoldingDollar} size="3x" style={iconStyle} className="icon" />
          <h5 className="value-title mb-2">Reasonable Prices</h5>
          <p className="value-text text-md">
            We are upfront and operate on a fixed fee basis.
          </p>
        </div>
        <div className="value-item">
          <FontAwesomeIcon icon={faUserGraduate} size="3x" style={iconStyle} className="icon" />
          <h5 className="value-title mb-2">Expertise</h5>
          <p className="value-text text-md">
            We have the experience and qualifications to take on the most complex matters.
          </p>
        </div>
        <div className="value-item">
          <FontAwesomeIcon icon={faBalanceScale} size="3x" style={iconStyle} className="icon" />
          <h5 className="value-title mb-2">Ethical</h5>
          <p className="value-text text-md">
            We are always honest. We will be upfront with you and act in your best interests. We will work competently and diligently to provide you timely advice.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Value;
