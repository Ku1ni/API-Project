
function formatRating(spot) {
  if (spot?.avgRating !== 0) {
    return `${Math.round(spot.avgRating * 10) / 10} stars`;
  } else {
    return "New";
  }
}

export default formatRating;
