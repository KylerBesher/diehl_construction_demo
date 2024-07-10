import * as React from "react";
import Layout from "../components/Layout";
import {Link} from "gatsby";

const NotFoundPage = () => (
  <Layout>
    <section className="hero is-fullheight is-dark is-bold">
      <div className="hero-body" style={{margin: '100px'}}>
        <div className="container has-text-centered">
          <h1 className="title is-1">404</h1>
          <h2 className="subtitle is-3">Page Not Found</h2>
          <p className="is-size-5">
            You just hit a route that doesn&#39;t exist...
          </p>
          <Link style={{margin: '20px'}} className='btn has-background-primary' to="/">
          Go Home
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
