import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalCompleteItems from './components/TotalCompleteItems';
import { Provider } from 'react-redux';
import { store } from './redux-core/store'
const App:React.FC = () => {
	return (
		<Provider store={store}>
		<div className='container bg-white p-4 mt-5'>
			<h1>My Todo List</h1>
			<AddTodoForm />
			<TodoList />
			<TotalCompleteItems />
		</div>
		</Provider>
	);
};

export default App;
