import React from "react";
import Layout from "../../components/Layout";

// eslint-disable-next-line
export default () => (
  <Layout>
    <section className="section">
      <div className="container">
        <div className="content has-text-centered">
          <h1 className="title is-1 has-text-primary">Thank You!</h1>
          <p className="subtitle is-4 has-text-grey-dark">
            We appreciate you getting in touch with us. One of our team members will get back to you shortly.
          </p>
          <div className="box">
            <p className="is-size-5 has-text-grey">
              If your inquiry is urgent, please use the telephone number listed below to talk to one of our staff members. Otherwise, we will reply by email as soon as possible.
            </p>
            <br />
            <p className="is-size-5 has-text-weight-bold">Contact Information</p>
            <p className="is-size-5">
              Phone: <a href="tel:+15551234567">(555) 123-4567</a>
            </p>
            <p className="is-size-5">
              Email: <a href="mailto:info@diehlconstruction.com">info@diehlconstruction.com</a>
            </p>
          </div>
          <div className="section">
            <p className="is-size-5">
              In the meantime, feel free to browse through our 
              <a href="/services"> services</a> or visit our 
              <a href="/blog"> blog</a> for the latest updates and insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);