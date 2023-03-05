import "../css/navbar.css";
import React, { useState, useRef } from "react";
function Navbar({ getSearchValue, setSearchValue, handleSearch, landingPage }) {
	const [getDarkMode, setDarkMode] = useState(false);
	const searchInput = useRef();

	function darkMode() {
		setDarkMode(!getDarkMode);
		document.body.classList.toggle("dark");
	}

	return (
		<nav className="navbar">
			<div className="top-left">
				<h1
					onClick={() => {
						landingPage("LandingPage");
					}}
				>
					Trailerrr
				</h1>
			</div>
			<div className="search-bar">
				<form action="get" onSubmit={handleSearch}>
					<div className="input">
						<button typeof="submit">
							<i
								className="bx bx-search"
								id="search"
								onClick={() => {
									setSearchValue(searchInput.current.value);
									console.log(searchInput.current.value);
								}}
							></i>
						</button>
						<input
							type="text"
							name=""
							id=""
							placeholder="Search Movie..."
							value={getSearchValue}
							ref={searchInput}
							onChange={() => setSearchValue(searchInput.current.value)}
						/>
					</div>
				</form>
				{getSearchValue && <span onClick={() => setSearchValue("")}></span>}
			</div>
			<div className="mode">
				<span className="mode-text">
					{getDarkMode ? "Light Mode" : "Dark Mode"}
				</span>
				<div className="toggle-switch" onClick={darkMode}>
					<span className="switch"></span>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
