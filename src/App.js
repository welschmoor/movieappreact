import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Home from "./routes/Home"
import Detail from "./routes/Detail"
import About from "./routes/About"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
        <Route path='/movie/:id' element={<Detail />} />
        <Route path='/about' element={<About />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
