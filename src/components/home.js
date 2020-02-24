import React from 'react';
import Header from "./header.js"
import Footer from "./footer.js"
import  {
	Container,
	Row,
	Col,
} from "react-bootstrap"
import items from "../data.json"

let listItems = items.items.map((item) =>
	<Col xl={4} style={{backgroundColor:"blue", height: "200px"}}>
		<h2>{item.title}</h2>
		<p>{item.name}</p>
	</Col>
	);

export default class Home extends React.Component {
  render() {
    return (
			<div>
				<Header />
				<Body />
				<Footer />
			</div>
    );
  }
}

class Body extends React.Component {
  render() {
    return (
      <Container style={{maxWidth: "none", backgroundColor:"#ffffcc"}}>
        <Row>
          <Col xl={3}>
					<Sub />
				</Col>
          <Col xl={9}>
					<Main  items= { items } />
				</Col>
        </Row>
      </Container>
    );
  }
}

class Main extends React.Component {
  render() {
    return (
			<Container style={{maxWidth: "none"}}>
				<Row>
					{listItems}
				</Row>
			</Container>
    );
  }
}

class Sub extends React.Component {
  render() {
    return (
			<Container style={{maxWidth: "none"}}>
				<Row>
					<Col xl={12} style={{backgroundColor:"black", height: "200px"}}></Col>
				</Row>
				<Row>
					<Col xl={12} style={{backgroundColor:"green", height: "200px"}}></Col>
				</Row>
			</Container>
    );
  }
}
