import React from 'react';
import StyledLastSearches from './LastSearches.styles';

function LastSearches() {
	return (
		<StyledLastSearches>
			<li>
				<div className="image">
					<img
						alt="London"
						width="200"
						height="auto"
						src="https://images.unsplash.com/photo-1488747279002-c8523379faaa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
					/>
					<p>
						<span className="city">London</span>
						<span className="price">vor 1 Tagen ab 134,56 €</span>
					</p>
				</div>
				<div className="content">
					<span className="price"></span>
					<span className="iata">
						MUC - LON <span className="class">(Economy)</span>
					</span>
					<span className="date">Sa, 19. Dez - Sa, 26. Dez</span>
					<span className="type">Hin- & Rückflug</span>
					<span className="passenger">1 Erwachsener</span>
				</div>
			</li>
			<li>
				<div className="image">
					<img
						alt="New York City"
						width="200"
						height="auto"
						src="https://images.unsplash.com/photo-1534430480872-3498386e7856?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
					/>
					<p>
						<span className="city">New York city</span>
						<span className="price">vor 7 Tagen ab 996,01 €</span>
					</p>
				</div>
				<div className="content">
					<span className="iata">
						FRA - JFK <span className="class">(Business)</span>
					</span>
					<span className="date">So, 20. Dez - Do, 07. Jan</span>
					<span className="type">Hin- & Rückflug</span>
					<span className="passenger">4 Reisende</span>
				</div>
			</li>
			<li>
				<div className="image">
					<img
						alt="Bangkok"
						width="200"
						height="auto"
						src="https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
					/>
					<p>
						<span className="city">Bangok</span>
						<span className="price">vor 16 Tagen ab 456,00 €</span>
					</p>
				</div>
				<div className="content">
					<span className="iata">
						DXB - BKK <span className="class">(Business)</span>
					</span>
					<span className="date">Mo, 01. Mai</span>
					<span className="type">Hinflug</span>
					<span className="passenger">2 Reisende</span>
				</div>
			</li>
			<li>
				<div className="image">
					<img
						alt="Hamburg"
						width="200"
						height="auto"
						src="https://images.unsplash.com/photo-1473615695634-d284ec918736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2200&q=80"
					/>
					<p>
						<span className="city">Hamburg</span>
						<span className="price">vor 17 Tagen ab 123,00 €</span>
					</p>
				</div>
				<div className="content">
					<span className="price"></span>
					<span className="iata">
						BER - HAM <span className="class">(First Class)</span>
					</span>
					<span className="date">Mo, 24. Mai</span>
					<span className="type">Hinflug</span>
					<span className="passenger">1 Erwachsener</span>
				</div>
			</li>
			<li>
				<div className="image">
					<img
						alt="Rio"
						width="200"
						height="auto"
						src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
					/>
					<p>
						<span className="city">Rio de Janeiro</span>
						<span className="price">vor 54 Tagen ab 1254,16 €</span>
					</p>
				</div>
				<div className="content">
					<span className="iata">
						JFK - GIG <span className="class">(Economy)</span>
					</span>
					<span className="date">Do, 11. Dez - Fr, 26. Jan</span>
					<span className="type">Hin- & Rückflug</span>
					<span className="passenger">2 Reisende</span>
				</div>
			</li>
		</StyledLastSearches>
	);
}

export default LastSearches;
