
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
	{id: "tt3393786", country: "us"}
);

console.log(show.title);
console.log(show.overview);
const streamChoice: string = show.streamingOptions["us"][0].link;


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>{show.title}</p>
     <p>{streamChoice}</p> 
    </main>
  );
}
