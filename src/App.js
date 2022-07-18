import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>this is instagram clone using react</h1>
      <div className="app_header">
        <img
          className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
        <form>
          <input className = "app_headerSearch" type="text" placeholder="search" />
        </form>
      </div>
    </div>
  );
}

export default App;
