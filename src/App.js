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

  // add number of comments and replies to data object
  // add comments
  // const addCommentCount = () => {
  //   return productRequests.map((item) => {
  //     if (item.comments) {
  //       return { ...item, commentCount: item.comments.length };
  //     } else {
  //       return { ...item, commentCount: 0 };
  //     }
  //   });
  // };

  // const newObjComments = addCommentCount();

  // useEffect(() => {
  //   setData(newObjComments);
  //   console.log("set comment");

  //   const replies = () => {
  //     return data.map((item) => {
  //       if (item.commentCount > 0) {
  //         return item.comments.map((comment) => {
  //           if (comment.replies) {
  //             return {
  //               ...item,
  //               replyCount: comment.replies.map((item) => item).length,
  //             };
  //           } else {
  //             return { ...item, replyCount: 1 };
  //           }
  //         });
  //       } else {
  //         return { ...item, replyCount: 1 };
  //       }
  //     });
  //   };
  //   const newObjReplies = replies();
  //   setData(newObjReplies);
  // }, []);

  // console.log("comment", data);

  // add replies

  // useEffect(() => {
  //   setData(newObjReplies);
  //   console.log("setreply");
  // }, []);

  // console.log(data);

  // const replie8s = () => {
  //   if (numOfComments !== 0) {
  //     return comments.map((comment) => {
  //       if (comment.replies) {
  //         return comment.replies.map((item) => item).length;
  //       } else {
  //         return 0;
  //       }
  //     });
  //   } else {
  //     return [0];
  //   }
  // };

  // const newArray = replies();

  // const totalReplies = newArray.reduce((prev, cur) => prev + cur, 0);
  // const totalCommentsAndReplies = totalReplies + numOfComments;

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
