import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { FaRegStar, FaRegStarHalf, FaStar } from "react-icons/fa";
import { getAllSpots } from "../../store/spots/spots";
import { getSpotReviews } from "../../store/reviews/reviews";
import formatDecimal from "../../store/helpers/FormatDecimal";
// import spotImages from "../../store/helpers/images";
import OpenModalButton from "../OpenModalButton/OpenModelButton";
import './SpotDetails.css'

export default function SpotsDetails() {
  const { spotId } = useParams();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const spots = useSelector((state) => state.spots);
  // const reviewStore = useSelector((state) => state.reviews)
  const spotReviews = useSelector((state) => state.reviews[spotId]) || [];

  const selectedSpot = spots[spotId]

  // const useEffectHelper = async (a) => {
  //     await dispatch(getAllSpots(a));
  //     await dispatch(getSpotReviews(spotId))
  // }
  const searchId = Math.ceil(parseInt(spotId)/20)

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAllSpots(searchId));
      await dispatch(getSpotReviews(spotId))
    }
    if(spotId){
        fetchData()
    }


  }, [dispatch, searchId, spotId]);

  // useEffect(() => {
  //   console.log('selectedSpot:', selectedSpot);
  //   console.log('spotReviews:', spotReviews);
  // }, [selectedSpot, spotReviews]);


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
  // console.log('SESSIONUSER', sessionUser.firstName)
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

                    {/* <div className="large-image">
                        <img
                            className="large-spot-image"
                            src={images[0]}
                            alt={`Preview for ${selectedSpot.name}`}
                        />
                    </div>
                    <div className="small-image">
                    <img
                        className="small-spot-image"
                        src={images[1]}
                        alt={`Preview for ${selectedSpot.name}`}
                    />
                    <img
                        className="small-spot-image"
                        src={images[2]}
                        alt={`Preview for ${selectedSpot.name}`}
                    />
                    <img
                        className="small-spot-image"
                        src={images[3]}
                        alt={`Preview for ${selectedSpot.name}`}
                    />
                    <img
                        className="small-spot-image"
                        src={images[4]}
                        alt={`Preview for ${selectedSpot.name}`}
                    />
                    </div> */}
                    <div className="host-container">
                    <div className="host">
                      <h3>Hosted by {sessionUser.firstName} {sessionUser.lastName}</h3>
                    </div>
                    <div className="description-container">
                      {selectedSpot.description}
                    </div>
                    </div>

                      <div className="price-container">
                        <div className="price-info">
                            <h2 className="price">${selectedSpot.price} Night</h2>
                            <h3 className="ratings">{formatDecimal(selectedSpot)} out of 5</h3>
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
                      <h2>{formatDecimal(selectedSpot)} out of 5</h2>
                    </div>

                    <div className="reviews-container">
                      <h3>Reviews</h3>
                      <ul>
                        {spotReviews.map((review, index) => (
                          <div className="inside-reviews" key={index}>
                            <li key={index}>{review.review}</li>
                            <span>{formatRating(review.stars)}</span>
                          </div>
                        ))}
                      </ul>
                    </div>
                    </div>
                </div>
            )}
        </div>
    </>
  );
}
