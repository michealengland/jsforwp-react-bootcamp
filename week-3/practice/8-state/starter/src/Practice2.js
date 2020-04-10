import React from "react";

class Practice2 extends React.Component {
  state = {
    username: "yourusername"
  };

<<<<<<< HEAD
  /* 
    1. Create an arrow function named handleUsername
    2. Accept `e` as a parameter for the event object
    3. Update the value of username in state with the value 
        from the form (e.target.value)
  */
=======
  /*
    1. Create an arrow function named handleUsername
    2. Accept `e` as a parameter for the event object
    3. Update the value of username in state with the value
        from the form (e.target.value)
  */
  handleUsername = e => {
    console.log( e );
    return (
      this.setState(
        { username: e.target.value }
      )
    );
  };
>>>>>>> week-3/practice

  render() {
    return (
      <>
        <p>Username: {this.state.username}</p>
        <p>
<<<<<<< HEAD
          {/* 
            4. onChange should call this.handleUsername
            5. Set placeholder to the username in state
          */}
          <input onChange="" type="text" placeholder="" />
=======
          {/*
            4. onChange should call this.handleUsername
            5. Set placeholder to the username in state
          */}
          <input onChange={ this.handleUsername } type="text" placeholder={ this.state.username } />
>>>>>>> week-3/practice
        </p>
      </>
    );
  }
}

export default Practice2;
