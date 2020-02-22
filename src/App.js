import React from 'react';
import Header from "./components/header.js"
import Footer from "./components/footer.js"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
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
    )
  }
}
