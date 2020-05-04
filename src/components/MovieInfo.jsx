import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/actions';
import './Movie.css';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

class MovieInfo extends Component {
  render(){
    const { movie } = this.props;
    const { deleteMovie, getEditForm, detailVisible } = this.props;
    console.log(movie);
    return(
      <React.Fragment>
        <div className="movieInfo">
          <img src={movie.medium_cover_image} alt={movie.title} title={movie.title}/>
          <p>Id : {movie.id}</p>
          <p>Title : {movie.title}</p>
          <p>Release Year : {movie.year}</p>
          <p className="summary">summary : <br/>{movie.summary} </p>
          <p>Current Booking Status : Remained {movie.ticket} tickets</p>
          <Button color="secondary" onClick={() => deleteMovie(movie.id)}>Delete</Button>
          <Button color="secondary" onClick={() => getEditForm(movie.id)}>Edit</Button>
        </div>
      </React.Fragment>
    )
  }
}

MovieInfo.propTypes = {
  movie: PropTypes.object,
  deleteMovie: PropTypes.func,
  getEditForm: PropTypes.func,
}

const mapStateToProps = (state, ownProps) => ({ selectedMovie : ownProps.selectedMovie, editing: state.editing, detailVisible: state.detailVisible})

const mapDispatchToProps = (dispatch)=> ({
  deleteMovie:(id) => dispatch(action.deleteMovie(id)),
  getEditForm:(id) => dispatch(action.getEditForm(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);

