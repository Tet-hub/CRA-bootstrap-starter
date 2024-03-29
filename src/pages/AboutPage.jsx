import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <section className="container min-vh-100">
      <div className="jumbotron">
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-4" />
        <p>
          It uses utility classNamees for typography and spacing to space
          content out within the larger container.
        </p>
        <p className="lead">
          <Link
            className="btn btn-primary btn-lg"
            to="/about/learn_more"
            role="button"
          >
            Learn more
          </Link>
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
