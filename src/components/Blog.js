import React from "react";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: []
    };
  }

  render() {
    return (
      <div className="blog">
        <p>Blog posts here!</p>
      </div>
    );
  }
}

export default Blog;
