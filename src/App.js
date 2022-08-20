import { GlobalStyles } from "./GlobalStyles";
import Suggestions from "./pages/Suggestions/Suggestions";
import { DataContext } from "./DataContext";
import { useState } from "react";
import JSON_DATA from "./data.json";

function App() {
  const [data, setData] = useState(JSON_DATA);
  const value = { data, setData };

  console.table(data);

  return (
    <>
      <DataContext.Provider value={value}>
        <Suggestions />
        <GlobalStyles />
      </DataContext.Provider>
    </>
  );
}

export default App;
