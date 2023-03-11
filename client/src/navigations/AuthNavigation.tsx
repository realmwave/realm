import { Route, Routes } from "react-router-dom"
import { Auth } from "../pages"


export default function AuthNavigation() {
  return (
    <div className="w-full h-screen" >
      <Auth />
      {/*<Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>*/}
    </div>
  )
}
