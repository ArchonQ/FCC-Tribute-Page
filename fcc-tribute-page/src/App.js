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
					<div id='tribute-info'>
						<h1>John Piper</h1>
						<p>
							John Piper is founder and teacher of desiringGod.org and
							chancellor of Bethlehem College & Seminary. For 33 years, he
							served as pastor of Bethlehem Baptist Church, Minneapolis,
							Minnesota. He is author of{' '}
							<a href='https://www.desiringgod.org/books'>more than 50 books</a>{' '}
							including{' '}
							<a href='https//www.desiringgod.org/books/desiring-god'>
								<em>Desiring God: Meditations of a Christian Hedonist</em>
							</a>{' '}
							and most recently{' '}
							<a href='https://www.desiringgod.org/books/coronavirus-and-christ'>
								<em>Coronavirus and Christ</em>
							</a>
							.
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
						<a
							href='https://www.facebook.com/JohnPiper'
							target='_blank'
							className='c-w'
						>
							Facebook
						</a>
					</li>
					<li>
						<a
							href='https://twitter.com/JohnPiper?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
							target='_blank'
							className='c-w'
						>
							Twitter
						</a>
					</li>
					<li>
						<a
							href='https://www.instagram.com/johnstephenpiper/?hl=en'
							target='_blank'
							className='c-w fab fa-instagram'
						>
							Instagram
						</a>
					</li>
					<li>
						<a
							href='https://www.youtube.com/c/desiringGod/featured'
							target='_blank'
							className='c-w'
						>
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
