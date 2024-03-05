import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Reviews = () => {
  return (
    <div>
      <Container fluid id="review">
        <Container className="review_container">
          <h2>Client Review</h2>
          <p style={{ textAlign: "center", color: "rgb(253, 227, 193)" }}>
            I have had opportunities to work with potential clients and several
            personal project work as seen in my github handle. <br />
            Some of my project work includes
          </p>
          <Row className="d-flex flex-row justify-content-center">
            <Col md={7} className="review_col">
              <img
                src="Images/img1.jpg"
                alt=""
                width={70}
                height={70}
                className="rounded-circle"
              />
              <h6>Adeola Kabiesi</h6>
              <p>
                <i>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Amet mauris commodo quis imperdiet. Ullamcorper morbi
                  tincidunt ornare massa eget egestas purus viverra accumsan.
                  Cursus euismod quis viverra nibh cras.
                </i>{" "}
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Reviews;
