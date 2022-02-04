import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux-toolkit/hooks';
import { loadItemListAsync } from '../redux-toolkit/slices/ItemListSlice';
import TodoItem from './TodoItem';

const TodoList:React.FC = () => {

	const dispatch = useAppDispatch();
	
	const {itemListInfo} = useAppSelector((state) => state);
	
	useEffect(() => {
		dispatch(loadItemListAsync())
	}, [])

	return (
		<ul className='list-group'>
			{itemListInfo.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default TodoList;
