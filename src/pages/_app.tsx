import Layout from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { Barlow } from "next/font/google";
import { SessionProvider } from "next-auth/react";

const barlow = Barlow({
  subsets: ["latin"],
  weight: "400",
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Layout>
          <main className={barlow.className}>
            <Component {...pageProps} />
          </main>
        </Layout>
      </Provider>
    </SessionProvider>
  );
}
