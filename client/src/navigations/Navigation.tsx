import { Routes, Route } from "react-router-dom";

import { Sidebar } from "../containers";
import { Home, Browse, ComingSoon } from "../pages";


export default function Navigation() {
  return (
    <div className="w-full h-screen" >
      <Sidebar />
      <div className="w-full h-full pt-8 pl-[15%]" >
        <div className="w-full h-full px-20" >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/watchlist" element={<Browse />} />
            <Route path="/comingsoon" element={<Browse />} />
            <Route path="/friends" element={<Browse />} />
            <Route path="/parties" element={<Browse />} />
            <Route path="/settings" element={<Browse />} />
            <Route path="/logout" element={<Browse />} />
          </Routes>
        </div>
      </div>
    </div>
  )
};

