import "@/styles/globals.css";
import "typeface-open-sans";
import "typeface-playfair-display";
import "typeface-fira-sans";
import { Header, Content } from "../components/layout";
import Head from "next/head";
import { AuthProvider } from "../helpers/auth/AuthProvider";

interface MyAppProps {
  Component: new () => React.Component<any>;
  pageProps: Object;
}

const MyApp: React.FC<MyAppProps> = (props) => {
  const { Component, pageProps } = props;

  return (
    <AuthProvider>
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
    </AuthProvider>
  );
};

export default MyApp;
