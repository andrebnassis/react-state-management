import React from 'react';
import { useItemList } from '../context-provider/useItemList';

const TotalCompleteItems:React.FC = () => {
    const {data} = useItemList();
	return <h4 className='mt-3'>{`Total Complete Items: ${(data.filter(item => item.completed)).length}`}</h4>;
};

export default TotalCompleteItems;