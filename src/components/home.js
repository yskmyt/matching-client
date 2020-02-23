import React from 'react';
import Header from "./header.js"
import Footer from "./footer.js"

export default class Home extends React.Component {
  render() {
    return (
			<div>
				<Header />
				THIS IS HOME
				<Footer />
			</div>
    );
  }
}
