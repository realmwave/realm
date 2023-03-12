import { Routes, Route } from "react-router-dom";

import AppNavigation from "./AppNavigation";
import AuthNavigation from "./AuthNavigation";

import { Browse, ErrorPage, Home, Video } from "../pages";
import { Sidebar } from "../containers";


export default function Navigation() {
  return (
    <div className="w-full h-screen flex flex-1" >
      <Routes>
        <Route path="/" element={<AppNavigation />} >
          <Route path="" element={<Home />} />
          <Route path="browse" element={<Browse />} />
          <Route path="watchlist" element={<Browse />} />
          <Route path="comingsoon" element={<Browse />} />
          <Route path="friends" element={<Browse />} />
          <Route path="parties" element={<Browse />} />
          <Route path="settings" element={<Browse />} />
        </Route>
        <Route path="/notification" element={<Browse />} />
        <Route path="/chat" element={<Browse />} />
        <Route path="/watch/:id" element={<Video />} />
        <Route path="/profile" element={<Browse />} />
        <Route path="/createparty" element={<Browse />} />
        <Route path="/auth" element={<AuthNavigation />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
};

