import React, { useState, useRef, useEffect } from "react";
import "../css/carousel.css";

const imageSlider = [
	{
		title: "Interstellar",
		year: 2014,
		src: "interstellar.jpeg",
		type: "Movie",
		captions:
			"Earth's future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankind's survival: Interstellar travel. A newly discovered wormhole in the far reaches of our solar system allows a team of astronauts to go where no man has gone before, a planet that may have the right environment to sustain human life.",
	},
	{
		title: "Venom: Let There Be Carnage",
		year: 2018,
		src: "venom.jpg",
		type: "Movie",
		captions:
			"Eddie Brock struggles to adjust to his new life as the host of the alien symbiote Venom, which grants him super-human abilities in order to be a lethal vigilante. Brock attempts to reignite his career by interviewing serial killer Cletus Kasady, who becomes the host of the symbiote Carnage and escapes prison after a failed execution.",
	},
	{
		title: "Moon Knight",
		year: 2022,
		src: "mk.jpg",
		type: "Series",
		captions:
			"The Moon Knight TV series follows Marc Spector as he becomes Moon Knight and battles crime in New York City, while dealing with his multiple identities and past traumas. The series features villains, relationships, and psychological storytelling, with standout performances and visual effects.",
	},
];

function Carousel({
	setMovieDetails,
	setTrailerVideo,
	fetchMovieDetails,
	fetchTrailerVideo,
}) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const slidesRef = useRef(null);

	useEffect(() => {
		slidesRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;

		const intervalId = setInterval(() => {
			setCurrentIndex((i) => (i + 1) % 3);
		}, 5000);
		return () => clearInterval(intervalId);
	}, [currentIndex]);

	const handlePrev = () => {
		setCurrentIndex(
			(currentIndex + imageSlider.length - 1) % imageSlider.length
		);
	};

	const handleNext = () => {
		setCurrentIndex((currentIndex + 1) % imageSlider.length);
	};

	const handleIndicatorClick = (index) => {
		setCurrentIndex(index);
	};

	return (
		<>
			<div className="slides" ref={slidesRef}>
				{imageSlider.map((slider, index) => (
					<div className="slide" key={index}>
						<div className="title-slide">{slider.title}</div>
						<div className="type-slide">{slider.type}</div>
						<img
							src={require(`../image/${slider.src}`)}
							alt={`${slider.title} Poster`}
						/>
						<div className="description-carousel">
							<div className="trailer">
								<button
									onClick={async () => {
										const trailer = await fetchTrailerVideo(
											slider.title,
											slider.year,
											1
										);
										const movieDetails = await fetchMovieDetails(
											slider.title,
											slider.year
										);
										setTrailerVideo(trailer);
										setMovieDetails(movieDetails);
									}}
								>
									Trailer
								</button>
							</div>
							<div className="caption">{slider.captions}</div>
						</div>
					</div>
				))}
			</div>
			<div className="indicators">
				{imageSlider.map((_, index) => (
					<div
						className={`indicator ${currentIndex === index ? "active" : ""}`}
						key={index}
						onClick={() => handleIndicatorClick(index)}
					>
						<div className="bar"></div>
					</div>
				))}
			</div>
			<button className="prev-btn carousel-btn" onClick={handlePrev}>
				&lArr;
			</button>
			<button className="next-btn carousel-btn" onClick={handleNext}>
				&rArr;
			</button>
		</>
	);
}

export default Carousel;
