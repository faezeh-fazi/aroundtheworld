import React from "react";

import { Container, Row, Col } from "reactstrap";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <div className="section section-about-us">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title">About AroundTheWorld</h2>
                  <h5 className="description">
                    AroundTheWorld is your go-to destination for staying
                    informed about the latest global events and happenings. Our
                    mission is to provide you with curated updates on a diverse
                    range of topics, ensuring you're always in the know about
                    what's happening across the globe.
                  </h5>
                </Col>
              </Row>
              <div className="separator separator-primary"></div>
              <div className="section-story-overview">
                <Row>
                  <Col md="6">
                    <div
                      className="image-container"
                      style={{
                        backgroundImage:
                          "url(" + require("assets/img/pyramid.webp") + ")",
                      }}
                    ></div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h3>
                      The Great Pyramid of Giza: A Marvel of Ancient Engineering
                    </h3>
                    <p>
                      The Great Pyramid of Giza stands as a testament to the
                      ingenuity and skill of ancient Egyptian civilization.
                      Built over 4,500 years ago, this architectural wonder
                      continues to captivate visitors with its sheer size and
                      precision construction. Explore the mysteries surrounding
                      its construction and learn about the cultural significance
                      of this iconic landmark.
                    </p>
                  </Col>
                  <Col md="5">
                    <div
                      className="image-container image-right"
                      style={{
                        backgroundImage:
                          "url(" + require("assets/img/machu.jpg") + ")",
                      }}
                    ></div>
                    <br></br>
                    <br></br>
                    <h3>Machu Picchu: Lost City of the Incas</h3>
                    <p>
                      Hidden high in the Andes Mountains of Peru, Machu Picchu
                      is an archaeological marvel that offers a glimpse into the
                      ancient Inca civilization. Journey through the terraced
                      hillsides and stone structures of this mysterious city,
                      and immerse yourself in the rich history and cultural
                      significance of this UNESCO World Heritage Site.
                    </p>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
