import { HomeHeader, Carousel } from "../../components";
import { Sidebar, Watching } from "../../containers";
import "./home.scss";


export default function Home() {
  return (
    <main className="w-full h-full" >
      <Sidebar />
      <div className="w-full pt-8 pl-[15%]" >
        <div className="w-full px-20" >
          <HomeHeader />
          <Carousel />
          <Watching />
        </div>
      </div>
    </main>
  )
};

