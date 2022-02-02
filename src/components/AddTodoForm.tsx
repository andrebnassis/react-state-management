import React, { useCallback, useState } from 'react';
import { useItemList } from '../context-provider/useItemList';

const AddTodoForm:React.FC = () => {
	const [value, setValue] = useState('');



	const onSubmit = (event:React.FormEvent) => {
		event.preventDefault();
        //addItem(value)
        addItemApi(value);
	};

    const {addItem, addItemAsync} = useItemList();

    const addItemApi = useCallback(async(title:string) => {
        await addItemAsync(title);
    }, [addItemAsync])    


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
