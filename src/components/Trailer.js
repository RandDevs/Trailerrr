import React, { useState } from "react";

const apiKey = "AIzaSyAvNsWIphfCjgbQk7Ij-E0GkXmcsC8pVgQ";

const Trailer = (props) => {
	const [search, setSearch] = useState("");
	const [videos, setVideos] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		videoSearch(apiKey, search, 1);
	};

	const videoSearch = (apiKey, search, maxResults) => {
		fetch(
			`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&type=video&part=snippet&maxResults=${maxResults}&q=${search} official trailer`
		)
			.then((response) => response.json())
			.then((data) => {
				setVideos([]);
				console.log(data);
				setVideos(data.items);
			});
	};

	return (
		<main>
			<form onSubmit={handleSubmit}>
				<input
					id="search"
					type="text"
					onChange={(e) => setSearch(e.target.value)}
				/>
				<button type="submit">Search</button>
			</form>
			<div id="videos">
				{videos.map((item, index) => (
					<iframe
						key={index}
						title={item.snippet.title}
						width="420"
						height="315"
						src={`http://www.youtube.com/embed/${item.id.videoId}`}
						frameBorder="0"
						allowFullScreen
					/>
				))}
			</div>
		</main>
	);
};

export default Trailer;
