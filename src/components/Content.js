import "../css/main.css";
import LandingPage from "./LandingPage";
import SearchPage from "./SearchPage";
import DetailsPage from "./DetailsPage";

export default function Content({
	getData,
	getMovieDetails,
	setMovieDetails,
	getTrailerVideo,
	setTrailerVideo,
	result,
	loading,
	setLoading,
}) {
	async function fetchMovieDetails(movie, year) {
		setLoading(true);
		const movies = await fetch(
			`https://www.omdbapi.com/?apikey=90c8aa50&t=${movie}&y=${year}&plot=full`
		)
			.then((response) => response.json())
			.then((response) => response);
		setLoading(false);
		return movies;
	}

	async function fetchTrailerVideo(title, year, maxResults) {
		setLoading(true);
		const trailer = await fetch(
			`https://www.googleapis.com/youtube/v3/search?key=AIzaSyAvNsWIphfCjgbQk7Ij-E0GkXmcsC8pVgQ&type=video&part=snippet&maxResults=${maxResults}&q=${title} ${year} official trailer`
		)
			.then((response) => response.json())
			.then((response) => response.items);

		setLoading(false);
		return trailer;
	}
	// if (
	// 	getData === null &&
	// 	getMovieDetails === null &&
	// 	getTrailerVideo === null
	// ) {
	// 	return (
	// 		<LandingPage
	// 			setMovieDetails={setMovieDetails}
	// 			setTrailerVideo={setTrailerVideo}
	// 			fetchMovieDetails={fetchMovieDetails}
	// 			fetchTrailerVideo={fetchTrailerVideo}
	// 		/>
	// 	);
	// }

	return (
		<main>
			{loading ? (
				<div className="loading">
					<div className="honeycomb">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			) : getTrailerVideo && getMovieDetails ? (
				<DetailsPage movieDetails={getMovieDetails} trailer={getTrailerVideo} />
			) : getData ? (
				<SearchPage
					getData={getData}
					setMovieDetails={setMovieDetails}
					setTrailerVideo={setTrailerVideo}
					fetchMovieDetails={fetchMovieDetails}
					fetchTrailerVideo={fetchTrailerVideo}
					result={result}
				/>
			) : (
				<LandingPage
					setMovieDetails={setMovieDetails}
					setTrailerVideo={setTrailerVideo}
					fetchMovieDetails={fetchMovieDetails}
					fetchTrailerVideo={fetchTrailerVideo}
				/>
			)}
		</main>
	);
}
