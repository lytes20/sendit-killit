import React from 'react';
import { Row, Col } from 'react-bootstrap';

const styles = {
  rowStyles: {
    marginLeft: '-10px',
    marginRight: '-10px'
  }
};

export default () => {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <footer>
      <Row style={styles.rowStyles}>
        <Col>
          <ul>
            <li>
              <h4>CONTACT US</h4>
            </li>
            <li>Sendit, Plot 64</li>
            <li>Kiira Road, Kamwokya</li>
            <li>+256 312 347878</li>
            <li>info@sendit.com</li>
          </ul>
        </Col>
        <Col>
          <ul>
            <li>
              <h4>LATEST NEWS</h4>
            </li>
            <li className="listitemlink">Three Ways Wholesale distribution can improve planning</li>
            <li className='listitemlink'>Apply these 4 simple techniques to improve holiday sales for your small business</li>
          </ul>
        </Col>
        <Col>
          <ul>
            <li>
              <h4>SERVICES</h4>
            </li>
            <li className="listitemlink">Transportation</li>
            <li className="listitemlink">Warehousing</li>
            <li className="listitemlink">Courier Services</li>
            <li className="listitemlink">Customs Clearance</li>
            <li className="listitemlink">Project Forwarding</li>
          </ul>
        </Col> 
      </Row>
      <Row style={{...styles.rowStyles, backgroundColor: '#333' }}>
        <Col />
        <Col>
          <div className="copyryt">Sendit ©{new Date().getFullYear()}, ALL RIGHTS RESERVED</div>
        </Col>
        <Col />
      </Row>
    </footer>
  );
};
