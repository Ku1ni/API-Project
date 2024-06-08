// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { createSpotReview } from "../../store/reviews/reviews";

// const CreateReview = (r) => {
//     // State variables
//   const [reviewText, setReviewText] = useState("");
//   const [selectedStars, setSelectedStars] = useState(0);
//   const [activeStar, setActiveStar] = useState(0);
//   const [reviewErrors, setReviewErrors] = useState([]);
//   const [filledStars, setFilledStars] = useState(0);

//   // Redux
//   const dispatch = useDispatch();
//   const { spotId } = useParams();
//   const reviews = useSelector((state) => Object.values(state.reviews));
//   const sessionUserId = useSelector((state) => state.session.user?.id);
//   const spotOwnerId = useSelector((state) => state.spots?.[spotId]?.ownerId);

// // Effect for validation
// useEffect(() => {
//     const validationErrors = [];
//     if (reviewText.length < 10) {
//       validationErrors.push("Review must be at least 10 characters");
//     }
//     if (selectedStars === 0) {
//       validationErrors.push("Please select a star rating");
//     }
//     setReviewErrors(validationErrors);
//   }, [reviewText, selectedStars]);

//   // Reset state
//   const resetState = () => {
//     setReviewText("");
//     setSelectedStars(0);
//     setReviewErrors([]);
//   };

//   // Form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newReview = { review: reviewText, stars: selectedStars };
//     dispatch(createSpotReview(newReview, spotId));

//     resetState();
//     props.closeModal();
//   };

//   // Find existing review by current user
//   const existingReview = reviews.find((review) => review.userId === sessionUserId);

//   return (
//     <div>
//       {sessionUserId && sessionUserId !== spotOwnerId && !existingReview && (
//         <form onSubmit={handleSubmit}>
//           <h2>How was your stay?</h2>
//           <textarea
//             name="reviewtext"
//             id="reviewtext"
//             placeholder="Leave your review here..."
//             value={reviewText}
//             onChange={(e) => setReviewText(e.target.value)}
//           />
//           <p className="errorMessage">
//             {reviewErrors.map((error, index) => (
//               <span key={index}>{error}</span>
//             ))}
//           </p>
//           <div>
//             {[1, 2, 3, 4, 5].map((rating) => (
//               <label key={rating}>
//                 <input
//                   type="radio"
//                   name="starRating"
//                   value={rating}
//                   onClick={() => {
//                     setSelectedStars(rating);
//                     setFilledStars(rating);
//                   }}
//                 />
//                 <span
//                   onMouseEnter={() => setActiveStar(rating)}
//                   onMouseLeave={() => setActiveStar(0)}
//                 >
//                   {activeStar >= rating || rating <= filledStars ? <FaStar /> : <FaRegStar />}
//                 </span>
//               </label>
//             ))}
//             <span>{selectedStars} Stars</span>
//           </div>
//           <button disabled={reviewErrors.length}>Submit Your Review</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default MakeReview;
