import React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";

function UserRating({ rating }) {
  return (
    <Box display="flex" alignItems="center">
      <Rating name="user-rating" value={rating} readOnly />
      <span>{rating}</span>
    </Box>
  );
}

// 사용자의 평점이 3점인 경우
// function App() {
//   return (
//     <div>
//       <h2>사용자의 평점:</h2>
//       <UserRating rating={3} />
//     </div>
//   );
// }

export default UserRating;
