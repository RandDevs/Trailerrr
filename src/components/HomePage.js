import Content from "./Content";
import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";
export default function HomePage() {
	const [getSearchValue, setSearchValue] = useState("");
	const [result, setResult] = useState();
	const [getData, setData] = useState(null);
	const [getMovieDetails, setMovieDetails] = useState(null);
	const [getTrailerVideo, setTrailerVideo] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setMovieDetails(null);
		setTrailerVideo(null);
	}, [getData]);

	async function getMovies(movie) {
		setLoading(true);

		const movies = await fetch(
			`https://www.omdbapi.com/?apikey=90c8aa50&s=${movie}`
		)
			.then((response) => response.json())
			.then((response) => response.Search);

		setLoading(false);
		return movies;
	}

	async function handleSearch(e) {
		e.preventDefault();
		setResult(getSearchValue);
		const fetchedMovie = await getMovies(getSearchValue);
		setData(null);
		setData(fetchedMovie);
	}

	function returnHome() {
		setSearchValue("");
		setData(null);
		setMovieDetails(null);
		setTrailerVideo(null);
	}

	return (
		<>
			<Navbar
				handleSearch={handleSearch}
				getSearchValue={getSearchValue}
				setSearchValue={setSearchValue}
				landingPage={returnHome}
			/>
			<Content
				getData={getData}
				getMovieDetails={getMovieDetails}
				setMovieDetails={setMovieDetails}
				getTrailerVideo={getTrailerVideo}
				setTrailerVideo={setTrailerVideo}
				result={result}
				loading={loading}
				setLoading={setLoading}
			/>
		</>
	);
}
