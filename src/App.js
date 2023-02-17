import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  // const pageSize = 5
  const apikey = process.env.REACT_APP_API_KEY;
  // const [progress, setProgress] = useState(0);
  const [country, setCountry] = useState("in");

  return (
    <>
      <Navbar setCountry={setCountry} />
      {/* <LoadingBar height={3} color='#f11946' progress={progress} /> */}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home apikey={apikey} category="general" country={country} />
          }
        />
        <Route
          exact
          path="/general"
          element={
            <Home apikey={apikey} category="general" country={country} />
          }
        />
        <Route
          exact
          path="/business"
          element={
            <Home apikey={apikey} category="business" country={country} />
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <Home apikey={apikey} category="entertainment" country={country} />
          }
        />
        <Route
          exact
          path="/health"
          element={<Home apikey={apikey} category="health" country={country} />}
        />
        <Route
          exact
          path="/science"
          element={
            <Home apikey={apikey} category="science" country={country} />
          }
        />
        <Route
          exact
          path="/sports"
          element={<Home apikey={apikey} category="sports" country={country} />}
        />
        <Route
          exact
          path="/technology"
          element={
            <Home apikey={apikey} category="technology" country={country} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
