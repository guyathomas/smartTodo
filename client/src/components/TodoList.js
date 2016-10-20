const TodoList = (props) => (
	<ul>
		{props.items.map(item => <TodoItem item={item} /> )}
	</ul>
);

window.TodoItem = TodoItem;