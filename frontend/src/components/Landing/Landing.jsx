import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSpots } from "../../store/spots/spots";
import { NavLink } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa";
import { FaRegStarHalf } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function Landing() {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [tooltipText, setTooltipText] = useState("");

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
        starImages.push(<FaStar />);
      }

      if (fractionalPart >= 0.25 && fractionalPart < 0.75) {
        starImages.push(<FaRegStarHalf />);
      } else if (fractionalPart >= 0.75) {
        starImages.push(<FaRegStar />);
      }

      return starImages;
    } else {
      return <div>NEW</div>;
    }
  }

  function handleSpotMouseEnter(event, spot) {
    setTooltipVisible(true);
    setTooltipPosition({ x: event.clientX, y: event.clientY });
    setTooltipText(`Make the ${spot.name} your home away from home`);
  }

  function handleSpotMouseLeave() {
    setTooltipVisible(false);
    setTooltipPosition({ x: 0, y: 0 });
    setTooltipText("");
  }

  return (
    <>
      <div className="spot-container">
        {spots.map((spot) => (
          <div className="title" key={spot.id}>
            <NavLink to={`spots/${spot.id}`} />
            <img
              className="title-image"
              src={spot.previewImage}
              alt={`Preview for ${spot.name}`}
              onMouseEnter={(event) => handleSpotMouseEnter(event, spot)}
              onMouseLeave={handleSpotMouseLeave}
            />
            <div className="spot-details">
              <div className="spot-name">{`${spot.name}`}</div>
              <div className="spot-location">{`${spot.city}, ${spot.state}`}</div>
              <div className="spot-price">{`${spot.price}`} Per Night</div>
              <div className="spot-rating">{formatRating(spot)}</div>
            </div>
            {tooltipVisible && (
              <div
                className="tooltip"
                style={{
                  top: tooltipPosition.y,
                  left: tooltipPosition.x,
                }}
                onClick={handleSpotMouseLeave}
              >
                {tooltipText}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
