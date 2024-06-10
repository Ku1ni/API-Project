import { FaRegStar, FaRegStarHalf, FaStar } from "react-icons/fa";

export default function formatRating(spot) {
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
      return <div>New</div>;
    }
  }
