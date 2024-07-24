import './App.css';
import React, { useEffect, useState } from 'react';
import NavBar from './component/01-Home/NavBar';
import Home from './component/01-Home/Home';
import Presentage from './component/03-PresentageDetails/Presentage';
import Pride from './component/02-Pride/Pride';
import Inegradient from './component/04-Inegradient/Inegradient';
import Stomach from './component/05-Stomach/Stomach';
import Explore from './component/06-Explore/Explore';
import { data } from './DataOfTheProject';
import Testmonial from './component/11-Testmonial/Testmonial';
import FreqenQues from './component/07-FreqeneQues/FreqenQues';
import BakerFresh from './component/08-BakerFresh/BakerFresh';
import Subscribe from './component/09-Subscibre/Subscribe';
import Footer from './component/10-Footer/Footer';
import TestmonialData from './component/11-Testmonial/TestmonialData';
import { Route, Routes } from 'react-router-dom';



function App() {
  const [dataDetails, setDataDetails] = useState(data);
  return (
    <div >
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Pride />
            <Presentage />
            <Inegradient />
            <Stomach />
            <Explore dataDetails={dataDetails} />
            {/* <Testmonial/> */}
            {/* <TestmonialData/> */}
            <FreqenQues />
            <BakerFresh />
            <Subscribe />
          </>
        } />
        <Route path='/about' element={<Pride/>}></Route>
        <Route path='/menu' element={<Explore dataDetails={dataDetails} />}></Route>
        <Route path='/review' element={<Inegradient/>}></Route>
        <Route path='/FAQ' element={<FreqenQues/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
