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
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="box">
      <Component {...pageProps} />
    </main>
  </>
);
export default MyApp;
