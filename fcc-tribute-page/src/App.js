import React from 'react';

import './App.css';

function App() {
	return (
		<div className='App' id='main'>
			<header className='App-header'>
				<h1 id='title'>Dr. John Piper</h1>
				<div id='img-div'>
					<img
						id='image'
						src='https://upload.wikimedia.org/wikipedia/commons/1/14/John_Piper.jpg'
						alt='John Piper head shot'
					/>
				</div>

				<a
					className='App-link'
					href='https://www.desiringgod.org/'
					target='_blank'
					rel='noopener noreferrer'
				>
					Desiring God Website
				</a>
			</header>
		</div>
	);
}

export default App;
