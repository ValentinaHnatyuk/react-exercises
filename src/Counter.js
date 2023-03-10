import React from "react";

export class Counter extends React.Component {
  state = {
    count:0
  }
  constructor(props) {
    super(props)
    setInterval(() => {
    this.setState((prevState) => {
      return({
        count: prevState.count + 1
      })
    })
    },1000)
  }
  // this.setState({count: this.state.count++}) 
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}
//Create a Counter class component with an internal state containing a count property, initialized to 0.
//The Counter component should render the count property within an h1 tag,
// and the count property should be incremented by 1 every second;