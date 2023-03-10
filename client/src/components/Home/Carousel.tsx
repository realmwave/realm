import { IoMdAdd } from "react-icons/io";

import PosterWitcher from "../../../public/images/poster-1.jpg";
import PosterTransformer from "../../../public/images/poster-2.jpg";
import PosterAngryBird from "../../../public/images/poster-3.jpg";
import "./styles.scss";


const posters = [
  {
    id: 1,
    title: "The Witcher",
    score: "95%",
    category: "series",
    image: PosterWitcher,
    seasons: 2,
    episodes: 16,
  },
  //{
  //  id: 2,
  //  title: "Transformer",
  //  score: "90%",
  //  image: PosterTransformer,
  //  category: "movie",
  //  duration: "118 min",
  //},
  //{
  //  id: 3,
  //  title: "Angry Bird",
  //  score: "88%",
  //  image: PosterAngryBird,
  //  category: "movie",
  //  duration: "102 min",
  //},
]

export default function Carousel() {
  return (
    <section className="w-full mt-12" >
      <div className="w-full flex items-center" >
        {posters.map(item => (
          <div key={item.id} style={{ backgroundImage: `url(${item.image})` }} className="w-full h-[350px] relative rounded-3xl p-10 bg-center bg-cover bg-no-repeat" >
            <div className="w-full h-full flex flex-col relative" >
              <p className="app__text-secondary bg-[var(--color-dark)] opacity-70 w-fit py-1 px-3 rounded-3xl text-[var(--color-white)] text-[0.65rem]" >{item.category === "series" ? item.episodes.toString() + " episodes" : item.episodes}</p>
              <div className="absolute w-full bottom-0 flex justify-between items-end" >
                <div className="" >
                  <h1 className="text-[var(--color-white)] text-[2rem] font-bold app__text-secondary" >{item.title}</h1>
                  <p className="text-[var(--color-white)] text-[0.75rem] font-semibold app__text-secondary mt-4" >{item.score.toString()} Score</p>
                  <div className="relative flex items-center gap-5 mt-8" >
                    <button className="bg-[var(--color-red)] text-[var(--color-white)] text-[0.85rem] app__text-tertiary h-[40px] px-4 rounded-xl" >Watch</button>
                    <button className="h-[40px] px-3 rounded-xl bg-white/20 backdrop-filter backdrop-blur-sm" >
                      <IoMdAdd className="text-[var(--color-white)]" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-2" >
                  <img src={PosterWitcher} alt="poster" className="rounded-lg w-[100px] aspect-video bg-white/20 backdrop-filter backdrop-blur-sm" />
                  <img src={PosterTransformer} alt="poster" className="rounded-lg w-[100px] aspect-video" />
                  <img src={PosterAngryBird} alt="poster" className="rounded-lg w-[100px] aspect-video" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
};

