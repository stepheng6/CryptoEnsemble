import React from 'react';
import './App.css';
import Sidebar2 from "./components/Sidebar";
import Footer from "./components/Footer";
import NotFound from './pages/NotFound';
import {
    Routes,
    Route,
    Outlet
  } from "react-router-dom";

  import Home from "./pages/Home"
  import ProjectResults from "./pages/ProjectResults";
  import Team from "./pages/Team";
  import Poster from './pages/Poster';

function Code() {
  window.location = "https://github.com/eshan-kaul/ML_Capstone";
  return null;
}
function App() {
 
  return (
    <div id="app" style={({ height: "100vh", backgroundColor: 'white' }, { display: "flex" })}>
      <Sidebar2/>
      <main>
        {/* Routing. For the sidebar buttons, the rest of the code is in Sidebar
        TODO: Fix the repository button to link to the github repo, or create a page 
        that has the link.
        TODO: Fix the notfound route. */}
          <Routes>
            <Route path="/CryptoEnsemble" element={<Home/>} />
            <Route path="/CryptoEnsemble/project-results" element={<ProjectResults />} />
            <Route path='/CryptoEnsemble/code' element={<Code/>}/>
            <Route path='/CryptoEnsemble/*' element={<NotFound />} />
            <Route path='/CryptoEnsemble/team' element={<Team />} />
            <Route path='/CryptoEnsemble/poster' element={<Poster />} />

          </Routes>
          <Outlet/>
          <Footer/>
      </main>
    </div>
  );
}

export default App;
