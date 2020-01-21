import React from "react";
import FormContainer from "./FormContainer";
import ToDoContainer from "./ToDoContainer";
import ToDonesContainer from "./ToDonesContainer";
import Spinner from "./Spinner";
import NotFound from "./NotFound";

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true,
      feedback: false,
      showFriend: false
    };
  }

  async componentDidMount() {
    const url = `https://todo-api.albertedelmann.now.sh/tasks`;
    // const url = `https://ds-todo-api.now.sh/todos`;

    // fetch(url).then(response => {
    //   response.json().then(data => {
    //     this.setState({ items: data });
    //   });
    // });

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.length === 0)
        this.setState({
          items: data,
          loading: false,
          feedback: false,
          showFriend: true
        });
      else {
        this.setState({
          items: data,
          loading: false,
          feedback: false,
          showFriend: false
        });
      }
    } catch (error) {
      this.setState({ feedback: true });
    }
  }

  handleUpdate = async item => {
    const url = `https://todo-api.albertedelmann.now.sh/tasks/${item._id}`;
    const status = !item.status;
    this.setState({ loading: true });
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ status })
      });
      const data = await response.json();
      const items = this.state.items;
      const updatedItems = items.map(el => {
        if (item._id === el._id) {
          el.status = !el.status;
        }
        return el;
      });

      this.setState({
        items: updatedItems,
        loading: false,
        feedback: false
      });
    } catch (error) {
      this.setState({ feedback: true });
    }
  };

  handleAddTodo = async value => {
    const url = `https://todo-api.albertedelmann.now.sh/tasks`;
    this.setState({ loading: true });

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: value })
      });
      const item = await response.json();
      this.setState({
        items: [...this.state.items, item],
        feedback: false,
        showFriend: false,
        loading: false
      });
    } catch (error) {
      this.setState({ feedback: true });
    }
  };

  render() {
    const data = this.state.items;
    const todos = data.filter(el => !el.status);
    const todones = data.filter(el => el.status);

    return (
      <main className="main-container">
        <FormContainer addTodo={this.handleAddTodo}></FormContainer>
        <div className="feedback">
          {this.state.feedback && (
            <small>Oops, our cat broke the internet. Please try again...</small>
          )}
        </div>
        {this.state.loading && <Spinner></Spinner>}
        {!this.state.showFriend ? (
          <span>
            <ToDoContainer
              items={todos}
              updateFromChild={this.handleUpdate}
            ></ToDoContainer>
            <ToDonesContainer
              items={todones}
              updateFromChild={this.handleUpdate}
            ></ToDonesContainer>
          </span>
        ) : (
          <NotFound></NotFound>
        )}
      </main>
    );
  }
}

export default MainContainer;
