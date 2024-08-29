import Image from "next/image";
import { client } from "./api/api";

export default async function Home() {

  let show = await client.showsApi.getShow(
	{id: "tt3393786", country: "us"}
);

console.log(show.title);
console.log(show.overview);
const streamChoice: string = show.streamingOptions["us"][0].link;
//tmdb will provide the ID used to get the streaming options from streamingAvailability
// Need to find quickest route to obtain list of movies with IDs from TMDB


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>{show.title}</p>
     <p>{streamChoice}</p> 
    </main>
  );
}
