import Image from "next/image";
import { client } from "./api/api";

export default async function Home() {

  let show = await client.showsApi.getShow(
	{id: "tt0068646", country: "us"}
);

console.log(show.title);
console.log(show.overview);
const streamChoice: string = show.streamingOptions["us"][1].link;


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>{show.title}</p>
     <p>{streamChoice}</p> 
    </main>
  );
}
