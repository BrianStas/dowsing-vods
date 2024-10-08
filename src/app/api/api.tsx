import axios from 'axios';

import * as streamingAvailability from "streaming-availability";
require('dotenv').config()

type Movie = { 
		poster_path: string;
		adult: boolean; 
		overview: string;  
		release_date: string;  
		genre_ids: number[];  
		id: number;
		original_title: string;  
		original_language: string;  
		title: string;  
		backdrop_path: string;  
		popularity: number;
		vote_count: number;
		video: boolean;  
		vote_average: number; 
}

const RAPID_API_KEY = process.env.RAPID_API_KEY
const tmdbApiKey = process.env.TMDB_API_KEY
const tmdbBaseUrl = 'https://api.themoviedb.org/3'

export const client = new streamingAvailability.Client(new streamingAvailability.Configuration({
	apiKey: RAPID_API_KEY
}));

// let show = await client.showsApi.getShow(
// 	{id: "tt0068646", country: "us"}
// );

// console.log(show.title);
// console.log(show.overview);
// show.streamingOptions["us"].forEach((streamingOption) => {
// 	console.log(streamingOption.link);
// });

export async function fetchMovies(query: string) {
	try {
	  const response = await axios.get(`${tmdbBaseUrl}/search/movie`, {
		params: {
		  api_key: tmdbApiKey,
		  query: query,
		  language: 'en-US',
		  page: 1,
		  include_adult: false,
		},
	  });
  
	  // Extract relevant data
	  const movies: Movie[] = response.data.results.map((movie: Movie) => ({
		id: movie.id,
		title: movie.title,
	  }));
  
	  return movies;
	} catch (error) {
	  console.error('Error fetching movies:', error);
	  return [];
	}
  }