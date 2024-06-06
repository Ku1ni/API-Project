import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllSpots } from "../../store/spots/spots";
import { getSpotReviews } from "../../store/reviews/reviews";
import spotImages from "../../store/helpers/images";
import OpenModalButton from "../OpenModalButton/OpenModelButton";
import './SpotDetails.css'

export default function SpotsDetails() {
  const { spotId } = useParams();
  const dispatch = useDispatch();
//   const sessionUser = useSelector((state) => state.session.user);
  const spots = useSelector((state) => state.spots);
  const spotReviews = useSelector((state) => state.reviews[spotId]) || [];

  console.log("🚀 ~ SpotsDetails ~ spotReviews:", spotReviews)
  const selectedSpot = spots[spotId]


  useEffect(() => {
    if(spotId){
        dispatch(getAllSpots(spotId));
        dispatch(getSpotReviews(spotId))
    }


  }, [dispatch, spotId]);

  useEffect(() => {
    console.log('selectedSpot:', selectedSpot);
    console.log('spotReviews:', spotReviews);
  }, [selectedSpot, spotReviews]);


  if (!selectedSpot) return null;

  const images = spotImages[spotId] || [];


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
                    </div>
                    <div>
                      {selectedSpot.description}
                    </div>
                        <div className="price-info">
                            <h3>${selectedSpot.price} Night</h3>
                            <h4>New</h4>
                            <OpenModalButton

                            modalComponent={<h2>Feature Coming Soon...</h2>}
                            buttonText="Reserve"
                            />
                    </div>

                    <div className="reviews-container">
                      <h3>Reviews</h3>
                      <ul>
                        {spotReviews.map((review, index) => (
                          <li key={index}>{review.text}</li>
                        ))}
                      </ul>
                    </div>
                </div>
            )}
        </div>
    </>
  );
}
