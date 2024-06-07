import { FaStar } from "react-icons/fa";

export default function formatDecimal(spot) {
  if (spot?.avgRating !== 0) {
    const rating = Math.round(spot.avgRating * 10) / 10;
    return (
      <>
        {rating} <FaStar />
      </>
    );
  } else {
    return "New";
  }
}
