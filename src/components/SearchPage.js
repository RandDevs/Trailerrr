import "../css/result.css";

export default function SearchPage(props) {
	async function getDetails(movie) {
		const movieDetails = await props.fetchMovieDetails(movie.Title, movie.Year);
		const trailer = await props.fetchTrailerVideo(movie.Title, movie.Year, 1);
		props.setMovieDetails(movieDetails);
		props.setTrailerVideo(trailer);
	}

	return (
		<>
			<div className="search-for">
				<h1>Result For : {props.result}</h1>
			</div>
			<div className="movie-result">
				{props.getData.map((movie) => {
					return (
						<article key={movie.imdbID}>
							<div className="poster">
								<img src={movie.Poster} alt={movie.Title} />
							</div>
							<div className="details">
								<h1>{movie.Title}</h1>
								<p>{movie.Year}</p>
								<label>{movie.Type}</label>
								<button onClick={() => getDetails(movie)}>Details</button>
							</div>
						</article>
					);
				})}
			</div>
		</>
	);
}
