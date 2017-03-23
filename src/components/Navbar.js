import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, Tabs, Tab, Button } from 'react-bootstrap';


module.exports = () => {

  return (
      <Nav bsStyle='tabs' justified activeKey={1}>
        <LinkContainer to='/SelectionPage'>
          <NavItem eventKey={7}>⚙ Settings</NavItem>
        </LinkContainer>
        <LinkContainer to='/main' >
        <NavItem eventKey={1}>Main</NavItem>
        </LinkContainer>
        <LinkContainer to='/sports' >
        <NavItem eventKey={2}>Sports</NavItem>
        </LinkContainer>
        <LinkContainer to='/business' >
        <NavItem eventKey={3}>Business</NavItem>
        </LinkContainer>
        <LinkContainer to='/tech' >
        <NavItem eventKey={4}>Tech</NavItem>
        </LinkContainer>
        <LinkContainer to='/world' >
        <NavItem eventKey={5}>World</NavItem>
        </LinkContainer>
        <LinkContainer to='/culture' >
        <NavItem eventKey={6}>Culture</NavItem>
        </LinkContainer>


      </Nav>
  );
};








// <LinkContainer to='/business'>
// <Tab>
// Business
// </Tab>
// </LinkContainer>
// <LinkContainer to='/tech'>
// <Tab>
// Tech & Science
// </Tab>
// </LinkContainer>
// <LinkContainer to='/world'>
// <Tab>
// World
// </Tab>
// </LinkContainer>
// <LinkContainer to='/culture'>
// <Tab>
// Pop Culture
// </Tab>
// </LinkContainer>
// </Tabs>
