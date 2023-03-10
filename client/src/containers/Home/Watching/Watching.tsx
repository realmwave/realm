import { VideoCard } from "../../../components";

import "./watching.scss";


export default function Watching() {
  return (
    <section className="mt-12" >
      <h2 className="app__text-secondary text-[var(--color-dark)] font-semibold" >Continue Watching</h2>
      <div className="flex items-center justify-between gap-5 my-6 overflow-x-scroll" >
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        {/*<VideoCard />*/}
      </div>
    </section>
  )
};

