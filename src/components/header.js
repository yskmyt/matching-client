import React from 'react';
import  {
  Nav,
  Navbar,
  Form,
  FormControl,
  Button
} from "react-bootstrap"

export default class Header extends React.Component {
  render() {
    return (
      <Navbar className="navbar" variant="dark">
        <Navbar.Brand href="/">Matching</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/user">User</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    );
  }
}
