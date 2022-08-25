import { GlobalStyles } from "./GlobalStyles";
import Suggestions from "./pages/Suggestions/Suggestions";
import { DataContext } from "./DataContext";
import { useState } from "react";
import JSON_DATA from "./data.json";
import { Route, Routes } from "react-router-dom";
import Roadmap from "./pages/Roadmap/Roadmap";
import AddFeedback from "./pages/Add Feedback/AddFeedback";
import FeedbackDetail from "./pages/Feedback Detail/FeedbackDetails";
import EditFeedback from "./pages/Edit Feedback/EditFeedback";

function App() {
  const { productRequests } = JSON_DATA;
  const [data, setData] = useState(productRequests);
  const value = { data, setData };

  return (
    <>
      <DataContext.Provider value={value}>
        <Routes>
          <Route path="/" element={<Suggestions />} />
          <Route path="*" element={<Suggestions />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/add-feedback" element={<AddFeedback />} />
          <Route path="/post/:id" element={<FeedbackDetail />} />
          <Route path="/post/:id/edit" element={<EditFeedback />} />
        </Routes>
        <GlobalStyles />
      </DataContext.Provider>
    </>
  );
}

export default App;
