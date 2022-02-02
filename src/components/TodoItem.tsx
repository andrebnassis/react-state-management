import React, { useCallback } from 'react';
import { useItemList } from '../context-provider/useItemList';
import { ITodoItem } from './ITodoItem';

const TodoItem:React.FC<ITodoItem> = ({ id, title, completed }) => {
	
    const { removeItem,removeItemAsync,  updateCompletedItem, updateCompletedItemAsync } = useItemList();

    const updateItemCompletedAPI = useCallback(async(id:number, completed:boolean) => {
        await updateCompletedItemAsync(id, completed);
    }, [updateCompletedItemAsync])


    const deleteItemApi = useCallback(async (id) => {
        await removeItemAsync(id);
    }, [removeItemAsync])

    const handleDeleteItem = (event:React.MouseEvent<HTMLElement>, id:number):void => {
        event.preventDefault();
        //removeItem(id);
        deleteItemApi(id);
    }

    const handleToggleCompleteItem = (id:number, completed:boolean) => {
        //updateCompletedItem(id, completed);
        updateItemCompletedAPI(id, completed);
    }

    return (
		<li key={id} className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox' className='mr-3' checked={completed} onChange={(event) => handleToggleCompleteItem(id, !completed)}></input>
					{title}
				</span>
				<button className='btn btn-danger' onClick={(event) => handleDeleteItem(event, id)}>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;
