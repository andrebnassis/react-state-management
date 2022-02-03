import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadItemListAsync } from '../redux-toolkit/slices/ItemListSlice';
import { RootState } from '../redux-toolkit/store';
import TodoItem from './TodoItem';

const TodoList:React.FC = () => {

	const dispatch = useDispatch();
	
	const {itemListInfo} = useSelector((state:RootState) => state);
	
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
