import Header from "../components/Header";
import Head from "next/head";
import Introduction from "../components/Introduction";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Raahim Zee.</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <Header />
      <Introduction />
      <Skills />
      <Experience />
      {/* <Projects /> */}
      <Footer />
    </div>
  );
}
