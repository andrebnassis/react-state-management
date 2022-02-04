import React from 'react';
import { useAppSelector } from '../redux-toolkit/hooks';

const TotalCompleteItems:React.FC = () => {
	
	const {itemListInfo} = useAppSelector((state) => state);
	
	return <h4 className='mt-3'>{`Total Complete Items: ${(itemListInfo.filter(item => item.completed)).length}`}</h4>;
};

export default TotalCompleteItems;