import React from 'react';
import { ITodoItem } from './ITodoItem';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import {RootState} from '../redux-core/store'
const TodoList:React.FC = () => {

	const state = useSelector((state:RootState) => state);
	console.log({state});
	console.log(state.itemList);

	const todos:Array<ITodoItem> = [
		{ id: 1, title: 'todo1', completed: false },
		{ id: 2, title: 'todo2', completed: false },
		{ id: 3, title: 'todo3', completed: true },
		{ id: 4, title: 'todo4', completed: false },
		{ id: 5, title: 'todo5', completed: false },
	];

	return (
		<ul className='list-group'>
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default TodoList;
