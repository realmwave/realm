import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";

import { selectHomeData } from "../../store/homeDataSlice";
import "./styles.scss";


export default function Carousel() {
  const navigate = useNavigate()
  const [selectedBanner, setSelectedBanner] = useState<number>(0)
  const homeData: any[] = useSelector(selectHomeData)

  function onNavigate(path: string) {
    navigate(path)
  }

  return (
    <section className="w-full mt-12" >
      <div className="w-full flex items-center" >
        {Array(homeData[0]).map(item => (
          <div key={item._id} style={{ backgroundImage: `url(${homeData[selectedBanner].banner[0]})` }} className="w-full h-[350px] relative rounded-3xl p-10 bg-center bg-cover bg-no-repeat bg-[var(--color-light)]" >
            <div className="w-full h-full flex flex-col relative" >
              <p className="app__text-secondary bg-[var(--color-dark)] opacity-70 w-fit py-1 px-3 rounded-3xl text-[var(--color-white)] text-[0.65rem]" >{homeData[selectedBanner].mediaType === "series" ? homeData[selectedBanner].seasons.length.toString() + " episodes" : homeData[selectedBanner].duration.toString() + " min"}</p>
              <div className="absolute w-full bottom-0 flex justify-between items-end" >
                <div className="" >
                  <h1 className="text-[var(--color-white)] text-[2rem] font-bold app__text-secondary" >{homeData[selectedBanner].title}</h1>
                  <p className="text-[var(--color-white)] text-[0.75rem] font-semibold app__text-secondary mt-4" >{homeData[selectedBanner].score["$numberDecimal"].toString()}% Score</p>
                  <div className="relative flex items-center gap-2 mt-8" >
                    <button onClick={() => onNavigate(`watch/${homeData[selectedBanner]._id}`)} className="bg-[var(--color-red)] text-[var(--color-white)] text-[0.85rem] app__text-tertiary h-[40px] px-4 rounded-xl" >Watch</button>
                    <Link to="/createparty" className="h-[40px] px-3 flex justify-center items-center rounded-xl bg-white/20 backdrop-filter backdrop-blur-sm" >
                      <IoMdAdd className="text-[var(--color-white)]" />
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-3 z-10" >
                  {homeData.map((item, i) => (
                    <div key={i.toString()} onClick={() => setSelectedBanner(i)} className={`${i === selectedBanner ? "scale-[1.05] backdrop-filter backdrop-blur-sm p-[0.3rem]" : ""} bg-white/20 cursor-pointer rounded-lg transition-all duration-75 ease-in`} >
                      <img src={item.banner[0]} alt="poster" className={`rounded-lg w-[100px] aspect-video bg-[var(--color-lightGrey)]`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
};

