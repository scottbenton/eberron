import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div className={"h-full flex-grow flex flex-col p-4"}>
      <div className="mx-auto prose-sm md:prose">
        <h1>Scott's Eberron Campaign</h1>
        <Link href={"/chronicle"}>
          <a>
            <h2>Korranberg Chronicle</h2>
          </a>
        </Link>
        <p>
          The Korranberg Chronicle is a newspaper that can be found all across
          Khorvaire. My hope is that by making articles from the paper available
          to you online, you can get a better feel as to what is going on in the
          world at the moment, and maybe even find a job or two!
        </p>
        <Link href={"/sessions"}>
          <a>
            <h2>Session Recaps</h2>
          </a>
        </Link>
        <p>
          Notes for each and every single session have been added to the
          website. Looking to catch yourself back up on what happened in session
          3? This is the place to do it!
        </p>
        <h2>Resources</h2>
        <Link href={"/dm-prep"}>
          <a>How I Plan Sessions</a>
        </Link>
        <span
          className={
            "text-xs font-bold tracking-wider uppercase text-white bg-blue-700 rounded px-1 ml-1"
          }
        >
          New
        </span>
        {/* <Link href={"/angelica-cipher"}>
          <a className={"block"}>Angelica's Journal Cipher</a>
        </Link> */}
        <Link href={"https://eberronmap.johnarcadian.com/"}>
          <a className={"block"}>Map of Eberron</a>
        </Link>
        <Link
          href={
            "https://soundcloud.com/scott-benton-64103726/the-celeste-noir/s-wejo8yfJZr5"
          }
        >
          <a className={"block"}>The Celeste Noir</a>
        </Link>
        <Link
          href={
            "https://soundcloud.com/scott-benton-64103726/the-mourning/s-5ZcRkkSpCKv"
          }
        >
          <a className={"block"}>The Mourning</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
