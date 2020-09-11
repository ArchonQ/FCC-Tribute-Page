import React from 'react';

import './App.css';

function App() {
	return (
		<div className='App' id='main'>
			<nav>
				<ul>
					<li>
						<a href='#'>About</a>
					</li>
					<li>
						<a href='#'>Popular Videos</a>
					</li>
					<li>
						<a href='#'>Testimonials</a>
					</li>
				</ul>
			</nav>

			<div id='img-div'>
				<img
					id='image'
					src='https://upload.wikimedia.org/wikipedia/commons/1/14/John_Piper.jpg'
					alt='John Piper head shot'
				></img>

				<a
					id='tribute-link'
					href='https://www.desiringgod.org/'
					target='_blank'
					rel='noopener noreferrer'
				>
					Desiring God Website
				</a>
			</div>
		</div>
	);
}

export default App;
