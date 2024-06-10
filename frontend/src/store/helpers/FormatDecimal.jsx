import { FaStar } from "react-icons/fa";


export default function formatDecimal(spotId) {

  if (spotId?.avgRating != 0 ) {
    const rating = Math.round(spotId.avgRating * 10) / 10;
    return (
      <>
        <FaStar /> {rating.toFixed(1)}
      </>
    );
  } else {
    return "New";
  }
}
