import Head from "next/head";
import { Inter } from "@next/font/google";
import Body from "@/components/Body";
import Playlist from "@/components/Playlist";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Music Player | Project | Sharull</title>
        <meta
          name="description"
          content="This is a clone of Music player which is a given project need to complete"
        />
        <meta name="keywords" content="Music Player Clone, Sharull" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Body />
      </div>
    </>
  );
}
