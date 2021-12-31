import React from "react";
import "./count.css";



class Details extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props);
    return (
      <div>
        Name is : {this.props.name}
      </div>

    );
  }
}
export default Details;
 // Count should not be less than 0, if it is going to be less than 0 then decrement button should be disable. the maximum increment count should be 10. 