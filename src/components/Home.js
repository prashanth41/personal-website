import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }
  render() {
    return (
      <div>
        <h2>Hi</h2>
        <p>
          My name's Prashanth Kandhuri. I am a programmer. I am interested in
          all things related to technology and science. I love playing all kinds
          of sports. I mostly play Cricket and Football.
        </p>
        <p>
          <span>Email: </span>prashanthkanduri66@gmail[dot]com
        </p>
        <p id="github">
          <span>Github: </span>
          <a href="https://github.com/prashanth41">prashanth41</a>
        </p>
      </div>
    );
  }
}

export default Home;
