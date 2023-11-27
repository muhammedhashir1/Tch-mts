import Image from "next/image";
import Banner from "./components/banner/Banner";
import Featured from "./components/featured/featured";
import Pics from "./components/pics/pics";
import Quotes from "./components/quotes/Quotes";

export default function Home() {
  return (
    <div>
      <Banner />
      <Featured />
      <Pics />
      <Quotes />
    </div>
  );
}
