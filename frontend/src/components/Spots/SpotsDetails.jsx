import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getOneSpot } from "../../store/spots/spots";
import './SpotDetails.css'

export default function SpotsDetails() {
  const { spotId } = useParams();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const spots = Object.values(useSelector((state) => state.spots));

  useEffect(() => {
    if(spotId){
        dispatch(getOneSpot(spotId));
    }


  }, [dispatch, spotId]);


  if (!spots) return null;




  return (
    <>
        <div className="page-container">

            {spots.map((spot) => (
            <div className="details-container" key={spot.id}>
                    <header className="header">
                        <h2>{spot.name}</h2>
                        <h3>{`${spot.city}, ${spot.state}, ${spot.country}`}</h3>
                    </header>
                    {console.log("🚀 ~ SpotsDetails ~ spots:", spot?.previewImage?.[1].url)}
                    <div className="large-image">
                        <img
                            className="large-spot-image"
                            src={spot?.previewImage}
                            alt={`Preview for ${spot.name}`}
                        />
                    </div>
                    <div className="small-image">
                    <img
                        className="spot-image"
                        src={spot?.previewImage}
                        alt={`Preview for ${spot.name}`}
                    />
                    <img
                        className="spot-image"
                        src={spot?.previewImage}
                        alt={`Preview for ${spot.name}`}
                    />
                    <img
                        className="spot-image"
                        src={spot?.previewImage}
                        alt={`Preview for ${spot.name}`}
                    />
                    <img
                        className="spot-image"
                        src={spot?.previewImage}
                        alt={`Preview for ${spot.name}`}
                    />
                    </div>
                        <div className="price-info">
                            <h3>${spot.price} Night</h3>
                            <h4>New</h4>
                            {sessionUser && sessionUser.id !== spot.ownerId && (
                                <button
                                    onClick={() => window.alert("Feature coming soon...")}
                                    className="reserveButton"
                                >
                                    Reserve
                                </button>
                            )}
                    </div>
                </div>
            ))}
        </div>
    </>
  );
}
