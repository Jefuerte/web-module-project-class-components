import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
        {
          task: 'Do Homework',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    const { todos } = this.state;
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ul>
          {
            todos.map(todo=> {
              return (<li>{todo.task} { todo.completed?<span>- completed</span> : <span></span> }</li>)
            })
          }
        </ul>

        <form>
          <input/>
          <button>Add</button>
        </form>

        <button>Clear</button>
      </div>
    );
  }
}

export default App;
