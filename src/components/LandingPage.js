import Carousel from "./Carousel";

export default function LandingPage({
	setMovieDetails,
	setTrailerVideo,
	fetchMovieDetails,
	fetchTrailerVideo,
}) {
	const movieCards = [
		{
			title: "Jaws",
			year: 1975,
			src: "jaws.jpg",
		},
		{
			title: "Black Panther",
			year: 2018,
			src: "blackpanther.webp",
		},
		{
			title: "Ready Player One",
			year: 2018,
			src: "rpo.jpg",
		},
		{
			title: "Pixels",
			year: 2015,
			src: "pixels.jpg",
		},
		{
			title: "The Purge",
			year: 2013,
			src: "the-purge.webp",
		},
		{
			title: "Who Am I",
			year: 2014,
			src: "whoami.webp",
		},
		{
			title: "Pacific Rim",
			year: 2013,
			src: "pacificrim.jpg",
		},
		{
			title: "Black Adam",
			year: 2022,
			src: "blackadam.webp",
		},
		{
			title: "Suicide Squad",
			year: 2016,
			src: "suicideSquad.webp",
		},
		{
			title: "The Dictator",
			year: 2012,
			src: "dictator.jpg",
		},
		{
			title: "Avatar",
			year: 2009,
			src: "avatar.webp",
		},
		{
			title: "Life of Pi",
			year: 2012,
			src: "lifeofPi.jpg",
		},
		{
			title: "Mama",
			year: 2013,
			src: "mama.jpg",
		},
		{
			title: "Demon Slayer the Movie: Mugen Train",
			year: 2020,
			src: "demonslayer.jpg",
		},
		{
			title: "Tenet",
			year: 2020,
			src: "tenet.jpg",
		},
		{
			title: "Puss in Boots: The Last Wish",
			year: 2022,
			src: "pussinboots.jpg",
		},
		{
			title: "X-Men: Dark Phoenix",
			year: 2019,
			src: "xmen.jpg",
		},
		{
			title: "Friends: Naki on the Monster Island",
			year: 2011,
			src: "naki.jpg",
		},
	];
	return (
		<>
			<div className="carousel">
				<h1 className="recommend">Recommendation</h1>
				<Carousel
					setMovieDetails={setMovieDetails}
					setTrailerVideo={setTrailerVideo}
					fetchMovieDetails={fetchMovieDetails}
					fetchTrailerVideo={fetchTrailerVideo}
				/>
			</div>
			<div className="content">
				<div className="featured">
					<h1>Featured</h1>
				</div>

				<div className="cards">
					{movieCards.map((movie, index) => {
						return (
							<div className="container-card" key={index}>
								<div className="image">
									<img
										src={require(`../image/${movie.src}`)}
										alt={movie.title + "Poster"}
										loading="lazy"
									/>
								</div>
								<div className="card-body">
									<h3 className="card-title">{movie.title}</h3>
									<h4 className="card-year">{movie.year}</h4>
									<button
										onClick={async () => {
											const movieDetails = await fetchMovieDetails(
												movie.title,
												movie.year
											);
											const trailer = await fetchTrailerVideo(
												movie.title,
												movie.year,
												1
											);
											setMovieDetails(movieDetails);
											setTrailerVideo(trailer);
										}}
									>
										Trailer
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
