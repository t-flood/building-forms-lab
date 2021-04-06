// Add BandInput component
import React, { Component } from "react";
import { connect } from "react-redux";

class BandInput extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      text: "",
    });
  };

  handleChange(event) {
    this.setState({
      text: event.target.value,
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Band Name</label>
          <input
            type="text"
            onChange={(event) => this.handleChange(event)}
            value={this.state.text}
          />
          <input type="Submit" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addBand: (formData) => dispatch({ type: "ADD_BAND", payload: formData }),
});

export default connect(null, mapDispatchToProps)(BandInput);
