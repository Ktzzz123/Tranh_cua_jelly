import React from "react";
import {BrowserRouter as Router,} from 'react-router-dom';
import { DataProvider } from "./GlobalState";
import Header from "./components/Header/Header";
import MainPage from "./components/mainPages/Page";

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header/>
          <div className="Container">
            <MainPage/>

          </div>
        </div>  
      </Router>
     
    </DataProvider>
   
  );
}

export default App;
