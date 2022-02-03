import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import {RootState} from '../redux-core/store'
const TodoList:React.FC = () => {

	const {itemList} = useSelector((state:RootState) => state);
	
	return (
		<ul className='list-group'>
			{itemList.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default TodoList;
