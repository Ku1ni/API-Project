// import { FaRegStar } from "react-icons/fa";
// import { FaRegStarHalf } from "react-icons/fa";
// import { FaStar } from "react-icons/fa";

function formatDecimal(spot) {
    if (spot?.avgRating !== 0) {
      const roundedRating = Math.round(spot.avgRating * 10) / 10;
      return `${roundedRating} stars`;
    } else {
      return "New";
    }
  }







  export default formatDecimal;
