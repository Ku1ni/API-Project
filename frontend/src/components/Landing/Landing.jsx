import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSpots } from "../../store/spots/spots";
import { useNavigate } from "react-router-dom";
import formatRating from "../../store/helpers/FormatRating";
import formatDecimal from "../../store/helpers/FormatDecimal";
import './Landing.css';

export default function Landing() {
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  let spots = useSelector(state => state.spots);

  spots = Object.values(spots);


  useEffect(() => {
    dispatch(getAllSpots(1));
  }, [dispatch]);



  function handleSpotHover(spot) {
    setSelectedSpot(spot);
    setIsHovered(true);
  }

  function handleSpotHoverOut() {
    setSelectedSpot(null);
    setIsHovered(false);
  }

  const handleSpotClick = (spot) => {
    navigate(`/spots/${spot.id}`)
  };

  return (
    <>
      <div className="spot-container">
        {spots.map((spot) => (
          <div className="title" key={spot.id} onClick={() => handleSpotClick(spot)}>

            <img
              className="title-image"
              src={spot?.previewImage}


              alt={`Preview for ${spot.name}`}
              onMouseEnter={() => handleSpotHover(spot)}
              onMouseLeave={handleSpotHoverOut}
            />
            <div className="spot-details">
              <div className="spot-name">{`${spot.name}`}</div>
              <div className="spot-location">{`${spot.city}, ${spot.state}`}</div>
              <div className="spot-price">{`$${spot.price}`} Night</div>
              <div className="spot-rating">{formatRating(spot)}</div>
              <div className="spot-decimal">{formatDecimal(spot)}</div>
            </div>
          </div>
        ))}
      </div>
      {isHovered && selectedSpot && (
        <div className="popout-box">
          <div className="popout-content">
            <h3>{selectedSpot.name}</h3>
          </div>
        </div>
      )}
    </>
  );
}
