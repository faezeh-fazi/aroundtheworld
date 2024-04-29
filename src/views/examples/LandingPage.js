import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Button,
  CardText,
} from "reactstrap";

import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function LandingPage() {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">About AroundTheWorld</h2>
                <h5 className="description">
                  AroundTheWorld is your go-to destination for staying informed
                  about the latest global events and happenings. Our mission is
                  to provide you with curated updates on a diverse range of
                  topics, ensuring you're always in the know about what's
                  happening across the globe.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="4">
                  <Card style={{ width: "20rem" }}>
                    <img alt="Sample" src="https://i0.wp.com/www.touristjordan.com/wp-content/uploads/2023/02/shutterstock_1490981186-scaled.jpg?fit=4000%2C2751&ssl=1" />
                    <CardBody>
                      <CardTitle tag="h4">Petra</CardTitle>
                      <CardText>The Rose-Red City Carved in Stone</CardText>
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        Read more
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4">
                  <Card style={{ width: "20rem" }}>
                  <img alt="Sample" src="https://i.insider.com/5772d3c04321f142368b4774?width=1067" />
                    <CardBody>
                      <CardTitle tag="h4">The Great Barrier Reef</CardTitle>
                      <CardText>Underwater Wonderland of Biodiversity</CardText>
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        Read more
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4">
                  <Card style={{ width: "20rem" }}>
                  <img alt="Sample" src="https://media.cntraveler.com/photos/5c744bbbff54753046216f13/master/pass/Grand-Canyon-National-Park_GettyImages-152836923.jpg" />
                    <CardBody>
                      <CardTitle tag="h4">The Grand Canyon</CardTitle>
                      <CardText>
                        Nature's Masterpiece Carved Through Time
                      </CardText>
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        Read more
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>

        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;
