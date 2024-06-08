// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, NavLink } from "react-router-dom";
// import { currentSpot } from "../../store/spots/spots";
// import { deleteCurrentSpot } from "../../store/spots/spots";
// import { useState, useEffect } from "react";



// export default function ManageSpot(){
//     const dispatch = useDispatch()
//     const navigate = useNavigate()
//     const [modal, setModal] = useState(false)
//     const [deletes, setDeletes] = useState(false)

//     const spots = Object.values(useSelector((state) => state.spots))

//     const toggle = () => setModal(!showModal)

//     const handleDelete = async (spotId) => {
//         await dispatch(deleteCurrentSpot(spotId))
//         setDeletes(!deletes)
//         toggle()
//     }

//     useEffect(() => {
//         dispatch(currentSpot())
//     }, [dispatch, deletes])
//     return(
//         <>
//         <h1>Manage Spots</h1>
//         <button onClick={toggleModal}>Add Spot</button>
//             <div>
//                 {spots.map((spot) => (
//                     <div key={spot.id}>
//                         <h2>{spot.name}</h2>
//                         <p>{spot.description}</p>
//                         <button onClick={() => handleDelete(spot.id)}>Delete</button>
//                     </div>
//                 ))}
//             </div>
//             {modal && (
//                 <div>
//                     {/* Your modal content goes here */}
//                     <button onClick={toggleModal}>Close Modal</button>
//                 </div>
//             )}
//         </>
//     )

// }
