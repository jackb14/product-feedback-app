import { GlobalStyles } from "./GlobalStyles";
import Suggestions from "./pages/Suggestions/Suggestions";
import { DataContext } from "./DataContext";
import { useState } from "react";
import JSON_DATA from "./data.json";
import { Route, Routes } from "react-router-dom";
import Roadmap from "./pages/Roadmap/Roadmap";

function App() {
  const [data, setData] = useState(JSON_DATA);
  const value = { data, setData };

  console.table(data);

  return (
    <>
      <DataContext.Provider value={value}>
        <Routes>
          <Route path="/" element={<Suggestions />} />
          <Route path="/roadmap" element={<Roadmap />} />
        </Routes>
        <GlobalStyles />
      </DataContext.Provider>
    </>
  );
}

export default App;
