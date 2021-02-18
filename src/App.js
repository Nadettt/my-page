import React from 'react';
import './App.css';
import Menu from './components/menu';
import Main from './components/main';
import Resume from './components/resume';


function App() {
	return (
		<div className="intro">
			<Menu />
			<Main />
			<Resume />
			
		</div>
	);
}

export default App;
