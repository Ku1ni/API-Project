import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { FaStar, FaRegStarHalf, FaRegStar } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import { getOneSpot } from "../../store/spots/spots";
import { getSpotReviews } from "../../store/reviews/reviews";
import CreateReview from "../Reviews/CreateReview";
import OpenModalButton from "../OpenModalButton/OpenModelButton";
import { deleteSpotReview } from "../../store/reviews/reviews";
import DeleteReview from "../Reviews/DeleteReview";
import './SpotDetails.css'

export default function SpotsDetails() {
  const [reviewToDelete, setReviewToDelete] = useState(null);
  const { spotId } = useParams();
  const dispatch = useDispatch();
  const sessionUserId = useSelector((state) => state.session.user);
  const spots = useSelector((state) => state.spots);
  const selectedSpot = spots[spotId]
 const spotReviews = useSelector((state) => state.reviews[spotId]);
 const reviews = Object.values((state) => state.reviews)



  function ratings(spotReviews) {
  if (spotReviews && spotReviews.length > 0) {
    const totalStars = spotReviews.reduce((acc, review) => acc + review.stars, 0);
    const averageStars = totalStars / spotReviews.length;
    return averageStars.toFixed(1);
  } else {
    return 'New';
  }
 }



 useEffect(() => {

      dispatch(getOneSpot(spotId));
      dispatch(getSpotReviews(spotId))

  }, [dispatch, spotId]);


function formatRating(rating) {
    const wholeStars = Math.floor(rating);
    const fractionalPart = rating - wholeStars;
    const starImages = [];

    for (let i = 0; i < wholeStars; i++) {
      starImages.push(<FaStar key={i} />);
    }

    if (fractionalPart >= 0.25 && fractionalPart < 0.75) {
      starImages.push(<FaRegStarHalf key="half-star" />);
    } else if (fractionalPart >= 0.75) {
      starImages.push(<FaRegStar key="reg-star" />);
    }
    return starImages;
  }

  const handleDeleteReview = () => {
    dispatch(deleteSpotReview(reviewToDelete.id))
    setReviewToDelete(null)
  };


const booked = reviews.find((review) => review.userId === sessionUserId?.id)
const sortedReviews = spotReviews ? [...spotReviews].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) : [];
 if (!selectedSpot) return null;

  return (
    <>
        <div className="page-container">

            {selectedSpot && (
            <div className="details-container" key={selectedSpot.id}>
                    <header className="header">
                        <h2>{selectedSpot.name}</h2>
                        <h3>{`${selectedSpot.city}, ${selectedSpot.state}, ${selectedSpot.country}`}</h3>
                    </header>

                    <div className="large-image">
                        <img
                            className="large-spot-image"
                            src={selectedSpot?.SpotImages?.[0].url}
                            alt={`Preview for ${selectedSpot.name}`}
                        />
                    </div>
                    <div className="small-image">
                    <img
                        className="small-spot-image"
                        src={selectedSpot?.SpotImages?.[1]?.url || "https://res.cloudinary.com/dvly0pgsm/image/upload/v1717986839/placeholder-image-icon-0_j7hveq.png"}
                        alt={`Preview for ${selectedSpot.name}`}
                    />
                    <img
                        className="small-spot-image"
                        src={selectedSpot?.SpotImages?.[2]?.url || "https://res.cloudinary.com/dvly0pgsm/image/upload/v1717986839/placeholder-image-icon-0_j7hveq.png"}
                        alt={`Preview for ${selectedSpot.name}`}
                    />
                    <img
                        className="small-spot-image"
                        src={selectedSpot?.SpotImages?.[3]?.url || "https://res.cloudinary.com/dvly0pgsm/image/upload/v1717986839/placeholder-image-icon-0_j7hveq.png"}
                        alt={`Preview for ${selectedSpot.name}`}
                    />
                    <img
                        className="small-spot-image"
                        src={selectedSpot?.SpotImages?.[4]?.url || "https://res.cloudinary.com/dvly0pgsm/image/upload/v1717986839/placeholder-image-icon-0_j7hveq.png"}
                        alt={`Preview for ${selectedSpot.name}`}
                    />
                  </div>
                    <div className="host-container">
                    <div className="host">
                    <h3>Hosted by {selectedSpot.Owner ? `${selectedSpot.Owner.firstName} ${selectedSpot.Owner.lastName}` : 'Unknown'}</h3>
                    </div>
                    <div className="description-container">
                      {selectedSpot.description}
                    </div>
                    </div>

                      <div className="price-container">
                        <div className="price-info">
                          <div className="price-review">
                            <h2 className="price">${selectedSpot.price} Night</h2>

                            <div className="ratings">
                            <h3 className="review-info">
                              <FaStar />{ratings(spotReviews)}
                              {spotReviews && spotReviews.length > 0 && (
                                <>
                                  <LuDot className="dot" />
                                  {spotReviews.length === 1 ? '1 review' : `${spotReviews.length} reviews`}
                                </>
                              )}
                            </h3>
                            </div>
                            </div>

                            <div className="button-container">
                            <OpenModalButton

                            modalComponent={<h2>Feature Coming Soon...</h2>}
                            buttonText="Reserve"
                            />
                            </div>
                        </div>
                      </div>
                    <div className="reviews-ratings">
                    <div className="ratings-container">
                    {spotReviews && spotReviews.length > 0 ? (
                      <h2><FaStar />{ratings(spotReviews)}<LuDot className="dot" />{spotReviews.length === 1 ? '1 review' : `${spotReviews.length} reviews`}</h2>
                    ) : (
                      <h2><FaStar /> New</h2>
                    )}
                  </div>

                  <div className="reviews-container">
                {selectedSpot && sortedReviews.length > 0 && (
                  <>
                    <h3>Reviews</h3>
                    {sessionUserId && sessionUserId.id !== selectedSpot?.ownerId && !booked && !sortedReviews.some(review => review.userId === sessionUserId?.id) && (
                      <OpenModalButton
                        modalComponent={<CreateReview spotId={spotId} sessionUserId={sessionUserId} spotOwnerId={selectedSpot.ownerId} />}
                        buttonText="Post Your Review"
                      />
                    )}
                    <ul>
                      {sortedReviews.map((review, index) => (
                        <div className="inside-reviews" key={index}>
                          <span className="user">{review.User?.firstName}</span>
                          <li>{review.review}</li>
                          <span className="created-at">{new Date(review.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                          <span className="star-rating">{formatRating(review.stars)}</span>
                          {sessionUserId && review.User.id === sessionUserId.id && (
                            <button onClick={() => setReviewToDelete(review)} className="delete-review-button">
                              Delete
                            </button>
                          )}
                        </div>
                      ))}
                    </ul>
                    {reviewToDelete && (
                      <DeleteReview
                        handleDeleteReview={handleDeleteReview}
                        setReviewToDelete={setReviewToDelete}
                      />
                    )}
                  </>
                )}
              </div>

                    </div>
                </div>
            )}
        </div>
    </>
  );
}
