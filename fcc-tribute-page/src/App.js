import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';

import './App.css';

function App() {
	return (
		<div className='App' id='main'>
			<nav>
				<ul>
					<li>
						<a href='#about'>About</a>
					</li>
					<li>
						<a href='#popular'>Popular Videos</a>
					</li>
					<li>
						<a href='#books'>Books</a>
					</li>
					<li>
						<a href='#social'>Social Media</a>
					</li>
				</ul>
			</nav>

			<section id='about'>
				<div className='container'>
					<div>
						<h1>John Piper</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
						<p>
							Desiring God's YouTube Channel has over 4,200 video resources.
						</p>

						<div
							class='g-ytsubscribe'
							data-channel='desiringGod'
							data-layout='full'
							data-count='default'
						></div>
					</div>

					<div>
						<img
							id='image'
							src='https://upload.wikimedia.org/wikipedia/commons/1/14/John_Piper.jpg'
							alt='John Piper head shot'
						></img>
						<p>Dr. John Piper</p>
					</div>
				</div>
			</section>

			<section id='popular'>
				<h2>Popular Videos</h2>
				<div className='container'>
					<div class='video-wrapper'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/xqgeT26BAnE'
							frameborder='0'
							allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
							allowfullscreen
						></iframe>
					</div>

					<div class='video-wrapper'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/jLRue4nwJaA'
							frameborder='0'
							allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
							allowfullscreen
						></iframe>
					</div>

					<div class='video-wrapper'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/n9QP-cqwyAw'
							frameborder='0'
							allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
							allowfullscreen
						></iframe>
					</div>

					<div class='video-wrapper'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/YOKWdwSVRYo'
							frameborder='0'
							allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
							allowfullscreen
						></iframe>
					</div>

					<div class='video-wrapper'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/nSSLLpVChng'
							frameborder='0'
							allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
							allowfullscreen
						></iframe>
					</div>
				</div>
			</section>

			<section id='books'>
				<h2>Books</h2>
			</section>

			<section id='social' className='bg-red'>
				<h2>Follow him on</h2>
				<ul className='container social-ul'>
					<li>
						<a href='#' className='c-w'>
							Facebook
						</a>
					</li>
					<li>
						<a href='#' className='c-w'>
							<i className='fab fa-twitter'></i>
						</a>
					</li>
					<li>
						<a href='#' className='c-w fab fa-instagram'>
							Instagram
						</a>
					</li>
					<li>
						<a href='#' className='c-w'>
							YouTube
						</a>
					</li>
					<li>
						<a
							className='c-w'
							id='tribute-link'
							href='https://www.desiringgod.org/'
							target='_blank'
							rel='noopener noreferrer'
						>
							Desiring God Website
						</a>
					</li>
				</ul>
			</section>

			<footer>Thank you Dr. Piper for your life of ministry!</footer>
		</div>
	);
}

export default App;
