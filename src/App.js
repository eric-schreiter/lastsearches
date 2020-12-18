import React from "react";
import LastSearches from "./LastSearches";
import "./styles.css";

export default function App() {
	return (
		<div className="App">
			<div className="heading">
				<h1>Letzte Suchen</h1>
				<button type="button" onClick={() => {}}>
					<span>Löschen</span>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25px" height="25px">
						<path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" />
					</svg>
				</button>
			</div>
			<LastSearches />
		</div>
	);
}
