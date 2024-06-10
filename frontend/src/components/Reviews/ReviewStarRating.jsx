import { useState, useEffect } from 'react';
import { FaRegStar } from 'react-icons/fa';

const RatingInput = ({ rating, disabled, onChange }) => {
  const [activeRating, setActiveRating] = useState(rating);
  const [selectedRating, setSelectedRating] = useState(rating);

  useEffect(() => {
    setActiveRating(rating);
    setSelectedRating(rating);
  }, [rating]);

  const handleMouseEnter = (index) => {
    if (!disabled) {
      setActiveRating(index + 1);
    }
  };

  const handleMouseLeave = () => {
    if (!disabled) {
      setActiveRating(selectedRating);
    }
  };

  const handleClick = (index) => {
    if (!disabled) {
      const newRating = index + 1;
      onChange(newRating);
      setSelectedRating(newRating);
      setActiveRating(newRating);
    }
  };

  const renderIcon = (index) => (
    <div
      key={index}
      className={index < activeRating ? 'filled' : 'empty'}
      onMouseEnter={!disabled ? () => handleMouseEnter(index) : undefined}
      onMouseLeave={!disabled ? handleMouseLeave : undefined}
      onClick={!disabled ? () => handleClick(index) : undefined}
    >
       {index < activeRating ? <img src='https://res.cloudinary.com/dvly0pgsm/image/upload/v1717978694/FaBlueStar_xjkuni.png' /> : <FaRegStar />}

    </div>
  );

  return (

      <div className="rating-input">
        {Array.from({ length: 5 }, (_, index) => renderIcon(index))}
      </div>

  );
};

export default RatingInput;
