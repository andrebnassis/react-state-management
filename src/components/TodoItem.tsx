import React from 'react';
import { useAppDispatch } from '../redux-toolkit/hooks';
import { removeItem, updateCompletedItem } from '../redux-toolkit/slices/ItemListSlice';
import { ITodoItem } from './ITodoItem';

const TodoItem:React.FC<ITodoItem> = ({ id, title, completed }) => {
	const dispatch = useAppDispatch();
	
    const handleDeleteItem = (event:React.MouseEvent<HTMLElement>, id:number):void => {
        event.preventDefault();
        dispatch(removeItem({id}));
    }

	const handleToggleCompleteItem = (id:number, completed:boolean) => {
        dispatch(updateCompletedItem({id, completed}));
    }

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
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
