import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import ProductList from "../components/ProductList";

const Shop = () => {
  
    return (
        <Container>
            <Row>
              <Col md={3}>
                  <TypeBar />
              </Col>
              <Col md={9}>
                  <ProductList />
              </Col>
            </Row>
        </Container>
    );
};

export default Shop;