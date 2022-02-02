import React from 'react';
import { useItemList } from '../context-provider/useItemList';
import TodoItem from './TodoItem';

const TodoList:React.FC = () => {

    const {data} = useItemList()

	return (
		<ul className='list-group'>
			{data.map((item) => (
				<TodoItem id={item.id} title={item.title} completed={item.completed} />
			))}
		</ul>
	);
};

export default TodoList;
