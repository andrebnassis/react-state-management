import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import {RootState} from '../redux-core/store'
import { loadItemlist } from '../redux-core/action-creators/ItemListActionCreator';
const TodoList:React.FC = () => {

	const {itemListInfo} = useSelector((state:RootState) => state);
	
	const dispatch = useDispatch();
	
	useEffect(() => {
		try{
		dispatch(loadItemlist())
	}
	catch(e){
		console.log({e});
	}
	}, [])


	return (
		<ul className='list-group'>
			{itemListInfo.itemList.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default TodoList;
