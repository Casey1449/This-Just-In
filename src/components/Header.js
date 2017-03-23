import React from 'react';
import Navbar from './Navbar';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import AuthBox from '../containers/AuthBoxContainer';

export default () => {
  return (
    <div>
    <Grid role='header'>
      <Row className='header'>
        <Col xsHidden smHidden md={3}><div className='placeholder'> </div></Col>
        <Col xs={12} sm={6} md={6}><h1 className='main-banner'>This Just In!</h1></Col>
        <Col xs={12} sm={6} md={3}><AuthBox /></Col>
      </Row>
    </Grid>
      <Navbar />
    </div>
  );
};
