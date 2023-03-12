import { useNavigate } from "react-router-dom";
import "./videocard.scss";


interface IVideoCardProps {
  id: string;
  thumbnail: string;
  title: string;
  duration?: string;
  watchTime: number;
  productionHouseImage: string;
  productionHouseName: string;
}

export default function VideoCard({ id, thumbnail, title, duration, watchTime, productionHouseImage, productionHouseName }: IVideoCardProps) {
  const navigate = useNavigate()
  
  function onNavigate(path: string) {
    navigate(path)
  }

  return (
    <div onClick={() => onNavigate(`watch/${id}`)} className="w-[20%] cursor-pointer bg-[var(--color-light)] rounded-xl h-[200px] mb-20 hover:scale-[1.03] transition-all" >
      <div className="relative w-full" >
        <div style={{ backgroundImage: `url(${thumbnail})` }} className="h-[120px] bg-center bg-cover bg-no-repeat bg-[var(--color-light)] rounded-t-xl" />
        <p className="absolute left-2 z-10 top-2 text-[var(--color-white)] bg-[var(--color-dark)] text-[0.65rem] px-2 py-1 rounded-lg" >{duration}</p>
        <div className={`w-[${watchTime.toString()}%] bg-[var(--color-red)] z-10 absolute h-1 bottom-0`} />
      </div>
      <div className="mt-2 w-full px-1 overflow-x-hidden" >
        <h3 className="app__text-secondary text-[var(--color-dark)] font-bold overflow-x-hidden text-ellipsis w-full" >{title}</h3>
        {/*<div className="flex items-center mt-1" >
          <img src={dreamWorkLogo} alt="logo" className="w-[25px] aspect-square rounded-full" />
          <p className="app__text-tertiary text-[var(--color-dark)] text-[0.75rem] font-semibold ml-2" >Dreamworks</p>
        </div>*/}
      </div>
    </div>
  )
};

