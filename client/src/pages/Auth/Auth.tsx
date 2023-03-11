import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";

import { Toast } from "../../components";

import auth from "../../firebase/firebase";
import googleIcon from "../../../public/images/google_icon.svg";
import "./auth.scss";

export default function Auth() {
  const [loading, setLoading] = useState<boolean>(false)
  const [toast, setToast] = useState({activate: false, message: "An error occured"})
  const [authState, setAuthState] = useState<"login" | "register">("login")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  
  function toggleAuthState() {
    setAuthState(prevState => {
      if (prevState === "login") return "register"
      else return "login"
    })
  }
  
  async function onSignInWithGoogle() {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider)
    } catch (error: any) {
      setToast({activate: true, message: error.message})
      // console.log(error.message);
    }
  }
  async function onLogin() {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error: any) {
      setToast({activate: true, message: error.message})
      //console.log(error.message);
    }
  }
  async function onRegister() {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (error: any) {
      setToast({activate: true, message: error.message})
      //console.log(error.message);
    }
  }

  async function onSubmit(e: any) {
    setLoading(true)
    e.preventDefault()
    if (authState === "login") {
      await onLogin()
      setLoading(false)
    } else {
      await onRegister()
      setLoading(false)
    }
  }

  return (
    <section className="w-full h-full flex flex-1 flex-col justify-center items-center relative" >
      {toast.activate && <Toast message={toast.message} onClose={() => setToast(prevState => ({...prevState, "activate": true}))} />}
      <div className="w-1/2 aspect-square flex flex-1 flex-col justify-center items-center" >
        <h1 className="app__text-secondary font-bold text-[2.5rem]" >Welcome, user</h1>
        <p className="app__text-tertiary text-[0.85rem] text-[var(--color-lightGrey)]" >Welcome to video streaming app</p>
        <button disabled={loading} onClick={onSignInWithGoogle} className="cursor-pointer w-1/3 h-8 border-[1px] border-[var(--color-lightGrey)] p-2 flex justify-center gap-3 items-center mt-6" >
          <img src={googleIcon} alt="google-logo" className="w-[30px] aspect-square" />
          <p className="app__text-tertiary text-[0.9rem]" >Login with Google</p>
        </button>
        <div className="my-8 w-full flex items-center justify-center gap-2" >
          <div className="w-[25%] h-[1px] bg-[var(--color-light)]" />
          <p className="app__text-tertiary text-[var(--color-lightGrey)]" >or</p>
          <div className="w-[25%] h-[1px] bg-[var(--color-light)]" />
        </div>
        <form action="" onSubmit={e => onSubmit(e)} className="w-1/2 flex flex-col" >
          <label htmlFor="email" className="app__text-tertiary text-[0.85rem] text-[var(--color-lightGrey)]" >Email</label>
          <input type="email" name="email" id="email" value={email} disabled={loading} onChange={e => setEmail(e.target.value)} className="app__text-tertiary text-[var(--color-dark)] border-b-[1px] border-[var(--color-dark)] outline-0 py-1" />
          <label htmlFor="password" className="app__text-tertiary text-[0.85rem] text-[var(--color-lightGrey)] mt-6" >Password</label>
          <input type="password" name="password" id="password" value={password} disabled={loading} onChange={e => setPassword(e.target.value)} className="app__text-tertiary text-[var(--color-dark)] border-b-[1px] border-[var(--color-dark)] outline-0 py-1" />
          <div className="flex justify-end  text-[0.85rem] mt-1" >
            {authState === "login" && (
              <a href="" aria-disabled={loading ? "true" : "false"} className="app__text-tertiary underline" >Forgot Password?</a>
            )}
          </div>
          <button type="submit" disabled={loading} className={`${loading ? "bg-[var(--color-lightGrey)]" : "bg-[var(--color-dark)]"} app__text-tertiary text-[0.9rem] text-[var(--color-white)] py-1 mt-8 rounded-md`} >{authState === "login" ? "Login" : "Register"} </button>
        </form>
        <p className="app__text-tertiary text-[0.8rem] mt-6" >{authState === "login" ? "Don't have an account?" : "Already have an account!"} <span onClick={toggleAuthState} className="font-bold cursor-pointer" >{authState === "login" ? "Sign up for free." : "Login."}</span></p>
      </div>
    </section>
  )
};

