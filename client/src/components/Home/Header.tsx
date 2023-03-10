import { AiOutlineMessage } from "react-icons/ai";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { HiOutlineBell } from "react-icons/hi";

import personImg from "../../../public/images/person.jpg";
import "./styles.scss";


export default function Header() {
  return (
    <section className="w-full flex items-center justify-between" >
      <div className="flex items-center gap-3" >
        <IoChevronBack size={22} className="text-[var(--color-Dark)]" />
        <IoChevronForward size={22} className="text-[var(--color-lightGrey)]" />
        <div className="w-[500px] flex items-center border-2 border-[var(--color-lightGrey)] rounded-2xl ml-6 px-4 py-2" >
          <BiSearch size={18} className="text-[var(--color-lightGrey)]" />
          <input type="text" name="search" id="search" placeholder="Search..." className="w-[95%] pl-3 pr-1 app__text-secondary outline-0" />
        </div>
      </div>
      <div className="flex items-center justify-between gap-6" >
        <div className="relative cursor-pointer" >
          <div className="w-2 absolute right-0 aspect-square rounded-full bg-[var(--color-red)]" />
          <HiOutlineBell size={22} className="text-[var(--color-lightGrey)]" />
        </div>
        <div className="relative cursor-pointer" >
          <div className="w-2 absolute right-0 aspect-square rounded-full bg-[var(--color-red)]" />
          <AiOutlineMessage size={22} className="text-[var(--color-lightGrey)]" />
        </div>
        <div className="flex items-center" >
          <div className="w-[40px] aspect-square rounded-full border-2 border-[var(--color-red)] p-[0.15rem] cursor-pointer" >
            <img src={personImg} alt="profile" className="w-full h-full rounded-full" />
          </div>
          <div className="ml-2" >
            <h3 className="app__text-tertiary text-[0.75rem]" >Ramona F.</h3>
            <h3 className="app__text-tertiary text-[0.65rem]" >@ramona</h3>
          </div>
        </div>
      </div>
    </section>
  )
};

