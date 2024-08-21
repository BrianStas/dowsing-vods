import * as streamingAvailability from "streaming-availability";
require('dotenv').config()

const RAPID_API_KEY = process.env.RAPID_API_KEY

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