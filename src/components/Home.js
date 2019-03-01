import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Description from './Description';
import Signup from './Signup';
import Header from './Header';
import Footer from './Footer';

const styles = {
  containerStyles: {
    marginTop: '80px',
    paddingTop: '20px'
  }
};

const Home = () => {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
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

export default Home;
