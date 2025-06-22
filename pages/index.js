import Head from "next/head";
import SceneEditor from "../components/SceneEditor";

export default function Home() {
  return (
    <>
      <Head>
        <title>InVideo Clone</title>
      </Head>
      <main className="container">
        <SceneEditor />
      </main>
    </>
  );
}
