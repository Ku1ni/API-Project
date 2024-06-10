import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createSpotReview } from "../../store/reviews/reviews";
import { useModal } from "../../context/Modal";
import RatingInput from "./ReviewStarRating";
import './CreateReview.css'

export default function CreateReview ({spotId, sessionUserId, spotOwnerId}) {
    // State variables
  const [reviewText, setReviewText] = useState("");
  const [selectedStars, setSelectedStars] = useState(0);
  const { closeModal } = useModal();
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [error, setError] = useState({});


  // Redux
  const dispatch = useDispatch();
  const reviews = Object.values(useSelector((state) => (state.reviews)));


// Effect for validation
useEffect(() => {

    let validation = {};
    if (reviewText.length < 10) validation.reviewText = 'Review must be at least 10 characters';
    if (selectedStars === 0) validation.selectedStars = 'Please select a star rating';
    setError(validation);
  }, [reviewText, selectedStars]);

  // Reset state
  const resetState = () => {
    setReviewText("");
    setSelectedStars(0);
    setError({});
    setHasSubmitted(false)
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true)
    if (Object.values(error).length === 0) {
      const newReview = { review: reviewText, stars: selectedStars };
      await dispatch(createSpotReview(newReview, spotId));
      resetState();
      closeModal();
    }
  };

  const handleChange = (newRating) => {
    setSelectedStars(newRating);
  };

  const existingReview = reviews.find((review) => {
    const isMatch = review.userId === sessionUserId;
    return isMatch
  });



  const showForm =
    sessionUserId &&
    sessionUserId !== spotOwnerId &&
    !existingReview;

  return (
    <div>
      {showForm ? (
        <form className= 'review-form'onSubmit={handleSubmit}>
          <h2 className="review-title">How was your stay?</h2>
          <textarea
            className="review-input"
            name="reviewtext"
            id="reviewtext"
            placeholder="Leave your review here..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
          {hasSubmitted && error.reviewText && <span>{error.reviewText}</span>}

          <div className="star-input">
            <RatingInput selectedStars={selectedStars} onChange={handleChange} disabled={false}/>
            <h3>Stars </h3>
          </div>
          {hasSubmitted && error.selectedStars && <span>{error.selectedStars}</span>}

          <button className='review-submit'type="submit" disabled={Object.values(error).length !== 0}>Submit Your Review</button>
        </form>
      ) :
      <h1>Cannot leave review on own spot</h1>}
    </div>
  );
}
