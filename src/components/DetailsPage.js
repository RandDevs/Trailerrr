import "../css/movie-details.css";

export default function DetailsPage(props) {
	return (
		<>
			<div className="movie-trailer">
				{props.trailer.map((items, index) => (
					<iframe
						key={index}
						title={items.snippet.title}
						src={`http://www.youtube.com/embed/${items.id.videoId}`}
						allowFullScreen
					/>
				))}
			</div>
			<div className="movie-details-container">
				<div className="movie-detail">
					<div className="poster-movie-detail">
						<img
							src={props.movieDetails.Poster}
							alt={props.movieDetails.Title}
						/>
					</div>
					<div className="details-movie-detail">
						<h1 className="title">{props.movieDetails.Title}</h1>
						<div className="more-details">
							<p className="year">{props.movieDetails.Year}</p>
							<p className="rating">{props.movieDetails.Rated}</p>
							<p className="run-time">{props.movieDetails.Runtime}</p>
						</div>
						<div className="reviews">
							<div className="imdb-review">
								<h1 className="imdb-score">{props.movieDetails.imdbRating}</h1>
								<p className="imdb-score-text">IMDB Score</p>
							</div>
							<div className="other-reviews">
								<div className="other-score">
									{props.movieDetails.Ratings.length !== 0 ? (
										props.movieDetails.Ratings.map((otherScore, index) => {
											return (
												<div className={otherScore.Source} key={index}>
													<h1>{otherScore.Value}</h1>
													<p>{otherScore.Source}</p>
												</div>
											);
										})
									) : (
										<div className="none">N/A</div>
									)}
								</div>
							</div>
						</div>
						<hr />
						<div className="description">
							<p>{props.movieDetails.Plot}</p>
						</div>
						<div className="other-movie-info">
							<p>Genre: {props.movieDetails.Genre}</p>
							<p>Director: {props.movieDetails.Director}</p>
							<p>Writer: {props.movieDetails.Writer}</p>
							<p>Actors: {props.movieDetails.Actors}</p>
						</div>
						<hr />
					</div>
				</div>
			</div>
		</>
	);
}
