import React from 'react';
import { Row, Col } from 'react-bootstrap';
import facebook from '../Images/facebook.png';
import twitter from '../Images/twitter.png';
import youtube from '../Images/youtube.png';
import instagram from '../Images/instagram.png';


export default () => {
  return (
    <footer>
      <Row>
        <Col>
          <ul>
            <li><h4>CONTACT US</h4></li>
            <li>Sendit, Plot 64</li>
            <li>Kiira Road, Kamwokya</li>
            <li>+256 312 347878</li>
            <li>info@sendit.com</li>
          </ul>
        </Col>
        <Col>
          <ul>
            <li><h4>LATEST NEWS</h4></li>
            <li className='listitemlink'>Three Ways Wholesale distribution can improve planning</li>
            <li className='listitemlink'>Apply these 4 simple techniques to improve holiday sales for your small business</li>
          </ul>
        </Col>
        <Col>
          <ul>
            <li><h4>SERVICES</h4></li>
            <li className='listitemlink'>Transportation</li>
            <li className='listitemlink'>Warehousing</li>
            <li className='listitemlink'>Courier Services</li>
            <li className='listitemlink'>Customs Clearance</li>
            <li className='listitemlink'>Project Forwarding</li>
          </ul>
        </Col>
      </Row>
      <Row style={styles.copyrytStyles}>
        <Col>
           <ul>
               <li><a href="facebook"><img src={facebook}  width="20px" height="20px" alt="Facebook" /></a></li>
               <li><a href="twitter"><img src={twitter}  width="20px" height="20px" alt="Twitter" /></a></li>
               <li><a href="youtube"><img src={youtube} width="20px" height="20px" alt="Youtube" /></a></li>
               <li><a href="instagram"><img src={instagram}  width="20px" height="20px" alt="Instagram" /></a></li>
           </ul>
        </Col>
        <Col><div className='copyryt'>Sendit © {new Date().getFullYear()}, ALL RIGHTS RESERVED</div></Col>
        <Col>
        
        </Col>
      </Row>
    </footer>
  )
}

const styles = {
  copyrytStyles: {
    backgroundColor: '#000',
  }
}
