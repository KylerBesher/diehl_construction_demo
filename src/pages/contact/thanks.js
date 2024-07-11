import React from "react";
import Layout from "../../components/Layout";

// eslint-disable-next-line
export default () => (
  <Layout>
    <section className="section">
      <div className="container">
        <div className="content has-text-centered">
          <h1 style={{marginBottom:"3rem"}} className="title is-1 has-text-primary">Thank You!</h1>
          <p className="subtitle is-4 has-text-grey-dark">
            We appreciate you getting in touch with us. 
          </p>
          <p className="subtitle is-4 has-text-grey-dark">
            One of our team members will get back to you shortly.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);