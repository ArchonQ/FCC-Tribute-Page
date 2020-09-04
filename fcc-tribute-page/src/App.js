import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className='App' id='main'>
			<header className='App-header'>
				<h1 id='title'>Dr. John Piper</h1>

				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Tribute Page
				</a>
			</header>
		</div>
	);
}

export default App;
