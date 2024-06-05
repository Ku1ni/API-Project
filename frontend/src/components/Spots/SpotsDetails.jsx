import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getOneSpot } from "../../store/spots/spots";


export default function SpotsDetails() {
  const { spotId } = useParams();
  const dispatch = useDispatch();


  let spots = useSelector((state) => state.spots);


//   const sessionUser = useSelector((state) => state.session.user);
//   const setSpot = spot[spotId]
spots = Object.values(spots);
  useEffect(() => {
    if(spotId){
        dispatch(getOneSpot(spotId));
    }


  }, [dispatch, spotId]);


  if (!spots) return null;
//   const spotImages = spot.SpotImages || [];

  return (
    <>
        <div>

            {spots.map((spot) => (
            <>
                    <header>
                        <h2>{spot.name}</h2>
                        <h3>{`${spot.city}, ${spot.state}, ${spot.country}`}</h3>
                    </header>
                    <img
                        className="spot-image"
                        src={spot?.previewImage[0]}
                        alt={`Preview for ${spot.name}`}
                    />
                    <div>
                    <img
                        className="spot-image"
                        src={spot?.previewImage[1]}
                        alt={`Preview for ${spot.name}`}
                    />
                    <img
                        className="spot-image"
                        src={spot?.previewImage[2]}
                        alt={`Preview for ${spot.name}`}
                    />
                    <img
                        className="spot-image"
                        src={spot?.previewImage[3]}
                        alt={`Preview for ${spot.name}`}
                    />
                    <img
                        className="spot-image"
                        src={spot?.previewImage[4]}
                        alt={`Preview for ${spot.name}`}
                    />
                    </div>
                </>
            ))}
        </div>
    </>
//     <div>
//         {setSpot && (
//             <>
//             <div>
//                 <header>
//                     <h2>{setSpot.name}</h2>
//                     <h3>{`${setSpot.city}, ${setSpot.state}, ${setSpot.country}`}</h3>
//                 </header>
//                 <div>
//                 {spotImages.length > 0 && (
//                 <img
//                     src={spotImages[0].url}
//                     alt={`Spot ${spotId} preview image`}
//                     className="large-image-container"
//                 />
//                 )}
                    // <div className="small-image-container">
                    // {spotImages.slice(1, 5).map((image, idx) => (
                    //     <img
                    //     key={idx}
                    //     style={{ width: "300px", height: "220px" }}
                    //     src={image.url}
                    //     alt={`small spot picture ${idx + 1}`}
                    //     />
                    // ))}
                    // </div>
//                 </div>
//             </div>
//             <div className="price-info">
//             <h3>${setSpot.price} per night</h3>
//             <h4>New</h4>
//             {sessionUser && sessionUser.id !== setSpot.ownerId && (
//               <button
//                 onClick={() => window.alert("Feature coming soon...")}
//                 className="reserveButton"
//               >
//                 Reserve
//               </button>
//             )}
//           </div>
// </>
//         )}
//     </div>
    // <div className="spot-page">
    //   <header>
    //     <h2>{spot.name}</h2>
    //     <h3>{`${spot.city}, ${spot.state}, ${spot.country}`}</h3>
    //   </header>
    //   <div className="spot-details-images">
    //     {spot.previewImage && spot.SpotImages.length > 0 && (
    //       <>
    //         <img
    //           src={image?.SpotImages?.[0]?.url}
    //           alt={`Spot ${spotId} preview image`}
    //           className="large-thumbnail"
    //         />
    //         <div className="small-images-container">
    //           {spot.SpotImages.slice(1, 5).map((image, idx) => (
    //             <img
    //               key={idx}
    //               style={{ width: "300px", height: "220px" }}
    //               src={image.url}
    //               alt={`small spot picture ${idx + 1}`}
    //             />
    //           ))}
    //         </div>
    //       </>
    //     )}
    //   </div>
    //   <div className="price-info">
    //     <h3>${spot.price} per night</h3>
    //     <h4>New</h4>
    //     {sessionUser && sessionUser.id !== spot.ownerId && (
    //       <button
    //         onClick={() => window.alert("Feature coming soon...")}
    //         className="reserveButton"
    //       >
    //         Reserve
    //       </button>
    //     )}
    //   </div>
    //   <div className="spot-info">
    //     <div className="description">
    //       <h3>{`Hosted by ${spot.ownerId?.firstName} ${spot.Owner?.lastName}`}</h3>
    //       <p>{spot.description}</p>
    //       <span className="spot-price">{`$${spot.price} night`}</span>
    //       <hr />
    //     </div>
    //   </div>
    // </div>
  );
}
