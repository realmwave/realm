import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { AiOutlineMessage } from "react-icons/ai";
import { IoChevronBack, IoChevronForward, IoPersonOutline, IoLogOutOutline, IoLogInOutline } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { HiOutlineBell } from "react-icons/hi";


import auth from "../../firebase/firebase";
import defaultUser from "../../../public/images/user.png";
import "./styles.scss";


export default function Header() {
  const [isProfileDropdownVisible, setIsProfileDropdownVisible] = useState<boolean>(false)
  const profileDropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onMouseDown(e: any) {
      e.stopPropagation()
      if(isProfileDropdownVisible && profileDropdownRef.current && !profileDropdownRef.current.contains(e.target)) setIsProfileDropdownVisible(false)
    }
    document.addEventListener("mousedown", onMouseDown)
    return () => {
      document.removeEventListener("mousedown", onMouseDown)
    }
  }, [isProfileDropdownVisible])
  

  async function logout() {
    console.log("clicked")
    try {
      await signOut(auth)
    } catch (error:any) {
      console.log("An error occured", error.code);
    }
  }

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
        <Link to="/notification" className="relative cursor-pointer" >
          <div className="w-2 absolute right-0 aspect-square rounded-full bg-[var(--color-red)]" />
          <HiOutlineBell size={22} className="text-[var(--color-lightGrey)]" />
        </Link>
        <Link to="/chat" className="relative cursor-pointer" >
          <div className="w-2 absolute right-0 aspect-square rounded-full bg-[var(--color-red)]" />
          <AiOutlineMessage size={22} className="text-[var(--color-lightGrey)]" />
        </Link>
        <button className="flex items-center justify-center" onClick={() => setIsProfileDropdownVisible(true)} >
          <div className="w-[40px] aspect-square rounded-full border-2 border-[var(--color-red)] p-[0.15rem] cursor-pointer relative" >
            <img src={auth.currentUser ? auth.currentUser.photoURL || defaultUser : defaultUser} alt="profile" className="w-full h-full rounded-full " />
            {isProfileDropdownVisible && (
              <div ref={profileDropdownRef} className="absolute w-[150px] top-[130%] right-[-170%] bg-[var(--color-light)] p-4 rounded-md z-50" >
                {auth.currentUser ?
                  <>
                    <Link to="/profile" className="flex items-center justify-center gap-2" >
                      <IoPersonOutline size={18} className="text-[var(--color-dark)]" />
                      <p className="text-[var(--color-dark)] app__text-tertiary" >My Profile</p>
                    </Link>
                    <div className="mt-5" >
                      <hr className="w-full h-[2px] bg-[var(--color-lightGrey)]" />
                      <button onClick={logout} className="w-full mt-2 flex items-center justify-center gap-3 bg-[var(--color-red)] p-1 rounded-md" >
                        <p className="app__text-tertiary text-[var(--color-white)]" >Logout</p>
                        <IoLogInOutline size={18} className="text-[var(--color-white)]" />
                      </button>
                    </div>
                  </>
                  :
                  <Link to="/auth" className="w-full flex items-center justify-center gap-3 bg-[var(--color-red)] p-1 rounded-md" >
                    <p className="app__text-tertiary text-[var(--color-white)]" >{auth.currentUser ? "Logout" : "Login" }</p>
                    {auth.currentUser ? <IoLogInOutline size={18} className="text-[var(--color-white)]" /> : <IoLogInOutline size={18} className="text-[var(--color-white)]" />}
                  </Link>
                }
              </div>
            )}
          </div>
          <div className="ml-2" >
            <h3 className="app__text-tertiary text-[0.75rem] text-start" >{auth.currentUser ? auth.currentUser.displayName : "Welcome"}</h3>
            <h3 className="app__text-tertiary text-[0.65rem] text-start" >{auth.currentUser ? "@" + auth.currentUser.displayName?.split(" ")[0].toLowerCase() : "@user"}</h3>
          </div>
        </button>
      </div>
    </section>
  )
};

