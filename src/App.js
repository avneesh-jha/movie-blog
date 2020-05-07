import React, { Component } from "react";
import { Card, Button, Container, Form } from "semantic-ui-react";

const movies = [
  {
    title: "Project Report - April",
    description:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
  },
  {
    title: "Project Report - May",
    description:
      "Bring to the table win-win survival strategies to ensure proactive domination.",
  },
];

class App extends Component {
  state = { movies, currentTitle: "", currentDescription: "" };

  renderItems = () => {
    const moviesFetched = this.state.movies.map((item) => {
      return {
        header: item.title,
        description: item.description,
        meta: (
          <div>
            <Button
              onClick={() => {
                const array = [...this.state.movies];
                const filteredArray = array.filter(
                  (movie) => movie.title != item.title
                );
                this.setState({ movies: filteredArray });
              }}
              basic
              color="red"
            >
              Delete movie
            </Button>
          </div>
        ),
        style: { overflowWrap: "break-word" },
      };
    });
    return <Card.Group items={moviesFetched} />;
  };

  addMovie = (event) => {
    event.preventDefault();
    this.setState({
      movies: [
        ...this.state.movies,
        {
          title: this.state.currentTitle,
          description: this.state.currentDescription,
        },
      ],
    });
    this.setState({ currentTitle: "", currentDescription: "" });
  };

  render() {
    return (
      <Container>
        <center>
          <Form onSubmit={this.addMovie}>
            <Form.Field>
              <label>Title</label>
              <input
                value={this.state.currentTitle}
                onChange={(event) =>
                  this.setState({ currentTitle: event.target.value })
                }
                placeholder="Title of Movie"
                required
              />
            </Form.Field>
            <Form.Field>
              <label>Description</label>
              <input
                value={this.state.currentDescription}
                placeholder="Description of Movie"
                onChange={(event) =>
                  this.setState({ currentDescription: event.target.value })
                }
                required
              />
            </Form.Field>
            <Button basic color="green" type="submit">
              Add Movie
            </Button>
          </Form>

          <br />
          <br />
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
          {this.renderItems()}
        </center>
      </Container>
    );
  }
}

export default App;
