import { Routes, Route } from "react-router-dom"
import AppNavigation from "./AppNavigation"

export default function Navigation() {
  return (
    <div className="w-full h-full" >
      <Routes>
        <Route path="/" element={<AppNavigation />} />
      </Routes>
    </div>
  )
};

