import NavBar from "components/NavBar";
import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import "styles/globals.scss";

const MyApp: AppType = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>About Andres</title>
      <meta name="title" content="About Andres" />
      <meta
        name="description"
        content="Personal site about Anders Rodriguez Michel"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://aboutandres.vercel.app/" />
      <meta property="og:title" content="About Andres" />
      <meta
        property="og:description"
        content="Personal site about Anders Rodriguez Michel"
      />
      <meta property="og:image" content="profile.jpg" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://aboutandres.vercel.app/" />
      <meta property="twitter:title" content="About Andres" />
      <meta
        property="twitter:description"
        content="Personal site about Anders Rodriguez Michel"
      />
      <meta property="twitter:image" content="profile.jpg" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="">
      <Component {...pageProps} />
    </main>
    <NavBar />
  </>
);
export default MyApp;
