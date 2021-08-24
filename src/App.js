import './App.css';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

function App() {
  return (
    
     <div className='container bg-white p-4 mt-5'>
			<h1>My Todo List</h1>
			<AddTask />
			<ListTask />
			{/* <TotalCompleteItems /> */}
		</div>
    
  );
}

export default App;
