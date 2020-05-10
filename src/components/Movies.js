import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";
import { Card } from "semantic-ui-react";

//here we are getting posts from API call

function mapStateToProps(state) {
  return { movies: state.remoteMovies.slice(0, 10) };
}

export class Movies extends Component {
  componentDidMount() {
    this.props.getData();
  }

  renderMovies = () => {
    const moviesFetched = this.props.movies.map((item) => {
      return {
        header: item.title,
        description: item.body,
        style: { overflowWrap: "break-word" },
      };
    });
    return <Card.Group items={moviesFetched} />;
  };
  render() {
    return <div>{this.renderMovies()}</div>;
  }
}

export default connect(mapStateToProps, { getData })(Movies);
