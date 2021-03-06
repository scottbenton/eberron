import "@/styles/globals.css";
import "typeface-open-sans";
import "typeface-roboto-slab";
import "typeface-rubik";
import { Header, Content } from "../components/layout";
import Head from "next/head";

interface MyAppProps {
  Component: new () => React.Component<any>;
  pageProps: Object;
}

const MyApp: React.FC<MyAppProps> = (props) => {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Eberron</title>
        <meta name="description" content="Eberron Campaign Resources" />
        <meta name="author" content="Scott Benton" />
      </Head>
      <div className={"cog-background min-h-screen"}>
        <div
          className={
            "flex flex-col max-w-screen-lg mx-auto min-h-screen h-full bg-gray-100 shadow-2xl"
          }
        >
          <Header />
          <Content>
            <Component {...pageProps} />
          </Content>
        </div>
      </div>
    </>
  );
};

export default MyApp;
