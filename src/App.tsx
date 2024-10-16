import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

import Home from "./compotant/page/Home";
import About from "./compotant/page/About";
import Content from "./compotant/page/Content";
import FAQS from "./compotant/page/FAQS";
import Trade from "./compotant/page/Trade";

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/content" element={<Content/>}/>
      <Route path="/FAQS" element={<FAQS/>}/>
      <Route path="/Trade" element={<Trade/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
