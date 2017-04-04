import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { AutoAffix } from 'react-overlays';


module.exports = () => {

  return (
    <AutoAffix>
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse >
        <Nav activeKey={1}>
          <LinkContainer to='/SelectionPage'>
            <NavItem eventKey={7}>⚙ Your Sources</NavItem>
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
      </Navbar.Collapse>
    </Navbar>
    </AutoAffix>
  );
};

// <Navbar inverse collapseOnSelect>
//   <Navbar.Header>
//     <Navbar.Brand>
//       <a href="#">React-Bootstrap</a>
//     </Navbar.Brand>
//     <Navbar.Toggle />
//   </Navbar.Header>
//   <Navbar.Collapse>
//     <Nav>
//       <NavItem eventKey={1} href="#">Link</NavItem>
//       <NavItem eventKey={2} href="#">Link</NavItem>
//       <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
//         <MenuItem eventKey={3.1}>Action</MenuItem>
//         <MenuItem eventKey={3.2}>Another action</MenuItem>
//         <MenuItem eventKey={3.3}>Something else here</MenuItem>
//         <MenuItem divider />
//         <MenuItem eventKey={3.3}>Separated link</MenuItem>
//       </NavDropdown>
//     </Nav>
//     <Nav pullRight>
//       <NavItem eventKey={1} href="#">Link Right</NavItem>
//       <NavItem eventKey={2} href="#">Link Right</NavItem>
//     </Nav>
//   </Navbar.Collapse>
// </Navbar>
