import React from "react";
import FormContainer from "./FormContainer";
import ToDoContainer from "./ToDoContainer";
import ToDonesContainer from "./ToDonesContainer";
import Spinner from "./Spinner";
import NotFound from "./NotFound";
import { connect } from "react-redux";
import { fetchData } from "../actions";

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    console.log("I AM RERENDERING");
    console.log("MAINCONTAINER PROPS: ", this.props);
    return (
      <main className="main-container">
        <FormContainer addTodo={this.handleAddTodo}></FormContainer>
        <div className="feedback">
          {this.props.feedback && (
            <small>Oops, our cat broke the internet. Please try again...</small>
          )}
        </div>
        {this.props.loading && <Spinner></Spinner>}
        {!this.props.showFriend ? (
          <span>
            <ToDoContainer></ToDoContainer>
            <ToDonesContainer></ToDonesContainer>
          </span>
        ) : (
          <NotFound></NotFound>
        )}
      </main>
    );
  }
}

const mapsStateToProps = state => {
  return {
    feedback: state.feedback,
    loading: state.loading,
    showFriend: state.showFriend
  };
};

export default connect(mapsStateToProps, { fetchData })(MainContainer);
