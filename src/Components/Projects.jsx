import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Placeholder,
  Row,
} from "react-bootstrap";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation when the component mounts
    setIsVisible(true);
  }, []);

  return (
    <div>
      <section id="projects">
        <Container className="cards">
          <h1>Projects</h1>
          <p
            style={{ textAlign: "center", color: "rgb(253, 227, 193)" }}
            className="mb-5"
          >
            I give my best to projects, pay absolute attention to information
            given, to provide quality result to my potential clients. I am
            excited to bring my skills and experience to help businessses and
            companies achieve their goals to the fullest.{" "}
          </p>
          <Row className="d-flex flex-row justify-content-center mb-4">
            <Col md={3} className="cards_col">
              <div
                className={`slide-down-container ${isVisible ? "visible" : ""}`}
              >
                <p className="slide-down-text">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="2500"
                    className="absolute top=[100px] bottom=[-20px]"
                  >
                    <Placeholder as="p" animation="wave">
                      <a href="https://admin-dashboard-six-lilac.vercel.app/">
                        <img
                          src="Images/project10.JPG"
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                    </Placeholder>
                  </div>
                </p>
              </div>
            </Col>
            <Col md={3} className="cards_col">
              <div
                className={`slide-down-container ${isVisible ? "visible" : ""}`}
              >
                <p className="slide-down-text">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="2500"
                    className="absolute top=[100px] bottom=[-20px]"
                  >
                    <Placeholder as="p" animation="wave">
                      <a href="https://khan-portfolio-pi.vercel.app/">
                        <img
                          src="Images/project1.JPG"
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                    </Placeholder>
                  </div>
                </p>
              </div>
            </Col>
            <Col md={3} className="cards_col">
              <div
                className={`slide-down-container ${isVisible ? "visible" : ""}`}
              >
                <p className="slide-down-text">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="2500"
                    className="absolute top=[100px] bottom=[-20px]"
                  >
                    <Placeholder as="p" animation="wave">
                      <a href="https://cumunix-portfolio.vercel.app/">
                        <img
                          src="Images/project5.JPG"
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                    </Placeholder>
                  </div>
                </p>
              </div>
            </Col>
          </Row>
          <Row className="d-flex flex-row justify-content-center mb-4">
            <Col md={3} className="cards_col">
              <div
                className={`slide-down-container ${isVisible ? "visible" : ""}`}
              >
                <p className="slide-down-text">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="2500"
                    className="absolute top=[100px] bottom=[-20px]"
                  >
                    <Placeholder as="p" animation="wave">
                      <a href="https://exomac-portfolio.vercel.app/">
                        <img
                          src="Images/project4.JPG"
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                    </Placeholder>
                  </div>
                </p>
              </div>
            </Col>
            <Col md={3} className="cards_col">
              <div
                className={`slide-down-container ${isVisible ? "visible" : ""}`}
              >
                <p className="slide-down-text">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="2500"
                    className="absolute top=[100px] bottom=[-20px]"
                  >
                    <Placeholder as="p" animation="wave">
                      <a href="https://weather-app-omega-jade.vercel.app/">
                        <img
                          src="Images/project8.JPG"
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                    </Placeholder>
                  </div>
                </p>
              </div>
            </Col>
            <Col md={3} className="cards_col">
              <div
                className={`slide-down-container ${isVisible ? "visible" : ""}`}
              >
                <p className="slide-down-text">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="2500"
                    className="absolute top=[100px] bottom=[-20px]"
                  >
                    <Placeholder as="p" animation="wave">
                      <a href="https://globaly.vercel.app/">
                        <img
                          src="Images/project6.JPG"
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                    </Placeholder>
                  </div>
                </p>
              </div>
            </Col>
          </Row>
          <Row className="d-flex flex-row justify-content-center">
            <Col md={3} className="cards_col">
              <div
                className={`slide-down-container ${isVisible ? "visible" : ""}`}
              >
                <p className="slide-down-text">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="2500"
                    className="absolute top=[100px] bottom=[-20px]"
                  >
                    <Placeholder as="p" animation="wave">
                      <a href="https://ecommerce-with-react-eight.vercel.app/">
                        <img
                          src="Images/project2.JPG"
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                    </Placeholder>
                  </div>
                </p>
              </div>
            </Col>
            <Col md={3} className="cards_col">
              <div
                className={`slide-down-container ${isVisible ? "visible" : ""}`}
              >
                <p className="slide-down-text">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="2500"
                    className="absolute top=[100px] bottom=[-20px]"
                  >
                    <Placeholder as="p" animation="wave">
                      <a href="https://titania.vercel.app/">
                        <img
                          src="Images/project7.JPG"
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                    </Placeholder>
                  </div>
                </p>
              </div>
            </Col>
            <Col md={3} className="cards_col">
              <div
                className={`slide-down-container ${isVisible ? "visible" : ""}`}
              >
                <p className="slide-down-text">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="2500"
                    className="absolute top=[100px] bottom=[-20px]"
                  >
                    <Placeholder as="p" animation="wave">
                      <a href="https://shop-bite-eta.vercel.app/">
                        <img
                          src="Images/project9.JPG"
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                    </Placeholder>
                  </div>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Projects;
