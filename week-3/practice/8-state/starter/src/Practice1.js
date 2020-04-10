import React from "react";

class Practice1 extends React.Component {
  /*
    1. Create a state object
    2. Create a username property with a value of some username
  */

  // Example using the traditional constructor.
  // constructor( props ) {
  //   super( props );

  //   this.state = {
  //     userName: 'miguel'
  //   }
  // }

  // Example using simplified Class field syntax
  // Supported by Create React App.
  state = {
    userName: 'miguel'
  };

  render() {
    return <p>Username: { this.state.userName }</p>;
  }
}

export default Practice1;
