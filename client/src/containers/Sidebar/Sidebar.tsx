import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiFillCompass } from "react-icons/ai";
import { BiHomeAlt2 } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import { RiHeart3Line } from "react-icons/ri";
import { MdOutlineDateRange } from "react-icons/md";
import { IoPersonOutline, IoPeopleOutline } from "react-icons/io5";
import { RxGear } from "react-icons/rx";

import "./sidebar.scss";


const Menu = [
  {
    id: 1,
    text: "Home",
    category: "Menu",
    route: "/",
    Icon: (className: string, size: number) => <BiHomeAlt2 size={size} className={className} />,
  },
  {
    id: 2,
    text: "Browse",
    category: "Menu",
    route: "/browse",
    Icon: (className: string, size: number) => <AiFillCompass size={size} className={className} />,
  },
  {
    id: 3,
    text: "Watchlist",
    category: "Menu",
    route: "/watchlist",
    Icon: (className: string, size: number) => <RiHeart3Line size={size} className={className} />,
  },
  {
    id: 4,
    text: "Coming Soon",
    category: "Menu",
    route: "/comingsoon",
    Icon: (className: string, size: number) => <MdOutlineDateRange size={size} className={className} />,
  },
  {
    id: 5,
    text: "Friends",
    category: "Socials",
    route: "/friends",
    Icon: (className: string, size: number) => <IoPersonOutline size={size} className={className} />,
  },
  {
    id: 6,
    text: "Parties",
    category: "Socials",
    route: "/parties",
    Icon: (className: string, size: number) => <IoPeopleOutline size={size} className={className} />,
  },
  {
    id: 7,
    text: "Settings",
    category: "General",
    route: "/settings",
    Icon: (className: string, size: number) => <RxGear size={size} className={className} />,
  },
  {
    id: 8,
    text: "Logout",
    category: "General",
    route: "/logout",
    Icon: (className: string, size: number) => <BiLogOut size={size} className={className} />,
  },
]

export default function Sidebar() {
  return (
    <section className="w-[15%] h-screen fixed z-10 border-r-[1px] border-[var(--color-light)]" >
      <div className="w-full h-full pt-10" >
        <h1 className="app__brand-text font-bold text-[1.25rem] ml-8" >Brand<span className="text-[var(--color-red)]" >.</span> </h1>
        <div id="menu" className="mt-10" >
          <p className="app__text-secondary text-[0.85rem] text-[var(--color-lightGrey)] ml-8 mb-6" >Menu</p>
          <ul className="" >
            {Menu.filter(item => item.category === "Menu").map(menu => (
              <NavLink key={menu.id} to={menu.route} className="h-full flex items-center justify-start gap-2" >
                {({ isActive, isPending }) => (
                  <div className="h-6 flex items-center gap-6 mb-4" >
                    <div className={`w-[3px] h-full ${isActive ? "bg-[var(--color-red)]" : "bg-transparent"} rounded-md`} />
                    <div className="h-full flex items-center justify-center gap-2 cursor-pointer" >
                      {menu.Icon(isActive ? "text-[var(--color-red)]" : "text-[var(--color-lightGrey)]", isActive ? 18 : 16)}
                      <h3 className={`app__text-secondary ${isActive ? "text-[var(--color-dark)] font-semibold text-[0.9rem]" : "text-[var(--color-lightGrey)] font-regular text-[0.8rem]"}`} >{menu.text}</h3>
                    </div>
                  </div>
                )}
              </NavLink>
            ))}
          </ul>
        </div>
        <div id="socials" className="mt-10" >
          <p className="app__text-secondary text-[0.85rem] text-[var(--color-lightGrey)] ml-8 mb-6" >Socials</p>
          <ul className="" >
            {Menu.filter(item => item.category === "Socials").map(menu => (
              <NavLink key={menu.id} to={menu.route} className="h-full flex items-center justify-start gap-2" >
                {({ isActive, isPending }) => (
                  <div className="h-6 flex items-center gap-6 mb-4" >
                    <div className={`w-[3px] h-full ${isActive ? "bg-[var(--color-red)]" : "bg-transparent"} rounded-md`} />
                    <div className="h-full flex items-center justify-center gap-2 cursor-pointer" >
                      {menu.Icon(isActive ? "text-[var(--color-red)]" : "text-[var(--color-lightGrey)]", isActive ? 18 : 16)}
                      <h3 className={`app__text-secondary ${isActive ? "text-[var(--color-dark)] font-semibold text-[0.9rem]" : "text-[var(--color-lightGrey)] font-regular text-[0.8rem]"}`} >{menu.text}</h3>
                    </div>
                  </div>
                )}
              </NavLink>
            ))}
          </ul>
        </div>
        <div id="general" className="mt-10" >
          <p className="app__text-secondary text-[0.85rem] text-[var(--color-lightGrey)] ml-8 mb-6" >General</p>
          <ul className="" >
            {Menu.filter(item => item.category === "General").map(menu => (
              <NavLink key={menu.id} to={menu.route} className="h-full flex items-center justify-start gap-2" >
                {({ isActive, isPending }) => (
                  <div className="h-6 flex items-center gap-6 mb-4" >
                    <div className={`w-[3px] h-full ${isActive ? "bg-[var(--color-red)]" : "bg-transparent"} rounded-md`} />
                    <div className="h-full flex items-center justify-center gap-2 cursor-pointer" >
                      {menu.Icon(isActive ? "text-[var(--color-red)]" : "text-[var(--color-lightGrey)]", isActive ? 18 : 16)}
                      <h3 className={`app__text-secondary ${isActive ? "text-[var(--color-dark)] font-semibold text-[0.9rem]" : "text-[var(--color-lightGrey)] font-regular text-[0.8rem]"}`} >{menu.text}</h3>
                    </div>
                  </div>
                )}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
};

