import React from 'react';

import './App.css';

function App() {
	return (
		<div className='App' id='main'>
			<header className='App-header'>
				<container>
					<div>
						<h1 id='title'>Dr. John Piper</h1>

						<p id='tribute-info'>
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum."
						</p>
					</div>
					<div>
						<div id='img-div'>
							<img
								id='image'
								src='https://upload.wikimedia.org/wikipedia/commons/1/14/John_Piper.jpg'
								alt='John Piper head shot'
							/>
							<p id='img-caption'>Pastor Piper</p>
						</div>

						<a
							className='App-link'
							href='https://www.desiringgod.org/'
							target='_blank'
							rel='noopener noreferrer'
						>
							Desiring God Website
						</a>
					</div>
				</container>
			</header>
		</div>
	);
}

export default App;
