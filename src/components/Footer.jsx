import React from "react";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
        <a
          rel="noopener"
          href="https://github.com/nareshagrawal"
          aria-label="My GitHub"
          style={{
            color: "#fff", // White text
            fontWeight: "bold", // Make it bold
            textDecoration: "none", // Remove underline
            backgroundColor: "#343a40", // Dark gray/black background (Bootstrap dark)
            padding: "4px 8px", // Padding for the badge effect
            borderRadius: "5px", // Rounded edges
            display: "inline-block" // Ensure proper spacing and alignment
          }}
        >
          Naresh Agrawal
        </a>{" "}
        using <i className="fab fa-react" />
      </Container>
    </footer>
  );
};

export default Footer;
