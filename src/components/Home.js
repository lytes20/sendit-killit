import React from 'react';
import Description from './Description';
import Signup from './Signup';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="contain">
      <Header />
      <Container style={styles.containerStyles}>
        <Row>
          <Col>
            <Description />
          </Col>
          <Col>
            <Signup />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

const styles = {
  containerStyles: {
    marginTop: 80,
    paddingTop: 20,
  }
};
export default Home;
