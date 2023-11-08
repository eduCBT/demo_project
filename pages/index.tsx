import Head from "next/head";
import Homepage from "./Homepage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Demo Project</title>
        <meta name="description" content="A demo project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* MAIN */}
      <main>
        <Homepage />
      </main>
    </>
  );
}
