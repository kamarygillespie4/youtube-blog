import "./App.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Blog from "./pages/Blog";
import SinglePost from "./pages/SinglePost";
import Error from "./pages/Error";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<SinglePost />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
