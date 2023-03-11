import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { createHomeData } from "../store/homeDataSlice";
import { Loading } from "../components";
import { Sidebar } from "../containers";
import { Home, Browse, ComingSoon, ErrorPage } from "../pages";
import { getHomeData } from "../api";


export default function AppNavigation() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState<boolean>(true)

  async function getData() {
    setLoading(true)
    const response = await getHomeData()
    if (response.success === 1) {
      dispatch(createHomeData(response.response))
      setLoading(false)
    } else {
      console.log(response.response)
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="w-full h-screen" >
      {loading ?
          <Loading />
        :
        <>
          <Sidebar />
          <div className="w-full h-full pt-8 pl-[15%]" >
            <div className="w-full h-full px-20" >
              <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/browse" element={<Browse />} />
                <Route path="/watchlist" element={<Browse />} />
                <Route path="/comingsoon" element={<Browse />} />
                <Route path="/friends" element={<Browse />} />
                <Route path="/parties" element={<Browse />} />
                <Route path="/settings" element={<Browse />} />
              </Routes>
            </div>
          </div>
        </>
      }
    </div>
  )
};

