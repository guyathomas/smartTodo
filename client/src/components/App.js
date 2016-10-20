class App extends React.Component {

  constructor() {
    super(),
    this.state = {
    	items: [
				{'title': 'Get Milk', completed: false},
				{'title': 'Get Butter', completed: false}
		]
    };
  }

  newItem(item) {
  	this.state.items.push({
  		'title': item,
  		'completed': false
  	})
  }		  	
  render() {
    return (
    <div>
	    <h1>Todo List</h1>
	    <input type="text" placeholder="What do you want to do?"/>
	    <TodoList items={this.state.items}/>
    </div>
    );
  }
}

window.App = App;