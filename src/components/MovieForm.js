import React, { Component } from "react";
import { connect } from "react-redux";
import { addMovie } from "../actions/index";
import { Button, Form } from "semantic-ui-react";

//mapDispatchToProps connects Redux actions to React props
function mapDispatchToProps(dispatch) {
  return {
    addMovie: (movie) => dispatch(addMovie(movie)),
  };
}

class ConnectedForm extends Component {
  state = {
    title: "",
    description: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  //the handleSubmit method dispatches an action
  handleSubmit = (e) => {
    e.preventDefault();
    const { title, description } = this.state;
    this.props.addMovie({ title, description });
    this.setState({ title: "", description: "" });
  };

  render() {
    const { title, description } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Title</label>
          <input
            value={title}
            name="title"
            onChange={this.handleChange}
            placeholder="Title of Movie"
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <input
            value={description}
            name="description"
            placeholder="Description of Movie"
            onChange={this.handleChange}
            required
          />
        </Form.Field>
        <Button basic color="green" type="submit">
          Add Movie
        </Button>
      </Form>
    );
  }
}

const MovieForm = connect(null, mapDispatchToProps)(ConnectedForm);
//the first argument for connect must be null when mapStateToProps is absent like in our example

export default MovieForm;
