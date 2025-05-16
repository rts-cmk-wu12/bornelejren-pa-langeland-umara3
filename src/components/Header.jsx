
/*import React from "react";

import Navbar from "./Navbar";


const Header = () => {
    return (
        <>
        <header className="header">
          <div> 
        <img src="Billeder/Logo/logo.png" alt="logo" />
        
        
            <h1> BORNELEJREN PÅ LANGELAND</h1>
            </div>
            
            

            
        
        </header>
        <Navbar />
        </>
    );
};

export default Header;*/

import React from "react";
import Navbar from "./Navbar";
 
const Header = () => {
  return (
    <div id="wrapper">
      <header
        style={{
          backgroundColor: "#d0000b",
          color: "white",
          padding: "1em 1em 1em",
          textAlign: "center",
          fontFamily: "Urbanist",
        }}
      >
        <div className="logo" style={{ marginBottom: "1em", }}>
 
          <img
            src="Billeder/Logo/logo.png"
            alt="Børnelejren logo"
            style={{ width: "100px", height: "auto", }} />
 
 
 
 
          <h1 style={{ fontSize: "4em", marginTop: "1em", color: "white", }}>
            Børnelejren på Langeland
          </h1>
 
        </div>
 
 
 
      </header>
      <Navbar />
    </div>
  );
};
 
export default Header;
 
