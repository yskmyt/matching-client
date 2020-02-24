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
	<Col  xl={4}>
		<Container className="item">
			<Row className="item-image">
				<Col xl={12}>
					IMAGE
				</Col>
			</Row>
			<Row className="item-top">
				<Col xl={12}>
					TITLE
					<h2>{item.title}</h2>
				</Col>
			</Row>
			<Row className="item-bottom">
				<Col xl={12}>
					USER
					<h3>{item.name}</h3>
				</Col>
			</Row>
		</Container>
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
          <Col xl={2}>
					<Sub />
				</Col>
          <Col xl={10}>
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
