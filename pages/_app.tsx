import "@/styles/globals.css";
import "typeface-open-sans";
import "typeface-playfair-display";
import "typeface-fira-sans";
import { Header, Content } from "../components/layout";

interface MyAppProps {
  Component: new () => React.Component<any>;
  pageProps: Object;
}

const MyApp: React.FC<MyAppProps> = (props) => {
  const { Component, pageProps } = props;

  return (
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
  );
};

export default MyApp;
