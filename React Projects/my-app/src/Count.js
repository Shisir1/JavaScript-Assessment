import React from "react";
import "./count.css";



class Count extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
  }
  handleClick() {
    console.log(this);
    //alert('clicked!');
    this.setState({
      count: this.state.count + 1,
    })
  }
  handleClick1() {
    console.log(this);
    //alert('clicked!');
    this.setState({
      count: this.state.count - 1,
    })
  }
  handleClick2 = () => {
    this.setState({
      count: 0
    })
  }

  render() {
    console.log(this.state.count);
    return (

      //We can use either <> or <React.Fragment> instead of <div> below, still same result
      <div>
        Count Value is:{this.state.count}<br /><button className="btn-primary btn" disabled={this.state.count === 10} onClick={this.handleClick}>Increment Count</button>
        <button className="btn-secondary btn" disabled={this.state.count === 0} onClick={this.handleClick1}>Decrement Count</button>
        <button className="btn-style btn" onClick={this.handleClick2}>Reset</button>

      </div>
    );
  }
}
export default Count;
 // Count should not be less than 0, if it is going to be less than 0 then decrement button should be disable. the maximum increment count should be 10.

 //DOM = Document Object Model