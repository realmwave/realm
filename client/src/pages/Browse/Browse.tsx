import { useState } from "react";
import "./browse.scss";


export default function Browse() {
  const [email, setEmail] = useState<string>("")
  
  return (
    <section className="w-full h-full" >
      <div className="w-full h-full flex flex-1 flex-col items-center justify-center gap-8" >
        <h1 className="app__browse-text-primary text-[5rem] font-extrabold mb-6" >Coming Soon</h1>
        <div className="w-[500px] h-12 flex items-center justify-between p-1 rounded-md bg-[var(--color-light)]" >
          <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email address" className="w-[75%] h-full app__browse-text-secondary p-2 bg-transparent text-[var(--color-dark)] outline-0" />
          <button className="w-[20%] h-full text-center bg-[var(--color-dark)] text-[0.85rem] text-[var(--color-white)] font-bold rounded-md app__browse-text-secondary" >Notify Me</button>
        </div>
        <p className="app__browse-text-secondary text-[var(--color-dark)] mt-2" >-_ Notify me when app is launched _-</p>
      </div>
    </section>
  )
};

