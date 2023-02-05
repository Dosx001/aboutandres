import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import "styles/globals.scss";

const MyApp: AppType = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>About Andres</title>
      <meta
        name="description"
        content="Personal site about Anders Rodriguez Michel"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="mx-auto w-11/12 md:w-3/4 3xl:w-1/2">
      <Component {...pageProps} />
    </main>
  </>
);
export default MyApp;
