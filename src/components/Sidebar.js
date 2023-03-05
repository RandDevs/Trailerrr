import "../css/sidebar.css";
import "../css/hamburger.css";
import React, { useState } from "react";
export default function Sidebar(props) {
	const [getDarkMode, setDarkMode] = useState();

	function darkMode() {
		setDarkMode(!getDarkMode);
		document.body.classList.toggle("dark");
	}

	return (
		<nav className={props.hamburger ? "sidebar close" : "sidebar"}>
			<div className="menu-bar">
				<div className="menu">
					<ul className="menu-links">
						<li className="search-box">
							<i className="bx bx-search icon" id="search"></i>
							<input type="text" placeholder="Search Movie..." />
						</li>

						<li className="nav-link">
							<a href="#ma">
								<i className="bx bx-home-alt icon"></i>
								<span className="text nav-text">Wacth Now</span>
							</a>
						</li>

						<li className="nav-link">
							<a href="#ma">
								<i className="bx bx-movie icon"></i>
								<span className="text nav-text">Genre</span>
							</a>
						</li>

						<li className="nav-link">
							<a href="#ma">
								<i className="bx bx-film icon"></i>
								<span className="text nav-text">Watchlist</span>
							</a>
						</li>

						<li className="nav-link">
							<a href="#ma">
								<i className="bx bx-heart icon"></i>
								<span className="text nav-text">Favorite</span>
							</a>
						</li>
					</ul>
				</div>
				<div className="bottom-content">
					<li className="mode">
						<div className="sun-moon">
							<i className="bx bx-moon icon moon"></i>
							<i className="bx bx-sun icon sun"></i>
						</div>
						<span className="mode-text text">
							{getDarkMode ? "Dark Mode" : "Light Mode"}
						</span>
						<div className="toggle-switch">
							<span className="switch" onClick={darkMode}></span>
						</div>
					</li>
				</div>
			</div>
		</nav>
	);
}
