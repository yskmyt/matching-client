import React from 'react';
import Header from "./header.js"
import Footer from "./footer.js"

export default class About extends React.Component {
  render() {
    return (
			<div>
				<Header />
				THIS IS ABOUT
				<Footer />
			</div>
    );
  }
}
