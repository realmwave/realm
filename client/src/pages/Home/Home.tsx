import { HomeHeader, Carousel } from "../../components";
import { Watching } from "../../containers";

import "./home.scss";


export default function Home() {
  return (
    <main className="w-full h-full" >
      <HomeHeader />
      <Carousel />
      <Watching />
    </main>
  )
};

