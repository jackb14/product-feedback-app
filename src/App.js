import { GlobalStyles } from "./GlobalStyles";
import Suggestions from "./pages/Suggestions/Suggestions";
import { DataContext } from "./DataContext";
import { useEffect, useState } from "react";
import JSON_DATA from "./data.json";
import { Route, Routes } from "react-router-dom";
import Roadmap from "./pages/Roadmap/Roadmap";
import AddFeedback from "./pages/Add Feedback/AddFeedback";
import FeedbackDetail from "./pages/Feedback Detail/FeedbackDetails";
import EditFeedback from "./pages/Edit Feedback/EditFeedback";

function App() {
  const { productRequests } = JSON_DATA;
  const [mount, setMount] = useState(false);
  const [data, setData] = useState(productRequests);
  const value = { data, setData };

  let commentsArr = [];
  let repliesArr = [];
  // comment count
  productRequests.map((item) => {
    if (item.comments) {
      return commentsArr.push(item.comments.length);
    } else {
      return commentsArr.push(0);
    }
  });

  // replies count
  productRequests.map((item) => {
    if (item.comments) {
      return item.comments.map((comment) => {
        if (comment.replies) {
          return repliesArr.push(comment.replies.length);
        } else {
          return repliesArr.push(0);
        }
      });
    } else {
      return null;
    }
  });

  let groupedRepliesArr = [];
  for (let i = 0; i < productRequests.length; i++) {
    groupedRepliesArr.push(repliesArr.slice(0, commentsArr[i]));
    repliesArr.splice(0, commentsArr[i]);
  }

  // sum reply groups
  const replyGroupSum = groupedRepliesArr.map((item) => {
    return item.reduce((acc, cum) => {
      return acc + cum;
    }, 0);
  });

  // add comment count and reply count to data state
  let completeData = [];
  const combineRepliesAndComments = () => {
    for (let j = 0; j < productRequests.length; j++) {
      completeData.push({
        ...productRequests[j],
        totalReplies: replyGroupSum[j],
        totalComments: commentsArr[j],
      });
    }
  };
  combineRepliesAndComments();

  useEffect(() => {
    if (!mount) {
      setMount(true);
      setData(completeData);
    }
  }, [mount, completeData]);

  console.log(data);

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
