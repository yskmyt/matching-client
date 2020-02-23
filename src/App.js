import React from 'react';
import Home from "./components/home.js"
import About from "./components/about.js"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/about">
              <About />
              <Link to="/">home</Link>
            </Route>
            <Route path="/">
              <Home />
              <Link to="/about">about</Link>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;

class Body extends React.Component {
  render() {
    return (
      <Container style={{maxWidth: "none"}}>
        <Row>
          <Col xl={3} style={{backgroundColor:"blue", height:"500px"}}>COLUMN 1</Col>
          <Col xl={9} style={{backgroundColor:"yellow", height:"500px"}}>COLUMN 2</Col>
        </Row>
      </Container>
    );
  }
}
