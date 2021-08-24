import React from 'react';
import Task from './Task';
const ListTask = () => {
	const todos = [
		{ id: 1, description: 'todo1', completed: false },
		{ id: 2, description: 'todo2', completed: false },
		{ id: 3, description: 'todo3', completed: true },
		{ id: 4, description: 'todo4', completed: false },
		{ id: 5, description: 'todo5', completed: false },
	];

	return (
		<ul className='list-group'>
			{todos.map((todo) => (
				<Task id={todo.id} description={todo.description} completed={todo.completed} />
			))}
		</ul>
	);
};

export default ListTask;