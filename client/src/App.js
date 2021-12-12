import React from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import { DataProvider } from "./GlobalState";
import Header from "./components/Header/Header";
import MainPages from './components/mainPages/Page'
import './index.css'
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <DataProvider>
    <Router>
      <div className="App">
        <Header />
        <div className="Container"><MainPages  /></div>
        <Footer/>
      </div>
    </Router>
  </DataProvider>
   
  );
}

export default App;
