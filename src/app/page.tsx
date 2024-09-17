
import { client } from "./api/api";
import Search from "./ui/search";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || '';

  let show = await client.showsApi.getShow(
	{id: "movie/343611", country: "us"}
);

console.log(show);
console.log(show.overview);
const streamChoice: string = show.streamingOptions["us"][0].link;



// to search availability by TMDB ID it must be "movie/{id}"
// search url would be fetch('https://api.themoviedb.org/3/search/movie?query={searchTerm}&include_adult=false&language=en-US&page=1', options)
// check sources

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>{show.title}</p>
     <p>{streamChoice}</p> 
     
    </main>
  );
}
