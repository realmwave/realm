import { useSelector } from "react-redux";

import { selectHomeData } from "../../../store/homeDataSlice";
import { VideoCard } from "../../../components";
import "./watching.scss";


export default function Watching() {
  const homeData: any[] = useSelector(selectHomeData)

  return (
    <section className="my-12" >
      <h2 className="app__text-secondary text-[var(--color-dark)] font-semibold" >Continue Watching</h2>
      <div className="w-full flex items-start justify-start gap-5 my-4" >
        {homeData.map(item => (
          <VideoCard key={item._id} id={item._id} thumbnail={item?.thumbnails[0]} title={item.title} watchTime={Math.floor(Math.random() * (100 - 20 + 1) + 20)} duration={item.duration} productionHouseImage={""} productionHouseName={""} />
        ))}
      </div>
    </section>
  )
};

