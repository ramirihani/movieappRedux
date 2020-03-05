import React from "react";
import { connect } from "react-redux";

function Description(props) {
  return (
    <div>
      {props.movies
        .filter(el => el.id === props.match.params.id)
        .map((el, id) => (
          <div>
            <p>{el.desc}</p>
          </div>
        ))}
    </div>
  );
}
const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(mapStateToProps)(Description);
