import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { FiEye } from "react-icons/fi";
import { BiLike, BiDislike, BiAddToQueue } from "react-icons/bi";
import { TbShare3 } from "react-icons/tb";

import { selectHomeData } from "../../store/homeDataSlice";
import cast1 from "../../../public/images/HenryCavile.jpg";
import cast2 from "../../../public/images/The Witcher Cast 2.jfif"
import cast3 from "../../../public/images/transformer-cast-2.webp"
import cast4 from "../../../public/images/transformer-cast-1.jfif"
import productionHouseImage from "../../../public/images/Paramount_Pictures-avatar.png";
import "./video.scss";


export default function Video() {
  const { id } = useParams()
  const homeData: any[] = useSelector(selectHomeData)
  const [loading, setLoading] = useState<boolean>(true)
  const [currentMedia, setCurrentMedia] = useState<any>(() => {
    if (id && homeData) {
      return homeData.filter(item => item._id === id)[0]
    } else {
      return null
    }
  })

  const navigate = useNavigate()
  
  function onNavigate(path: string) {
    navigate(path)
  }
  
  return (
    <section className="w-full h-full" >
      <div className="w-full h-[80%] bg-[var(--color-dark)]" >
        <video poster={currentMedia.thumbnails[0]} src={currentMedia.mediaUrl} controls className="w-full h-full" />
      </div>
      <div className="w-full px-20 mt-2" >
        <h1 className="text-[var(--color-dark)] text-[1.5rem] font-bold app__text-primary" >{currentMedia.title}</h1>
        <div className="w-full flex items-start mt-2" >
          <div className="w-3/5" >
            <div className="flex items-center justify-between" >
              <div className="flex items-center gap-2" >
                <img src={productionHouseImage} alt="" className="w-[40px] aspect-square rounded-full" />
                <p className="app__text-secondary font-semibold" >Paramount Pictures</p>
              </div>
              <div className="flex items-center gap-6" >
                <div className="flex items-center gap-5 bg-[var(--color-light)] px-4 py-2 rounded-full" >
                  <div className="flex gap-2" >
                    <BiLike className="text-[var(--color-dark)]" size={20} />
                    <p className="app__text-tertiary text-[var(--color-dark)] text-[0.85rem] font-bold" >2k</p>
                  </div>
                  <div>
                    <BiDislike className="text-[var(--color-dark)]" size={20} />
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-[var(--color-light)] px-4 py-2 rounded-full" >
                  <FiEye className="text-[var(--color-dark)]" size={20} />
                  <p className="app__text-tertiary text-[var(--color-dark)] text-[0.85rem] font-bold" >20k</p>
                </div>
                <div className="flex items-center gap-2 bg-[var(--color-light)] px-4 py-2 rounded-full" >
                  <TbShare3 className="text-[var(--color-dark)]" size={20} />
                  <p className="app__text-tertiary text-[var(--color-dark)] text-[0.85rem] font-bold" >Share</p>
                </div>
                <div className="flex items-center gap-2 bg-[var(--color-light)] px-4 py-2 rounded-full" >
                  <BiAddToQueue className="text-[var(--color-dark)]" size={20} />
                  <p className="app__text-tertiary text-[var(--color-dark)] text-[0.85rem] font-bold" >Save</p>
                </div>
              </div>
            </div>
            <div className="bg-[var(--color-light)] w-full p-2 mt-4 rounded-md" >
              <p className="app__text-secondary text-[var(--color-dark)] text-[0.9rem]" >
                Transformers is an action-packed science fiction movie directed by Michael Bay. The movie follows a group of powerful robots from outer space called Transformers, who come to Earth to battle for control of the planet. The robots are divided into two sides, the Autobots and the Decepticons, with the Autobots fighting to protect Earth while the Decepticons seek to take it over. The movie features spectacular special effects and thrilling battle scenes as the two sides fight for supremacy.
              </p>
            </div>
            {/* casts */}
            <div className="my-6" >
              <h1 className="app__text-secondary font-semibold text-[1.25rem]" >Casts</h1>
              <div className="w-full flex items-start mt-2 gap-3" >
                <div className="w-[20%] h-fit pb-2 rounded-xl bg-[var(--color-light)] cursor-pointer" >
                  <img src={cast4} alt="" className="w-full h-full object-cover rounded-t-xl" />
                  <div className="mt-1 px-1 pb-4" >
                    <h2 className="app__text-secondary font-bold" >Ron Perlman</h2>
                    <p className="app__text-secondary font-semibold text-[var(--color-lightGrey)] text-[0.85rem]" >Optimus Primal</p>
                  </div>
                </div>
                <div className="w-[20%] h-fit pb-2 rounded-xl bg-[var(--color-light)] cursor-pointer" >
                  <img src={cast3} alt="" className="w-full h-full object-cover rounded-t-xl" />
                  <div className="mt-1 px-1 pb-4" >
                    <h2 className="app__text-secondary font-bold" >Mark Whalberg</h2>
                    <p className="app__text-secondary font-semibold text-[var(--color-lightGrey)] text-[0.85rem]" >Sam Witwicky</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/5 flex flex-col items-end" >
            <div>
              <h1 className="app__text-secondary font-semibold mb-2" >Watching Next</h1>
              {homeData.map(item => (
                <div key={item._id} onClick={() => onNavigate(`watch/${id}`)} className="cursor-pointer bg-[var(--color-light)] rounded-xl mb-3 flex items-start hover:scale-[1.03] transition-all" >
                  <div className="" >
                    <div style={{ backgroundImage: `url(${item?.thumbnails[0]})` }} className="h-[120px] aspect-video bg-center bg-contain bg-no-repeat bg-[var(--color-light)] rounded-tl-xl rounded-bl-xl" />
                    <p className="absolute left-2 z-10 top-2 text-[var(--color-white)] bg-[var(--color-dark)] text-[0.65rem] px-2 py-1 rounded-lg" >{item.duration}</p>
                  </div>
                  <div className="w-full px-2 overflow-x-hidden" >
                    <h3 className="app__text-secondary text-[var(--color-dark)] font-bold overflow-x-hidden text-ellipsis w-full" >{item.title}</h3>
                    {/*<div className="flex items-center mt-1" >
                      <img src={dreamWorkLogo} alt="logo" className="w-[25px] aspect-square rounded-full" />
                      <p className="app__text-tertiary text-[var(--color-dark)] text-[0.75rem] font-semibold ml-2" >Dreamworks</p>
                    </div>*/}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

