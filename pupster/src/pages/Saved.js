import React from "react";
import Main from "../components/Main";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const Saved = () =>
  <div>
    <Main backgroundImage="">
      <h1>New York Times Article Scraper!</h1>
      <h2>Search for and annotate articles of interest!</h2>
    </Main>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Saved Articles Here:</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
        </Col>
      </Row>
    </Container>
  </div>;

export default Saved;
