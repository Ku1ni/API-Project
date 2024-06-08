import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { currentSpot } from "../../store/spots/spots";
import { deleteCurrentSpot } from "../../store/spots/spots";
import { useState, useEffect } from "react";
import {FaStar} from 'react-icons/fa'
import './ManageSpot.css'


export default function ManageSpot(){
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [modal, setModal] = useState(false)
    const [currentSpotId, setCurrentSpotId] = useState(null);

    const spots = Object.values(useSelector((state) => state.spots))
    console.log("🚀 ~ ManageSpot ~ spots:", spots[0]?.previewImage[0]?.url)

    const toggle = (spotId = null) => {
        setModal(!modal)
        setCurrentSpotId(spotId)
    }


    useEffect(() => {
        dispatch(currentSpot())
    }, [dispatch, modal])

    const handleDelete = async () => {
        if (currentSpotId) {
            await dispatch(deleteCurrentSpot(currentSpotId));
            setModal(false);
        }
    }
    return(
            <>
            <h1>Manage Spots</h1>
            <NavLink to='/spots/new'>
                <button>Add Spot</button>
            </NavLink>
            {spots.length === 0 ? (
                <div className="no-spots">
                    <p>No spots available</p>
                </div>
            ) : (
                <div className="spot-container">
                    {spots.map((spot, index) => (
                        <div className="tile" key={`${spot.id}-${index}`}>
                            <NavLink to={`/spots/${spot.id}`}>
                                <img
                                    src={spot?.previewImage?.[0]?.url}
                                    alt={`Preview image for ${spot.name}`}
                                    className="tileThumbnail"
                                />
                                <div className="spot-info">
                                    <span className="spot-name">{spot.name}</span>
                                    <div className="spot-location">{`${spot.city}, ${spot.state}`}</div>
                                    <div className="price">{`$${spot.price}`}</div>
                                    <div className="stars">
                                        <FaStar />
                                        {spot?.avgRating !== 0
                                            ? (spot?.avgRating % 1 === 0
                                                ? spot?.avgRating?.toFixed(0)
                                                : spot?.avgRating?.toFixed(1)) + " stars"
                                            : "New"}
                                    </div>
                                </div>
                            </NavLink>
                            <div className="buttons-container">
                                <button
                                    className="update-button"
                                    onClick={() => navigate(`/spots/${spot.id}/update-spot`)}
                                >
                                    Update
                                </button>
                                <button
                                    className="delete-button"
                                    onClick={() => toggle(spot.id)}
                                >
                                    Delete
                                </button>
                            </div>
                            {modal && currentSpotId === spot.id && (
                                <div className="modal" onClick={toggle}>
                                    <div
                                        className="modal-content"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <span
                                            className="close"
                                            onClick={toggle}
                                        >
                                            X
                                        </span>
                                        <h3>Confirm Delete</h3>
                                        <p>Are you sure that you want to remove this spot?</p>
                                        <br />
                                        <div className="delete-buttons">
                                            <button
                                                className="confirm-delete-button"
                                                onClick={handleDelete}
                                            >
                                                Yes (Delete Spot)
                                            </button>
                                            <button
                                                className="cancel-delete-button"
                                                onClick={toggle}
                                            >
                                                No (Keep Spot)
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </>
    )

}
