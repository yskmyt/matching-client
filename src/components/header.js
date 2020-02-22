import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header style={{
        backgroundColor: "orange",
        textAlign:"center",
        height: "50px"
      }}>
        <h2>THIS IS HEADER</h2>
      </header>
    );
  }
}
