import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        <h1>
          Nome:
          { movies.title }
        </h1>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
