import { AiFillCompass } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { RiHeart3Line } from "react-icons/ri";
import { MdOutlineDateRange } from "react-icons/md";
import { IoPersonOutline, IoPeopleOutline } from "react-icons/io5";
import { RxGear } from "react-icons/rx";

import "./sidebar.scss";


const Menu = [
  {
    id: 1,
    category: "Menu",
    items: [
      {
        id: 1,
        text: "Browse",
        Icon: (className: string, size: number) => <AiFillCompass size={size} className={className} />,
      },
      {
        id: 2,
        text: "Watchlist",
        Icon: (className: string, size: number) => <RiHeart3Line size={size} className={className} />,
      },
      {
        id: 1,
        text: "Coming Soon",
        Icon: (className: string, size: number) => <MdOutlineDateRange size={size} className={className} />,
      },
    ],
  },
  {
    id: 2,
    category: "Socials",
    items: [
      {
        id: 1,
        text: "Friends",
        Icon: (className: string, size: number) => <IoPersonOutline size={size} className={className} />,
      },
      {
        id: 2,
        text: "Parties",
        Icon: (className: string, size: number) => <IoPeopleOutline size={size} className={className} />,
      },
    ],
  },
  {
    id: 3,
    category: "General",
    items: [
      {
        id: 1,
        text: "Settings",
        Icon: (className: string, size: number) => <RxGear size={size} className={className} />,
      },
      {
        id: 2,
        text: "Logout",
        Icon: (className: string, size: number) => <BiLogOut size={size} className={className} />,
      },
    ],
  },
]

export default function Sidebar() {
  return (
    <section className="w-[15%] h-screen fixed z-10 border-r-[1px] border-[var(--color-light)]" >
      <div className="w-full h-full pt-10" >
        <h1 className="app__brand-text font-bold text-[1.25rem] ml-8" >Brand<span className="text-[var(--color-red)]" >.</span> </h1>
        {Menu.map(item => (
          <div key={item.id} id="menu" className="mt-10" >
            <p className="app__text-secondary text-[0.85rem] text-[var(--color-lightGrey)] ml-8 mb-6" >{item.category}</p>
            <ul className="" >
              {item.items.map(link => (
                <li key={link.id} className="h-6 flex items-center gap-6 mb-4" >
                  <div className="w-[3px] h-full bg-[var(--color-red)] rounded-md" />
                  <a href="" className="h-full flex items-center justify-center gap-2 cursor-pointer" >
                    {link.Icon("text-[var(--color-red)]", 18)}
                    <h3 className="app__text-secondary text-[0.9rem] font-semibold text-[var(--color-dark)]" >{link.text}</h3>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
};

