import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

const Header = () => (
  <div
    style={{ width: "30%", backgroundColor: "red", position: "fixed", left: 0 }}
  >
    <div
      style={{
        margin: "0 auto",
        padding: "1.45rem 1.0875rem"
      }}
    >
      <h1 style={{ margin: 0, fontSize: 16 }}>
        <Link
          to="/"
          style={{
            color: "#2c2c2c",
            textDecoration: "none"
          }}
        >
          Serrano Arévalo
        </Link>
      </h1>
    </div>
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Serrano Arévalo"
      meta={[
        {
          name: "description",
          content: "I like to travel the world and to take photos."
        },
        { name: "keywords", content: "nomad, photography" }
      ]}
    />
    <div
      style={{
        paddingTop: 0
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
