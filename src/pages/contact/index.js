// src/pages/contact/index.js
import React from "react";
import Layout from "../../components/Layout";
import ContactForm from "../../components/ContactForm";

const ContactPage = () => (
  <Layout>
    <section className="section">
      <div className="container">
        <div className="content">
          <h1>Contact</h1>
          <ContactForm />
        </div>
      </div>
    </section>
  </Layout>
);

export default ContactPage;
