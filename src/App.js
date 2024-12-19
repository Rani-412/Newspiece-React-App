import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const pageSize = 10;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
          // onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route path="/" element={
            <News setProgress={setProgress} key="general" pageSize={pageSize} country="us" category="general" />
          }/>
          <Route path="/business" element={
            <News setProgress={setProgress} key="business" pageSize={pageSize} country="us" category="business" />
          }/>
          <Route path="/entertainment" element={
            <News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="us" category="entertainment" />
          }/>
          <Route path="/general" element={
            <News setProgress={setProgress} key="general" pageSize={pageSize} country="us" category="general" />
          }/>
          <Route path="/health" element={
            <News setProgress={setProgress} key="health" pageSize={pageSize} country="us" category="health" />
          }/>
          <Route path="/science" element={
            <News setProgress={setProgress} key="science" pageSize={pageSize} country="us" category="science" />
          }/>
          <Route path="/sports" element={
            <News setProgress={setProgress} key="sports" pageSize={pageSize} country="us" category="sports" />
          }/>
          <Route path="/technology" element={
            <News setProgress={setProgress} key="technology" pageSize={pageSize} country="us" category="technology" />
          }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
