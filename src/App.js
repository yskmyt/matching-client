import React from 'react';
import Header from "./components/header.js"
import Footer from "./components/footer.js"

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;

class Body extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{
              textAlign: "center",
              backgroundColor: "red",
              height: "100px"
            }}>
            THIS IS BODY
        </h1>
      </div>
    )
  }
}
