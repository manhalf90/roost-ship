import React, { Suspense, useLayoutEffect, useState } from 'react'
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from 'react';

// import DefaultLayout from './Layouts/DefaultLayout';

// import Homepage from './Pages/Homepage';
// import Error from './Pages/Error';
// import Faq from './Pages/Faq';

const Homepage = React.lazy(() => import('./Pages/Homepage'));
const Tokenomics = React.lazy(() => import('./Pages/Tokenomics'));
const App = () => {
  let location = useLocation();

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }

  const [, windowHeight] = useWindowSize();

  useEffect(() => {
    const style = document.documentElement.style;
    style.setProperty("--height", `${windowHeight}px`);
  }, [windowHeight]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  return (
    <Suspense>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='/tokenomics' element={<Tokenomics />} />
      </Routes>
    </Suspense>
  )
}

export default App
