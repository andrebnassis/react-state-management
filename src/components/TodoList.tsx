import React, { useCallback, useEffect } from 'react';
import { useItemList } from '../context-provider/useItemList';
import TodoItem from './TodoItem';

const TodoList:React.FC = () => {

    
    const {data, loadItemlistAsync} = useItemList()

    const loadItemsList = useCallback(async () => {
       try{
        await loadItemlistAsync();
    }
    catch(e){
        console.log(e);
    }
    },[loadItemlistAsync])

    useEffect(() => {
        loadItemsList();
    },[])

	return (
		<ul className='list-group'>
			{data.map((item) => (
				<TodoItem id={item.id} title={item.title} completed={item.completed} />
			))}
		</ul>
	);
};

export default TodoList;
