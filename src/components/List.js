import React from "react";
import { connect } from "react-redux";
import { Card } from "semantic-ui-react";

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};
//the state in redux comes from reducers

const ConnectedList = ({ movies }) => (
  //  <ul>
  <Card.Group
    items={movies.map((item) => {
      return {
        header: item.title,
        description: item.description,
        style: { overflowWrap: "break-word" },
      };
    })}
  />
  //   {movies.map((item) => (
  //     <li key={item.id}>
  //       {item.title}
  //       <br />
  //       {item.description}
  //     </li>
  //   ))}
  // </ul>
);

//connecting the stateless component ConnectedList with the Redux store
const List = connect(mapStateToProps)(ConnectedList);

export default List;
