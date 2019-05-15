import React from "react";
import { connect } from "react-redux";
import { getSwapi } from '../actions';
import Loader from "react-loader-spinner";
import { CharacterList } from "../components";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getSwapi()
  }

  render() {
    console.log(this.props.characters)

    return (
      <div>
          <div>
            {this.props.isFetching && <Loader type="Ball-Triangle" color="#00BFFF" height="50" width="50" />}
          </div>
          <div className="CharactersList_wrapper">
            {this.props.characters && <CharacterList characters={this.props.characters} />}
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.charsReducer.isFetching,
  characters: state.charsReducer.characters,
  error: state.charsReducer.error
})

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    getSwapi
  }
)(CharacterListView);
