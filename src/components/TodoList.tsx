import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux-toolkit/store';
import TodoItem from './TodoItem';

const TodoList:React.FC = () => {

	const {itemListInfo} = useSelector((state:RootState) => state);
	
	return (
		<ul className='list-group'>
			{itemListInfo.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default TodoList;
