import React from "react";
import FetchPage from "../page/fetchPage";
import NotePage from "../page/notePage";
import {
    BrowserRouter as Router,
    Routes, //replaces "Switch" used till v5
    Route,
} from "react-router-dom";



export default function Navigation() {
  return(
      <Router basename="/" >
          <Routes>
              <Route path="/" element={<FetchPage />}></Route>
              <Route path="/notepage/:id" element={<NotePage />}></Route>
          </Routes>

      </Router>
  )
}
