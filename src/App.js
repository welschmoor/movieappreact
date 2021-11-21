import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Home from "./routes/Home"
import Detail from "./routes/Detail"


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/movie/:id' element={<Detail/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
