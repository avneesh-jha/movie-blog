import React from "react";
import { Container } from "semantic-ui-react";
import List from "./components/List";
import MovieForm from "./components/MovieForm";
import Movies from "./components/Movies";

const App = () => {
  return (
    <Container>
      <center>
        <div>
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
          <div>
            <p></p>
            <h2>API Movies</h2>
            <Movies />
          </div>
          <div>
            <p></p>
            <h2>Add new movie</h2>
            <MovieForm />
          </div>
        </div>
        <div>
          <p>
            <br />
          </p>
          <h2>Added Movies</h2>
          <List />
        </div>
      </center>
    </Container>
  );
};

export default App;
