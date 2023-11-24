import React, { useState } from 'react';
import '../css/ContactForm.css';

const submitEndpoint = 'http://localhost:3000/submit-form';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null); 

  const isValidEmail = (email) => {

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    const newErrors = {};


    if (!name) {
      newErrors.name = 'Please enter your name.';
    }


    if (!isValidEmail(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }


    if (!message) {
      newErrors.message = 'Please enter a message.';
    }

    setErrors(newErrors);


    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setSubmissionStatus('Submitting...');


      const data = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      fetch(submitEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',

        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {

          setSubmissionStatus('Form submitted successfully!');
          window.alert('Form sent!');
        })
        .catch((error) => {
          console.error('There was a problem with the fetch operation:', error);
          setSubmissionStatus('Failed to submit the form.');
          window.alert('Form not sent.');
        });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="contact-form-container">
      <div>
        <div className="flex-container">
          <div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="row">
                  <div className="col-md">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    {errors.name && <div className="error">{errors.name}</div>}
                  </div>
                  <div className="col-md">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && <div className="error">{errors.email}</div>}
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  className="form-control mt-2vh mb-2vh"
                  placeholder="Message"
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
                {errors.message && <div className="error">{errors.message}</div>}
              </div>
              <button className="btn btn-custom" type="submit">
                Submit
              </button>
            </form>
            {submissionStatus && <div className="submission-status">{submissionStatus}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
