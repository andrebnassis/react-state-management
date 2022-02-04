import React, { useState } from 'react';
import { useAppDispatch } from '../redux-toolkit/hooks';
import { addItem } from '../redux-toolkit/slices/ItemListSlice';

const AddTodoForm:React.FC = () => {
	const [value, setValue] = useState('');

	const dispatch = useAppDispatch()

	const onSubmit = (event:React.FormEvent) => {
		event.preventDefault();
		dispatch(addItem({title: value}));
	};

	return (
		<form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
			<label className='sr-only'>Name</label>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Add todo...'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button type='submit' className='btn btn-primary mb-2'>
				Submit
			</button>
		</form>
	);
};

export default AddTodoForm;
