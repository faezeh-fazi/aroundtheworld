/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
                <a
                  // href="https://www.creative-tim.com?ref=nukr-default-footer"
                  target="_blank"
                >
                  AROUNDTHEWORLD
                </a>
              </li>
              <li>
                <a
                  // href="http://presentation.creative-tim.com?ref=nukr-default-footer"
                  target="_blank"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  // href="http://blog.creative-tim.com?ref=nukr-default-footer"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
            </ul>
          </nav>

        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
