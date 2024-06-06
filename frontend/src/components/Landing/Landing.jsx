import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSpots } from "../../store/spots/spots";
import { useNavigate } from "react-router-dom";
import { FaRegStar, FaRegStarHalf, FaStar } from "react-icons/fa";
import formatDecimal from "../../store/helpers/ratingHelper";
import './Landing.css';

export default function Landing() {
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  let spots = useSelector(state => state.spots);

  spots = Object.values(spots);


  useEffect(() => {
    dispatch(getAllSpots());
  }, [dispatch]);

  function formatRating(spot) {
    if (spot?.avgRating !== 0) {
      const wholeStars = Math.floor(spot.avgRating);
      const fractionalPart = spot.avgRating - wholeStars;
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
    } else {
      return <div>NEW</div>;
    }
  }

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
