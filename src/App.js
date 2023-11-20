import React, { Suspense } from "react";
import "./App.scss";
import { Route, Routes } from "react-router";
const Home = React.lazy(() => import("./pages/home/Home"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
