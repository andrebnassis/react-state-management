import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux-core/store';

const TotalCompleteItems:React.FC = () => {
	const {itemListInfo} = useSelector((state:RootState) => state);
	
	return <h4 className='mt-3'>{`Total Complete Items: ${(itemListInfo.itemList.filter(item => item.completed)).length}`}</h4>;
};

export default TotalCompleteItems;