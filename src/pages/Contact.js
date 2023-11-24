
import React from 'react';
import Navmenu from '../components/General/Nav';
import Header from '../components/General/Header';
import ContactForm from '../components/ContactForm';
import Footer from '../components/General/Footer';
import Country from '../components/General/Country';

function Contact() {
  return (
    <div>
      <Header />
      <Navmenu />
      <ContactForm />
      <Country />
      <Footer showBorderTop={true} />
    </div>
  );
}

export default Contact;
