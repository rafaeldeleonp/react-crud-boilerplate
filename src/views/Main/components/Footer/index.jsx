import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import './style.scss';

const Footer = () => (
  <Grid className="footer">
    <Row>
      <Col xs={12}>
        <div>© {new Date().getFullYear()} Todos los derechos reservados. Dominican Auto Auction</div>
      </Col>
    </Row>
  </Grid>
);


export default Footer;
