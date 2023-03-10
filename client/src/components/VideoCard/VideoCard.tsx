import thumbnail1 from "../../../public/images/thumbnail-1.jpg";
import dreamWorkLogo from "../../../public/images/DreamWorksLogo.png";

import "./videocard.scss";


interface IVideoCardProps {
  thumbnail: string;
  title: string;
  duration?: string;
  watchTime?: string;
  productionHouseImage: string;
  productionHouseName: string;
}

export default function VideoCard({ thumbnail, title, duration, watchTime, productionHouseImage, productionHouseName }: IVideoCardProps) {
  return (
    <div className="w-full" >
      <div className="relative" >
        <img src={thumbnail1} alt="" className="rounded-t-xl relative object-contain" />
        <p className="absolute left-2 z-10 top-2 text-[var(--color-white)] bg-[var(--color-dark)] text-[0.65rem] px-2 py-1 rounded-lg" >2:11:00</p>
        <div className="w-[45%] bg-[var(--color-red)] z-10 absolute h-1 bottom-0" />
      </div>
      <div className="mt-2 w-full overflow-x-hidden" >
        <h3 className="app__text-secondary text-[var(--color-dark)] font-bold overflow-x-hidden text-ellipsis w-full" >Transformer</h3>
        <div className="flex items-center mt-1" >
          <img src={dreamWorkLogo} alt="logo" className="w-[25px] aspect-square rounded-full" />
          <p className="app__text-tertiary text-[var(--color-dark)] text-[0.75rem] font-semibold ml-2" >Dreamworks</p>
        </div>
      </div>
    </div>
  )
};

